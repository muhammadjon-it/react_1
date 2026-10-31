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
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Welcome Back</h2>
          <p className="text-sm text-slate-500 mt-2">Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              name="email" 
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200" 
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Password
            </label>
            <input 
              type="password" 
              name="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200" 
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 active:shadow-none transition-all duration-200 cursor-pointer"
          >
            Sign In
          </button>
        </form>

      </div>
    </div>
  )
}

export default Login
