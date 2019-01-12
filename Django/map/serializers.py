from rest_framework import serializers
from map.models import Movie

class MovieDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'