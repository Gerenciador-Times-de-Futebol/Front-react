import NavBarManager from "../../../components/NavBarManager";
import TableTreinos from "./TableTreinos";
import "./Treinos.css";

function TreinosManager() {

    return (
        <div className="fullscreen fundo">
            <NavBarManager/>
            <div className="container-fluid">
                <div>
                    <h1 className="espacamento float-start">Treinos</h1>
                </div>
                <div className="section">
                    <TableTreinos/>
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
                            href="/registro" className="float-start">
                                <i class="bi bi-plus-circle-fill"></i>
                                &nbsp;Agendar Novo Treino&nbsp;&nbsp;
                        </a>
                    </h5>
                </footer>
            </div>
        </div>
    )
}
export default TreinosManager;