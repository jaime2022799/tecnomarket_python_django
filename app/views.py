from django.shortcuts import render, redirect
from .models import Producto, Contacto
from .forms import ContactoForms, CustomUserCreationForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required, permission_required
from django.contrib.auth import authenticate, login
from django.core.paginator import Paginator 
from django.http import Http404

# Create your views here.
# un view es una funcion de python que encuentra el html
#view, delete , change , add
def home(request):

    #consultamos con la base de datos parea todos los productos
    productos = Producto.objects.all()
    
    data = {
        "productos":productos
    }

    return render(request, 'app/home.html', data)

def contacto(request):
    contactos = Contacto.objects.all()
    page = request.GET.get('page', 1)

    try:
        paginator = Paginator(contactos, 3)
        contactos = paginator.page(page)
    except:
        raise Http404
    

    data = {
        "form": ContactoForms(),
        "entity": contactos,
        "paginator": paginator
    }

    if request.method == 'POST':
        formulario = ContactoForms(data=request.POST,files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            messages.success(request, "felicitaciones te estaremos contactando")
        data["form"] = formulario


    return render(request, 'app/contacto.html', data)

def galeria(request):
    return render(request, 'app/galeria.html')

#@login_required
@permission_required('app.change_contacto')
def modificar(request, id):
    contacto = Contacto.objects.get(id=id)

    data = {
        "form": ContactoForms(instance=contacto)
    }

    if request.method == "POST":
        formulario = ContactoForms(data=request.POST, instance=contacto, files=request.FILES)
        if formulario.is_valid():
            formulario.save()

            messages.success(request, "Tu mensaje se ah enviado, te estaremos contactando")
            return redirect(to="contacto")

        data["form"] = formulario    


    return render(request, 'app/modificar.html', data)    
    
#@login_required
@permission_required('app.delete_contacto')
def eliminar(request, id):

    contacto = Contacto.objects.get(id=id)

    contacto.delete() 
    messages.success(request, "eliminado correctamente")   
    return redirect(to="contacto")


def registro(request):

    data = {
        'form': CustomUserCreationForm()
    }

    if request.method == 'POST':
        formulario = CustomUserCreationForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            #debo autenticar al usuario
            user = authenticate(username=formulario.cleaned_data["username"],
                password=formulario.cleaned_data["password1"]

            )
            login(request, user)
            return redirect(to="home")
        data["form"] = formulario    



    return render(request, 'registration/registro.html', data)