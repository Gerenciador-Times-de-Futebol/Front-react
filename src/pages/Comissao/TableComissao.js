import { useState, useEffect } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import supabase from '../../services/api';
import "bootstrap-icons/font/bootstrap-icons.css";

function TableComissao() {

    const navigate = useNavigate();
    const [comissao, setComissao] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchComissao()
    }, []);

    async function fetchComissao() {
        setIsLoading(true);
        const { data } = await supabase
            .from('Comissao')
            .select()
        setComissao(data)
        setIsLoading(false)
        console.log("data: ", data)
    }

    function handleRegistrarComissao(e){
        navigate('/registro');
    }

    async function deleteComissao(id) {
        if (window.confirm("Tem certeza de que deseja excluir este funcionário?")) {
            try {
                const { error } = await supabase
                .from('Comissao')
                .delete()
                .eq("id", id)
                if (error) throw error
                fetchComissao()
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
                        <th>Nome</th>
                        <th>Função</th>
                        <th>Data de Nascimento</th>
                        <th>Departamento</th>
                        <th>Salário (R$)</th>
                        <th>Editar/Excluir</th>
                    </tr>
                </thead>
                <tbody>
                {isLoading ? 
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    : comissao.map(funcionario => (
                                <tr key={funcionario.id}>
                                    <td>{funcionario.nome}</td>
                                    <td>{funcionario.funcao}</td>
                                    <td>{funcionario.data_nascimento}</td>
                                    <td>{funcionario.departamento}</td>
                                    <td>{funcionario.salario}</td>
                                    <td className="text-center">
                                        <Button variant="warning" onClick={handleRegistrarComissao}><i className="bi bi-pencil-square"></i></Button>
                                        &nbsp;&nbsp;
                                        <Button variant="danger" onClick={() => deleteComissao(funcionario.id)}><i className="bi bi-trash-fill"></i></Button>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </Table>
        </div>
    );
 };
export default TableComissao;