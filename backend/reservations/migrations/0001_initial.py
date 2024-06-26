# Generated by Django 3.2.18 on 2024-05-05 20:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0005_auto_20240505_1810'),
    ]

    operations = [
        migrations.CreateModel(
            name='Equipement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('details', models.TextField()),
                ('prix', models.DecimalField(decimal_places=2, max_digits=6)),
                ('disponibilite', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_reservation', models.DateField()),
                ('duree', models.IntegerField()),
                ('moyen_paiement', models.CharField(max_length=100)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
        ),
        migrations.CreateModel(
            name='Restauration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('details', models.TextField()),
                ('prix', models.DecimalField(decimal_places=2, max_digits=6)),
                ('disponibilite', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Salle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('capacite', models.IntegerField()),
                ('description', models.TextField()),
                ('photos', models.ImageField(upload_to='photos_salles/')),
                ('categorie', models.CharField(max_length=100)),
                ('disponibilite', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='ReservationRestauration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantite', models.IntegerField()),
                ('reservation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reservations.reservation')),
                ('restauration', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reservations.restauration')),
            ],
        ),
        migrations.CreateModel(
            name='ReservationEquipement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantite', models.IntegerField()),
                ('equipement', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reservations.equipement')),
                ('reservation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reservations.reservation')),
            ],
        ),
        migrations.AddField(
            model_name='reservation',
            name='salle',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reservations.salle'),
        ),
    ]
