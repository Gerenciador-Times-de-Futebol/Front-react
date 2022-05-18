import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Financas from "../pages/Financas";

function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Login /> } path="/" exact />
                <Route element = { <Financas />} path="/financas" />
            </Routes>
        </BrowserRouter>

    )
}
export default Rotas;