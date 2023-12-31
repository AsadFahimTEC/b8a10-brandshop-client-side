import {createBrowserRouter} from "react-router-dom";
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
import Details from "../components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://b8-a10-brand-shop-server-side-gold.vercel.app/brands"),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoutes>
            <Product></Product>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://b8-a10-brand-shop-server-side-gold.vercel.app/brands"),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
        // loader: () => fetch("http://localhost:5070/products/:id"),
      },
      {
        path: "/updateproduct/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({params}) => fetch(`https://b8-a10-brand-shop-server-side-gold.vercel.app/products/${params.id}`),
      },
      {
        path: "/productdetails/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        // loader: () => fetch("http://localhost:5070/products"),
      },
    ],
  },
]);


export default router;

    