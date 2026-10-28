import { Navigate, useLocation } from 'react-router'

const Auth = ({ children }) => {
    const location = useLocation()
    const token = localStorage.getItem("token")
    const isLoginPage = location.pathname === '/login'

    if (token && isLoginPage) {
        return <Navigate to="/login" replace />
    }

    if (!token && !isLoginPage) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default Auth