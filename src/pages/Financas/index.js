import React from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import LeftChartFinancas from "./LeftChartFinancas";
import RightChartFinancas from "./RightChartFinancas";
import "./Financas.css"

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
                <div className="esquerdaFinancas">
              <LeftChartFinancas />
              </div>
            </div>

        <div className="direitaFinancas">
            <RightChartFinancas />
        </div>
    </div>
    
    )
}
export default Financas;