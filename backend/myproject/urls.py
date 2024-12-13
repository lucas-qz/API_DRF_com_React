from django.contrib import admin
from django.urls import path, include
from dj_rest_auth.views import PasswordResetConfirmView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),

# CONFIRMAÇÃO DE CADASTRO POR E-MAIL-----------
    # Inclua as URLs do allauth
    path('accounts/', include('allauth.urls')),  # sem isso da problema ao clicar no link d confirmação  no email
#-------------------------------------------------

# REDEFINIÇÃO DE SENHA -------------------------
    # Certifique-se de que essas URLs de redefinição de senha estão incluídas:
    # se não tiver essa rota, ao acessar a rota api/auth/password/reset/ para fazer a alteração de senha da erro
    # colocando isso, o email de redefinição de senha é enviado
    path('api/auth/password/reset/confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),   

    # testamos dessas duas maneiras mas não deu certo. Só funcionou fazendo conforme a linha acima
    #path('api/auth/password/reset/confirm/', include('dj_rest_auth.urls')),   
    #path('api/auth/password/reset/confirm/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'), 
#-------------------------------------------------
]