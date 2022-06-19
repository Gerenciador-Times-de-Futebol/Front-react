import React, { useEffect, useContext, useState } from "react";
import NavBar from "../../components/NavBar";
import TableCompromissos from "./TableCompromissos";
import TableTreinos from "./TableTreinos";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Home.css";

import { AuthContext } from "../../contexts/auth";
import { getPlayers } from "../../services/api";

function Home() {

    const navigate = useNavigate();

    const {logout} = useContext(AuthContext);
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getPlayers();
            setPlayers(response.data);
            setLoading(false);
        })();
    }, []);

    function handleLogout(e){
        logout();
    }

    if (loading) {
        return <div className="loading">Carregando dados...</div>
    }
    
    return (
        <div className="fullscreen fundo">
            <NavBar/>
            <div className="container-fluid">

                <ul>
                    {
                        players.map((player) => (
                            <li key={player.id}>
                                {player.camisa} - {player.nome}
                            </li>
                        ))
                    }
                </ul>

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