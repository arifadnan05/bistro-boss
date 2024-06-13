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
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            // Admin Routes

            {
                path: 'users',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            }
            
        ]
    }
])
export default router