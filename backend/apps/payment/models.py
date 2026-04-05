from django.db import models
from django.utils import timezone


class PaymentAuthorization(models.Model):

    STATUS_CHOICES = [
        ('Draft', 'Draft'),
        ('Submitted', 'Submitted'),
        ('FinanceApproved', 'FinanceApproved'),
        ('Completed', 'Completed'),
        ('Cancelled', 'Cancelled'),
    ]

    payment_number = models.CharField(max_length=20, unique=True, blank=True)
    bank_in_sage = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Draft')
    created_at = models.DateTimeField(default=timezone.now)

    def save(self, *args, **kwargs):
        if not self.payment_number:
            last = PaymentAuthorization.objects.order_by('-id').first()
            if last:
                last_no = int(last.payment_number.replace('PA', ''))
                new_no = last_no + 1
            else:
                new_no = 1

            self.payment_number = f'PA{str(new_no).zfill(5)}'

        super().save(*args, **kwargs)

    def __str__(self):
        return self.payment_number


class PaymentAuthorizationLine(models.Model):
    payment = models.ForeignKey(
        PaymentAuthorization,
        related_name='lines',
        on_delete=models.CASCADE
    )

    debtor_code = models.CharField(max_length=50)
    debtor_name = models.CharField(max_length=255)
    gl_account = models.CharField(max_length=50)
    account_name = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=15, decimal_places=2)
    request_no = models.CharField(max_length=100)
    request_line = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.debtor_name} - {self.amount}"
