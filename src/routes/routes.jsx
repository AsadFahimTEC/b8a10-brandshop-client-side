import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import Cart from "../components/shared/Cart";
import Login from "../components/shared/Login";
import Product from "../components/shared/Product";
import ErrorPage from "../components/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Register from "../components/shared/Register";
import Products from "../components/Products";
import UpdateProduct from "../components/shared/UpdateProduct";
import ProductDetails from "../components/shared/ProductDetails";



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
                    path: '/addproduct',
                    element: <PrivateRoutes>
                        <Product></Product>
                    </PrivateRoutes>,
                     loader: () => fetch('http://localhost:5070/products'),
                   
                },   
                {
                    path: '/cart',
                    element: <PrivateRoutes>
                        <Cart></Cart>
                        </PrivateRoutes>,
                    loader: () => fetch('http://localhost:5070/products'),
                   
                },   
                {
                    path: '/login',
                    element: <Login></Login>,
                   
                },   
                {
                    path: '/register',
                    element: <Register></Register>,
                   
                },   
                {
                    path: '/products',
                    element: <Products></Products>,
                    loader: () => fetch('http://localhost:5070/products')
                },
                {
                    path:'/updateproduct',
                    element: <UpdateProduct></UpdateProduct>,
                },
                {
                    path:'/productdetails',
                    element: <PrivateRoutes>
                        <ProductDetails></ProductDetails>
                    </PrivateRoutes>,
                }
                
            ] 
           
        }
    ])

 export default router;