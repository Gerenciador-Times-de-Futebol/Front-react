import { useState, useEffect } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import supabase from '../../services/api';
import "bootstrap-icons/font/bootstrap-icons.css";

function TableJogadores() {

    const navigate = useNavigate();
    const [jogadores, setJogadores] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchJogadores()
    }, []);

    async function fetchJogadores() {
        setIsLoading(true);
        const { data } = await supabase
            .from('Jogadores')
            .select()
        setJogadores(data)
        setIsLoading(false)
        console.log("data: ", data)
    }

    function handleRegistrarJogadores(e){
        navigate('/registro-atleta');
    }

    async function deleteJogador(id) {
        if (window.confirm("Tem certeza de que deseja excluir este jogador?")) {
            try {
                const { error } = await supabase
                .from('Jogadores')
                .delete()
                .eq("id", id)
                if (error) throw error
                fetchJogadores()
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <div >
            <Table striped bordered hover style={{ backgroundColor:'white', color:'black' }}>
                <thead>
                    <tr className="text-center">
                        <th>Camisa</th>
                        <th>Nome</th>
                        <th>Posição</th>
                        <th>Idade</th>
                        <th>Término de contrato</th>
                        <th>Vínculo</th>
                        <th>Salário (R$)</th>
                        <th>Editar/Excluir</th>
                    </tr>
                </thead>
                <tbody>
                {isLoading ? 
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    : jogadores.map(jogador => (
                                <tr key={jogador.id}>
                                    <td className="text-center">{jogador.camisa}</td>
                                    <td>{jogador.nome}</td>
                                    <td>{jogador.posicao}</td>
                                    <td>{jogador.idade}</td>
                                    <td>{jogador.termino_contrato}</td>
                                    <td>{jogador.vinculo}</td>
                                    <td>{jogador.salario}</td>
                                    <td className="text-center">
                                        <Button variant="warning" onClick={handleRegistrarJogadores}><i className="bi bi-pencil-square"></i></Button>
                                        &nbsp;&nbsp;
                                        <Button variant="danger" onClick={() => deleteJogador(jogador.id)}><i className="bi bi-trash-fill"></i></Button>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </Table>
        </div>
    );
 };
export default TableJogadores;