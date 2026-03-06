from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Client
from .serializers import ClientSerializer


class ClientListAPI(APIView):

    def get(self, request):

        clients = Client.objects.all()[:1000]

        serializer = ClientSerializer(clients, many=True)

        return Response(serializer.data)
