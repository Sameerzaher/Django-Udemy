from django.urls import path, include
from rest_framework import routers
from .views import BookVieSet
router = routers.DefaultRouter()
router.register('books',BookVieSet)
urlpatterns = [
    path('', include(router.urls)),
]