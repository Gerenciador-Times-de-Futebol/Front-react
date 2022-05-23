import React from "react";
//import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import LeftChartLucros from "./LeftChartLucros";
import RightChartLucros from "./RightChartLucros";
import "./Lucros.css"

function Lucros () {
    return (    
    <div className="fullscreen fundo"> 
      <NavBar />
            <div className="container-fluid">
                <div>
                     <h1 className="titulo">Lucros </h1>
                </div>   
                <hr />

                <div className="esquerdaLucros">
                    <LeftChartLucros />
                </div>
            

                <div className="direitaLucros">
                    <RightChartLucros />
                </div>
            </div>
    </div>
    )
}
export default Lucros;