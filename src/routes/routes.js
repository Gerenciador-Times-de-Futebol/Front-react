import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Login from '../pages/Login'
import Financas from '../pages/Financas'
import Lucros from '../pages/Lucros'
import Despesas from '../pages/Despesas'
import Home from '../pages/Home'
import RegistrarAtletas from '../pages/RegistrarAtletas'
import Jogadores from '../pages/Jogadores'
import Cadastro from '../pages/Cadastro'

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Home />} path="/" />
        <Route element={<Jogadores />} path="/jogadores" />
        <Route element={<Financas />} path="/financas" />
        <Route element={<Lucros />} path="/lucros" />
        <Route element={<Despesas />} path="/despesas" />
        <Route element={<RegistrarAtletas />} path="/registro" />
        <Route element={<Cadastro />} path="/cadastro" />
      </Routes>
    </BrowserRouter>
  )
}
export default Rotas
