import NavBar from "../../components/NavBar";
import TableComissao from "./TableComissao";
import "./Comissao.css";

function Comissao() {

    return (
        <div className="fullscreen fundo">
            <NavBar/>
            <div className="container-fluid">
                <div>
                    <h1 className="espacamento float-start">Comissão Técnica</h1>
                </div>
                <div className="section">
                    <TableComissao/>
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
                                &nbsp;Cadastar Novo Funcionário&nbsp;&nbsp;
                        </a>
                    </h5>
                </footer>
            </div>
        </div>
    )
}
export default Comissao;