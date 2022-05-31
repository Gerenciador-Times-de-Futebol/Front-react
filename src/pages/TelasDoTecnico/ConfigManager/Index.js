import UserChange from "./UserChange";
import NavBarManager from "../../../components/NavBarManager";
import "./ConfigManager.css"
import ImageUser from "../../../assets/user.png";

function ConfigManager() { 
    return (
        <div className="fullscreen fundo"> 
            <NavBarManager />
                <div className="container-fluid">
                    <div>
                        <h1 className="titulo">Configurações técnico </h1>  
                    </div>
                <hr/> 
                <img src={ImageUser} className="imagem" alt="ImageUser" />
                <UserChange />
                </div>
        </div>
    )
}
export default ConfigManager;