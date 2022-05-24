import UserChange from "./UserChange";
import NavBar from "../../components/NavBar";
import "./ConfigUser.css"

function ConfigUser() { 
    return (
        <div className="fullscreen fundo"> 
            <NavBar />
                <div className="container-fluid">
                    <div>
                        <h1 className="titulo">Configurações Usuário </h1>  
                    </div>
                <hr/> 
                <UserChange />
                </div>
        </div>
    )
}
export default ConfigUser;