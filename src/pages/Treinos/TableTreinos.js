import { useState, useEffect } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

import { api, getTreinos } from '../../services/api'

const url = "http://165.227.103.201:8100";

function TableTreinos() {

    const navigate = useNavigate();
    const [treinos, setTreinos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getTreinos();
            setTreinos(response.data);
            setLoading(false);
        })();
    }, []);

    /*
    useEffect(() => {
        fetchTreinos()
    }, []);

    async function fetchTreinos() {
        setIsLoading(true);
        const { data } = await supabase
            .from('Treinos')
            .select()
        setTreinos(data)
        setIsLoading(false)
        console.log("data: ", data)
    }*/

    function handleRegistrarTreinos(e) {
        navigate('/registro-treino')
      }
      function handleEditarTreinos(uuid) {
        navigate(`/editar-treino/${uuid}`)
      }

    function remove(uuid) {
        console.log(uuid);
        if (window.confirm("Tem certeza de que deseja excluir este treino?")) {
          api
            .delete(url + "/treinos/" + uuid)
            .then((res) => {
              console.log(res.data);
              const myalldata = treinos.filter((item) => item.uuid !== uuid);
              setTreinos(myalldata);
            })
            .catch((err) => console.error(err));
        }
      }

    /*
    async function deleteTreino(id) {
        if (window.confirm("Tem certeza de que deseja excluir este treino?")) {
            try {
                const { error } = await supabase
                .from('Treinos')
                .delete()
                .eq("id", id)
                if (error) throw error
                fetchTreinos()
            } catch (error) {
                console.error(error)
            }
        }
    }*/

    return (
        <div >
            <Table striped bordered hover style={{ backgroundColor:'white', color:'black' }}>
                <thead>
                    <tr className="text-center">
                        <th>Dia</th>
                        <th>Horário</th>
                        <th>Tipo</th>
                        <th>Local</th>
                        <th>Editar/Excluir</th>
                    </tr>
                </thead>
                <tbody>
                {loading ? 
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    : treinos
                    .sort((a, b) => new Date(a.data) - new Date(b.data))
                    .map(treino => (
                                <tr key={treino.id}>
                                    <td>{(new Date (treino.data)).toLocaleDateString()}</td>
                                    <td>{(new Date (treino.horario)).toLocaleTimeString()}</td>
                                    <td className="text-center">{treino.tipo}</td>
                                    <td className="text-center">{treino.local}</td>
                                    <td className="text-center">
                                        <Button variant="warning" onClick={() => handleEditarTreinos(treino.uuid)}><i className="bi bi-pencil-square"></i></Button>
                                        &nbsp;&nbsp;
                                        <Button variant="danger" onClick={() => remove(treino.uuid)}><i className="bi bi-trash-fill"></i></Button>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </Table>
        </div>
    );
 };
export default TableTreinos;