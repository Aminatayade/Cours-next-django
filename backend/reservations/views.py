from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status, viewsets, views
from .models import Reservation, Salle
from .serializers import ReservationSerializer, SalleSerializer

class ReservationView(views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = ReservationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SalleView(views.APIView):
    def get(self, request, *args, **kwargs):
        salles = Salle.objects.all()
        serializer = SalleSerializer(salles, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = SalleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


