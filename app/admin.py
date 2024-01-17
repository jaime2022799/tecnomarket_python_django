from django.contrib import admin
from .models import Marca, Producto, Categoria, Contacto
from .forms import ContactoForms
# Register your models here.
# los modelos registrados en este archivo seran gestionados por el admin de django

class ProductoAdmin(admin.ModelAdmin):
    list_display = ["nombre", "precio", "stock", "marca"]
    search_fields = ["nombre"]
    list_filter = ["marca", "nuevo"]
    list_per_page = 2
    list_editable = ['precio']

class ContactoAdmin(admin.ModelAdmin):
    form = ContactoForms

admin.site.register(Marca)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(Categoria)
admin.site.register(Contacto, ContactoAdmin)

#cambio de los titulos del admin

admin.site.site_header = "administracion de tecnomarket"
admin.site.site_title = "TECNOMARKET"
admin.site.index_title = "Sitio Administrativo de tecnomarket"


