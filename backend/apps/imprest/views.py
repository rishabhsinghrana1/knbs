# # # views.py
# # from rest_framework import viewsets, status
# # from rest_framework.decorators import action
# # from rest_framework.response import Response
# # from rest_framework.permissions import IsAuthenticated
# # from django.utils import timezone
# # from .models import ImprestRequest, ImprestAttachment
# # from .serializers import ImprestRequestSerializer, ImprestAttachmentSerializer

# # class ImprestRequestViewSet(viewsets.ModelViewSet):
# #     queryset = ImprestRequest.objects.all()
# #     serializer_class = ImprestRequestSerializer
# #     permission_classes = [IsAuthenticated]
    
# #     def get_queryset(self):
# #         queryset = super().get_queryset()
        
# #         # Apply filters
# #         year = self.request.query_params.get('year')
# #         month = self.request.query_params.get('month')
# #         department_id = self.request.query_params.get('department_id')
# #         status_filter = self.request.query_params.get('status')
# #         type_filter = self.request.query_params.get('type')
        
# #         if year:
# #             queryset = queryset.filter(created_on__year=year)
        
# #         if month:
# #             queryset = queryset.filter(created_on__month=month)
        
# #         if department_id:
# #             queryset = queryset.filter(department_id=department_id)
        
# #         if status_filter:
# #             queryset = queryset.filter(status=status_filter)
        
# #         if type_filter:
# #             user = self.request.user
# #             if type_filter == 'my':
# #                 queryset = queryset.filter(user_requested=user)
# #             elif type_filter == 'dept':
# #                 queryset = queryset.filter(department=user.department)
# #             elif type_filter == 'pending_my':
# #                 queryset = queryset.filter(
# #                     user_requested=user,
# #                     status__in=['Pending_HOD', 'Pending_FC', 'Pending_DG']
# #                 )
# #             elif type_filter == 'pending_dept':
# #                 queryset = queryset.filter(
# #                     department=user.department,
# #                     status__in=['Pending_HOD', 'Pending_FC', 'Pending_DG']
# #                 )
# #             elif type_filter == 'completed_my':
# #                 queryset = queryset.filter(
# #                     user_requested=user,
# #                     status__in=['Approved', 'Closed']
# #                 )
# #             elif type_filter == 'completed_dept':
# #                 queryset = queryset.filter(
# #                     department=user.department,
# #                     status__in=['Approved', 'Closed']
# #                 )
        
# #         return queryset.order_by('-created_on')
    
# #     @action(detail=True, methods=['post'])
# #     def submit(self, request, pk=None):
# #         """Submit imprest request for approval"""
# #         imprest = self.get_object()
        
# #         if imprest.status != 'Draft':
# #             return Response(
# #                 {'error': 'Only draft requests can be submitted'},
# #                 status=status.HTTP_400_BAD_REQUEST
# #             )
        
# #         imprest.status = 'Pending_HOD'
# #         imprest.modified_by = request.user
# #         imprest.save()
        
# #         return Response({
# #             'imprest_id': imprest.imprest_id,
# #             'status': imprest.status,
# #             'message': 'Imprest request submitted for approval'
# #         })
    
# #     @action(detail=True, methods=['post'])
# #     def approve(self, request, pk=None):
# #         """Approve imprest request"""
# #         imprest = self.get_object()
# #         comments = request.data.get('comments', '')
        
# #         # Determine approval role based on current status
# #         if imprest.status == 'Pending_HOD':
# #             approver_role = 'HOD'
# #             next_status = 'Pending_FC'
# #         elif imprest.status == 'Pending_FC':
# #             approver_role = 'FC'
# #             next_status = 'Pending_DG'
# #         elif imprest.status == 'Pending_DG':
# #             approver_role = 'DG'
# #             next_status = 'Approved'
# #         else:
# #             return Response(
# #                 {'error': 'Request is not in pending status'},
# #                 status=status.HTTP_400_BAD_REQUEST
# #             )
        
# #         # Create approval record
# #         ImprestApproval.objects.create(
# #             imprest=imprest,
# #             approver_role=approver_role,
# #             approver=request.user,
# #             decision='Approved',
# #             comments=comments,
# #             decision_datetime=timezone.now(),
# #             created_by=request.user
# #         )
        
