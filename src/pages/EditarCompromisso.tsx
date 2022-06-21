import styled from '@emotion/styled'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import background from '../assets/background_dashboard.png'
import back from '../assets/left-arrow.png'
import player from '../assets/soccer-player.png'
import InputBox from '../components/InputBox'
import { editCompromissos } from '../services/api'

const EditarCompromisso: React.FC = () => {
  const navigate = useNavigate()

  const { uuid } = useParams()

  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault()

    const { data } = await editCompromissos(
      {
        data: new Date(date),
        horario: new Date(time),
        local: place,
        torneio: type,
      },
      uuid!,
    )

    console.log('compromisso adicionado: ', data)
    navigate('/compromissos')
  }

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [type, setType] = useState('')
  const [place, setPlace] = useState('')

  return (
    <Container>
      <Header>
        <h1>Editar compromisso</h1>
      </Header>
      <LoginBox onSubmit={handleSubmit}>
        <Player src={player} />

        <InputBox
          input="Data"
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <InputBox
          input="Horário"
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />

        <InputBox
          input="Tipo"
          value={type}
          onChange={e => setType(e.target.value)}
        />

        <InputBox
          input="Local"
          value={place}
          onChange={e => setPlace(e.target.value)}
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

export default EditarCompromisso

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
