import UserChange from "./UserChange";
import NavBar from "../../components/NavBar";
import "./ConfigUser.css"
import ImageUser from "../../assets/user.png";

function ConfigUser() { 
    return (
        <div className="fullscreen fundo"> 
            <NavBar />
                <div className="container-fluid">
                    <div>
                        <h1 className="titulo">Configurações Usuário </h1>  
                    </div>
                <hr/>
                <br/><br/>
                <img src={ImageUser} className="imagem" alt="ImageUser" />
                <UserChange />
                </div>
        </div>
    )
}
export default ConfigUser;