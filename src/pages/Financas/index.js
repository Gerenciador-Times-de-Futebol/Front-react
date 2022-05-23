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
    <div className="fullscreen fundo"> 
      <NavBar />
            <div className="container-fluid">
                <div>
                     <h1 className="titulo">Finanças <button className="btnLucros" onClick={handleLucros} type="submit"> Lucros </button>
                     <button className="btnDespesas" onClick={handleDespesas} type="submit"> Despesas </button> </h1>  
                </div>
                <hr/>
                <div className="esquerdaFinancas">
                    <LeftChartFinancas />
                </div>
                <div className="direitaFinancas">
                    <RightChartFinancas />
                </div>
            </div> 
    </div>
    )
}
export default Financas;