import React from "react";
//import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import LeftChartLucros from "./LeftChartLucros";
import RightChartLucros from "./RightChartLucros";
import "./Lucros.css"

function Lucros () {

    //const navigate = useNavigate();
    /*
    function handleLucros(e){
        navigate('/lucros');  // Tela despesas
    } 
    */
    return (    
    <div className="fullscreen"> 
      <NavBar />
            <div>
                <div className="titulo">
                     <h1>Lucros </h1>
                </div>   
                <div className="esquerdaLucros">
              <LeftChartLucros />
              </div>
            </div>

        <div className="direitaLucros">
            <RightChartLucros />
        </div>
    </div>
    )
}
export default Lucros;