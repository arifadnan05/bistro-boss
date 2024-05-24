import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(user) {
        return children;
    }
    if(loading) {
      return <span className="loading loading-bars loading-lg"></span>
    }
  return <Navigate state={location.pathname} to='/login'></Navigate>
}

export default PrivetRoutes
