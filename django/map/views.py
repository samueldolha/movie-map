from django.shortcuts import render
from django.http import HttpResponse

from map.models import Movie
from map.serializers import MovieDataSerializer
from rest_framework import generics

# Create your views here.
def index(request):
    return HttpResponse("<h1>This is the Map app homepage</h1>")

class MovieListCreate(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieDataSerializer