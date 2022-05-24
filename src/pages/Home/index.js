import React from "react";
import NavBar from "../../components/NavBar";
import TableCompromissos from "./TableCompromissos";
import TableTreinos from "./TableTreinos";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Home.css";

function Home() {

    const navigate = useNavigate();

    function handleLogout(e){
        navigate('/');
    }
    
    return (
        <div className="fullscreen fundo">
            <NavBar/>
            <div className="container-fluid">
                <div>
                    <h1 className="espacamento float-start">Início - Bem-vindo, Sr.Dudu</h1>
                    <h1 className="espacamento float-end" onClick={handleLogout}><i class="bi bi-power"></i></h1>
                </div>
                <br/><br/><br/><br/>
                <hr/>
                <div className="section">
                    <TableCompromissos/>
                    <br/>
                    <TableTreinos/>
                </div>
            </div>
        </div>
    )
}
export default Home;