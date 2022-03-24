# Generated by Django 3.2.11 on 2022-02-13 21:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import post.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('slug', models.SlugField()),
                ('image', models.ImageField(blank=True, default='null', null=True, upload_to=post.models.upload_to)),
                ('excerpt', models.CharField(max_length=150)),
                ('content', models.TextField()),
                ('updated_by', models.BigIntegerField(default=0)),
                ('updated_date', models.DateTimeField(auto_now=True, null=True)),
                ('created_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('published', 'Published')], default='published', max_length=10)),
                ('category', models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, to='post.category')),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blog_posts', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-created_date'],
            },
        ),
        migrations.AddIndex(
            model_name='blogpost',
            index=models.Index(fields=['slug'], name='post_blogpo_slug_d3e28d_idx'),
        ),
    ]