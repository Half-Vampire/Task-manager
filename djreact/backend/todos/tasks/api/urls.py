from rest_framework import routers
from .views import taskAPIView

router = routers.DefaultRouter()
router.register('api/tasks', taskAPIView, basename='tasks')

urlpatterns = router.urls
