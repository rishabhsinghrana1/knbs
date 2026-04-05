# # from django.shortcuts import render

# # # Create your views here.
# # from rest_framework import viewsets
# # from .models import UserManagement, UserDelegation
# # from .serializers import UserManagementSerializer, UserDelegationSerializer

# # class UserManagementViewSet(viewsets.ModelViewSet):
# #     queryset = UserManagement.objects.all().order_by('-created_at')
# #     serializer_class = UserManagementSerializer

# # class UserManagementViewSet(viewsets.ModelViewSet):
# #     queryset = UserManagement.objects.all().order_by('-created_at')
# #     serializer_class = UserManagementSerializer
# # apps/users/views.py
# # from rest_framework import viewsets
# # from rest_framework.response import Response
# # from rest_framework.decorators import action
# # from .models import UserManagement, UserDelegation
# # from .serializers import UserManagementSerializer, UserDelegationSerializer

# # class UserManagementViewSet(viewsets.ModelViewSet):
# #     queryset = UserManagement.objects.all()
# #     serializer_class = UserManagementSerializer

# # class UserDelegationViewSet(viewsets.ModelViewSet):
# #     queryset = UserDelegation.objects.all()
# #     serializer_class = UserDelegationSerializer


# # views.py
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import AllowAny
# from rest_framework.response import Response
# from rest_framework import status
# from django.contrib.auth.hashers import check_password
# from datetime import datetime
# from .models import UserManagement, Role
# from .serializers import UserSerializer, RoleSerializer
# from rest_framework import viewsets
# from rest_framework.response import Response
# from rest_framework.decorators import action
# from .models import UserManagement, UserDelegation
# from .serializers import UserManagementSerializer, UserDelegationSerializer

# class UserManagementViewSet(viewsets.ModelViewSet):
#     queryset = UserManagement.objects.all()
#     serializer_class = UserManagementSerializer

# class UserDelegationViewSet(viewsets.ModelViewSet):
#     queryset = UserDelegation.objects.all()
#     serializer_class = UserDelegationSerializer

# def get_client_ip(request):
#     """Get client IP address"""
#     x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
#     if x_forwarded_for:
#         ip = x_forwarded_for.split(',')[0]
#     else:
#         ip = request.META.get('REMOTE_ADDR')
#     return ip


# @api_view(['POST'])
# @permission_classes([AllowAny])
# def login_view(request):
#     """
#     Handle user login with role-based authentication
#     POST /api/auth/login/
#     Body: { email, password, role }
#     """
#     email = request.data.get('email')
#     password = request.data.get('password')
#     role_name = request.data.get('role')
    
#     # Validation
#     if not email or not password or not role_name:
#         return Response(
#             {'error': 'Email, password, and role are required'},
#             status=status.HTTP_400_BAD_REQUEST
#         )
    
#     try:
#         # Find user by email and include role
#         user = UserManagement.objects.select_related('role').get(user_email=email)
        
#         # Check if user is active
#         if user.status != 'Active':
#             return Response(
#                 {'error': 'Your account is not active. Please contact administrator.'},
#                 status=status.HTTP_403_FORBIDDEN
#             )
        
#         # Verify password
#         if not user.check_password(password):
#             return Response(
#                 {'error': 'Invalid email or password'},
#                 status=status.HTTP_401_UNAUTHORIZED
#             )
        
#         # Verify role matches
#         if user.role.role_name != role_name:
#             return Response(
#                 {'error': 'Invalid role selected for this account'},
#                 status=status.HTTP_401_UNAUTHORIZED
#             )
        
#         # Update last login
#         user.update_last_login()
        
#         # Prepare response
#         user_data = UserSerializer(user).data
        
#         return Response({
#             'success': True,
#             'message': 'Login successful',
#             'user': user_data
#         }, status=status.HTTP_200_OK)
        
#     except UserManagement.DoesNotExist:
#         return Response(
#             {'error': 'Invalid email or password'},
#             status=status.HTTP_401_UNAUTHORIZED
#         )
#     except Exception as e:
#         print(f"Login error: {str(e)}")  # For debugging
#         return Response(
#             {'error': 'An error occurred during login'},
#             status=status.HTTP_500_INTERNAL_SERVER_ERROR
#         )


