import { Button, Table } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

function TableJogadores() {
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
                    <tr>
                        <td className="text-center">9</td>
                        <td>José Castro Cardoso</td>
                        <td>Atacante</td>
                        <td>29</td>
                        <td className="fimcontrato">31/12/2022</td>
                        <td>Profissional - Empréstimo</td>
                        <td>500.000</td>
                        <td className="text-center">
                            <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
                            &nbsp;&nbsp;
                            <Button variant="danger"><i className="bi bi-trash-fill"></i></Button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">3</td>
                        <td>Martim Dias Lima</td>
                        <td>Zagueiro</td>
                        <td>31</td>
                        <td>31/12/2026</td>
                        <td>Profissional - Definitivo</td>
                        <td>450.000</td>
                        <td className="text-center">
                            <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
                            &nbsp;&nbsp;
                            <Button variant="danger"><i className="bi bi-trash-fill"></i></Button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">6</td>
                        <td>Thiago Costa Mendes</td>
                        <td>Lateral-Esquerdo</td>
                        <td>18</td>
                        <td>31/12/2023</td>
                        <td>Não Profissional (Base)</td>
                        <td>50.000</td>
                        <td className="text-center">
                            <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
                            &nbsp;&nbsp;
                            <Button variant="danger"><i className="bi bi-trash-fill"></i></Button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">10</td>
                        <td>Daniel Melo Carvalho</td>
                        <td>Meio-Campo</td>
                        <td>23</td>
                        <td className="fimcontrato">30/06/2022</td>
                        <td>Profissional - Definitivo</td>
                        <td>200.000</td>
                        <td className="text-center">
                            <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
                            &nbsp;&nbsp;
                            <Button variant="danger"><i className="bi bi-trash-fill"></i></Button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">1</td>
                        <td>Nicolas Gonçalves Fernandes</td>
                        <td>Goleiro</td>
                        <td>28</td>
                        <td>30/06/2024</td>
                        <td>Profissional - Empréstimo</td>
                        <td>650.000</td>
                        <td className="text-center">
                            <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
                            &nbsp;&nbsp;
                            <Button variant="danger"><i className="bi bi-trash-fill"></i></Button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center">5</td>
                        <td>José Rodrigues Pereira</td>
                        <td>Volante</td>
                        <td>30</td>
                        <td>31/12/2025</td>
                        <td>Profissional - Definitivo</td>
                        <td>325.000</td>
                        <td className="text-center">
                            <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
                            &nbsp;&nbsp;
                            <Button variant="danger"><i className="bi bi-trash-fill"></i></Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
 };
export default TableJogadores;