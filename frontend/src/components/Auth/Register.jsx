import React, { useState, useEffect } from "react";
import axios from "../../utils/api";
import { Link, useNavigate } from "react-router-dom"; //redirecionar com mensagem
//---- TRATAMENTO DE ERROS ----------------------
import { useErrorHandler } from "../../utils/errorHandler";
//------------------------------------------------

const Register = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate(); //redirecionar com mensagem
  //---- TRATAMENTO DE ERROS ----------------------
  const { errors, handleErrors } = useErrorHandler();
  //------------------------------------------------

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      handleErrors("As senhas não coincidem.");
      return;
    }
    
    setLoading(true);

    try {
      await axios.post("/auth/registration/", {
        email,
        password1,
        password2,
      });
      const successMessage =
        "Registro bem-sucedido! Verifique seu email para confirmar."; //redirecionar com mensagem
      setMessage(successMessage); //redirecionar com mensagem
      handleErrors("clear");
      setLoading(false);
      setEmail("");
      setPassword1("");
      setPassword2("");

      navigate("/login", { state: { mensagem: successMessage } }); //redirecionar com mensagem
    } catch (error) {
      //---- TRATAMENTO DE ERROS ----------------------
      //console.log("-->:", error.response.data.non_field_errors);
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
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image   background2-div"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Crie uma conta!</h1>
                </div>

                <form className="user" onSubmit={handleRegister}>
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Senha"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        className="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Senha novamente"
                        required
                      />
                    </div>
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
                <div>
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
                </div>

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
  );
};

export default Register;
