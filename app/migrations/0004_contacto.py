# Generated by Django 3.1.1 on 2020-10-08 23:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_producto_imagen'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contacto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('correo', models.EmailField(max_length=254)),
                ('tipo_solicitud', models.IntegerField(choices=[[1, 'sugerencia'], [2, 'reclamo'], [3, 'consulta']])),
                ('mensaje', models.TextField()),
                ('avisos', models.BooleanField()),
            ],
        ),
    ]
