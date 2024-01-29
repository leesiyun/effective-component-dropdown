import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { auth } from '../firebase'
import {
  Title,
  Wrapper,
  Form,
  Input,
  Switcher,
} from '../components/AuthComponents'

const CreateAccount = () => {
  const navigate = useNavigate()
  const [isLoading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e

    if (name === 'name') return setName(value)
    if (name === 'email') return setEmail(value)
    if (name === 'password') return setPassword(value)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (isLoading || name === '' || email === '' || password === '') return

    try {
      setLoading(true)

      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      await updateProfile(credentials.user, {
        displayName: name,
      })

      navigate('/')
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Wrapper>
      <Title>Join App</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name='name'
          value={name}
          placeholder='Name'
          type='text'
          required
        />
        <Input
          onChange={onChange}
          name='email'
          value={email}
          placeholder='Email'
          type='email'
          required
        />
        <Input
          onChange={onChange}
          name='password'
          value={password}
          placeholder='Password'
          type='password'
          required
        />
        <Input type='submit' value={isLoading ? 'Loading' : 'Create Account'} />
      </Form>
      {error !== '' && <Error>{error}</Error>}
      <Switcher>
        Already have an account?
        <Link to='/login'>Log in &rarr;</Link>
      </Switcher>
    </Wrapper>
  )
}

export default CreateAccount
