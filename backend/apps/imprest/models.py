# # # models.py
# # from django.db import models
# # from django.contrib.auth.models import User

# # class ImprestRequest(models.Model):
# #     STATUS_CHOICES = [
# #         ('Draft', 'Draft'),
# #         ('Pending_HOD', 'Pending HOD'),
# #         ('Pending_FC', 'Pending FC'),
# #         ('Pending_DG', 'Pending DG'),
# #         ('Approved', 'Approved'),
# #         ('Rejected', 'Rejected'),
# #         ('Surrendered', 'Surrendered'),
# #         ('Closed', 'Closed'),
# #     ]
    
# #     imprest_id = models.AutoField(primary_key=True)
# #     request_no = models.CharField(max_length=50, unique=True, blank=True)
# #     user_requested = models.ForeignKey(User, on_delete=models.PROTECT, related_name='requested_imprests')
# #     user_entered = models.ForeignKey(User, on_delete=models.PROTECT, related_name='entered_imprests')
# #     user_surrendered = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='surrendered_imprests')
# #     surrender_datetime = models.DateTimeField(null=True, blank=True)
# #     close_datetime = models.DateTimeField(null=True, blank=True)
# #     department = models.ForeignKey('Department', on_delete=models.PROTECT)
# #     project = models.ForeignKey('Project', on_delete=models.PROTECT)
# #     purpose = models.TextField()
# #     total_amount = models.DecimalField(max_digits=15, decimal_places=2, default=0)
# #     status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Draft')
# #     created_by = models.ForeignKey(User, on_delete=models.PROTECT, related_name='created_imprests')
# #     created_on = models.DateTimeField(auto_now_add=True)
# #     modified_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='modified_imprests')
# #     modified_on = models.DateTimeField(auto_now=True)
    
# #     def save(self, *args, **kwargs):
# #         if not self.request_no:
# #             # Auto-generate request number
# #             year = timezone.now().year
# #             last_id = ImprestRequest.objects.aggregate(models.Max('imprest_id'))['imprest_id__max'] or 0
# #             self.request_no = f'IMP{year}{str(last_id + 1).zfill(6)}'
# #         super().save(*args, **kwargs)
    
# #     def __str__(self):
# #         return self.request_no


# # class ImprestRequestLine(models.Model):
# #     breakdown_id = models.AutoField(primary_key=True)
# #     imprest = models.ForeignKey(ImprestRequest, on_delete=models.CASCADE, related_name='request_lines')
# #     expense_head = models.CharField(max_length=100)
# #     description = models.TextField()
# #     gl_account = models.CharField(max_length=50, null=True, blank=True)
# #     account_name = models.CharField(max_length=200, null=True, blank=True)
# #     estimated_amount = models.DecimalField(max_digits=15, decimal_places=2)
# #     approved_amount = models.DecimalField(max_digits=15, decimal_places=2, null=True, blank=True)
# #     spent_amount = models.DecimalField(max_digits=15, decimal_places=2, null=True, blank=True)
# #     supplier_no = models.CharField(max_length=50, null=True, blank=True)
# #     created_by = models.ForeignKey(User, on_delete=models.PROTECT, related_name='created_lines')
# #     created_on = models.DateTimeField(auto_now_add=True)
# #     modified_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='modified_lines')
# #     modified_on = models.DateTimeField(auto_now=True)
    
# #     def __str__(self):
# #         return f'{self.imprest.request_no} - {self.expense_head}'


# # class ImprestAttachment(models.Model):
# #     ATTACHMENT_TYPES = [
# #         ('Support', 'Support'),
# #         ('Receipt', 'Receipt'),
# #     ]
    
