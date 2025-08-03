import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Root = lazy(() => import("./Root.jsx"));
const Home = lazy(() => import("../pages/Home.jsx"));
const Products = lazy(() => import("../pages/ProdoctsPage.jsx"));
const Checkout = lazy(() => import("../pages/CheckoutPage.jsx"));
const CartPage = lazy(() => import("../pages/CartPage.jsx"));
const ProductsDetailPage = lazy(() => import("../pages/ProductsDetailPage.jsx"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/products", element: <Products /> },
            { path: "/products/:productId", element: <ProductsDetailPage /> },
            { path: "/card", element: <CartPage /> },
            { path: "/checkout", element: <Checkout /> },
        ]
    }
]);

export default router;
