import React from "react";
import './register.css'
import { Link } from "react-router-dom";

function RegisterPage() {
    return(
        <div className="Register">
            <h3 className="RegisterText">Registrar</h3>
            <p>Já possui uma conta? <Link to={`/Login`} style={{ textDecoration: "none" }}>Login</Link></p>
            <input type="text" className="RegisterInputs" placeholder="emai..." />
            <input type="text" className="RegisterInputs" placeholder="Nome de usuário..." />
            <input type="text" className="RegisterInputs" placeholder="Senha..." />
            <div className="RegisterButton"><h2>Registrar</h2></div>
        </div>
    )
}

export default RegisterPage;