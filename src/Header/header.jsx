//Header da pagina

import React from "react";
import './header.css'
import { Link } from "react-router-dom";

function Header() {
    return( 
    <div>
    <header className="Header">
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <div className='Button'>
          <h3>Posts</h3>
        </div>
        </Link>
        <Link to={`/Login/`} style={{ textDecoration: "none" }}>
        <div className='Button'>
          <h3>Login</h3>
        </div>
        </Link>
        <Link to={`/Register/`} style={{ textDecoration: "none" }}>
        <div className='Button'>
          <h3>Registre-se</h3>
        </div>
      </Link>
    </header>
    <h5 className="HeaderText">Blog-K12</h5>
    </div>
    )
}

export default Header;