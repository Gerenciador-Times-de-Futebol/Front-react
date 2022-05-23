import React from "react";
import NavBar from "../../components/NavBar";
import LeftChartDespesas from "./LeftChartDespesas";
import RightChartDespesas from "./RightChartDespesas";
import "./Despesas.css"

function Despesas () {
    return (    
    <div className="fullscreen fundo"> 
      <NavBar />
            <div className="container-fluid">
               <div> 
                    <h1 className="titulo">Despesas </h1>
                </div> 
                <hr/>
                <div className="esquerdaDespesas">
                    <LeftChartDespesas />
                </div>

                 <div className="direitaDespesas">
                    <RightChartDespesas />
                </div>
            </div>
    </div>
    )
}
export default Despesas;