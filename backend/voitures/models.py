from mongoengine import Document, StringField, IntField, DecimalField

class Voiture(Document):
    marque = StringField(required=True, max_length=100)
    modele = StringField(required=True, max_length=100)
    prix = DecimalField(required=True, precision=2)
    puissance = IntField(required=True)
    carburant = StringField(required=True, max_length=50)
    annee = IntField(required=True)
