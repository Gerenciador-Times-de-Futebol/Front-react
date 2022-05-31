import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Jogadores from '../pages/Jogadores'
import Comissao from '../pages/Comissao'
import Financas from '../pages/Financas'
import Lucros from '../pages/Lucros'
import Despesas from '../pages/Despesas'
import Compromissos from '../pages/Compromissos'
import Treinos from '../pages/Treinos'
import RegistrarAtletas from '../pages/RegistrarAtletas'
import Cadastro from '../pages/Cadastro'
import RegistrarFuncionario from '../pages/RegistrarFuncionario'
import RegistrarFinanca from '../pages/RegistrarFinanca'
import RegistrarCompromisso from '../pages/RegistrarCompromisso'
import ConfigUser from '../pages/ConfigUser/Index'
import HomeManager from '../pages/TelasDoTecnico/Home'
import JogadoresManager from '../pages/TelasDoTecnico/Jogadores'
import TreinosManager from '../pages/TelasDoTecnico/Treinos'
import CompromissoManager from '../pages/TelasDoTecnico/Compromissos'
import ConfigManager from '../pages/TelasDoTecnico/ConfigManager/Index'

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<Jogadores />} path="/jogadores" />
        <Route element={<Comissao />} path="/comissao" />
        <Route element={<Financas />} path="/financas" />
        <Route element={<Lucros />} path="/lucros" />
        <Route element={<Despesas />} path="/despesas" />
        <Route element={<Compromissos />} path="/compromissos" />
        <Route element={<Treinos />} path="/treinos" />
        <Route element={<RegistrarAtletas />} path="/registro-atleta" />
        <Route element={<RegistrarFuncionario />} path="/registro-funcionario" />
        <Route element={<RegistrarFinanca />} path="/registro-financa" />
        <Route element={<RegistrarCompromisso />} path="/registro-compromisso"/>
        <Route element={<Cadastro />} path="/cadastro" />
        <Route element={<ConfigUser />} path="/config" /> 
        <Route element={<HomeManager />} path="home-manager" />
        <Route element={<JogadoresManager />} path="jogadores-manager" />
        <Route element={<TreinosManager />} path="treinos-manager" />
        <Route element={<CompromissoManager />} path="compromissos-manager" />
        <Route element={<ConfigManager />} path="config-manager" />
      </Routes>
    </BrowserRouter>
  )
}
export default Rotas
