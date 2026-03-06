from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Project
from .serializers import ProjectSerializer

class ProjectListAPI(APIView):

    def get(self, request):

        projects = Project.objects.all()[:1000]
        serializer = ProjectSerializer(projects, many=True)

        return Response(serializer.data)
