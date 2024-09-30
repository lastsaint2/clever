from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework.generics import *
class Contactview(viewsets.ModelViewSet):
    queryset=Contact.objects.all()
    serializer_class=UserSerializer
# Create your views here.
