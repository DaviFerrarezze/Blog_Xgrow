import React from "react";
import './login.css'
import { Link } from "react-router-dom";

function LoginPage() {
    return(
        <div className="Login">
            <h3 className="LoginText">Login</h3>
            <p>Novo no site? <Link to={`/Register`} style={{ textDecoration: "none" }}>Registrar</Link></p>
            <h5>Email:</h5>
            <input type="text" className="RegisterInputs" placeholder="Emai..." />
            <h5>Senha:</h5>
            <input type="text" className="RegisterInputs" placeholder="Senha..." />
            <div className="LoginButton"><h2>Login</h2></div>
        </div>
    )
}

export default LoginPage;