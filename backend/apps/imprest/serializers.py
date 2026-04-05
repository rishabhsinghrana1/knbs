# # # serializers.py
# # from rest_framework import serializers
# # from .models import ImprestRequest, ImprestRequestLine, ImprestAttachment, ImprestApproval

# # class ImprestRequestLineSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = ImprestRequestLine
# #         fields = '__all__'
# #         read_only_fields = ('breakdown_id', 'created_by', 'created_on', 'modified_by', 'modified_on')


# # class ImprestAttachmentSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = ImprestAttachment
# #         fields = '__all__'
# #         read_only_fields = ('attachment_id', 'uploaded_by', 'uploaded_at', 'created_by', 'created_on')


# # class ImprestApprovalSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = ImprestApproval
# #         fields = '__all__'
# #         read_only_fields = ('approval_id', 'created_by', 'created_on')


# # class ImprestRequestSerializer(serializers.ModelSerializer):
# #     request_lines = ImprestRequestLineSerializer(many=True, required=False)
# #     attachments = ImprestAttachmentSerializer(many=True, read_only=True)
# #     approvals = ImprestApprovalSerializer(many=True, read_only=True)
    
# #     user_requested_name = serializers.CharField(source='user_requested.get_full_name', read_only=True)
# #     user_entered_name = serializers.CharField(source='user_entered.get_full_name', read_only=True)
# #     department_name = serializers.CharField(source='department.name', read_only=True)
# #     project_name = serializers.CharField(source='project.project_name', read_only=True)
    
# #     class Meta:
# #         model = ImprestRequest
# #         fields = '__all__'
# #         read_only_fields = ('imprest_id', 'request_no', 'total_amount', 'created_by', 'created_on', 'modified_by', 'modified_on')
    
# #     def create(self, validated_data):
# #         request_lines_data = validated_data.pop('request_lines', [])
# #         validated_data['created_by'] = self.context['request'].user
# #         validated_data['user_entered'] = self.context['request'].user
        
# #         imprest_request = ImprestRequest.objects.create(**validated_data)
        
# #         for line_data in request_lines_data:
# #             line_data['created_by'] = self.context['request'].user
# #             ImprestRequestLine.objects.create(imprest=imprest_request, **line_data)
        
# #         # Calculate total amount
# #         total = sum(line.estimated_amount for line in imprest_request.request_lines.all())
# #         imprest_request.total_amount = total
# #         imprest_request.save()
        
# #         return imprest_request
    
# #     def update(self, instance, validated_data):
# #         request_lines_data = validated_data.pop('request_lines', None)
# #         validated_data['modified_by'] = self.context['request'].user
        
# #         for attr, value in validated_data.items():
# #             setattr(instance, attr, value)
# #         instance.save()
        
# #         if request_lines_data is not None:
# #             # Delete existing lines
# #             instance.request_lines.all().delete()
            
# #             # Create new lines
# #             for line_data in request_lines_data:
# #                 line_data['created_by'] = self.context['request'].user
# #                 ImprestRequestLine.objects.create(imprest=instance, **line_data)
            
# #             # Recalculate total
# #             total = sum(line.estimated_amount for line in instance.request_lines.all())
# #             instance.total_amount = total
# #             instance.save()
        
# #         return instance

# # serializers.py
# from rest_framework import serializers
# from .models import ImprestRequest, ImprestRequestLine, ImprestAttachment, ImprestApproval

# class ImprestRequestLineSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ImprestRequestLine
#         fields = '__all__'
#         read_only_fields = ('breakdown_id', 'created_on', 'modified_on')


# class ImprestAttachmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ImprestAttachment
#         fields = '__all__'
#         read_only_fields = ('attachment_id', 'uploaded_at', 'created_on')


# class ImprestApprovalSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ImprestApproval
#         fields = '__all__'
#         read_only_fields = ('approval_id', 'created_on')


# class ImprestRequestSerializer(serializers.ModelSerializer):
#     request_lines = ImprestRequestLineSerializer(many=True, required=False)
#     attachments = ImprestAttachmentSerializer(many=True, read_only=True)
#     approvals = ImprestApprovalSerializer(many=True, read_only=True)
    
#     class Meta:
#         model = ImprestRequest
#         fields = '__all__'
#         read_only_fields = ('imprest_id', 'request_no', 'total_amount', 'created_on', 'modified_on')
    
