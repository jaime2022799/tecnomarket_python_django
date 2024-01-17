from django.db import models

# Create your models here.

#marca y el producto

#id = no se nesecitan declararlos
class Marca(models.Model):
    nombre =  models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

#categoria
class Categoria(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre



class Producto(models.Model):
    nombre = models.CharField(max_length=50)
    precio = models.IntegerField()
    stock = models.IntegerField()
    descripcion = models.TextField()
    nuevo = models.BooleanField()
    fecha_fabricacion = models.DateField()
    marca = models.ForeignKey(Marca, on_delete=models.PROTECT)
    categorias = models.ManyToManyField(Categoria)
    imagen = models.ImageField(upload_to="producto", null=True)


    def __str__(self):
        return self.nombre

#NOMBRE , CORREO , TITPO DE SOLICITUD
#integer=1sugerencia, 2:reclamo,3consulta

opciones = [
    [1, "sugerencia"],
    [2, "reclamo"],
    [3, "consulta"]
]

class Contacto(models.Model):
    nombre = models.CharField(max_length=50)
    correo = models.EmailField()
    tipo_solicitud = models.IntegerField(choices=opciones)
    mensaje = models.TextField()
    avisos = models.BooleanField()
    foto_carnet = models.ImageField(upload_to="carnet", null=True, blank=True)

    def __str__(self):
        return self.nombre


#python ./manage.py makemigrations(para leer los archivos)
#python ./manage.py migrate
