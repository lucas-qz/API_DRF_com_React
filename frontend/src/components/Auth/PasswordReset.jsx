import React, { useState, useEffect } from "react";
import axios from "../../utils/api";
import { Link } from "react-router-dom";
//---- TRATAMENTO DE ERROS ----------------------
import { useErrorHandler } from "../../utils/errorHandler";
//------------------------------------------------

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(null);
  //---- TRATAMENTO DE ERROS ----------------------
  const { errors, handleErrors } = useErrorHandler();
  //------------------------------------------------

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/auth/password/reset/", { email });
      setMessage(
        "Email de recuperação enviado. Verifique sua caixa de entrada."
      );
      setLoading(false);
      setEmail("");
      handleErrors("clear");
    } catch (error) {
      setLoading(false);
      //---- TRATAMENTO DE ERROS ----------------------
      //console.log("-->:", error.response.data.non_field_errors);
      handleErrors(error.response);
      //------------------------------------------------
    }
  };

  // customizar o body para esse componente apenas
  useEffect(() => {
    // Adiciona o estilo ao body quando o componente for montado
    document.body.style.backgroundColor = "#4e73df";
    document.body.style.backgroundImage =
      "linear-gradient(226deg, #344986 10%, #5578df 100%)";
    document.body.style.backgroundSize = "cover";

    // Remove o estilo quando o componente for desmontado
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
    };
  }, []); // O array vazio garante que o efeito seja executado apenas uma vez

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-password-image  background3-div"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-2">
                        Esqueceu sua senha?
                      </h1>
                      <p className="mb-4">
                        Basta digitar seu endereço de e-mail abaixo e nós lhe
                        enviaremos um link para redefinir sua senha!
                      </p>
                    </div>
                    <form className="user" onSubmit={handlePasswordReset}>
                      <div className="form-group">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Seu Email"
                          required
                        />
                      </div>
                      {!loading && (
                        <input
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                          value="Redefinir Senha"
                        />
                      )}
                      {loading && (
                        <input
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                          disabled
                          value="Aguarde..."
                        />
                      )}
                    </form>
                    <hr />
                    {/*---   //redirecionar com mensagem --------*/}
                    {message && (
                      <div className="dv-1 dv-3">
                        <ul>
                          <li> {message} </li>
                        </ul>
                      </div>
                    )}

                    {/*--- TRATAMENTO DE ERROS -----------------------*/}
                    {errors.length > 0 && (
                      <div className="dv-1 dv-2">
                        <ul>
                          {errors.map((messag, index) => (
                            <li key={index}>{messag}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="text-center small">
                      Não tem uma conta? <Link to="/">Criar conta</Link>
                    </div>

                    <div className="text-center small">
                      Já tem uma conta? <Link to="/login">Acesse!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
