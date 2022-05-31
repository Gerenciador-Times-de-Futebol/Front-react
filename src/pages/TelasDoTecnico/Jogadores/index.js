import NavBarManager from "../../../components/NavBarManager";
import TableJogadoresManager from "./TableJogadores";
import "./Jogadores.css";

function JogadoresManager() {

    return (
        <div className="fullscreen fundo">
            <NavBarManager/>
            <div className="container-fluid">
                <div>
                    <h1 className="espacamento float-start">Jogadores</h1>
                </div>
                <div className="section">
                    <TableJogadoresManager/>
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
export default JogadoresManager;