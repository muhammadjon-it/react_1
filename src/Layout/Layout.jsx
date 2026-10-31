import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hasToken, setHasToken] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setHasToken(true)
            setIsOpen(false)
        } else {
            setHasToken(false)
            setIsOpen(true)
        }
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        localStorage.setItem("token", "true")
        setHasToken(true)
        setIsOpen(false)
    }

    const handleOpenChange = (open) => {
        const token = localStorage.getItem("token")
        if (!open && !token) {
            setIsOpen(true)
        } else {
            setIsOpen(open)
        }
    }

    return (
        <div>
            <nav className='flex justify-between py-1 px-10 fixed z-12 backdrop-blur-2xl w-[87%] items-center' >
                <div className='flex gap-3'>
                    <Link 
                        to={hasToken ? "/" : "#"} 
                        className={!hasToken ? "cursor-not-allowed opacity-50" : ""}
                        onClick={(e) => !hasToken && e.preventDefault()}
                    >
                        Home
                    </Link>
                    <Link 
                        to={hasToken ? "/about" : "#"} 
                        className={!hasToken ? "cursor-not-allowed opacity-50" : ""}
                        onClick={(e) => !hasToken && e.preventDefault()}
                    >
                        About
                    </Link>
                    <Link 
                        to={hasToken ? "/products" : "#"} 
                        className={!hasToken ? "cursor-not-allowed opacity-50" : ""}
                        onClick={(e) => !hasToken && e.preventDefault()}
                    >
                        Products
                    </Link>

                    <Dialog open={isOpen} onOpenChange={handleOpenChange} >
                        <DialogTrigger className="cursor-pointer hover:text-[#46A358] transition-colors">
                            Login
                        </DialogTrigger>

                        <DialogContent 
                            className="border-none border-b-[10px] border-b-[#46A358] rounded-[2px] bg-white  focus:outline-none focus-visible:ring-0 [&>button]:hidden"
                            onPointerDownOutside={(e) => e.preventDefault()}
                            onEscapeKeyDown={(e) => e.preventDefault()}
                        >
                            <DialogHeader className="space-y-2 text-center">
                                <DialogTitle className="flex justify-center items-center gap-3 text-[20px] font-medium text-[#3D3D3D] select-none">
                                    <span className="text-[#46A358] font-bold cursor-pointer">Login</span>
                                    <span className="text-[#EAEAEA]">|</span>
                                    <span className="text-[#3D3D3D] cursor-pointer hover:text-[#46A358] transition-colors">Register</span>
                                </DialogTitle>
                                <DialogDescription className="text-center text-[13px] text-[#727272] pt-2">
                                    Enter your username and password to login.
                                </DialogDescription>
                            </DialogHeader>

                            <form className="mt-5 space-y-4 text-left" onSubmit={handleLogin}>
                                <div className="flex flex-col">
                                    <input
                                        type="email"
                                        required
                                        placeholder='almamun_uxui@outlook.com'
                                        className="w-full h-[40px] px-3 border border-[#EAEAEA] rounded-[5px] text-[14px] text-[#3D3D3D] outline-none focus:border-[#46A358] transition-colors placeholder:text-[#A5A5A5]"
                                    />
                                </div>

                                <div className="relative flex flex-col">
                                    <input
                                        type="password"
                                        required
                                        placeholder='***********'
                                        className="w-full h-[40px] pl-3 pr-10 border border-[#EAEAEA] rounded-[5px] text-[14px] text-[#3D3D3D] outline-none focus:border-[#46A358] transition-colors placeholder:text-[#A5A5A5]"
                                    />
                                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#A5A5A5] hover:text-[#46A358] transition-colors">
                                        <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="text-right">
                                    <a href="#" className="text-[14px] text-[#46A358] hover:underline font-medium">
                                        Forgot Password?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-[45px] bg-[#46A358] text-white font-bold rounded-[5px] text-[16px] hover:bg-[#3b8b4a] transition-colors cursor-pointer mt-2"
                                >
                                    Login
                                </button>

                                <div className="relative flex py-3 items-center">
                                    <div className="flex-grow border-t border-[#EAEAEA]"></div>
                                    <span className="flex-shrink mx-3 text-[#3D3D3D] text-[13px]">Or login with</span>
                                    <div className="flex-grow border-t border-[#EAEAEA]"></div>
                                </div>

                                <div className="space-y-3">
                                    <button
                                        type="button"
                                        className="w-full h-[40px] border border-[#EAEAEA] rounded-[5px] flex items-center justify-center gap-3 text-[13px] font-medium text-[#727272] hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://w3.org">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        Login with Google
                                    </button>

                                    <button
                                        type="button"
                                        className="w-full h-[40px] border border-[#EAEAEA] rounded-[5px] flex items-center justify-center gap-3 text-[13px] font-medium text-[#727272] hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
                                        </svg>
                                        Login with Facebook
                                    </button>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
