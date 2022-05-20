import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Financas from "../pages/Financas";
import Lucros from "../pages/Lucros";
import Despesas from "../pages/Despesas";

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Login /> } path="/" exact />
                <Route element = { <Financas />} path="/financas" />
                <Route element = {<Lucros />} path="/lucros"/>
                <Route element = {<Despesas /> } path="/despesas" />
            </Routes>
        </BrowserRouter>

    )
}
export default Rotas;