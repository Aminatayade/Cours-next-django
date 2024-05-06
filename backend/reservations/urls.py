from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


urlpatterns = [
    path('', views.ReservationView.as_view()),
    path('salles/', views.SalleView.as_view())
]
