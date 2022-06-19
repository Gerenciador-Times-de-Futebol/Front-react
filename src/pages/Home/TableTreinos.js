import React, { useEffect, useContext, useState } from "react";
import { Button, Spinner, Table } from 'react-bootstrap';

import { getTreinos } from "../../services/api";

function TableCompromissos() {

    const [treinos, setTreinos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getTreinos();
            setTreinos(response.data);
            setLoading(false);
        })();
    }, []);

    return (
        <div>
            <h3>Treinos</h3>
            <Table striped bordered hover style={{ backgroundColor:'#dddddd', color:'black' }}>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Horário</th>
                        <th className="text-center">Tipo</th>
                        <th className="text-center">Local</th>
                    </tr>
                </thead>
                <tbody>
                {loading ? 
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    : treinos
                    .sort((a, b) => new Date(a.data) - new Date(b.data))
                    .slice(0, 3)
                    .map(treino => (
                                <tr key={treino.id}>
                                    <td>{(new Date (treino.data)).toLocaleDateString()}</td>
                                    <td>{(new Date (treino.horario)).toLocaleTimeString()}</td>
                                    <td className="text-center">{treino.tipo}</td>
                                    <td className="text-center">{treino.local}</td>
                                </tr>
                            ))
                        }
                </tbody>
            </Table>
        </div>
    );
 };
export default TableCompromissos;