# #     attachment_id = models.AutoField(primary_key=True)
# #     imprest = models.ForeignKey(ImprestRequest, on_delete=models.CASCADE, related_name='attachments')
# #     file_path = models.FileField(upload_to='imprest/attachments/')
# #     attachment_type = models.CharField(max_length=10, choices=ATTACHMENT_TYPES)
# #     uploaded_by = models.ForeignKey(User, on_delete=models.PROTECT)
# #     uploaded_at = models.DateTimeField(auto_now_add=True)
# #     created_by = models.ForeignKey(User, on_delete=models.PROTECT, related_name='created_attachments')
# #     created_on = models.DateTimeField(auto_now_add=True)
# #     modified_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='modified_attachments')
# #     modified_on = models.DateTimeField(auto_now=True)


# # class ImprestApproval(models.Model):
# #     ROLE_CHOICES = [
# #         ('HOD', 'HOD'),
# #         ('FC', 'FC'),
# #         ('DG', 'DG'),
# #     ]
    
# #     DECISION_CHOICES = [
# #         ('Approved', 'Approved'),
# #         ('Rejected', 'Rejected'),
# #     ]
    
# #     approval_id = models.AutoField(primary_key=True)
# #     imprest = models.ForeignKey(ImprestRequest, on_delete=models.CASCADE, related_name='approvals')
# #     approver_role = models.CharField(max_length=5, choices=ROLE_CHOICES)
# #     approver = models.ForeignKey(User, on_delete=models.PROTECT)
# #     decision = models.CharField(max_length=10, choices=DECISION_CHOICES)
# #     comments = models.TextField(null=True, blank=True)
# #     decision_datetime = models.DateTimeField()
# #     created_by = models.ForeignKey(User, on_delete=models.PROTECT, related_name='created_approvals')
# #     created_on = models.DateTimeField(auto_now_add=True)
# #     modified_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='modified_approvals')
# #     modified_on = models.DateTimeField(auto_now=True)


# # models.py
# from django.db import models
# from django.utils import timezone

# class ImprestRequest(models.Model):
#     STATUS_CHOICES = [
#         ('Draft', 'Draft'),
#         ('Pending_HOD', 'Pending HOD'),
#         ('Pending_FC', 'Pending FC'),
#         ('Pending_DG', 'Pending DG'),
#         ('Approved', 'Approved'),
#         ('Rejected', 'Rejected'),
#         ('Surrendered', 'Surrendered'),
#         ('Closed', 'Closed'),
#     ]
    
#     imprest_id = models.AutoField(primary_key=True)
#     request_no = models.CharField(max_length=50, unique=True, blank=True)
#     user_requested = models.IntegerField()  # User ID
#     user_entered = models.IntegerField()  # User ID
#     user_surrendered = models.IntegerField(null=True, blank=True)  # User ID
#     surrender_datetime = models.DateTimeField(null=True, blank=True)
#     close_datetime = models.DateTimeField(null=True, blank=True)
#     department = models.IntegerField()  # Department ID
#     project = models.IntegerField()  # Project ID
#     purpose = models.TextField()
#     total_amount = models.DecimalField(max_digits=15, decimal_places=2, default=0)
#     status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Draft')
#     created_by = models.IntegerField()  # User ID
#     created_on = models.DateTimeField(auto_now_add=True)
#     modified_by = models.IntegerField(null=True, blank=True)  # User ID
#     modified_on = models.DateTimeField(auto_now=True)
    
#     def save(self, *args, **kwargs):
#         if not self.request_no:
#             # Auto-generate request number
#             year = timezone.now().year
#             last_id = ImprestRequest.objects.aggregate(models.Max('imprest_id'))['imprest_id__max'] or 0
#             self.request_no = f'IMP{year}{str(last_id + 1).zfill(6)}'
#         super().save(*args, **kwargs)
    
#     def __str__(self):
#         return self.request_no


