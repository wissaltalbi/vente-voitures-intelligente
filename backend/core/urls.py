from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('voitures.urls')),  # <-- ici on inclut les URLs de l'app voitures sous /api/
]
