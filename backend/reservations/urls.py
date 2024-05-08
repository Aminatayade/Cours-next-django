from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EquipementViewSet, ReservationView, SalleView,RestaurationViewSet,ReservationEquipementViewSet,ReservationRestaurationViewSet


# Initialiser le router
router = DefaultRouter()
# Enregistrer les vues avec le router pour Equipement
router.register(r'equipement', EquipementViewSet)
router = DefaultRouter()
router.register(r'restauration', RestaurationViewSet)

router.register(r'reservation-equipements', ReservationEquipementViewSet)
router = DefaultRouter()
router.register(r'reservation-restaurations', ReservationRestaurationViewSet)


urlpatterns = [
    path('reservations/', ReservationView.as_view(), name='reservations'),
    path('salles/', SalleView.as_view(), name='salles'),
    # Inclure les URLs enregistrées dans le router
    path('', include(router.urls)),
    path('', include(router.urls)),
    path('',include (router.urls))
]
