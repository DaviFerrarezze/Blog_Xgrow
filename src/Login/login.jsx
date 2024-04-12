import React from "react";
import './login.css'
import { Link } from "react-router-dom";

function LoginPage() {
    return(
        <div className="Login">
            <h3 className="LoginText">Login</h3>
            <p>Novo no site? <Link to={`/Register`} style={{ textDecoration: "none" }}>Registrar</Link></p>
            <input type="text" className="LoginInputs" placeholder="Nome de usuário..." />
            <input type="text" className="LoginInputs" placeholder="Senha..." />
            <div className="LoginButton"><h2>Login</h2></div>
        </div>
    )
}

export default LoginPage;