from django.db import models
from users.models import User

class Salle(models.Model):
    nom = models.CharField(max_length=100)
    capacite = models.IntegerField()
    description = models.TextField()
    photos = models.ImageField(upload_to='photos_salles/')
    categorie = models.CharField(max_length=100)
    disponibilite = models.BooleanField(default=True)

class Reservation(models.Model):
    client = models.ForeignKey(User, on_delete=models.CASCADE)
    salle = models.ForeignKey(Salle, on_delete=models.CASCADE)
    date_reservation = models.DateField()
    duree = models.IntegerField()
    moyen_paiement = models.CharField(max_length=100)

class Equipement(models.Model):
    nom = models.CharField(max_length=100)
    details = models.TextField()
    prix = models.DecimalField(max_digits=6, decimal_places=2)
    disponibilite = models.BooleanField(default=True)

class Restauration(models.Model):
    nom = models.CharField(max_length=100)
    details = models.TextField()
    prix = models.DecimalField(max_digits=6, decimal_places=2)
    disponibilite = models.BooleanField(default=True)

class ReservationEquipement(models.Model):
    reservation = models.ForeignKey(Reservation, on_delete=models.CASCADE)
    equipement = models.ForeignKey(Equipement, on_delete=models.CASCADE)
    quantite = models.IntegerField()

class ReservationRestauration(models.Model):
    reservation = models.ForeignKey(Reservation, on_delete=models.CASCADE)
    restauration = models.ForeignKey(Restauration, on_delete=models.CASCADE)
    quantite = models.IntegerField()