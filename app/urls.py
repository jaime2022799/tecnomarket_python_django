#configuracion de las urls
#localhost:8000/contacto --> view -> contacto.html
#localhost:8000 -> view -> home.html
#tecnomarket -> url.py -> principal
#app -> urls.play -> app

from django.urls import path
from .views import home, contacto, galeria, modificar, eliminar, registro


urlpatterns = [
    path('', home, name="home"),
    path('contacto/', contacto, name="contacto"),
    path('galeria/', galeria, name="galeria"),
    path('modificar/<id>/', modificar, name="modificar"),
    path('eliminar/<id>/', eliminar, name="eliminar"),
    path('registro/', registro, name='registro'),
]

#mvt
#model - view - template
#template --> html

#mvc
#model - view - controller
#los view serian los html