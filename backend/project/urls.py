"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/v1/users/', include('apps.users.urls')),
    path('api/v1/project/', include('apps.projects.urls')),
    path('api/v1/client/', include('apps.clients.urls')),
    path('api/v1/account/', include('apps.account.urls')),
path('api/v1/imprest/', include('apps.imprest.urls')),
path('api/v1/payment/', include('apps.payment.urls')),
path('api/v1/department/', include('apps.department.urls'))
    # path('api/v1/imprest/', include('apps.imprest.urls')),
]