# #         # Update status
# #         imprest.status = next_status
# #         imprest.modified_by = request.user
# #         imprest.save()
        
# #         return Response({
# #             'imprest_id': imprest.imprest_id,
# #             'status': imprest.status,
# #             'message': f'Imprest request approved by {approver_role}'
# #         })
    
# #     @action(detail=True, methods=['post'])
# #     def reject(self, request, pk=None):
# #         """Reject imprest request"""
# #         imprest = self.get_object()
# #         comments = request.data.get('comments', '')
        
# #         if not comments:
# #             return Response(
# #                 {'error': 'Comments are required for rejection'},
# #                 status=status.HTTP_400_BAD_REQUEST
# #             )
        
# #         # Determine approval role
# #         if imprest.status == 'Pending_HOD':
# #             approver_role = 'HOD'
# #         elif imprest.status == 'Pending_FC':
# #             approver_role = 'FC'
# #         elif imprest.status == 'Pending_DG':
# #             approver_role = 'DG'
# #         else:
# #             return Response(
# #                 {'error': 'Request is not in pending status'},
# #                 status=status.HTTP_400_BAD_REQUEST
# #             )
        
# #         # Create approval record
# #         ImprestApproval.objects.create(
# #             imprest=imprest,
# #             approver_role=approver_role,
# #             approver=request.user,
# #             decision='Rejected',
# #             comments=comments,
# #             decision_datetime=timezone.now(),
# #             created_by=request.user
# #         )
        
# #         # Update status
# #         imprest.status = 'Rejected'
# #         imprest.modified_by = request.user
# #         imprest.save()
        
# #         return Response({
# #             'imprest_id': imprest.imprest_id,
# #             'status': imprest.status,
# #             'message': f'Imprest request rejected by {approver_role}'
# #         })
    
# #     @action(detail=True, methods=['post'])
# #     def upload_attachment(self, request, pk=None):
# #         """Upload attachment for imprest request"""
# #         imprest = self.get_object()
# #         file = request.FILES.get('file')
# #         attachment_type = request.data.get('attachment_type', 'Support')
        
# #         if not file:
# #             return Response(
# #                 {'error': 'No file provided'},
# #                 status=status.HTTP_400_BAD_REQUEST
# #             )
        
# #         attachment = ImprestAttachment.objects.create(
# #             imprest=imprest,
# #             file_path=file,
# #             attachment_type=attachment_type,
# #             uploaded_by=request.user,
# #             created_by=request.user
# #         )
        
# #         serializer = ImprestAttachmentSerializer(attachment)
# #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    
# #     @action(detail=True, methods=['delete'], url_path='attachments/(?P<attachment_id>[^/.]+)')
# #     def delete_attachment(self, request, pk=None, attachment_id=None):
# #         """Delete attachment"""
# #         try:
# #             attachment = ImprestAttachment.objects.get(
# #                 attachment_id=attachment_id,
# #                 imprest_id=pk
# #             )
# #             attachment.delete()
# #             return Response({'message': 'Attachment deleted successfully'})
# #         except ImprestAttachment.DoesNotExist:
# #             return Response(
# #                 {'error': 'Attachment not found'},
# #                 status=status.HTTP_404_NOT_FOUND
# #             )


# # views.py
# from rest_framework import viewsets, status
# from rest_framework.decorators import action
# from rest_framework.response import Response
# # from rest_framework.permissions import IsAuthenticated
# from rest_framework.permissions import AllowAny

# from django.utils import timezone
# from django.db import models
# from .models import ImprestRequest, ImprestAttachment, ImprestApproval
# from .serializers import ImprestRequestSerializer, ImprestAttachmentSerializer

# class ImprestRequestViewSet(viewsets.ModelViewSet):
#     queryset = ImprestRequest.objects.all()
#     serializer_class = ImprestRequestSerializer 
#     permission_classes = [AllowAny]
#     # permission_classes = [IsAuthenticated]
    
#     def get_queryset(self):
#         queryset = super().get_queryset()
        
