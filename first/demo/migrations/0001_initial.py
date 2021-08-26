# Generated by Django 3.2.6 on 2021-08-21 17:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BookNumber',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isbn_10', models.CharField(blank=True, max_length=10)),
                ('isbn_13', models.CharField(blank=True, max_length=13)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=36, unique=True)),
                ('description', models.TextField(blank=True, max_length=256)),
                ('price', models.DecimalField(decimal_places=2, default=0, max_digits=3)),
                ('published', models.DateField(blank=True, default=None, null=True)),
                ('is_published', models.BooleanField(default=False)),
                ('cover', models.FileField(blank=True, upload_to='covers/')),
                ('number', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='demo.booknumber')),
            ],
        ),
    ]
