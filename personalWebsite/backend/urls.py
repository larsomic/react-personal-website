from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from frontend import views

app_name = 'frontend'

router = routers.DefaultRouter()
router.register(r'languages', views.ProjectLanguageView, 'languages')
router.register(r'overviews', views.ProjectOverviewView, 'overviews')
router.register(r'projects', views.ProjectView, 'projects')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', include('frontend.urls')),
]
