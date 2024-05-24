import { BiBook } from "react-icons/bi";
import { FaHome, FaShoppingCart } from "react-icons/fa"
import { FaCalendar } from "react-icons/fa6"
import { MdFeedback } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom"


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li className=""><NavLink to='/dashboard/userHome'>
                        <FaHome />
                        User Home</NavLink>
                    </li>
                    <li className=""><NavLink to='/dashboard/reservation'>
                        <FaCalendar />
                        Reservation</NavLink>
                    </li>
                    <li className=""><NavLink to='/dashboard/cart'>
                        <FaShoppingCart />
                        My cart</NavLink>
                    </li>
                    <li className=""><NavLink to='/dashboard/review'>
                        <MdFeedback />
                        Add Review</NavLink>
                    </li>
                    <li className=""><NavLink to='/dashboard/bookings'>
                        <BiBook />
                        My Booking</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li className=""><NavLink to='/'>
                        <FaHome />
                        Home</NavLink>
                    </li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard
