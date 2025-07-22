from django.urls import path
from .views import test_mongo

urlpatterns = [
    path('test-mongo/', test_mongo),
    # ... autres routes API ...
]
