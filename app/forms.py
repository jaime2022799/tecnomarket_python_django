from django import forms
from .models import Contacto
from datetime import datetime
from django.forms import ValidationError
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .validators import MaxFileSizeValidator

class ContactoForms(forms.ModelForm):


    #nombre = forms.CharField(required=True, min_length=3, max_length=50, widget=forms.TextInput(attrs={"class":"form-control"}))
    #nombre = forms.IntegerField(min_value=1, max_value=1000)
    #nombre = forms.DateField(widget=forms.SelectDateWidget(years=range(1940, datetime.now().year+1)))
    
    foto_carnet = forms.ImageField(validators=[MaxFileSizeValidator(max_file_size=2)])
    
    def clean_correo(self):
        correo = self.cleaned_data["correo"]

        if correo.lower().endswith("duoc.cl"):
            return correo

        raise ValidationError("Debe terminar en duoc.cl")    

    class Meta:
        model = Contacto
        fields = ["nombre", "correo", "tipo_solicitud", "mensaje", "avisos", "foto_carnet"]
        


class CustomUserCreationForm(UserCreationForm):
    
    class Meta:
        model = User
        fields = ["username", "first_name", "last_name", "email", "password1", "password2"]

    
