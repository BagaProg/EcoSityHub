from .models import user
from django.forms import ModelForm, TextInput, PasswordInput, EmailInput

class userForm(ModelForm):
    class Meta:
        model = user
        fields = ['username', 'password', 'email']

        #атрибуты для полей формы
        widgets = {
            'username': TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Username'
            }),
            'password': TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'password'
            }),
            'email': TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'email'
            })
        }