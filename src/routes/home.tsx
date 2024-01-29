import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

import { auth } from '../firebase'

const Home = () => {
  const navigate = useNavigate()

  const onClick = () => {
    auth.signOut()

    navigate('/login')
  }

  return (
    <>
      <Button onClick={onClick}>Log Out</Button>
    </>
  )
}

export default Home

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 420px;
  height: 38.5px;
  margin-top: 150px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
