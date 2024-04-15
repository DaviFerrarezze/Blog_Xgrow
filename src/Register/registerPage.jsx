import React, { useState } from "react";
import './register.css'
import { Link } from "react-router-dom";
import RegisterUser from "./registerUsers";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loginPage, setLoginPage] = useState(false);

    const nameChange = (event) => {
        setName(event.target.value);
    }
    const emailChange = (event) => {
        setEmail(event.target.value);
    }
    const passwordChange = (event) => {
        setPassword(event.target.value);
    }

    const register = () =>{
        const registerTry = RegisterUser(name, email, password)
    
    if(!registerTry){
        setError('Este email já está em uso por outro usuário')
    } else {
        setError('')
        setLoginPage(true);
    }
}
    if(loginPage){
        return <Redirect to='/Login' />;
    }


    return(
        <div className="Register">
            <h3 className="RegisterText">Registre-se</h3>
            <p>Já possui uma conta? <Link to={`/Login`} style={{ textDecoration: "none" }}>Login</Link></p>
            <h5>Nome:</h5>
            <input type="text" className="RegisterInputs" placeholder="Nome..." value={name} onChange={nameChange}/>
            <h5>Email:</h5>
            <input type="text" className="RegisterInputs" placeholder="Emai..." value={email} onChange={emailChange}/>
            {error && <p className="Error">{error}</p>}
            <register />
            <h5>Senha:</h5>
            <input type="password" className="RegisterInputs" placeholder="Senha..." value={password} onChange={passwordChange}/>
            <div className="RegisterButton" onClick={register}><h2>Registrar</h2></div>
        </div>
    )
}

export default RegisterPage;