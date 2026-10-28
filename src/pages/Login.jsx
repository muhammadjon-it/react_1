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
            navigate('/', {replace: true})
        }
    }
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 font-sans">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">Login</h2>
        
        <div className="mb-4">
          <label className="text-start mb-1 block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name='email'
            placeholder="example@mail.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-base outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="text-start mb-1 block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            name='password'
            placeholder="••••••••"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-base outline-none"
          />
        </div>

        <button type="submit" className="cursor-pointer w-full rounded-lg bg-blue-600 py-2.5 text-base font-medium text-white">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login