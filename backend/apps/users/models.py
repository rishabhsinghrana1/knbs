# from django.db import models

# # Create your models here.
# # class UserManagement(models.Model):
# #     user_name = models.CharField(max_length=100)
# #     user_email = models.EmailField(unique=True)
# #     individual_site = models.CharField(max_length=100, blank=True, null=True)
# #     department = models.CharField(max_length=100, blank=True, null=True)
# #     department_role = models.CharField(max_length=100, blank=True, null=True)
# #     status = models.CharField(max_length=20, default='Active')
# #     created_at = models.DateTimeField(auto_now_add=True)
# #     updated_at = models.DateTimeField(blank=True, null=True)

# #     def __str__(self):
# #         return self.user_name


# # class UserDelegation(models.Model):
# #     user_name = models.CharField(max_length=100)
# #     user_password = models.CharField(max_length=255)
# #     delegate_to = models.CharField(max_length=100)
# #     status = models.CharField(max_length=20, default='Scheduled')
# #     from_date = models.DateField()
# #     to_date = models.DateField()
# #     remarks = models.CharField(max_length=500, blank=True, null=True)
# #     created_at = models.DateTimeField(auto_now_add=True)

# #     def __str__(self):
# #         return f"{self.user_name} → {self.delegate_to}"


# # from django.db import models
# # from django.contrib.auth.hashers import make_password

# # class UserManagement(models.Model):
# #     user_name = models.CharField(max_length=100)
# #     user_email = models.EmailField(unique=True)
# #     user_password = models.CharField(max_length=255, blank=True, null=True)  # temporarily allow blank
# #     individual_site = models.CharField(max_length=100, blank=True, null=True)
# #     department = models.CharField(max_length=100, blank=True, null=True)
# #     department_role = models.CharField(max_length=100, blank=True, null=True)
# #     status = models.CharField(max_length=20, default='Active')
# #     created_at = models.DateTimeField(auto_now_add=True)
# #     updated_at = models.DateTimeField(blank=True, null=True)

# #     def save(self, *args, **kwargs):
# #         if self.user_password and not self.user_password.startswith('pbkdf2_'):
# #             self.user_password = make_password(self.user_password)
# #         super().save(*args, **kwargs)

# #     def __str__(self):
# #         return self.user_name

# #     class Meta:
# #         db_table = '_cplimpUserManagement'


# # class UserDelegation(models.Model):
# #     user_name = models.CharField(max_length=100)
# #     user_password = models.CharField(max_length=255, blank=True, null=True)  # temporarily allow blank
# #     delegate_to = models.CharField(max_length=100)
# #     status = models.CharField(max_length=20, default='Scheduled')
# #     from_date = models.DateField()
# #     to_date = models.DateField()
# #     remarks = models.CharField(max_length=500, blank=True, null=True)
# #     created_at = models.DateTimeField(auto_now_add=True)

# #     def save(self, *args, **kwargs):
# #         if self.user_password and not self.user_password.startswith('pbkdf2_'):
# #             self.user_password = make_password(self.user_password)
# #         super().save(*args, **kwargs)

# #     def __str__(self):
# #         return f"{self.user_name} → {self.delegate_to}"

# #     class Meta:
# #         db_table = '_cplimpUserDelegation'


# # models.py
# from django.db import models
# from django.contrib.auth.hashers import make_password, check_password
# from datetime import datetime

# class Role(models.Model):
#     """
#     Role definitions table - Add roles here
#     """
#     role_name = models.CharField(max_length=100, unique=True)
#     description = models.TextField(blank=True, null=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.role_name

#     class Meta:
#         db_table = '_cplimpRoles'


# class UserManagement(models.Model):
#     user_name = models.CharField(max_length=100)
#     user_email = models.EmailField(unique=True)
#     user_password = models.CharField(max_length=255)
#     individual_site = models.CharField(max_length=100, blank=True, null=True)
#     department = models.CharField(max_length=100, blank=True, null=True)
    
#     # Link to Role table
#     role = models.ForeignKey(Role, on_delete=models.PROTECT, related_name='users')
    
#     status = models.CharField(max_length=20, default='Active')
#     last_login = models.DateTimeField(blank=True, null=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def save(self, *args, **kwargs):
#         if self.user_password and not self.user_password.startswith('pbkdf2_'):
#             self.user_password = make_password(self.user_password)
#         super().save(*args, **kwargs)

#     def check_password(self, raw_password):
#         """Verify password"""
#         return check_password(raw_password, self.user_password)

#     def update_last_login(self):
#         """Update last login timestamp"""
#         self.last_login = datetime.now()
#         self.save(update_fields=['last_login'])

#     def __str__(self):
#         return self.user_name

