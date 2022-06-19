import React, { useEffect, useContext, useState } from "react";
import { Button, Spinner, Table } from 'react-bootstrap';

import { getCompromissos } from "../../services/api";

function TableCompromissos() {

    const [compromissos, setCompromissos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getCompromissos();
            setCompromissos(response.data);
            setLoading(false);
        })();
    }, []);

    return (
        <div >
            <h3>Compromissos</h3>
            <Table striped bordered hover style={{ backgroundColor:'#dddddd', color:'black' }}>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Anfitrião</th>
                        <th>Visitante</th>
                        <th>Local</th>
                        <th>Torneio</th>
                    </tr>
                </thead>
                <tbody>
                {loading ? 
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    : compromissos
                    .sort((a, b) => new Date(a.data) - new Date(b.data))
                    .slice(0, 3)
                    .map(compromisso => (
                                <tr key={compromisso.id}>
                                    <td>{(new Date (compromisso.data)).toLocaleDateString()}</td>
                                    <td>{(new Date (compromisso.horario)).toLocaleTimeString()}</td>
                                    <td>{compromisso.anfitriao}</td>
                                    <td>{compromisso.visitante}</td>
                                    <td>{compromisso.local}</td>
                                    <td>{compromisso.torneio}</td>
                                </tr>
                            ))
                        }
                </tbody>
            </Table>
        </div>
    );
 };
export default TableCompromissos;