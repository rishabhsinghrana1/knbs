from rest_framework import viewsets
from .models import PaymentAuthorization
from .serializers import PaymentAuthorizationSerializer


class PaymentAuthorizationViewSet(viewsets.ModelViewSet):
    queryset = PaymentAuthorization.objects.all().order_by('-id')
    serializer_class = PaymentAuthorizationSerializer
