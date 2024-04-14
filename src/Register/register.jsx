import React from "react";
import './register.css'
import { Link } from "react-router-dom";

function RegisterPage() {
    return(
        <div className="Register">
            <h3 className="RegisterText">Registre-se</h3>
            <p>Já possui uma conta? <Link to={`/Login`} style={{ textDecoration: "none" }}>Login</Link></p>
            <h5>Nome:</h5>
            <input type="text" className="RegisterInputs" placeholder="Nome..." />
            <h5>Email:</h5>
            <input type="text" className="RegisterInputs" placeholder="Emai..." />
            <h5>Senha:</h5>
            <input type="text" className="RegisterInputs" placeholder="Senha..." />
            <div className="RegisterButton"><h2>Registrar</h2></div>
        </div>
    )
}

export default RegisterPage;