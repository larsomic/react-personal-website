from rest_framework import serializers
from .models import ProjectLanguage, ProjectOverview, Project

class ProjectLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectLanguage
        fields = ['project_language']

class ProjectOverviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectOverview
        fields = ['project_name', 'language_category']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['project_title', 'project_content', 'project_published', 'project_overview']