from django.urls import path
from .views import ProjectListAPI

urlpatterns = [
    path('projects-list/', ProjectListAPI.as_view(), name='projects'),
]
