from rest_framework import serializers
from .models import Salle, Reservation, Equipement, Restauration, ReservationEquipement, ReservationRestauration
from rest_framework import serializers

class SalleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salle
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'

class EquipementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipement
        fields = '__all__'

class RestaurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restauration
        fields = '__all__'

class ReservationEquipementSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservationEquipement
        fields = '__all__'

class ReservationRestaurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReservationRestauration
        fields = '__all__'