#         # Apply filters
#         year = self.request.query_params.get('year')
#         month = self.request.query_params.get('month')
#         department_id = self.request.query_params.get('department_id')
#         status_filter = self.request.query_params.get('status')
#         type_filter = self.request.query_params.get('type')
        
#         if year:
#             queryset = queryset.filter(created_on__year=year)
        
#         if month:
#             queryset = queryset.filter(created_on__month=month)
        
#         if department_id:
#             queryset = queryset.filter(department=department_id)
        
#         if status_filter:
#             queryset = queryset.filter(status=status_filter)
        
#         if type_filter:
#             user = self.request.user
#             if type_filter == 'my':
#                 queryset = queryset.filter(user_requested=user.id)
#             elif type_filter == 'dept':
#                 # Assuming user has a department_id attribute
#                 queryset = queryset.filter(department=user.department_id)
#             elif type_filter == 'pending_my':
#                 queryset = queryset.filter(
#                     user_requested=user.id,
#                     status__in=['Pending_HOD', 'Pending_FC', 'Pending_DG']
#                 )
#             elif type_filter == 'pending_dept':
#                 queryset = queryset.filter(
#                     department=user.department_id,
#                     status__in=['Pending_HOD', 'Pending_FC', 'Pending_DG']
#                 )
#             elif type_filter == 'completed_my':
#                 queryset = queryset.filter(
#                     user_requested=user.id,
#                     status__in=['Approved', 'Closed']
#                 )
#             elif type_filter == 'completed_dept':
#                 queryset = queryset.filter(
#                     department=user.department_id,
#                     status__in=['Approved', 'Closed']
#                 )
        
#         return queryset.order_by('-created_on')
    
#     @action(detail=True, methods=['post'])
#     def submit(self, request, pk=None):
#         """Submit imprest request for approval"""
#         imprest = self.get_object()
        
#         if imprest.status != 'Draft':
#             return Response(
#                 {'error': 'Only draft requests can be submitted'},
#                 status=status.HTTP_400_BAD_REQUEST
#             )
        
#         imprest.status = 'Pending_HOD'
#         imprest.modified_by = request.user.id
#         imprest.save()
        
#         return Response({
#             'imprest_id': imprest.imprest_id,
#             'status': imprest.status,
#             'message': 'Imprest request submitted for approval'
#         })
    
#     @action(detail=True, methods=['post'])
#     def approve(self, request, pk=None):
#         """Approve imprest request"""
#         imprest = self.get_object()
#         comments = request.data.get('comments', '')
        
#         # Determine approval role based on current status
#         if imprest.status == 'Pending_HOD':
#             approver_role = 'HOD'
#             next_status = 'Pending_FC'
#         elif imprest.status == 'Pending_FC':
#             approver_role = 'FC'
#             next_status = 'Pending_DG'
#         elif imprest.status == 'Pending_DG':
#             approver_role = 'DG'
#             next_status = 'Approved'
#         else:
#             return Response(
#                 {'error': 'Request is not in pending status'},
#                 status=status.HTTP_400_BAD_REQUEST
#             )
        
#         # Create approval record
#         ImprestApproval.objects.create(
#             imprest=imprest.imprest_id,
#             approver_role=approver_role,
#             approver=request.user.id,
#             decision='Approved',
#             comments=comments,
#             decision_datetime=timezone.now(),
#             created_by=request.user.id
#         )
        
#         # Update status
#         imprest.status = next_status
#         imprest.modified_by = request.user.id
#         imprest.save()
        
#         return Response({
#             'imprest_id': imprest.imprest_id,
#             'status': imprest.status,
#             'message': f'Imprest request approved by {approver_role}'
#         })
    
#     @action(detail=True, methods=['post'])
#     def reject(self, request, pk=None):
#         """Reject imprest request"""
#         imprest = self.get_object()
#         comments = request.data.get('comments', '')
        
#         if not comments:
#             return Response(
#                 {'error': 'Comments are required for rejection'},
#                 status=status.HTTP_400_BAD_REQUEST
#             )
        
