import React, {useState, useEffect, createContext} from "react";
import { useNavigate } from "react-router-dom";

import {api, createSession} from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (recoveredUser && token) {
            setUser(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }

        setLoading(false);
    }, []);

    const login = async (email, senha) => {
        const response = await createSession(email, senha);

        console.log("login", response.data);

        const loggedUser = {email, senha}
        const token = response.headers.authorization;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("email", email);
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(loggedUser);
        navigate("/home");
    };

    const logout = () => {
        console.log("logout");

        localStorage.removeItem("user");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        api.defaults.headers.Authorization = null;
        
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider
            value={{authenticated: !!user, user, loading, login, logout}}>
                {children}
        </AuthContext.Provider>
    )
}