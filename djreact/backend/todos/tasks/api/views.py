from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers import taskSerializer
from tasks.models import Task


class taskAPIView(viewsets.ModelViewSet):
    serializer_class = taskSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return self.request.user.tasks.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
