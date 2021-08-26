from django.shortcuts import render
from .models import Book
from rest_framework import viewsets
from .seriallizers import BookSerializer
from rest_framework.authentication import TokenAuthentication

def first(request):
    books = Book.objects.all()
    return render(request, 'fist_temp.html', {'books': books})


class BookVieSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    authentication_classes =(TokenAuthentication, )


