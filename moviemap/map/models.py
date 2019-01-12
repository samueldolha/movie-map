from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    pubDate = models.CharField(max_length=100, default='')
    rating = models.CharField(max_length=5)


