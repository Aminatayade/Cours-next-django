# Generated by Django 5.0.4 on 2024-05-09 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reservations', '0002_auto_20240506_2139'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salle',
            name='photos',
            field=models.ImageField(upload_to='static/'),
        ),
    ]
