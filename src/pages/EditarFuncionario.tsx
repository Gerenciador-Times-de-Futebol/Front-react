import styled from '@emotion/styled'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import background from '../assets/background_dashboard.png'
import back from '../assets/left-arrow.png'
import player from '../assets/soccer-player.png'
import InputBox from '../components/InputBox'
import { editEmployee } from '../services/api'

const EditarFuncionario: React.FC = () => {
  const [name, setName] = useState('')
  const [post, setPost] = useState('')
  const [department, setDepartment] = useState('')
  const [income, setIncome] = useState('')
  const [birthday, setBirthday] = useState('')

  const { nome } = useParams()

  const navigate = useNavigate()

  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault()

    const { data } = await editEmployee(
      {
        nome: name,
        funcao: post,
        departamento: department,
        data_nascimento: new Date(birthday),
        salario: parseInt(income),
      },
      nome!,
    )
    console.log('funcionario adicionado: ', data)
    navigate('/comissao')
  }

  return (
    <Container>
      <Header>
        <h1>Cadastrar novos funcionários</h1>
      </Header>
      <LoginBox onSubmit={handleSubmit}>
        <Player src={player} />
        <InputBox
          input="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <InputBox
          input="Cargo"
          value={post}
          onChange={e => setPost(e.target.value)}
        />
        <InputBox
          input="Departamento"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        />
        <InputBox
          input="Salário"
          value={income}
          onChange={e => setIncome(e.target.value)}
        />
        <InputBox
          input="Nascimento"
          type="date"
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
        />
        <Submit>CADASTRAR</Submit>
      </LoginBox>
      <Footer>
        <Return onClick={() => navigate(-1)}>
          <img src={back} alt="voltar" width={50} height={50} />
        </Return>
      </Footer>
    </Container>
  )
}

export default EditarFuncionario

const Container = styled.div`
  background-image: url(${background});
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Header = styled.header`
  margin: 0.5rem;
`

const LoginBox = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Player = styled.img`
  width: 150px;
  height: 150px;
`

const Submit = styled.button`
  width: 300px;
  margin-top: 50px;
  display: inline-block;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: rgb(33, 72, 192);
`

const Footer = styled.footer`
  margin: 10px;
`

const Return = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
`
