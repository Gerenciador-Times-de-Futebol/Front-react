import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './style.css';
import logo from "../../assets/logo.png";
import supabase from "../../services/api";

const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleCadastro(e) {
        e.preventDefault();
        try {
            let { user, error } = await supabase.auth.signUp({
                email: email,
                password: password
            })

            if (error !== 406) {
                throw error
            }

            if (user) {
                navigate('/');
            }
            else {
                console.log(error)
                alert("Cadastro inválido")
            }
        } catch (error) {
            console.log(error)
            alert("Cadastro inválido")
        }
    }


    return (
        <Container  >
            <div className="teste" >
                <img src={logo} className="imagem" alt="Logo" />
                <h1 className="texto" >Mutiny</h1>
                <div className="teste2" >
                    <form onSubmit={handleCadastro} >
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
                        <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Cadastrar
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default Cadastro