#         # Determine approval role
#         if imprest.status == 'Pending_HOD':
#             approver_role = 'HOD'
#         elif imprest.status == 'Pending_FC':
#             approver_role = 'FC'
#         elif imprest.status == 'Pending_DG':
#             approver_role = 'DG'
#         else:
#             return Response(
#                 {'error': 'Request is not in pending status'},
#                 status=status.HTTP_400_BAD_REQUEST
#             )
        
#         # Create approval record
#         ImprestApproval.objects.create(
#             imprest=imprest.imprest_id,
#             approver_role=approver_role,
#             approver=request.user.id,
#             decision='Rejected',
#             comments=comments,
#             decision_datetime=timezone.now(),
#             created_by=request.user.id
#         )
        
#         # Update status
#         imprest.status = 'Rejected'
#         imprest.modified_by = request.user.id
#         imprest.save()
        
#         return Response({
#             'imprest_id': imprest.imprest_id,
#             'status': imprest.status,
#             'message': f'Imprest request rejected by {approver_role}'
#         })
    
#     @action(detail=True, methods=['post'])
#     def upload_attachment(self, request, pk=None):
#         """Upload attachment for imprest request"""
#         imprest = self.get_object()
#         file = request.FILES.get('file')
#         attachment_type = request.data.get('attachment_type', 'Support')
        
#         if not file:
#             return Response(
#                 {'error': 'No file provided'},
#                 status=status.HTTP_400_BAD_REQUEST
#             )
        
#         attachment = ImprestAttachment.objects.create(
#             imprest=imprest.imprest_id,
#             file_path=file,
#             attachment_type=attachment_type,
#             uploaded_by=request.user.id,
#             created_by=request.user.id
#         )
        
#         serializer = ImprestAttachmentSerializer(attachment)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
    
#     @action(detail=True, methods=['delete'], url_path='attachments/(?P<attachment_id>[^/.]+)')
#     def delete_attachment(self, request, pk=None, attachment_id=None):
#         """Delete attachment"""
#         try:
#             attachment = ImprestAttachment.objects.get(
#                 attachment_id=attachment_id,
#                 imprest=pk
#             )
#             attachment.delete()
#             return Response({'message': 'Attachment deleted successfully'})
#         except ImprestAttachment.DoesNotExist:
#             return Response(
#                 {'error': 'Attachment not found'},
#                 status=status.HTTP_404_NOT_FOUND
#             )


# views.py
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from django.utils import timezone
from django.db.models import Q

from .models import ImprestRequest, ImprestRequestLine, ImprestAttachment, ImprestApproval
from .serializers import (
    ImprestRequestSerializer, 
    ImprestAttachmentSerializer, 
    ImprestApprovalSerializer
)


