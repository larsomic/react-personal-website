from django.contrib import admin
from .models import ProjectLanguage, ProjectOverview, Project

class ProjectLanguageAdmin(admin.ModelAdmin):
    list_display = ['project_language']

class ProjectOverviewAdmin(admin.ModelAdmin):
    list_display = ['project_name', 'language_category']

class ProjectAdmin(admin.ModelAdmin):
    list_display = ['project_title', 'project_content', 'project_published', 'project_overview']

# Register your models here.

admin.site.register(ProjectLanguage, ProjectLanguageAdmin)
admin.site.register(ProjectOverview, ProjectOverviewAdmin)
admin.site.register(Project, ProjectAdmin)