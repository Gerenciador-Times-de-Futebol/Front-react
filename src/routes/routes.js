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

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Home />} path="/" />
        <Route element={<Jogadores />} path="/jogadores" />
        <Route element={<Comissao />} path="/comissao" />
        <Route element={<Financas />} path="/financas" />
        <Route element={<Lucros />} path="/lucros" />
        <Route element={<Despesas />} path="/despesas" />
        <Route element={<Compromissos />} path="/compromissos" />
        <Route element={<Treinos />} path="/treinos" />
        <Route element={<RegistrarAtletas />} path="/registro" />
      </Routes>
    </BrowserRouter>
  )
}
export default Rotas
