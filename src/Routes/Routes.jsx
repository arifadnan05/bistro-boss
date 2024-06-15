import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Root/dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivetRoutes from "./PrivetRoutes";
import AllUsers from "../Pages/Root/dashboard/AllUsers/AllUsers";
import AdminRoutes from "../Pages/Root/dashboard/AdminRoute/AdminRoutes";
import AddItem from "../Pages/Root/dashboard/AddItem/AddItem";
import ManageItems from "../Pages/Root/dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Root/dashboard/Payment/Payment";


const router = createBrowserRouter ( [
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
        children: [
            // user route
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            // Admin Routes

            {
                path: 'users',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: 'add-items',
                element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
            },
            {
                path: 'manage-items',
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            }
            
        ]
    }
])
export default router