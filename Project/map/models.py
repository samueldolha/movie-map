from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    pubYear = models.IntegerField(default=0)
    genre = models.CharField(max_length=30, default='')


