import React from "react";
import NavBarManager from "../../../components/NavBarManager";
import TableCompromissos from "./TableCompromissos";
import TableTreinos from "./TableTreinos";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Home.css";

function HomeManager() {

    const navigate = useNavigate();

    function handleLogout(e){
        navigate('/'); // vai pra login 
    }
    
    return (
        <div className="fullscreen fundo">
            <NavBarManager/>
            <div className="container-fluid">
                <div>
                    <h1 className="espacamento float-start">Início - Bem-vindo, Técnico João</h1>
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
export default HomeManager;