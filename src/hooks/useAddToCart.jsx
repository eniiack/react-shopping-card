// useAddToCart.js
import { useEffect } from "react";

export default function useAddToCart(cartItems, setCartItems) {
    const addToCart = (post, productId) => {
        const itemExists = cartItems.some((item) => item.id === post?.id);
        if (itemExists) {
            const updatedCart = cartItems.map((item) =>
                item.id === post?.id
                    ? { ...item, count: item.count + 1 }
                    : item
            );
            setCartItems(updatedCart);
        } else {
            setCartItems((prev) => [
                ...prev,
                {
                    id: productId,
                    count: 1,
                    name: post?.name,
                    description: post?.description,
                    price: post?.price,
                    category: post?.category,
                    image: post?.image,
                },
            ]);
        }
    };


    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    return { addToCart };
}
