import axios from "axios";
import { createClient } from '@supabase/supabase-js'

export const api = axios.create({
    baseURL: "http://165.227.103.201:8100"
})

export const createSession = async (email, senha) => {
    return api.post('/login', {email, senha});
}

export const findUser = async () => {
    return api.get("/users/search/byEmail?email=" + localStorage.getItem("email"));
}

export const getPlayers = async () => {
    return api.get("/players");
}

export const getCompromissos = async () => {
    return api.get("/compromissos");
}

export const getTreinos = async () => {
    return api.get("/treinos");
}

export const getFinancas = async () => {
    return api.get("/financas");
}

const supabaseUrl = 'https://txpjgrmbtobmktevwsbl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cGpncm1idG9ibWt0ZXZ3c2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI4ODQwNTEsImV4cCI6MTk2ODQ2MDA1MX0.LBrzctTEyS7tOIu1RG9ZqP89k9vDec2wVP7S1OZZJwE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;