#     class Meta:
#         db_table = '_cplimpUserManagement'


# class UserDelegation(models.Model):
#     user_name = models.CharField(max_length=100)
#     user_password = models.CharField(max_length=255, blank=True, null=True)
#     delegate_to = models.CharField(max_length=100)
#     status = models.CharField(max_length=20, default='Scheduled')
#     from_date = models.DateField()
#     to_date = models.DateField()
#     remarks = models.CharField(max_length=500, blank=True, null=True)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def save(self, *args, **kwargs):
#         if self.user_password and not self.user_password.startswith('pbkdf2_'):
#             self.user_password = make_password(self.user_password)
#         super().save(*args, **kwargs)

#     def __str__(self):
#         return f"{self.user_name} → {self.delegate_to}"

#     class Meta:
#         db_table = '_cplimpUserDelegation'


# models.py
from django.db import models
from django.contrib.auth.hashers import make_password


class Role(models.Model):
    """
    Role definitions for the system
    """
    ROLE_CHOICES = [
        ('Admin', 'Admin'),
        ('User', 'User'),
        ('Finance', 'Finance'),
        ('Finance Manager', 'Finance Manager'),
        ('Department Manager', 'Department Manager'),
        ('Director', 'Director'),
        ('Managing Director', 'Managing Director'),
        ('Staff', 'Staff'),
        ('Head of Department', 'Head of Department'),
        ('Financial Controller', 'Financial Controller'),
        ('Director General', 'Director General'),
    ]
    
    role_name = models.CharField(max_length=100, unique=True, choices=ROLE_CHOICES)
    description = models.TextField(blank=True, null=True)
    
    # Permissions
    can_define_users = models.BooleanField(default=False)
    can_delegate = models.BooleanField(default=False)
    can_create_imprest = models.BooleanField(default=False)
    can_surrender_own = models.BooleanField(default=False)
    can_create_department_imprest = models.BooleanField(default=False)
    can_create_payment_transfers = models.BooleanField(default=False)
    can_approve_payment_transfers = models.BooleanField(default=False)
    can_approve_documents = models.BooleanField(default=False)
    can_enter_surrenders = models.BooleanField(default=False)
    can_update_surrenders = models.BooleanField(default=False)
    can_approve_surrenders = models.BooleanField(default=False)
    can_access_all_documents = models.BooleanField(default=False)
    can_access_department_documents = models.BooleanField(default=False)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.role_name

    class Meta:
        db_table = '_cplimpRoles'


class UserManagement(models.Model):
    """
    User management with role-based access
    """
    STATUS_CHOICES = [
        ('Active', 'Active'),
        ('Inactive', 'Inactive'),
        ('Suspended', 'Suspended'),
    ]
    
    user_name = models.CharField(max_length=100)
    user_email = models.EmailField(unique=True)
    user_password = models.CharField(max_length=255)
    individual_role = models.CharField(max_length=100, blank=True, null=True)
    department = models.CharField(max_length=100, blank=True, null=True)
    
    # Role relationship
    role = models.ForeignKey(
        Role, 
        on_delete=models.PROTECT, 
        related_name='users',
        null=True,
        blank=True
    )
    
    # Keep department_role for backward compatibility
    department_role = models.CharField(max_length=100, blank=True, null=True)
    
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Active')
    last_login = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        # Hash password if it's not already hashed
        if self.user_password and not self.user_password.startswith('pbkdf2_'):
            self.user_password = make_password(self.user_password)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user_name} ({self.user_email})"

    class Meta:
        db_table = '_cplimpUserManagement'
        indexes = [
            models.Index(fields=['user_email']),
            models.Index(fields=['status']),
        ]


class UserDelegation(models.Model):
    """
    User delegation management
    """
    STATUS_CHOICES = [
        ('Scheduled', 'Scheduled'),
        ('Active', 'Active'),
        ('Expired', 'Expired'),
        ('Cancelled', 'Cancelled'),
    ]
    
    # user = models.ForeignKey(
    #     UserManagement,
    #     on_delete=models.CASCADE,
    #     related_name='delegations_made'
    # )
    delegate_to = models.ForeignKey(
        UserManagement,
        on_delete=models.CASCADE,
        related_name='delegations_received'
    )
    user_name = models.CharField(max_length=100)
    user_email = models.EmailField(unique=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Scheduled')
    from_date = models.DateField()
    to_date = models.DateField()
    remarks = models.CharField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.user_name} → {self.delegate_to.user_name} ({self.status})"

    class Meta:
        db_table = '_cplimpUserDelegation'
        indexes = [
            models.Index(fields=['from_date', 'to_date']),
            models.Index(fields=['status']),
        ]