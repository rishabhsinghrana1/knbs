# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import UserManagementViewSet, UserDelegationViewSet
# from . import views

# router = DefaultRouter()
# router.register(r'management', UserManagementViewSet, basename='user-management')
# router.register(r'delegation', UserDelegationViewSet, basename='user-delegation')

# urlpatterns = [
#     path('', include(router.urls)),
#      # Authentication endpoints
#     path('auth/login/', views.login_view, name='login'),
#     path('auth/verify/', views.verify_session, name='verify_session'),

#     # Role endpoints
#     path('roles/', views.get_roles, name='get_roles'),
# ]

# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Router for ViewSets
router = DefaultRouter()
router.register(r'roles', views.RoleViewSet, basename='role')
router.register(r'users', views.UserManagementViewSet, basename='user')
router.register(r'delegations', views.UserDelegationViewSet, basename='delegation')

urlpatterns = [
    # Authentication endpoints
    path('auth/login/', views.login_view, name='login'),
    path('auth/logout/', views.logout_view, name='logout'),
    path('auth/verify/', views.verify_token, name='verify-token'),
    
    # Include router URLs
    path('', include(router.urls)),
]