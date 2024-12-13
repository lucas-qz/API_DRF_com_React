import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../../utils/api";
import { Link, useNavigate } from "react-router-dom"; //redirecionar com mensagem
//---- TRATAMENTO DE ERROS ----------------------
import { useErrorHandler } from "../../utils/errorHandler";
//------------------------------------------------

const PasswordResetConfirm = () => {
  const [searchParams] = useSearchParams();
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate(); //redirecionar com mensagem
  //---- TRATAMENTO DE ERROS ----------------------
  const { errors, handleErrors } = useErrorHandler();
  //------------------------------------------------

  const handlePasswordResetConfirm = async (e) => {
    e.preventDefault();
    if (newPassword1 !== newPassword2) {
      handleErrors("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    
    try {
      await axios.post("/auth/password/reset/confirm/", {
        uid,
        token,
        new_password1: newPassword1,
        new_password2: newPassword2,
      });

      const successMessage =
        "Senha redefinida com sucesso! Você pode fazer login agora."; //redirecionar com mensagem
      setMessage(successMessage); //redirecionar com mensagem
      handleErrors("clear");
      setLoading(false);
      setNewPassword1("");
      setNewPassword2("");      
      navigate("/login", { state: { mensagem: successMessage } }); //redirecionar com mensagem
    } catch (error) {
      //---- TRATAMENTO DE ERROS ----------------------
      setMessage("");
      handleErrors(error.response);
      setLoading(false);      
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
                      <h1 className="h4 text-gray-900 mb-2">Redefinir Senha</h1>
                      <p className="mb-4">Basta digitar a nova senha abaixo!</p>
                    </div>
                    <form
                      className="user"
                      onSubmit={handlePasswordResetConfirm}>
                      <div className="form-group">
                        <input
                          type="password"
                          value={newPassword1}
                          onChange={(e) => setNewPassword1(e.target.value)}
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          aria-describedby="emailHelp"
                          placeholder="Nova Senha"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          value={newPassword2}
                          onChange={(e) => setNewPassword2(e.target.value)}
                          className="form-control form-control-user"
                          id="exampleRepeatPassword"
                          aria-describedby="emailHelp"
                          placeholder="Confirme a Nova Senha"
                          required
                        />
                      </div>

                      {!loading && (
                    <input
                      type="submit"
                      className="btn btn-primary btn-user btn-block"
                      value="Cadastrar"
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

                    {/*--- TRATAMENTO DE ERROS -----------------------*/}
                    {errors.length > 0 && (
                      <div className="dv-1 dv-2">
                        <ul>
                          {message && <li>{message}</li>}
                          {errors.map((messag, index) => (
                            <li key={index}>{messag}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <hr />
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

export default PasswordResetConfirm;