# class ImprestRequestLine(models.Model):
#     breakdown_id = models.AutoField(primary_key=True)
#     imprest = models.IntegerField()  # ImprestRequest ID
#     expense_head = models.CharField(max_length=100)
#     description = models.TextField()
#     gl_account = models.CharField(max_length=50, null=True, blank=True)
#     account_name = models.CharField(max_length=200, null=True, blank=True)
#     estimated_amount = models.DecimalField(max_digits=15, decimal_places=2)
#     approved_amount = models.DecimalField(max_digits=15, decimal_places=2, null=True, blank=True)
#     spent_amount = models.DecimalField(max_digits=15, decimal_places=2, null=True, blank=True)
#     supplier_no = models.CharField(max_length=50, null=True, blank=True)
#     created_by = models.IntegerField()  # User ID
#     created_on = models.DateTimeField(auto_now_add=True)
#     modified_by = models.IntegerField(null=True, blank=True)  # User ID
#     modified_on = models.DateTimeField(auto_now=True)
    
#     def __str__(self):
#         return f'{self.imprest} - {self.expense_head}'


# class ImprestAttachment(models.Model):
#     ATTACHMENT_TYPES = [
#         ('Support', 'Support'),
#         ('Receipt', 'Receipt'),
#     ]
    
#     attachment_id = models.AutoField(primary_key=True)
#     imprest = models.IntegerField()  # ImprestRequest ID
#     file_path = models.FileField(upload_to='imprest/attachments/')
#     attachment_type = models.CharField(max_length=10, choices=ATTACHMENT_TYPES)
#     uploaded_by = models.IntegerField()  # User ID
#     uploaded_at = models.DateTimeField(auto_now_add=True)
#     created_by = models.IntegerField()  # User ID
#     created_on = models.DateTimeField(auto_now_add=True)
#     modified_by = models.IntegerField(null=True, blank=True)  # User ID
#     modified_on = models.DateTimeField(auto_now=True)


# class ImprestApproval(models.Model):
#     ROLE_CHOICES = [
#         ('HOD', 'HOD'),
#         ('FC', 'FC'),
#         ('DG', 'DG'),
#     ]
    
#     DECISION_CHOICES = [
#         ('Approved', 'Approved'),
#         ('Rejected', 'Rejected'),
#     ]
    
#     approval_id = models.AutoField(primary_key=True)
#     imprest = models.IntegerField()  # ImprestRequest ID
#     approver_role = models.CharField(max_length=5, choices=ROLE_CHOICES)
#     approver = models.IntegerField()  # User ID
#     decision = models.CharField(max_length=10, choices=DECISION_CHOICES)
#     comments = models.TextField(null=True, blank=True)
#     decision_datetime = models.DateTimeField()
#     created_by = models.IntegerField()  # User ID
#     created_on = models.DateTimeField(auto_now_add=True)
#     modified_by = models.IntegerField(null=True, blank=True)  # User ID
#     modified_on = models.DateTimeField(auto_now=True)


# models.py
from django.db import models
from django.utils import timezone


