import React, { useState, useEffect } from "react";
import axios from "../../utils/api";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; //redirecionar com mensagem
//---- TRATAMENTO DE ERROS ----------------------
import { useErrorHandler } from "../../utils/errorHandler";
//------------------------------------------------

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //---- TRATAMENTO DE ERROS ----------------------
  const { errors, handleErrors } = useErrorHandler();
  //------------------------------------------------

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login/", { email, password });
      localStorage.setItem("authToken", response.data.key);
      window.location.href = "/home";
    } catch (error) {
      //---- TRATAMENTO DE ERROS ----------------------
      //console.log("-->:", error.response.data.non_field_errors);
      handleErrors(error.response);
      //------------------------------------------------
    }
  };

  const location = useLocation();
  const mensagem = location.state?.mensagem;

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
                <div className="col-lg-6 d-none d-lg-block bg-login-image  background1-div"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Login</h1>
                    </div>
                    <form className="user" onSubmit={handleLogin}>
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
                      <div className="form-group">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Sua Senha"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block">
                        Login
                      </button>
                    </form>
                    {/*---   //redirecionar com mensagem --------*/}
                    {mensagem && (
                      <div className="dv-1 dv-3">
                        <ul>
                          <li> {mensagem} </li>
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

                    <hr />

                    <div className="text-center small">
                      Não tem uma conta? <Link to="/">Criar conta</Link>
                    </div>

                    <div className="text-center small">
                      Esqueceu sua senha?{" "}
                      <Link to="/password-reset">Redefinir senha</Link>
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

export default Login;
