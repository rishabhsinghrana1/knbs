from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ImprestRequestViewSet

router = DefaultRouter()
router.register(r'', ImprestRequestViewSet, basename='imprest')

urlpatterns = [
    path('', include(router.urls)),
]