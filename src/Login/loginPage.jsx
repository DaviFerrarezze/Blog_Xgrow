// pagina para fazer login

import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import UserLogin from "./userLogin";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    const user = UserLogin(email, password);
  };

  return (
    <div className="Login">
      <h3 className="LoginText">Login</h3>
      <p>
        Novo no site?{" "}
        <Link to={`/Register`} style={{ textDecoration: "none" }}>
          Registrar
        </Link>
      </p>
      <h5>Email:</h5>
      <input
        type="text"
        className="RegisterInputs"
        placeholder="Email..."
        value={email}
        onChange={emailChange}
      />
      <h5>Senha:</h5>
      <input
        type="password"
        className="RegisterInputs"
        placeholder="Senha..."
        value={password}
        onChange={passwordChange}
      />
      <div className="LoginButton" onClick={login}>
        <h2>Login</h2>
      </div>
    </div>
  );
}

export default LoginPage;
