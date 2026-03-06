from django.db import models

class Project(models.Model):

    ProjectLink = models.CharField(max_length=255, primary_key=True)
    ProjectCode = models.CharField(max_length=100)
    ProjectName = models.CharField(max_length=255)
    ActiveProject = models.BooleanField()
    ProjectDescription = models.TextField(null=True, blank=True)
    MasterSubProject = models.CharField(max_length=100, null=True, blank=True)
    ProjectLevel = models.IntegerField()
    SubProjectOfLink = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        db_table = "Project"
        managed = False   # Table already exists
