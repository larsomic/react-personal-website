from django.shortcuts import render
from rest_framework import viewsets

from .serializers import ProjectLanguageSerializer, ProjectOverviewSerializer, ProjectSerializer
from .models import ProjectLanguage, ProjectOverview, Project

class ProjectLanguageView(viewsets.ModelViewSet):
    serializer_class = ProjectLanguageSerializer
    queryset = ProjectLanguage.objects.all()

class ProjectOverviewView(viewsets.ModelViewSet):
    serializer_class = ProjectOverviewSerializer
    queryset = ProjectOverview.objects.all()

class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()