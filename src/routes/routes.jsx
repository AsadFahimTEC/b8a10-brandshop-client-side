import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import Cart from "../components/shared/Cart";
import Login from "../components/shared/Login";
import Product from "../components/shared/Product";
import ErrorPage from "../components/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Register from "../components/shared/Register";



    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root></Root>,
            errorElement: <ErrorPage></ErrorPage>,
    
            children:[
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () =>fetch('/brand.json')
                   
                },   
                {
                    path: '/product',
                    element: <PrivateRoutes>
                        <Product></Product>
                    </PrivateRoutes>,
                   
                },   
                {
                    path: '/cart',
                    element: <Cart></Cart>,
                   
                },   
                {
                    path: '/login',
                    element: <Login></Login>,
                   
                },   
                {
                    path: '/register',
                    element: <Register></Register>,
                   
                },   
                
            ] 
           
        }
    ])

 export default router;