class ImprestRequestViewSet(viewsets.ModelViewSet):
    queryset = ImprestRequest.objects.all()
    serializer_class = ImprestRequestSerializer
    permission_classes = [AllowAny]
    

    def perform_create(self, serializer):
        user_id = self.request.user.id if self.request.user.is_authenticated else 1

        serializer.save(
            user_entered=user_id,
            user_requested=user_id,
            created_by=user_id
        )
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Apply filters
        year = self.request.query_params.get('year')
        month = self.request.query_params.get('month')
        department_id = self.request.query_params.get('department_id')
        status_filter = self.request.query_params.get('status')
        type_filter = self.request.query_params.get('type')
        search = self.request.query_params.get('search')
        
        if year:
            queryset = queryset.filter(created_on__year=year)
        
        if month:
            queryset = queryset.filter(created_on__month=month)
        
        if department_id:
            queryset = queryset.filter(department=department_id)
        
        if status_filter:
            queryset = queryset.filter(status=status_filter)
        
        if search:
            queryset = queryset.filter(
                Q(request_no__icontains=search) |
                Q(purpose__icontains=search)
            )
        
        if type_filter:
            user = self.request.user
            user_id = user.id
            
            # Assuming user has department_id attribute
            user_dept_id = getattr(user, 'department_id', None)
            
            if type_filter == 'my':
                queryset = queryset.filter(user_requested=user_id)
            elif type_filter == 'dept' and user_dept_id:
                queryset = queryset.filter(department=user_dept_id)
            elif type_filter == 'pending_my':
                queryset = queryset.filter(
                    user_requested=user_id,
                    status__in=['Submitted', 'HODApproved']
                )
            elif type_filter == 'pending_dept' and user_dept_id:
                queryset = queryset.filter(
                    department=user_dept_id,
                    status__in=['Submitted', 'HODApproved']
                )
            elif type_filter == 'completed_my':
                queryset = queryset.filter(
                    user_requested=user_id,
                    status__in=['FinanceApproved', 'Completed']
                )
            elif type_filter == 'completed_dept' and user_dept_id:
                queryset = queryset.filter(
                    department=user_dept_id,
                    status__in=['FinanceApproved', 'Completed']
                )
        
        return queryset.order_by('-created_on')
    
    @action(detail=True, methods=['post'])
    def submit(self, request, pk=None):
        """Submit imprest request for approval"""
        imprest = self.get_object()
        
        if imprest.status != 'Draft':
            return Response(
                {'error': 'Only draft requests can be submitted'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Validate that request has lines
        lines_count = ImprestRequestLine.objects.filter(imprest=imprest.imprest_id).count()
        if lines_count == 0:
            return Response(
                {'error': 'Cannot submit request without request lines'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        imprest.status = 'Submitted' 
        imprest.modified_by = request.user.id
        imprest.save()
        
        return Response({
            'imprest_id': imprest.imprest_id,
            'request_no': imprest.request_no,
            'status': imprest.status,
            'message': 'Imprest request submitted for approval'
        })
    
    @action(detail=True, methods=['post'])
    def approve(self, request, pk=None):
        """Approve imprest request"""
        imprest = self.get_object()
        comments = request.data.get('comments', '')
        
        # Determine approval role based on current status
        if imprest.status == 'Submitted':
            approver_role = 'HOD'
            next_status = 'HODApproved'
        elif imprest.status == 'HODRejected':
            approver_role = 'FC'
            next_status = 'FinanceApproved'
        elif imprest.status == 'FinanceRejected':
            approver_role = 'DG'
            next_status = 'Approved'
        else:
            return Response(
                {'error': 'Request is not in pending status'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Create approval record
        ImprestApproval.objects.create(
            imprest=imprest.imprest_id,
            approver_role=approver_role,
            approver=request.user.id,
            decision='Approved',
            comments=comments,
            decision_datetime=timezone.now(),
            created_by=request.user.id
        )
        
        # Update status
        imprest.status = next_status
        imprest.modified_by = request.user.id
        imprest.save()
        
        return Response({
            'imprest_id': imprest.imprest_id,
            'request_no': imprest.request_no,
            'status': imprest.status,
            'approver_role': approver_role,
            'message': f'Imprest request approved by {approver_role}'
        })
    
    @action(detail=True, methods=['post'])
    def reject(self, request, pk=None):
        """Reject imprest request"""
        imprest = self.get_object()
        comments = request.data.get('comments', '')
        
        if not comments:
            return Response(
                {'error': 'Comments are required for rejection'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Determine approval role
        if imprest.status == 'Pending_HOD':
            approver_role = 'HOD'
        elif imprest.status == 'Pending_FC':
            approver_role = 'FC'
        elif imprest.status == 'Pending_DG':
            approver_role = 'DG'
        else:
            return Response(
                {'error': 'Request is not in pending status'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Create approval record
        ImprestApproval.objects.create(
            imprest=imprest.imprest_id,
            approver_role=approver_role,
            approver=request.user.id,
            decision='Rejected',
            comments=comments,
            decision_datetime=timezone.now(),
            created_by=request.user.id
        )
        
        # Update status
        imprest.status = 'Rejected'
        imprest.modified_by = request.user.id
        imprest.save()
        
        return Response({
            'imprest_id': imprest.imprest_id,
            'request_no': imprest.request_no,
            'status': imprest.status,
            'approver_role': approver_role,
            'message': f'Imprest request rejected by {approver_role}'
        })
    
    @action(detail=True, methods=['post'])
    def upload_attachment(self, request, pk=None):
        """Upload attachment for imprest request"""
        imprest = self.get_object()
        file = request.FILES.get('file')
        attachment_type = request.data.get('attachment_type', 'Support')
        
        if not file:
            return Response(
                {'error': 'No file provided'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if attachment_type not in ['Support', 'Receipt']:
            return Response(
                {'error': 'Invalid attachment type. Must be "Support" or "Receipt"'},
                status=status.HTTP_400_BAD_REQUEST
            )
        user_id = request.user.id if request.user.is_authenticated else 1

        attachment = ImprestAttachment.objects.create(
            imprest=imprest.imprest_id,
            file_path=file,
            attachment_type=attachment_type,
            uploaded_by=1,
            created_by=1
        )
        
        serializer = ImprestAttachmentSerializer(attachment)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['post'], url_path='upload-multiple-attachments')
    def upload_multiple_attachments(self, request, pk=None):
        """Upload multiple attachments at once"""
        imprest = self.get_object()
        files = request.FILES.getlist('files')
        attachment_type = request.data.get('attachment_type', 'Support')
        
        if not files:
            return Response(
                {'error': 'No files provided'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if attachment_type not in ['Support', 'Receipt']:
            return Response(
                {'error': 'Invalid attachment type. Must be "Support" or "Receipt"'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        created_attachments = []
        for file in files:
            attachment = ImprestAttachment.objects.create(
                imprest=imprest.imprest_id,
                file_path=file,
                attachment_type=attachment_type,
                # uploaded_by=request.user.id,
                # created_by=request.user.id
                uploaded_by=1,
                created_by=1
            )
            created_attachments.append(attachment)
        
        serializer = ImprestAttachmentSerializer(created_attachments, many=True)
        return Response({
            'count': len(created_attachments),
            'attachments': serializer.data
        }, status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['delete'], url_path='attachments/(?P<attachment_id>[^/.]+)')
    def delete_attachment(self, request, pk=None, attachment_id=None):
        """Delete attachment"""
        try:
            attachment = ImprestAttachment.objects.get(
                attachment_id=attachment_id,
                imprest=pk
            )
            
            # Delete the file from storage
            if attachment.file_path:
                attachment.file_path.delete()
            
            attachment.delete()
            
            return Response({
                'message': 'Attachment deleted successfully'
            })
        except ImprestAttachment.DoesNotExist:
            return Response(
                {'error': 'Attachment not found'},
                status=status.HTTP_404_NOT_FOUND
            )
    
    @action(detail=True, methods=['get'])
    def attachments(self, request, pk=None):
        """Get all attachments for an imprest request"""
        imprest = self.get_object()
        attachments = ImprestAttachment.objects.filter(imprest=imprest.imprest_id)
        serializer = ImprestAttachmentSerializer(attachments, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def approvals(self, request, pk=None):
        """Get all approvals for an imprest request"""
        imprest = self.get_object()
        approvals = ImprestApproval.objects.filter(imprest=imprest.imprest_id)
        serializer = ImprestApprovalSerializer(approvals, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def statistics(self, request):
        """Get statistics for imprest requests"""
        user_id = request.user.id
        user_dept_id = getattr(request.user, 'department_id', None)
        
        stats = {
            'my_requests': {
                'total': ImprestRequest.objects.filter(user_requested=user_id).count(),
                'draft': ImprestRequest.objects.filter(user_requested=user_id, status='Draft').count(),
                'pending': ImprestRequest.objects.filter(
                    user_requested=user_id,
                    status__in=['Submitted', 'HODApproved']
                ).count(),
                'approved': ImprestRequest.objects.filter(user_requested=user_id, status='Approved').count(),
                'rejected': ImprestRequest.objects.filter(user_requested=user_id, status='Rejected').count(),
            }
        }
        
        if user_dept_id:
            stats['department_requests'] = {
                'total': ImprestRequest.objects.filter(department=user_dept_id).count(),
                'pending': ImprestRequest.objects.filter(
                    department=user_dept_id,
                    status__in=['Pending_HOD', 'Pending_FC', 'Pending_DG']
                ).count(),
            }
        
        return Response(stats)