class ImprestRequest(models.Model):
    STATUS_CHOICES = [
        ('Draft', 'Draft'),
        ('Pending_HOD', 'Pending HOD'),
        ('Pending_FC', 'Pending FC'),
        ('Pending_DG', 'Pending DG'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
        ('Surrendered', 'Surrendered'),
        ('Closed', 'Closed'),
    ]
    
    imprest_id = models.AutoField(primary_key=True)
    request_no = models.CharField(max_length=50, unique=True, blank=True)
    user_requested = models.IntegerField()  # User ID
    user_entered = models.IntegerField()  # User ID
    user_surrendered = models.IntegerField(null=True, blank=True)  # User ID
    surrender_datetime = models.DateTimeField(null=True, blank=True)
    close_datetime = models.DateTimeField(null=True, blank=True)
    department = models.IntegerField()  # Department ID
    project = models.IntegerField()  # Project ID
    purpose = models.TextField()
    total_amount = models.DecimalField(max_digits=15, decimal_places=2, default=0)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Draft')
    created_by = models.IntegerField()  # User ID
    created_on = models.DateTimeField(auto_now_add=True)
    modified_by = models.IntegerField(null=True, blank=True)  # User ID
    modified_on = models.DateTimeField(auto_now=True)
    
    def save(self, *args, **kwargs):
        if not self.request_no:
            # Auto-generate request number
            year = timezone.now().year
            last_id = ImprestRequest.objects.aggregate(models.Max('imprest_id'))['imprest_id__max'] or 0
            self.request_no = f'IMP{year}{str(last_id + 1).zfill(6)}'
        super().save(*args, **kwargs)
    
    class Meta:
        db_table = 'imprest_requests'
        ordering = ['-created_on']
    
    def __str__(self):
        return self.request_no


class ImprestRequestLine(models.Model):
    breakdown_id = models.AutoField(primary_key=True)
    imprest = models.IntegerField()  # ImprestRequest ID
    expense_head = models.CharField(max_length=100)
    description = models.TextField()
    debtor_code = models.CharField(max_length=50, null=True, blank=True)
    debtor_name = models.CharField(max_length=200, null=True, blank=True)
    gl_account = models.CharField(max_length=50, null=True, blank=True)
    account_name = models.CharField(max_length=200, null=True, blank=True)
    estimated_amount = models.DecimalField(max_digits=15, decimal_places=2)
    approved_amount = models.DecimalField(max_digits=15, decimal_places=2, null=True, blank=True)
    spent_amount = models.DecimalField(max_digits=15, decimal_places=2, null=True, blank=True)
    surrendered_amount = models.DecimalField(   # 👈 ADD THIS
        max_digits=15,
        decimal_places=2,
        null=True,
        blank=True
    )

    supplier_no = models.CharField(max_length=50, null=True, blank=True)
    created_by = models.IntegerField()  # User ID
    created_on = models.DateTimeField(auto_now_add=True)
    modified_by = models.IntegerField(null=True, blank=True)  # User ID
    modified_on = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'imprest_request_lines'
        ordering = ['breakdown_id']
    
    def __str__(self):
        return f'{self.imprest} - {self.expense_head}'


class ImprestAttachment(models.Model):
    ATTACHMENT_TYPES = [
        ('Support', 'Support'),
        ('Receipt', 'Receipt'),
    ]
    
    attachment_id = models.AutoField(primary_key=True)
    imprest = models.IntegerField()  # ImprestRequest ID
    file_path = models.FileField(upload_to='imprest/attachments/')
    attachment_type = models.CharField(max_length=10, choices=ATTACHMENT_TYPES)
    uploaded_by = models.IntegerField()  # User ID
    uploaded_at = models.DateTimeField(auto_now_add=True)
    created_by = models.IntegerField()  # User ID
    created_on = models.DateTimeField(auto_now_add=True)
    modified_by = models.IntegerField(null=True, blank=True)  # User ID
    modified_on = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'imprest_attachments'
        ordering = ['-uploaded_at']


class ImprestApproval(models.Model):
    ROLE_CHOICES = [
        ('HOD', 'HOD'),
        ('FC', 'FC'),
        ('DG', 'DG'),
    ]
    
    DECISION_CHOICES = [
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    ]
    
    approval_id = models.AutoField(primary_key=True)
    imprest = models.IntegerField()  # ImprestRequest ID
    approver_role = models.CharField(max_length=5, choices=ROLE_CHOICES)
    approver = models.IntegerField()  # User ID
    decision = models.CharField(max_length=10, choices=DECISION_CHOICES)
    comments = models.TextField(null=True, blank=True)
    decision_datetime = models.DateTimeField()
    created_by = models.IntegerField()  # User ID
    created_on = models.DateTimeField(auto_now_add=True)
    modified_by = models.IntegerField(null=True, blank=True)  # User ID
    modified_on = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'imprest_approvals'
        ordering = ['-decision_datetime']