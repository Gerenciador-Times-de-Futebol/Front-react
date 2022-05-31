import React from 'react';
import { Table } from 'react-bootstrap';

function TableCompromissos() {
    return (
        <div>
            <h3>Treinos</h3>
            <Table striped bordered hover style={{ backgroundColor:'#dddddd', color:'black' }}>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Tipo</th>
                        <th>Local</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>03/06/2022</td>
                        <td>16:00</td>
                        <td>Treino Tático</td>
                        <td>Campo B</td>
                    </tr>
                    <tr>
                        <td>04/06/2022</td>
                        <td>16:00</td>
                        <td>Jogo-Treino</td>
                        <td>Maracanã</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
 };
export default TableCompromissos;