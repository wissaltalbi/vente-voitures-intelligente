from django.http import HttpResponse
from .models import Voiture

def test_mongo(request):
    # Crée une voiture de test
    voiture = Voiture(marque="TestMarque", modele="TestModele", prix=12345, puissance=100, carburant="Essence", annee=2023)
    voiture.save()  # Sauvegarde dans MongoDB

    # Récupère la première voiture dans la base (y compris celle qu'on vient d'ajouter)
    v = Voiture.objects.first()
    if v:
        return HttpResponse(f"MongoDB connecté ! Voiture enregistrée : {v.marque} {v.modele}")
    else:
        return HttpResponse("MongoDB non connecté ou aucune voiture trouvée.")
