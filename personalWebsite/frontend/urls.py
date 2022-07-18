from django.urls import path
from .views import index

app_name = 'frontend'

urlpatterns = [
    path('', index, name='home'),
    path('myresume', index, name='myresume'),
    path('mywork', index, name='mywork'),
    path('aboutme', index, name='aboutme'),
    path('contactme', index, name='contactme'),
    path('underconstruction', index, name='underconstruction'),
]