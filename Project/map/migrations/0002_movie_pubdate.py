# Generated by Django 2.1.5 on 2019-01-12 21:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='pubDate',
            field=models.CharField(default='', max_length=100),
        ),
    ]