#     def create(self, validated_data):
#         request_lines_data = validated_data.pop('request_lines', [])
#         validated_data['created_by'] = self.context['request'].user.id
#         validated_data['user_entered'] = self.context['request'].user.id
        
#         imprest_request = ImprestRequest.objects.create(**validated_data)
        
#         for line_data in request_lines_data:
#             line_data['created_by'] = self.context['request'].user.id
#             line_data['imprest'] = imprest_request.imprest_id
#             ImprestRequestLine.objects.create(**line_data)
        
#         # Calculate total amount
#         total = ImprestRequestLine.objects.filter(
#             imprest=imprest_request.imprest_id
#         ).aggregate(models.Sum('estimated_amount'))['estimated_amount__sum'] or 0
#         imprest_request.total_amount = total
#         imprest_request.save()
        
#         return imprest_request
    
#     def update(self, instance, validated_data):
#         request_lines_data = validated_data.pop('request_lines', None)
#         validated_data['modified_by'] = self.context['request'].user.id
        
#         for attr, value in validated_data.items():
#             setattr(instance, attr, value)
#         instance.save()
        
#         if request_lines_data is not None:
#             # Delete existing lines
#             ImprestRequestLine.objects.filter(imprest=instance.imprest_id).delete()
            
#             # Create new lines
#             for line_data in request_lines_data:
#                 line_data['created_by'] = self.context['request'].user.id
#                 line_data['imprest'] = instance.imprest_id
#                 ImprestRequestLine.objects.create(**line_data)
            
#             # Recalculate total
#             total = ImprestRequestLine.objects.filter(
#                 imprest=instance.imprest_id
#             ).aggregate(models.Sum('estimated_amount'))['estimated_amount__sum'] or 0
#             instance.total_amount = total
#             instance.save()
        
#         return instance


# serializers.py
from rest_framework import serializers
from django.db import models as django_models
from .models import (
    ImprestRequest, 
    ImprestRequestLine, 
    ImprestAttachment, 
    ImprestApproval
)

from apps.projects.models import Project
from apps.users.models import UserManagement
from apps.department.models import Department
from apps.account.models import Accounts


class ImprestRequestLineSerializer(serializers.ModelSerializer):
    expense_description = serializers.SerializerMethodField()

    class Meta:
        model = ImprestRequestLine
        fields = [
            'breakdown_id',
            'imprest',
            'expense_head',
            'expense_description',
            'description',
            'debtor_code',
            'debtor_name',
            'gl_account',
            'account_name',
            'estimated_amount',
            'approved_amount',
            'spent_amount',
            'supplier_no',
            'created_by',
            'created_on',
            'modified_by',
            'modified_on'
        ]
        read_only_fields = ('breakdown_id', 'created_on', 'modified_on')
    def get_expense_description(self, obj):
        if not obj.expense_head:
          return None

        account = Accounts.objects.filter(
        Master_Sub_Account=str(obj.expense_head).strip()
        ).first()

        return account.Description if account else None

class ImprestAttachmentSerializer(serializers.ModelSerializer):
    file_name = serializers.SerializerMethodField()
    file_size = serializers.SerializerMethodField()
    
    class Meta:
        model = ImprestAttachment
        fields = [
            'attachment_id',
            'imprest',
            'file_path',
            'file_name',
            'file_size',
            'attachment_type',
            'uploaded_by',
            'uploaded_at',
            'created_by',
            'created_on',
            'modified_by',
            'modified_on'
        ]
        read_only_fields = ('attachment_id', 'uploaded_at', 'created_on', 'file_name', 'file_size')
    
    def get_file_name(self, obj):
        if obj.file_path:
            return obj.file_path.name.split('/')[-1]
        return None
    
    def get_file_size(self, obj):
        if obj.file_path:
            try:
                return obj.file_path.size
            except:
                return None
        return None


class ImprestApprovalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImprestApproval
        fields = [
            'approval_id',
            'imprest',
            'approver_role',
            'approver',
            'decision',
            'comments',
            'decision_datetime',
            'created_by',
            'created_on',
            'modified_by',
            'modified_on'
        ]
        read_only_fields = ('approval_id', 'created_on')




