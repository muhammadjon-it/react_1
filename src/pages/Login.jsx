import { LoginRequest } from '@/api/Auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const obj = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    const token = await LoginRequest(obj)
    if (token) {
      navigate('/', { replace: true })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
      <div className="relative  bg-white shadow-2xl p-5 rounded-[5px] w-100 border-b-[10px] border-[#46A358]">

        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer">
          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex justify-center items-center gap-4 mb-10 text-xl font-medium">
          <span className="text-[#46A358] font-bold cursor-pointer">Login</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500 hover:text-[#46A358] cursor-pointer transition-colors">Register</span>
        </div>
        <p className="text-sm text-gray-500 mb-4 text-left">
          Enter your username and password to login.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="almamun_uxui@outlook.com"
              className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none text-gray-800 placeholder-gray-400 focus:border-[#46A358] transition-all duration-200 text-sm"
              required
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="***********"
              className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none text-gray-800 placeholder-gray-400 focus:border-[#46A358] transition-all duration-200 text-sm"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-400 cursor-pointer hover:text-gray-600"
            >
              {showPassword ? (
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#46A358] hover:underline">
              Forgot Password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#46A358] hover:bg-[#3b8a4a] text-white font-bold rounded-md shadow-md transition-all duration-200 cursor-pointer text-sm"
          >
            Login
          </button>
        </form>
        <div className="mt-8 text-center">
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-xs text-gray-400">Or login with</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <div className="mt-4 space-y-3">
            <button className="w-full flex items-center justify-center gap-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://w3.org">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
              </svg>
              Login with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-2.5 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://w3.org">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
