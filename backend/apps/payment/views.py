from rest_framework import viewsets
from .models import PaymentAuthorization
from .serializers import PaymentAuthorizationSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import PaymentAuthorization
from .serializers import PaymentAuthorizationSerializer

class PaymentAuthorizationViewSet(viewsets.ModelViewSet):
    queryset = PaymentAuthorization.objects.all().order_by('-id')
    serializer_class = PaymentAuthorizationSerializer





class PaymentAuthorizationViewSet(viewsets.ModelViewSet):
    queryset = PaymentAuthorization.objects.all().order_by('-id')
    serializer_class = PaymentAuthorizationSerializer

    @action(detail=True, methods=['post'], url_path='process')
    def process(self, request, pk=None):
        try:
            payment = self.get_object()
            if payment.status != 'FinanceApproved':
                return Response(
                    {'error': f'Cannot process. Status is {payment.status}, expected FinanceApproved.'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            payment.status = 'Completed'
            payment.save()
            serializer = self.get_serializer(payment)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)