from django.db import models
from django.db.models import Max

class Department(models.Model):
    department_id = models.AutoField(primary_key=True)
    department_code = models.CharField(max_length=20, unique=True, blank=True)
    department_name = models.CharField(max_length=150)
    is_active = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True)
    modified_on = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "Departments"

    def save(self, *args, **kwargs):

        if not self.department_code:
            last_code = Department.objects.aggregate(
                Max('department_code')
            )['department_code__max']

            if last_code:
                last_number = int(last_code.replace('DEP', ''))
                new_number = last_number + 1
            else:
                new_number = 1

            self.department_code = f"DEP{new_number:04d}"

        super().save(*args, **kwargs)

    def __str__(self):
        return self.department_name