import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
//import supabase from '../../services/api';

import { api, getEmployee } from '../../services/api';

const url = "http://165.227.103.201:8100";

function TableComissao() {

    const navigate = useNavigate()
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      ;(async () => {
        const response = await getEmployee()
        setEmployees(response.data)
        setLoading(false)
      })()
    }, [])

    /*
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
    }*/

    function handleRegistrarComissao(e){
        navigate('/registro-funcionario');
    }
    function handleEditarComissao(nome){
        navigate(`/editar-funcionario/${nome}`);
    }

    function remove(nome) {
        console.log(nome);
        if (window.confirm("Tem certeza de que deseja excluir este funcionário?")) {
          api
            .delete(url + "/employees/" + nome)
            .then((res) => {
              console.log(res.data);
              const myalldata = employees.filter((item) => item.nome !== nome);
              setEmployees(myalldata);
            })
            .catch((err) => console.error(err));
        }
      }

    /*
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
    }*/

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
                    {loading ? (
                        <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : (
                        employees
                        .sort((a, b) => a.nome > b.nome ? 1 : -1)
                        .map(employee => (
                            <tr key={employee.id}>
                            <td className="text-center">{employee.nome}</td>
                            <td>{employee.funcao}</td>
                            <td>{new Date(employee.data_nascimento).toLocaleDateString()}</td>
                            <td>{employee.departamento}</td>
                            <td>{employee.salario}</td>
                            <td className="text-center">
                                <Button
                                variant="warning"
                                onClick={() => {
                                    handleEditarComissao(employee.nome)
                                }}
                                >
                                <i className="bi bi-pencil-square"></i>
                                </Button>
                                &nbsp;&nbsp;
                                <Button
                                variant="danger" onClick={() => remove(employee.nome)}
                                >
                                <i className="bi bi-trash-fill"></i>
                                </Button>
                            </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    );
 };
export default TableComissao;