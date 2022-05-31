import NavBarManager from "../../../components/NavBarManager";
import TableCompromissos from "./TableCompromissos";
import "./Compromissos.css";

function CompromissoManager() {

    return (
        <div className="fullscreen fundo">
            <NavBarManager/>
            <div className="container-fluid">
                <div>
                    <h1 className="espacamento float-start">Compromissos</h1>
                </div>
                <div className="section">
                    <TableCompromissos/>
                </div>
                <footer className="position">
                    <h5>
                        <a 
                            style={{ color:'black', textDecoration: 'none' }} 
                            href="/" className="float-start">
                                <i class="bi bi-arrow-left-circle-fill"></i>
                                &nbsp;Voltar&nbsp;&nbsp;
                        </a>
                    </h5>
                </footer>
            </div>
        </div>
    )
}
export default CompromissoManager;