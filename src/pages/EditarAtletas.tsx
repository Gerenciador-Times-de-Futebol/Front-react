import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import background from '../assets/background_dashboard.png'
import back from '../assets/left-arrow.png'
import player from '../assets/soccer-player.png'
import InputBox from '../components/InputBox'
import { editPlayer } from '../services/api'

const EditarAtletas: React.FC = () => {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [contract, setContract] = useState('')
  const [income, setIncome] = useState('')
  const [age, setAge] = useState('')
  const [bond, setBond] = useState('')
  const [shirt, setShirt] = useState('')

  const { nome } = useParams()

  const navigate = useNavigate()

  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault()

    const a = {
      nome: name,
      posicao: position,
      termino_contrato: new Date(contract),
      salario: parseInt(income),
      idade: parseInt(age),
      vinculo: bond,
      camisa: parseInt(shirt),
    }

    console.log(a)

    const { data } = await editPlayer(a, nome!)

    console.log('jogador adicionado: ', data)
    navigate('/jogadores')
  }

  useEffect(() => {
    console.log(age)
    const a = new Date(age)
    if (!isNaN(a.getTime())) {
      console.log(a.toISOString())
    }
  }, [age])

  return (
    <Container>
      <Header>
        <h1>Editar jogador</h1>
      </Header>
      <LoginBox onSubmit={handleSubmit}>
        <Player src={player} />
        <InputBox
          input="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <InputBox
          input="Posição"
          value={position}
          onChange={e => setPosition(e.target.value)}
        />
        <InputBox
          input="Término do contrato"
          type="date"
          value={contract}
          onChange={e => setContract(e.target.value)}
        />
        <InputBox
          input="Salário"
          type="number"
          value={income}
          onChange={e => setIncome(e.target.value)}
        />
        <InputBox
          input="Idade"
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <InputBox
          input="Vínculo"
          value={bond}
          onChange={e => setBond(e.target.value)}
        />
        <InputBox
          input="Camisa"
          type="number"
          value={shirt}
          onChange={e => setShirt(e.target.value)}
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

export default EditarAtletas

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
