# Generated by Django 3.2.12 on 2022-03-24 21:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0002_auto_20220324_1936'),
    ]

    operations = [
        migrations.CreateModel(
            name='NumberOfSearch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('departure', models.CharField(default='null', max_length=200, null=True)),
                ('arrival', models.CharField(default='null', max_length=200, null=True)),
                ('departure_date', models.CharField(default='null', max_length=200, null=True)),
                ('arrival_date', models.CharField(default='null', max_length=200, null=True)),
                ('train_number', models.CharField(default='null', max_length=200, null=True)),
                ('number_of_search', models.IntegerField(default=0)),
            ],
        ),
    ]