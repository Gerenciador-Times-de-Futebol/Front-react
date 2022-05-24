import NavBar from "../../components/NavBar";
import TableJogadores from "./TableJogadores";
import "./Jogadores.css";

function Jogadores() {

    return (
        <div className="fullscreen fundo">
            <NavBar/>
            <div className="container-fluid">
                <div>
                    <h1 className="espacamento float-start">Jogadores</h1>
                </div>
                <div className="section">
                    <TableJogadores/>
                </div>
                <footer className="position">
                    <h5>
                        <a 
                            style={{ color:'black', textDecoration: 'none' }} 
                            href="/" className="float-start">
                                <i class="bi bi-arrow-left-circle-fill"></i>
                                &nbsp;Voltar&nbsp;&nbsp;
                        </a>
                        <a 
                            style={{ color:'black', textDecoration: 'none' }} 
                            href="/registro-atleta" className="float-start">
                                <i class="bi bi-plus-circle-fill"></i>
                                &nbsp;Cadastar Novo Jogador&nbsp;&nbsp;
                        </a>
                    </h5>
                </footer>
            </div>
        </div>
    )
}
export default Jogadores;