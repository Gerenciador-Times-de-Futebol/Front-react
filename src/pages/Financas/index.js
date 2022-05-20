import React from "react";
import { useNavigate } from 'react-router-dom';
import SplitPane from "react-split-pane";
import NavBar from "../../components/NavBar";
import LeftChart from "./LeftChart";
import RightChart from "./RightChart";
import "./style.css"

function Financas () {

    const navigate = useNavigate();

    function handleLucros(e){
        navigate('/lucros');  // Tela despesas
    } 

    function handleDespesas(e){
        navigate('/despesas');  // Tela despesas
    } 

    return (    
    <div className="fullscreen"> 
      <NavBar />
            <div>
                <div className="titulo">
                     <h1>Finanças <button className="btnLucros" onClick={handleLucros} type="submit"> Lucros </button>
                     <button className="btnDespesas" onClick={handleDespesas} type="submit"> Despesas </button> </h1>
                </div>   
                <div className="esquerda">
              <LeftChart />
              </div>
            </div>

        <div className="direita">
            <RightChart />
        </div>
    </div>
    
    )
}
export default Financas;