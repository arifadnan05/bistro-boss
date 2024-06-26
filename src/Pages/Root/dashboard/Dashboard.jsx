
import { FaBook, FaHome, FaList,  FaUsers, FaUtensils } from "react-icons/fa"
import {  MdMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom"
import useAdmin from "../../../hooks/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">

                    {
                        isAdmin ? <>
                            <li className=""><NavLink to='/dashboard/admin-home'>
                                <FaHome />
                                Admin Home</NavLink>
                            </li>
                            <li className=""><NavLink to='/dashboard/add-items'>
                                <FaUtensils />
                                Add Items</NavLink>
                            </li>
                            <li className=""><NavLink to='/dashboard/manage-items'>
                                <FaList />
                                Manage Items</NavLink>
                            </li>
                            <li className=""><NavLink to='/dashboard/manage-bookings'>
                                <FaBook />
                                Manage Bookings</NavLink>
                            </li>
                            <li className=""><NavLink to='/dashboard/users'>
                                <FaUsers />
                                All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <div className="divider"></div>
                                <li className=""><NavLink to='/'>
                                    <FaHome />
                                    Home</NavLink>
                                </li>
                                <li className=""><NavLink to='/'>
                                    <MdMenu />
                                    Menu</NavLink>
                                </li>
                                <li className=""><NavLink to='/'>
                                    <FaHome />
                                    Contact</NavLink>
                                </li>
                            </>
                    }



                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard
