import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";


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
            }
        ]
    }
])
export default router