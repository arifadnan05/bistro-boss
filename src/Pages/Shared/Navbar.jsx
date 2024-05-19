import { NavLink } from 'react-router-dom'
import profile from '../../assets/others/profile.png'
const Navbar = () => {
    const navLinks = <>
        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <li><a>CONTACT Us</a></li>
        <li><a>DASHBOARD</a></li>
        <NavLink to='/menu'><li><a>Our Menu</a></li></NavLink>
        <NavLink to='/order'><li><a>Order</a></li></NavLink>
        <li><a>Sing Out</a></li>
        <img className="object-cover w-10 h-10 rounded-full" src={profile} />
    </>
    return (
        <div className="navbar fixed z-10 opacity-30 bg-[#15151580] max-w-screen-xl">
            <div className="navbar-start">
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
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[14px] text-white">
                    {navLinks}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
