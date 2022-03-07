from django.db import models
from django.utils import timezone

class ProjectLanguage(models.Model):
        project_language = models.CharField(max_length=200)
        language_slug = models.CharField(max_length=200)

        class Meta:
                verbose_name_plural = "Languages"

        def __str__(self):
                return self.project_language
        
class ProjectOverview(models.Model):
        project_name = models.CharField(max_length=200)
        language_category = models.ForeignKey(ProjectLanguage, default=1, verbose_name="Language", on_delete=models.SET_DEFAULT)
        project_summary = models.CharField(max_length=200)
        
        class Meta:
                verbose_name_plural = "Projects"

        def __str__(self):
                return self.project_name
        
class Project(models.Model):
        project_title = models.CharField(max_length = 200)
        project_content = models.TextField()
        project_published = models.DateTimeField("date published", auto_now_add=True)
        project_overview = models.ForeignKey(ProjectOverview, default=1, verbose_name = "Project Overview", on_delete=models.SET_DEFAULT)
        project_slug = models.CharField(max_length=200, default=1)

        def __str__(self):
                return self.tutorial_title
