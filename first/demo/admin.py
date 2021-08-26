from django.contrib import admin
from .models import Book, BookNumber, Character, Author


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    fields = ['title', 'description', 'price', 'is_published', 'published']


admin.site.register(BookNumber)
admin.site.register(Character)
admin.site.register(Author)
