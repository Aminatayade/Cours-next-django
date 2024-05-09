from rest_framework.decorators import action
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status, viewsets, views
from .models import Reservation, Salle,Equipement,Restauration,ReservationEquipement,ReservationRestauration
from .serializers import ReservationSerializer, SalleSerializer,EquipementSerializer,RestaurationSerializer,ReservationEquipementSerializer,ReservationRestaurationSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    @action(detail=True, methods=['post', 'get'])
    def add_equipement(self, request, pk=None):
        reservation = self.get_object()
        serializer = ReservationEquipementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(reservation=reservation)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post', 'get'])
    def add_restauration(self, request, pk=None):
        reservation = self.get_object()
        serializer = ReservationRestaurationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(reservation=reservation)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SallesView(generics.ListCreateAPIView):
     queryset = Salle.objects.all()
     serializer_class = SalleSerializer

class SalleView(generics.RetrieveUpdateAPIView):
     queryset = Salle.objects.all()
     serializer_class = SalleSerializer
    
class EquipementView(generics.ListCreateAPIView):
     queryset = Equipement.objects.all()
     serializer_class = EquipementSerializer

class RestaurationView(generics.ListCreateAPIView):
     queryset = Restauration.objects.all()
     serializer_class = RestaurationSerializer

   
