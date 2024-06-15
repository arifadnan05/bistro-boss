import { Navigate, useLocation } from "react-router-dom"
import useAdmin from "../../../../hooks/useAdmin"
import useAuth from "../../../../hooks/useAuth"

// eslint-disable-next-line react/prop-types
const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <process className="progress w-56"></process>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
}

export default AdminRoutes