class ImprestRequestSerializer(serializers.ModelSerializer):

    # =========================
    # NAME FIELDS (Manual Lookup)
    # =========================
    user_requested_name = serializers.SerializerMethodField()
    user_entered_name = serializers.SerializerMethodField()
    department_name = serializers.SerializerMethodField()
    project_name = serializers.SerializerMethodField()
    # department_name = serializers.CharField(source='department.department_name', read_only=True)
    request_lines = serializers.SerializerMethodField()
    attachments = serializers.SerializerMethodField()
    approvals = serializers.SerializerMethodField()

    status_display = serializers.CharField(
        source='get_status_display',
        read_only=True
    )

    class Meta:
        model = ImprestRequest
        fields = [
            'imprest_id',
            'request_no',

            'user_requested',
            'user_requested_name',

            'user_entered',
            'user_entered_name',

            'department',
            'department_name',

            'project',
            'project_name',

            'purpose',
            'total_amount',
            'status',
            'status_display',

            'request_lines',
            'attachments',
            'approvals',

            'created_by',
            'created_on',
            'modified_by',
            'modified_on'
        ]

        read_only_fields = (
            'imprest_id',
            'request_no',
            'total_amount',
            'created_on',
            'modified_on'
        )

    # =========================
    # NAME METHODS (WITHOUT FK)
    # =========================

    def get_user_requested_name(self, obj):
        user = UserManagement.objects.filter(id=obj.user_requested).first()
        return user.user_name if user else None

    def get_user_entered_name(self, obj):
        user = UserManagement.objects.filter(id=obj.user_entered).first()
        return user.user_name if user else None

    def get_department_name(self, obj):
        dept = Department.objects.filter(department_id=obj.department).first()
        return dept.department_name if dept else None

    def get_project_name(self, obj):
        project = Project.objects.filter(ProjectLink=obj.project).first()
        return project.ProjectName if project else None

    # =========================
    # RELATED DATA
    # =========================

    def get_request_lines(self, obj):
        lines = ImprestRequestLine.objects.filter(imprest=obj.imprest_id)
        return ImprestRequestLineSerializer(lines, many=True).data

    def get_attachments(self, obj):
        attachments = ImprestAttachment.objects.filter(imprest=obj.imprest_id)
        return ImprestAttachmentSerializer(attachments, many=True).data

    def get_approvals(self, obj):
        approvals = ImprestApproval.objects.filter(imprest=obj.imprest_id)
        return ImprestApprovalSerializer(approvals, many=True).data

    # =========================
    # CREATE
    # =========================

    def create(self, validated_data):
        print("Validated Data:", validated_data)
        request_lines_data = self.initial_data.get('request_lines', [])
        user_id = self.context['request'].user.id
        request = self.context.get('request')
        user = request.user if request else None

        validated_data['created_by'] = self.initial_data.get('created_by')
        validated_data['user_entered'] = self.initial_data.get('user_entered')
        validated_data['user_requested'] = self.initial_data.get('user_requested')

        imprest_request = ImprestRequest.objects.create(**validated_data)

        for line_data in request_lines_data:
            line_data['created_by'] = user.id if user.is_authenticated else 1
            line_data['imprest'] = imprest_request.imprest_id
            ImprestRequestLine.objects.create(**line_data)

        self._recalculate_total(imprest_request)

        return imprest_request

    # =========================
    # UPDATE
    # =========================

    def update(self, instance, validated_data):
        request_lines_data = self.initial_data.get('request_lines', None)
        user_id = self.context['request'].user.id
        request = self.context.get('request')
        user = request.user if request else None
        validated_data['modified_by'] = user_id

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()

        if request_lines_data is not None:
            ImprestRequestLine.objects.filter(
                imprest=instance.imprest_id
            ).delete()
       

            for line_data in request_lines_data:
                line_data['created_by'] = user.id if user.is_authenticated else 1
                line_data['imprest'] = instance.imprest_id
                ImprestRequestLine.objects.create(**line_data)

            self._recalculate_total(instance)

        return instance

    # =========================
    # TOTAL CALCULATION
    # =========================

    def _recalculate_total(self, imprest_request):
        total = ImprestRequestLine.objects.filter(
            imprest=imprest_request.imprest_id
        ).aggregate(
            total=django_models.Sum('estimated_amount')
        )['total'] or 0

        imprest_request.total_amount = total
        imprest_request.save()
