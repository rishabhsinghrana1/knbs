from django.urls import path

from .views import  ClientListAPI

urlpatterns = [

  

    path('clients-list/', ClientListAPI.as_view()),

]
