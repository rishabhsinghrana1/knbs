from rest_framework.routers import DefaultRouter
from .views import PaymentAuthorizationViewSet

router = DefaultRouter()
router.register(r'payment-authorization', PaymentAuthorizationViewSet)

urlpatterns = router.urls

