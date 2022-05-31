import { useState, useEffect } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import supabase from '../../../services/api';
import "bootstrap-icons/font/bootstrap-icons.css";

function TableCompromissos() {

    const navigate = useNavigate();
    const [compromissos, setCompromissos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchCompromissos()
    }, []);

    async function fetchCompromissos() {
        setIsLoading(true);
        const { data } = await supabase
            .from('Compromissos')
            .select()
        setCompromissos(data)
        setIsLoading(false)
        console.log("data: ", data)
    }
    
    return (
        <div >
            <Table striped bordered hover style={{ backgroundColor:'white', color:'black' }}>
                <thead>
                    <tr className="text-center">
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Anfitrião</th>
                        <th>Visitante</th>
                        <th>Local</th>
                        <th>Torneio</th>
                    </tr>
                </thead>
                <tbody>
                {isLoading ? 
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    : compromissos.map(compromisso => (
                                <tr key={compromisso.id}>
                                    <td>{compromisso.data}</td>
                                    <td>{compromisso.horario}</td>
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