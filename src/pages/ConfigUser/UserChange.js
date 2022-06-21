import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from 'react-bootstrap';
//import { useNavigate } from 'react-router-dom';
//import { useState } from "react";
//import supabase from "../../services/api";
import "./ConfigUser.css";

const url = "http://165.227.103.201:8100";
const accessToken = localStorage.getItem("token");

const authAxios = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

function UserChange() {
  const [showEditNome, setShowEditNome] = useState(false);
  const [showEditEmail, setShowEditEmail] = useState(false);

  const handleCloseEditNome = () => setShowEditNome(false);
  const handleShowEditNome = () => setShowEditNome(true);
  const handleCloseEditEmail = () => setShowEditEmail(false);
  const handleShowEditEmail = () => setShowEditEmail(true);

  const [data, setData] = useState({
    nome: "",
    email: "",
    uuid: ""
  });

  useEffect(() => {
    authAxios
      .get(url + "/users/search/byEmail?email=" + localStorage.getItem("email"))
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  function submitEditNome(e) {
    e.preventDefault();
    authAxios
      .put(url + "/users/" + localStorage.getItem("email"), data)
      .then((res) => {
        handleCloseEditNome();
      })
      .catch((err) => console.error(err));
  }

  function submitEditEmail(e) {
    e.preventDefault();
    authAxios
      .put(url + "/users/" + localStorage.getItem("email"), data)
      .then((res) => {
        localStorage.setItem("email", data.email);
        handleCloseEditEmail();
      })
      .catch((err) => console.error(err));
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  function updateNome() {
    handleShowEditNome();
  }

  function updateEmail() {
    handleShowEditEmail();
  }

    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
  
    //const navigate = useNavigate();
  
    // ver se vai ser modal ou outra tela
      /*
      async function handleChange(e){
        e.preventDefault();
        const usu = {email,
        password};
        try {  
          let { data: user, error, status } = await supabase
          .from('usuarios')
          .select(`*`)
          .eq('email', usu.email)
          .eq('senha', usu.password)
          .single()
  
          if (error && status !== 406) {
            throw error
          }
  
          if (user) {
            navigate('/home');
          }
          else {
            alert("Login ou senha inválidos")
          }
    } catch (error) {
      alert("Login ou senha inválidos")
    } 
  }
    */

    return (

      <div>
        <div className="text-center">
          <br/><br/><br/>
          <Button variant="primary" onClick={updateNome}><i className="bi bi-pencil-square"></i> Editar Nome</Button>
          &nbsp;&nbsp;
          <Button variant="warning"  onClick={updateEmail}><i className="bi bi-pencil-square"></i> Editar Email</Button>
          &nbsp;&nbsp;
          <Button variant="danger" /*onClick={handleRegistrarJogadores}*/><i className="bi bi-pencil-square"></i> Editar Senha</Button>
        </div>

        <Modal show={showEditNome} onHide={handleCloseEditNome}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Nome de Usuário</Modal.Title>
        </Modal.Header>
        <div className="container">
          <form onSubmit={(e) => submitEditNome(e)}>
            <div className="form-group">
              <label htmlFor="nome">Nome Atual:</label>
              <input
                onChange={(e) => handle(e)}
                value={data.nome}
                type="text"
                name="nome"
                id="nome"
                className="form-control"
                placeholder="Nome"
                required
              />
            </div>
            <Modal.Footer>
              <button className="btn btn-primary">Editar</button>
            </Modal.Footer>
          </form>
        </div>
        </Modal>

        <Modal show={showEditEmail} onHide={handleCloseEditEmail}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Email</Modal.Title>
        </Modal.Header>
        <div className="container">
          <form onSubmit={(e) => submitEditEmail(e)}>
            <div className="form-group">
              <label htmlFor="email">Email Atual:</label>
              <input
                onChange={(e) => handle(e)}
                value={data.email}
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="E-mail"
                required
              />
            </div>
            <Modal.Footer>
              <button className="btn btn-primary">Editar</button>
            </Modal.Footer>
          </form>
        </div>
        </Modal>

      </div>

    )
}
export default UserChange;