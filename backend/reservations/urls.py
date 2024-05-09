from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'reservations', views.ReservationViewSet)

urlpatterns = [
    path('', include(router.urls)),  
    path('salles/', views.SallesView.as_view(), name='salle-detail'),
    path('salles/<int:pk>/', views.SalleView.as_view(), name='salle-detail'),
    path('equipements/', views.EquipementView.as_view(), name='equipement-detail'),
    path('restaurations/', views.RestaurationView.as_view(), name='restauration-detail'),
]
