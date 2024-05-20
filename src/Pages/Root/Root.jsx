import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Shared/Footer'
import Navbar from '../Shared/Navbar'

const Root = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default Root
