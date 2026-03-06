from django.urls import path

from .views import (

    AccountsListAPI
)

urlpatterns = [



    path('accounts-list/', AccountsListAPI.as_view()),

]
