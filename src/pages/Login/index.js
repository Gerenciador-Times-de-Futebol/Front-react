import React from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import './style.css';

function Login() {
    
      const navigate = useNavigate();
  
      async function handleLogin(e){
            navigate('/entrada');
    } 
    
    return (
        <div>
        <NavBar/>
            <div className="teste">
                <h1>Teste tela login</h1>
                <button className="button-submit" onClick={handleLogin} type="submit"> Entrar </button>
            </div>
        </div>

    )
}
export default Login;