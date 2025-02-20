from django.shortcuts import render, redirect
from .models import user
from .forms import userForm

def user_login(request):
    error = ''
    form = userForm()
    if request.method == 'POST':
        form = userForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('main')
        else:
            error = 'The form was filled out incorrectly'
    data = {'form': form, 'error': error}
    return render(request, 'login/login.html', data)