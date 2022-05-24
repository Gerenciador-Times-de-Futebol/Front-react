import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import supabase from "../../services/api";
import "./ConfigUser.css"


function UserChange() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
      const navigate = useNavigate();
  
      async function handleChange(e){
        e.preventDefault();
        const usu = {email,
        password};
        try {  
          let { data: user, error, status } = await supabase
          .from('usuarios')
          .select(`*`)
          .eq('email', usu.email)
          .eq('senha', usu.password)
          .single()
  
          if (error && status !== 406) {
            throw error
          }
  
          if (user) {
            navigate('/home');
          }
          else {
            alert("Login ou senha inválidos")
          }
    } catch (error) {
      alert("Login ou senha inválidos")
    } 
  }
    
    return (
      <div className="espacoBotoes">
            <button className="btnNome" type="submit"> Alterar Nome </button>
            <button className="btnEmail" type="submit"> Alterar Email </button>
            <button className="btnSenha" type="submit"> Alterar senha </button>
      </div>
    )
}
export default UserChange;  