import { useState } from "react";

export const useErrorHandler = () => {
  const [errors, setErrors] = useState([]);

  const errorTranslations = {
    "Unable to log in with provided credentials.": "E-mail e/ou senha incorretos",
    "E-mail is not verified.": "O e-mail não foi verificado. Acesse seu e-mail e clique no link de confirmação",
    'Must include "email" and "password".': 'Deve incluir "email" e "senha"',
    "This password is too short. It must contain at least 8 characters.": "Senha deve ter pelo menos 8 caracteres",
    "This password is too common.": "Essa senha é muito comum. Use letras, números e @",
    "This password is entirely numeric.": "Esta senha é totalmente numérica",
    "Invalid value": "Link expirado ou invalido. Faça uma nova solicitação",
    "A user is already registered with this e-mail address.": "Este endereço de e-mail já está em uso",
    // Adicione mais traduções conforme necessário
    "E-mail não foi verificado.": "O e-mail não foi verificado. Acesse seu e-mail e clique no link de confirmação",
    "Esta senha é muito comum.": "Senha deve ter letras, números e @",
    "Esta senha é muito curta. Ela precisa conter pelo menos 8 caracteres.": "Senha deve ter pelo menos 8 caracteres",
    "Não foi possível realizar o login com as credenciais fornecidas.": "E-mail e/ou senha incorretos",
  };

  const translateError = (error) => {
    return errorTranslations[error] || error || "Ocorreu um erro inesperado.";
  };
 
  const handleErrors = (errorResponse) => {
    //-- tratando erros do Login
    if (
      errorResponse &&
      errorResponse.data &&
      errorResponse.data.non_field_errors
    ) {
      const translatedErrors = errorResponse.data.non_field_errors.map((err) =>
        translateError(err)
      );
      setErrors(translatedErrors);
    }
    //-- tratando erros do Register
    else if (
      errorResponse &&
      errorResponse.data &&
      errorResponse.data.password1
    ) {
      const translatedErrors = errorResponse.data.password1.map((err) =>
        translateError(err)
      );
      setErrors(translatedErrors);
    }
    //-- tratando erros do PasswordResetConfirm
    else if (
      errorResponse &&
      errorResponse.data &&
      errorResponse.data.new_password2
    ) {
      const translatedErrors = errorResponse.data.new_password2.map((err) =>
        translateError(err)
      );
      setErrors(translatedErrors);
    } 
    //-- tratando erros do login
    else if (
      errorResponse &&
      errorResponse.data &&
      errorResponse.data.password
    ) {
      const translatedErrors = errorResponse.data.password.map((err) =>
        translateError(err)
      );
      setErrors(translatedErrors);
    }    
    //-- tratando erros de Token Invalido
    else if (
      errorResponse &&
      errorResponse.data &&
      errorResponse.data.token
    ) {
      const translatedErrors = errorResponse.data.token.map((err) =>
        translateError(err)
      );
      setErrors(translatedErrors);
    } 
    //-- tratando erros de e-mail
    else if (
      errorResponse &&
      errorResponse.data &&
      errorResponse.data.email
    ) {
      const translatedErrors = errorResponse.data.email.map((err) =>
        translateError(err)
      );
      setErrors(translatedErrors);
    }     
    //-- limpar erros
    else {
      setErrors(["Erro inesperado. Verifique os dados."]);
    }

    //-- limpando erros
    if (errorResponse == "As senhas não coincidem.") {
      setErrors(["As senhas não coincidem."]);
    }
 
    //-- limpando erros
    if (errorResponse == "clear") {
      setErrors([]);
    }
  };

  return { errors, setErrors, handleErrors };
};
