export default function UseMinesCart(cartItems , setCartItems){
    const minesCart = (product , count) => {
        const itemExists = cartItems.some(item => item.id === product?.id);

        if (itemExists) {
            if (count != 1) {
                const updatedCart = cartItems.map((item) =>
                    item.id === product?.id
                        ? {...item, count: item.count - 1}
                        : item
                );
                setCartItems(updatedCart);
            } else {
                let deleteCart = cartItems.filter((item) => {
                    return item?.id !== product?.id
                });
                setCartItems(deleteCart)
            }
        }
    }
    return {minesCart};
}