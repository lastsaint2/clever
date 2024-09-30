from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('', include('portapp.urls')),
    path('admin/', admin.site.urls),
    
]
