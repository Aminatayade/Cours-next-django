from rest_framework import status, views
from rest_framework.response import Response
from .serializers import UserSerializer
from django.contrib.auth.hashers import make_password
from django.shortcuts import get_object_or_404
from .models import User
from django.db.models import Q
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import views

class RegisterView(views.APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(views.APIView):
    def post(self, request):
        login = request.data.get('email')
        password = request.data.get('password')

        print(login, password)

        try:
            user = User.objects.get(Q(email=login) | Q(username=login))
        except User.DoesNotExist:
            return JsonResponse({'error': "Login incorrect"}, status=401)

        if not user.check_password(password):
            return JsonResponse({'error': 'Mot de passe incorrect'}, status=401)

        response_data = {
            'user': {
                'id': user.id,
                'email': user.email,
                'username': user.username,
            },
            'message': 'Utilisateur connecté avec succès'
        }

        return JsonResponse(response_data, status=200)