# @api_view(['GET'])
# @permission_classes([AllowAny])
# def get_roles(request):
#     """
#     Get all available roles for login dropdown
#     GET /api/roles/
#     """
#     try:
#         roles = Role.objects.all().order_by('role_name')
#         serializer = RoleSerializer(roles, many=True)
#         return Response({
#             'success': True,
#             'roles': serializer.data
#         }, status=status.HTTP_200_OK)
#     except Exception as e:
#         return Response(
#             {'error': 'Failed to fetch roles'},
#             status=status.HTTP_500_INTERNAL_SERVER_ERROR
#         )


# @api_view(['POST'])
# @permission_classes([AllowAny])
# def verify_session(request):
#     """
#     Verify user session for NextAuth
#     POST /api/auth/verify/
#     Body: { email }
#     """
#     email = request.data.get('email')
    
#     if not email:
#         return Response(
#             {'error': 'Email is required'},
#             status=status.HTTP_400_BAD_REQUEST
#         )
    
#     try:
#         user = UserManagement.objects.select_related('role').get(user_email=email)
        
#         if user.status != 'Active':
#             return Response(
#                 {'error': 'Account not active'},
#                 status=status.HTTP_403_FORBIDDEN
#             )
        
#         user_data = UserSerializer(user).data
        
#         return Response({
#             'success': True,
#             'user': user_data
#         }, status=status.HTTP_200_OK)
        
#     except UserManagement.DoesNotExist:
#         return Response(
#             {'error': 'User not found'},
#             status=status.HTTP_404_NOT_FOUND
#         )

# views.py
from rest_framework import viewsets, status
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.hashers import check_password
from django.utils import timezone
from datetime import datetime, timedelta
import jwt
from django.conf import settings

from .models import Role, UserManagement, UserDelegation
from .serializers import (
    RoleSerializer,
    UserManagementSerializer,
    UserLoginSerializer,
    UserLoginResponseSerializer,
    UserDelegationSerializer
)


# JWT Token Generation
def generate_jwt_token(user):
    """Generate JWT token for authenticated user"""
    payload = {
        'user_id': user.id,
        'email': user.user_email,
        'role': user.role.role_name if user.role else None,
        'exp': datetime.utcnow() + timedelta(days=7),  # Token expires in 7 days
        'iat': datetime.utcnow()
    }
    
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
    return token


