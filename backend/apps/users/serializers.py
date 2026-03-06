# # from rest_framework import serializers
# # from .models import UserManagement, UserDelegation

# # class UserManagementSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = UserManagement
# #         fields = '__all__'

# # class UserDelegationSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = UserDelegation
# #         fields = '__all__'
# #         extra_kwargs = {
# #             'user_password': {'write_only': True}
# #         }


# from rest_framework import serializers
# from .models import UserManagement, UserDelegation
# from django.contrib.auth.hashers import make_password

# class UserManagementSerializer(serializers.ModelSerializer):
#     user_password = serializers.CharField(
#         write_only=True, required=False, allow_blank=True
#     )

#     class Meta:
#         model = UserManagement
#         fields = '__all__'

#     def validate_user_password(self, value):
#         # Hash the password if it's provided and not already hashed
#         if value and not value.startswith('pbkdf2_'):
#             return make_password(value)
#         return value


# class UserDelegationSerializer(serializers.ModelSerializer):
#     user_password = serializers.CharField(
#         write_only=True, required=False, allow_blank=True
#     )

#     class Meta:
#         model = UserDelegation
#         fields = '__all__'

#     def validate_user_password(self, value):
#         # Hash the password if it's provided and not already hashed
#         if value and not value.startswith('pbkdf2_'):
#             return make_password(value)
#         return value


# serializers.py
from rest_framework import serializers
from .models import Role, UserManagement, UserDelegation
from django.contrib.auth.hashers import make_password


class RoleSerializer(serializers.ModelSerializer):
    """
    Serializer for Role model
    """
    class Meta:
        model = Role
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']


class UserManagementSerializer(serializers.ModelSerializer):
    """
    Serializer for UserManagement with role details
    """
    user_password = serializers.CharField(write_only=True, required=False, allow_blank=True)
    role_details = RoleSerializer(source='role', read_only=True)
    role_name = serializers.CharField(source='role.role_name', read_only=True)
    
    class Meta:
        model = UserManagement
        fields = [
            'id', 'user_name', 'user_email', 'user_password', 
            'individual_site', 'department', 'role', 'role_details', 
            'role_name', 'department_role', 'status', 'last_login',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at', 'last_login']
        extra_kwargs = {
            'user_password': {'write_only': True}
        }

    def validate_user_password(self, value):
        """Hash the password if it's provided and not already hashed"""
        if value and not value.startswith('pbkdf2_'):
            return make_password(value)
        return value

    def create(self, validated_data):
        """Create user with hashed password"""
        return UserManagement.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """Update user, handle password hashing"""
        password = validated_data.pop('user_password', None)
        
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        
        if password:
            instance.user_password = password if password.startswith('pbkdf2_') else make_password(password)
        
        instance.save()
        return instance


class UserLoginSerializer(serializers.Serializer):
    """
    Serializer for user login
    """
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, write_only=True)
    role = serializers.CharField(required=True)


class UserLoginResponseSerializer(serializers.ModelSerializer):
    """
    Serializer for login response
    """
    role_details = RoleSerializer(source='role', read_only=True)
    permissions = serializers.SerializerMethodField()
    
    class Meta:
        model = UserManagement
        fields = [
            'id', 'user_name', 'user_email', 'individual_site', 
            'department', 'role', 'role_details', 'department_role',
            'status', 'permissions'
        ]
    
    def get_permissions(self, obj):
        """Get user permissions based on role"""
        if not obj.role:
            return {}
        
        return {
            'can_define_users': obj.role.can_define_users,
            'can_delegate': obj.role.can_delegate,
            'can_create_imprest': obj.role.can_create_imprest,
            'can_surrender_own': obj.role.can_surrender_own,
            'can_create_department_imprest': obj.role.can_create_department_imprest,
            'can_create_payment_transfers': obj.role.can_create_payment_transfers,
            'can_approve_payment_transfers': obj.role.can_approve_payment_transfers,
            'can_approve_documents': obj.role.can_approve_documents,
            'can_enter_surrenders': obj.role.can_enter_surrenders,
            'can_update_surrenders': obj.role.can_update_surrenders,
            'can_approve_surrenders': obj.role.can_approve_surrenders,
            'can_access_all_documents': obj.role.can_access_all_documents,
            'can_access_department_documents': obj.role.can_access_department_documents,
        }


class UserDelegationSerializer(serializers.ModelSerializer):
    """
    Serializer for UserDelegation
    """
    # user_name = serializers.CharField(source='user.user_name', read_only=True)
    # user_email = serializers.CharField(source='user.user_email', read_only=True)
    delegate_to_name = serializers.CharField(source='delegate_to.user_name', read_only=True)
    delegate_to_email = serializers.CharField(source='delegate_to.user_email', read_only=True)
    
    class Meta:
        model = UserDelegation
        fields = [
            'id',  'user_name', 'user_email',
            'delegate_to', 'delegate_to_name', 'delegate_to_email',
            'status', 'from_date', 'to_date', 'remarks',
            'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']

    def validate(self, data):
        """Validate delegation dates"""
        if data['from_date'] > data['to_date']:
            raise serializers.ValidationError("From date must be before to date")
        
        # if data['user'] == data['delegate_to']:
        #     raise serializers.ValidationError("Cannot delegate to yourself")
        
        return data