from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from knox.views import LogoutView
from . import views

urlpatterns = [
    path('auth/register', csrf_exempt(views.registerAPIView.as_view())),
    path('auth/login', csrf_exempt(views.loginAPIView.as_view())),
    path('auth/user', csrf_exempt(views.getUserAPIView.as_view())),
    path('auth/logout', csrf_exempt(LogoutView.as_view()))
]
