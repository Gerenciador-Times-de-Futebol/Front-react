import React from "react";
import { useNavigate } from 'react-router-dom';
import SplitPane from "react-split-pane";
import NavBar from "../../components/NavBar";
import LeftChart from "./LeftChart";
import RightChart from "./RightChart";
import "./style.css"

function Financas () {

    const navigate = useNavigate();
    
    function handleLogin(e){
        navigate('/financas');  // Tela despesas
    } 

    return (    
    <div> 
      <NavBar />
        <div className='App'>
        <br />
                <h1>Financas <button className="button-submit" onClick={handleLogin} type="submit"> Lucros </button></h1>
                <SplitPane split="vertical" minSize="50%" defaultSize="50%"  style={{ position: "static" }}>
                    <div>
                      split 1
                        <LeftChart />
                    </div>
                    <div>
                        split 2
                        <RightChart />
                    </div>
               </SplitPane>
        </div>
    </div>
    
    )
}
export default Financas;