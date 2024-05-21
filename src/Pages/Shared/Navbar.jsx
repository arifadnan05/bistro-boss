import { NavLink } from 'react-router-dom'
import profile from '../../assets/others/profile.png'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import icon from '../../assets/icon/cart.png'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        return logOut()

    }
    const navLinks = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <li>CONTACT Us</li>
        <li>DASHBOARD</li>
        <NavLink to='/menu'><li>Our Menu</li></NavLink>
        <NavLink to='/order/drinks'><li>Order Food</li></NavLink>
        <li>
            <NavLink to='/order/drinks'>
                <img className='w-[62px]' src={icon} alt="" />
                <div className="badge badge-secondary">+99</div>
            </NavLink>
        </li>

        {
            user ? <>
                <li onClick={handleLogOut}>Logout</li>
            </> : <>
                <NavLink to='/login'> <li>login</li></NavLink>
            </>
        }

        <img className="object-cover w-10 h-10 rounded-full" src={profile} />
    </>
    return (
        <div className="navbar h-[130px] fixed z-10 bg-[#15151580] max-w-screen-xl">
            <div className="md:mr-64 lg:mr-80">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content text-white mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white">BISTRO BOSS</a>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu space-x-6 flex items-center menu-horizontal px-1 text-[14px] text-white">
                    {navLinks}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
