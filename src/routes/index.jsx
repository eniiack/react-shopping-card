import {createBrowserRouter} from "react-router-dom";
import ProdoctsPage from "../pages/ProdoctsPage.jsx";
import ProductsDetailPage from "../pages/ProductsDetailPage.jsx";
import Home from "../pages/Home.jsx";
import Root from "./Root.jsx";
import CartPage from "../pages/CartPage.jsx";
import CheckoutPage from "../pages/CheckoutPage.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <ProdoctsPage />
            },
            {
                path: "/products/:productId",
                element: <ProductsDetailPage />
            },
            {
                path: "/card",
                element: <CartPage />
            },
            {
                path: "/checkout",
                element: <CheckoutPage />
            },
        ]
    },

])


export default router