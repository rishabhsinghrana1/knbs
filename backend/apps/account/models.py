from django.db import models


class Accounts(models.Model):

    AccountLink = models.AutoField(primary_key=True)

    Account = models.CharField(max_length=100)
    Master_Sub_Account = models.CharField(max_length=100)
    Description = models.CharField(max_length=255)

    AccountLevel = models.IntegerField(null=True, blank=True)
    iAccountType = models.IntegerField(null=True, blank=True)

    Dept = models.CharField(max_length=50, null=True, blank=True)
    Brch = models.CharField(max_length=50, null=True, blank=True)

    ActiveAccount = models.BooleanField(default=True)

    dAccountsTimeStamp = models.DateTimeField(null=True, blank=True)

    fBankStatementBalance = models.DecimalField(
        max_digits=18, decimal_places=2, null=True, blank=True
    )

    cBankName = models.CharField(max_length=255, null=True, blank=True)
    cBankAccountNumber = models.CharField(max_length=100, null=True, blank=True)

    Accounts_dCreatedDate = models.DateTimeField(null=True, blank=True)
    Accounts_dModifiedDate = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = "Accounts"
        managed = False   # Existing table
