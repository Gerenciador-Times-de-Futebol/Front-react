import React from "react";
import NavBar from "../../components/NavBar";
import LeftChartDespesas from "./LeftChartDespesas";
import RightChartDespesas from "./RightChartDespesas";
import "./Despesas.css"

function Despesas () {
    return (    
    <div className="fullscreen"> 
      <NavBar />
            <div>
                <div className="titulo">
                     <h1>Despesas </h1>
                </div>   
                <div className="esquerdaDespesas">
              <LeftChartDespesas />
              </div>
            </div>

        <div className="direitaDespesas">
            <RightChartDespesas />
        </div>
    </div>
    )
}
export default Despesas;