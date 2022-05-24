import UserChange from "./UserChange";
import NavBar from "../../components/NavBar";
import  "./UserConfig.css"

function ConfigUser() { 
    return (
        <div className="fullscreen fundo"> 
            <NavBar />
                <div>
                     <h1 className="titulo">Configurações Usuário </h1>  
                </div>
                <hr/>
                <div className="esquerdaFinancas">
                    <UserChange />
                </div>
        </div>
    )
}
export default ConfigUser;