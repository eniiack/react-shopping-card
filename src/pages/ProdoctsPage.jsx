import { lazy, Suspense, useContext, useMemo, useCallback } from "react";
import LoadingIndicator from "../components/LoadingIndicator.jsx";
import FetchProducts from "../hooks/useFetchProducts.jsx";
import { CardContext } from "../context/CardContext.jsx";
import useAddToCart from "../hooks/useAddToCart.jsx";
import useMinesCart from "../hooks/useMinesCart.jsx";

const Cart = lazy(() => import("../components/Cart.jsx"));

export default function ProductsPage() {
    const posts = FetchProducts();
    const hasProducts = posts.length > 0;

    const { cartItems, setCartItems } = useContext(CardContext);
    const { addToCart } = useAddToCart(cartItems, setCartItems);
    const { minesCart } = useMinesCart(cartItems, setCartItems);

    const countMap = useMemo(() => {
        const map = new Map();
        cartItems.forEach(item => map.set(item.id, item.count));
        return map;
    }, [cartItems]);

    const getCount = useCallback((productId) => {
        return countMap.get(productId) || 0;
    }, [countMap]);

    return (
        <main className={hasProducts ? 'grid grid-cols-4 gap-6 p-4' : 'flex justify-center items-center min-h-screen'}>
            {hasProducts ? (
                <Suspense fallback={<LoadingIndicator />}>
                    {posts.map(product => (
                        <Cart
                            key={product.id}
                            product={product}
                            count={getCount(product.id)}
                            addToCart={addToCart}
                            minesCart={minesCart}
                        />
                    ))}
                </Suspense>
            ) : (
                <LoadingIndicator />
            )}
        </main>
    );
}
