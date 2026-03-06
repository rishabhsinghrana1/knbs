from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Accounts
from .serializers import AccountsSerializer


class AccountsListAPI(APIView):

    def get(self, request):

        accounts = Accounts.objects.all()[:1000]

        serializer = AccountsSerializer(accounts, many=True)

        return Response(serializer.data)
