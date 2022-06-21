import { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Cadastro from '../pages/Cadastro'
import Comissao from '../pages/Comissao'
import Compromissos from '../pages/Compromissos'
import ConfigUser from '../pages/ConfigUser/Index'
import Despesas from '../pages/Despesas'
import EditarAtletas from '../pages/EditarAtletas'
import EditarFuncionario from '../pages/EditarFuncionario'
import EditarCompromisso from '../pages/EditarCompromisso'
import Financas from '../pages/Financas'
import Home from '../pages/Home'
import Jogadores from '../pages/Jogadores'
import Login from '../pages/Login'
import Lucros from '../pages/Lucros'
import RegistrarAtletas from '../pages/RegistrarAtletas'
import RegistrarCompromisso from '../pages/RegistrarCompromisso'
import RegistrarFinanca from '../pages/RegistrarFinanca'
import RegistrarFuncionario from '../pages/RegistrarFuncionario'
import CompromissoManager from '../pages/TelasDoTecnico/Compromissos'
import ConfigManager from '../pages/TelasDoTecnico/ConfigManager/Index'
import HomeManager from '../pages/TelasDoTecnico/Home'
import JogadoresManager from '../pages/TelasDoTecnico/Jogadores'
import TreinosManager from '../pages/TelasDoTecnico/Treinos'
import Treinos from '../pages/Treinos'

import { AuthContext, AuthProvider } from "../contexts/auth"

function Rotas() {

  const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>
    }

    if (!authenticated) {
      return <Navigate to="/"/>
    }

    return children;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Private><Home /></Private>} path="/home" />
          <Route element={<Jogadores />} path="/jogadores" />
          <Route element={<Comissao />} path="/comissao" />
          <Route element={<Financas />} path="/financas" />
          <Route element={<Lucros />} path="/lucros" />
          <Route element={<Despesas />} path="/despesas" />
          <Route element={<Compromissos />} path="/compromissos" />
          <Route element={<Treinos />} path="/treinos" />
          <Route element={<RegistrarAtletas />} path="/registro-atleta" />
          <Route element={<EditarAtletas />} path="/editar-atleta/:nome" />
          <Route element={<RegistrarFuncionario />} path="/registro-funcionario" />
          <Route element={<EditarFuncionario />} path="/editar-funcionario:nome" />
          <Route element={<RegistrarFinanca />} path="/registro-financa" />
          <Route element={<RegistrarCompromisso />} path="/registro-compromisso"/>
          <Route element={<EditarCompromisso />} path="/editar-compromisso:uuid"/>
          <Route element={<Cadastro />} path="/cadastro" />
          <Route element={<ConfigUser />} path="/config" /> 
          <Route element={<HomeManager />} path="home-manager" />
          <Route element={<JogadoresManager />} path="jogadores-manager" />
          <Route element={<TreinosManager />} path="treinos-manager" />
          <Route element={<CompromissoManager />} path="compromissos-manager" />
          <Route element={<ConfigManager />} path="config-manager" />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default Rotas
