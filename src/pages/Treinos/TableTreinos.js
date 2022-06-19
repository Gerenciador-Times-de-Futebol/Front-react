import { useState, useEffect } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

import { getTreinos } from "../../services/api";

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

    function handleRegistrarTreinos(e){
        navigate('/registro');
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
                                        <Button variant="warning" onClick={handleRegistrarTreinos}><i className="bi bi-pencil-square"></i></Button>
                                        &nbsp;&nbsp;
                                        <Button variant="danger" /*onClick={() => deleteTreino(treino.id)}*/><i className="bi bi-trash-fill"></i></Button>
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