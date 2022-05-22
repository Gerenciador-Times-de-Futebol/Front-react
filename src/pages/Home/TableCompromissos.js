import React from 'react';
import { Table } from 'react-bootstrap';

function TableCompromissos() {
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
                    <tr>
                        <td>25/06/2022</td>
                        <td>16:00</td>
                        <td>São Paulo</td>
                        <td>Mutiny</td>
                        <td>Morumbi</td>
                        <td>Campeonato Brasileiro</td>
                    </tr>
                    <tr>
                        <td>29/06/2022</td>
                        <td>17:00</td>
                        <td>Mutiny</td>
                        <td>Fluminense</td>
                        <td>Arena Mutiny</td>
                        <td>Copa do Brasil</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
 };
export default TableCompromissos;