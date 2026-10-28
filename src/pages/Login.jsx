import { LoginRequest } from '@/api/Auth'
import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const obj = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        const token = await LoginRequest(obj)

        if (token) {
            navigate('/todos', {replace: true})
        }
    }
  return (
    <div className="pt-20">
        <form onSubmit={handleSubmit}>
            <input type="email" className='border' name='email' />
            <input type="password" className='border' name='password' />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Login