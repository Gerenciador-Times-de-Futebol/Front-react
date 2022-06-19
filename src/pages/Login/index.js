import { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../../contexts/auth";
import logo from "../../assets/logo.png";
import './style.css';

function Login() {
    const {authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    async function handleLogin(e){
        e.preventDefault();
     
        console.log("submit", {email, senha});

        login(email, senha);
    }
    
    return (
        <Container  >
            <div className="teste" >
                <img src={logo} className="imagem" alt="Logo" />
                    <h1 className="texto" >Mutiny</h1>
                        <div className="teste2" >
                          <p>{String(authenticated)}</p>
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
                                    value={senha}
                                    onChange = {e=>setSenha(e.target.value)}
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