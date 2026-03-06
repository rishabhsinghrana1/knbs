from django.db import models


class Client(models.Model):

    DCLink = models.AutoField(primary_key=True)
    Account = models.CharField(max_length=100)
    Name = models.CharField(max_length=255)
    Title = models.CharField(max_length=50, null=True, blank=True)
    Init = models.CharField(max_length=50, null=True, blank=True)
    Contact_Person = models.CharField(max_length=255, null=True, blank=True)

    Telephone = models.CharField(max_length=50, null=True, blank=True)
    Telephone2 = models.CharField(max_length=50, null=True, blank=True)

    EMail = models.EmailField(null=True, blank=True)

    Credit_Limit = models.DecimalField(max_digits=18, decimal_places=2, null=True, blank=True)

    On_Hold = models.BooleanField(default=False)

    DCBalance = models.DecimalField(max_digits=18, decimal_places=2, null=True, blank=True)

    dTimeStamp = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = "Client"
        managed = False   # Existing table
