import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './style.css';
import logo from "../../assets/logo.png";
import supabase from "../../services/api";

function Login() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
      const navigate = useNavigate();
  
      async function handleLogin(e){
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
        <Container  >
            <div className="teste" >
                <img src={logo} className="imagem" alt="Logo" />
                    <h1 className="texto" >Mutiny</h1>
                        <div className="teste2" >
                            <form onSubmit={handleLogin} >
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Coloque seu Email"
                                        value={email}
                                        onChange = {e=>setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                <label>Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Coloque sua Senha"
                                    value={password}
                                    onChange = {e=>setPassword(e.target.value)}
                                />
                                </div>
                                <div className="mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                    />
                                    <label className="custom-control-label" htmlFor="customCheck1">
                                    Lembrar-me
                                    </label>
                                </div>
                                </div>
                                <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Entrar
                                </button>
                                </div>
                                <p className="forgot-password text-right">
                                    <a href="#">Esqueceu a senha?</a>
                                </p>
                            </form>
                        </div>
            </div>
        </Container>
    )
}
export default Login;