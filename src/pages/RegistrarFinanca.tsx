import styled from '@emotion/styled'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import background from '../assets/background_dashboard.png'
import back from '../assets/left-arrow.png'
import player from '../assets/soccer-player.png'
import InputBox from '../components/InputBox'
import { createFinancas } from '../services/api'

const RegistrarFinanca: React.FC = () => {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')

  const navigate = useNavigate()

  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault()

    const { data } = await createFinancas({
      nome: name,
      valor: parseInt(value),
      tipo: type,
      dataFinancas: new Date(date),
    })

    console.log('finança adicionada: ', data)

    navigate('/financas')
  }

  return (
    <Container>
      <Header>
        <h1>Cadastrar novas finanças</h1>
      </Header>
      <LoginBox onSubmit={handleSubmit}>
        <Player src={player} />

        <InputBox
          input="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Label htmlFor="type">Tipo:</Label>
        <Radio>
          <div>
            <input
              type="radio"
              value="Lucro"
              name="type"
              onChange={e => setType(e.target.value)}
              checked
            />
            Lucro
          </div>
          <div>
            <input
              type="radio"
              value="Gasto"
              name="type"
              onChange={e => setType(e.target.value)}
            />
            Gasto
          </div>
        </Radio>

        <InputBox
          input="Valor"
          type="number"
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        <InputBox
          input="Data"
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
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

export default RegistrarFinanca

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

const Radio = styled.div`
  display: flex;
  gap: 8rem;
`

const Label = styled.label`
  padding-right: 22.5rem;
  margin-top: 0.5rem;
`
