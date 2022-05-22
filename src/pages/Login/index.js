import React from "react";
import { useNavigate } from 'react-router-dom';
import './style.css';

function Login() {
    
      const navigate = useNavigate();
  
      async function handleLogin(e){
            navigate('/');
    } 
    
    return (
        <div className="teste">
            <h1>Teste tela login</h1>
            <button className="button-submit" onClick={handleLogin} type="submit"> Entrar </button>
        </div>
    )
}
export default Login;