@api_view(['POST'])
def login_view(request):
    """
    User login endpoint
    POST /api/auth/login/
    Body: { "email": "user@example.com", "password": "password123", "role": "Admin" }
    """
    serializer = UserLoginSerializer(data=request.data)
    
    if not serializer.is_valid():
        return Response({
            'success': False,
            'message': 'Invalid input data',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
    
    email = serializer.validated_data['email']
    password = serializer.validated_data['password']
    role_name = serializer.validated_data['role']
    
    try:
        # Find user by email
        user = UserManagement.objects.select_related('role').get(
            user_email=email
        )
        
        # Check if user is active
        if user.status != 'Active':
            return Response({
                'success': False,
                'message': 'Your account is not active. Please contact administrator.'
            }, status=status.HTTP_403_FORBIDDEN)
        
        # Verify password
        if not check_password(password, user.user_password):
            return Response({
                'success': False,
                'message': 'Invalid email or password'
            }, status=status.HTTP_401_UNAUTHORIZED)
        
        # Verify role matches
        if user.role and user.role.role_name != role_name:
            return Response({
                'success': False,
                'message': f'You are not authorized to login as {role_name}'
            }, status=status.HTTP_403_FORBIDDEN)
        
        # Check if user has an active delegation
        today = timezone.now().date()
        active_delegation = UserDelegation.objects.filter(
            user_email=user.user_email,
            status='Active',
            from_date__lte=today,
            to_date__gte=today
        ).first()
        
        # Update last login
        user.last_login = timezone.now()
        user.save(update_fields=['last_login'])
        
        # Generate JWT token
        token = generate_jwt_token(user)
        
        # Prepare response
        user_serializer = UserLoginResponseSerializer(user)
        
        response_data = {
            'success': True,
            'message': 'Login successful',
            'token': token,
            'user': user_serializer.data,
        }
        
        # Include delegation info if exists
        if active_delegation:
            response_data['delegation'] = {
                'is_delegated': True,
                'delegated_to': active_delegation.delegate_to.user_name,
                'from_date': active_delegation.from_date,
                'to_date': active_delegation.to_date,
                'remarks': active_delegation.remarks
            }
        
        return Response(response_data, status=status.HTTP_200_OK)
        
    except UserManagement.DoesNotExist:
        return Response({
            'success': False,
            'message': 'Invalid email or password'
        }, status=status.HTTP_401_UNAUTHORIZED)
    except Exception as e:
        return Response({
            'success': False,
            'message': f'An error occurred: {str(e)}'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def logout_view(request):
    """
    User logout endpoint
    POST /api/auth/logout/
    """
    # For JWT, logout is handled on client side by removing token
    # You can add token blacklisting here if needed
    return Response({
        'success': True,
        'message': 'Logout successful'
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def verify_token(request):
    """
    Verify JWT token
    GET /api/auth/verify/
    Headers: Authorization: Bearer <token>
    """
    auth_header = request.headers.get('Authorization')
    
    if not auth_header or not auth_header.startswith('Bearer '):
        return Response({
            'success': False,
            'message': 'No token provided'
        }, status=status.HTTP_401_UNAUTHORIZED)
    
    token = auth_header.split(' ')[1]
    
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        user = UserManagement.objects.select_related('role').get(id=payload['user_id'])
        
        user_serializer = UserLoginResponseSerializer(user)
        
        return Response({
            'success': True,
            'valid': True,
            'user': user_serializer.data
        }, status=status.HTTP_200_OK)
        
    except jwt.ExpiredSignatureError:
        return Response({
            'success': False,
            'valid': False,
            'message': 'Token has expired'
        }, status=status.HTTP_401_UNAUTHORIZED)
    except jwt.InvalidTokenError:
        return Response({
            'success': False,
            'valid': False,
            'message': 'Invalid token'
        }, status=status.HTTP_401_UNAUTHORIZED)
    except UserManagement.DoesNotExist:
        return Response({
            'success': False,
            'valid': False,
            'message': 'User not found'
        }, status=status.HTTP_404_NOT_FOUND)


class RoleViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Role CRUD operations
    """
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    
    @action(detail=False, methods=['get'])
    def available_roles(self, request):
        """Get list of available roles"""
        roles = self.get_queryset()
        return Response({
            'success': True,
            'roles': [role.role_name for role in roles]
        })


class UserManagementViewSet(viewsets.ModelViewSet):
    """
    ViewSet for User Management CRUD operations
    """
    queryset = UserManagement.objects.select_related('role').all()
    serializer_class = UserManagementSerializer
    
    @action(detail=False, methods=['get'])
    def active_users(self, request):
        """Get all active users"""
        users = self.get_queryset().filter(status='Active')
        serializer = self.get_serializer(users, many=True)
        return Response({
            'success': True,
            'users': serializer.data
        })
    
    @action(detail=True, methods=['post'])
    def change_status(self, request, pk=None):
        """Change user status"""
        user = self.get_object()
        new_status = request.data.get('status')
        
        if new_status not in ['Active', 'Inactive', 'Suspended']:
            return Response({
                'success': False,
                'message': 'Invalid status'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        user.status = new_status
        user.save()
        
        return Response({
            'success': True,
            'message': f'User status changed to {new_status}',
            'user': self.get_serializer(user).data
        })


class UserDelegationViewSet(viewsets.ModelViewSet):
    """
    ViewSet for User Delegation CRUD operations
    """
    # queryset = UserDelegation.objects.select_related('user', 'delegate_to').all()
    queryset = UserDelegation.objects.select_related('delegate_to').all()
    serializer_class = UserDelegationSerializer
    
    @action(detail=False, methods=['get'])
    def active_delegations(self, request):
        """Get all active delegations"""
        today = timezone.now().date()
        delegations = self.get_queryset().filter(
            status='Active',
            from_date__lte=today,
            to_date__gte=today
        )
        serializer = self.get_serializer(delegations, many=True)
        return Response({
            'success': True,
            'delegations': serializer.data
        })
    
    @action(detail=False, methods=['get'])
    def my_delegations(self, request):
        """Get delegations for current user"""
        user_id = request.query_params.get('user_id')
        if not user_id:
            return Response({
                'success': False,
                'message': 'user_id is required'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        delegations = self.get_queryset().filter(user_id=user_id)
        serializer = self.get_serializer(delegations, many=True)
        return Response({
            'success': True,
            'delegations': serializer.data
        })
    
    @action(detail=True, methods=['post'])
    def cancel_delegation(self, request, pk=None):
        """Cancel a delegation"""
        delegation = self.get_object()
        delegation.status = 'Cancelled'
        delegation.save()
        
        return Response({
            'success': True,
            'message': 'Delegation cancelled successfully',
            'delegation': self.get_serializer(delegation).data
        })