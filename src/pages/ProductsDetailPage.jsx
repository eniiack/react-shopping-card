import {useParams} from "react-router-dom";
import {useContext} from "react";
import {CardContext} from "../context/CardContext.jsx";
import useAddToCart from "../hooks/useAddToCart.jsx";
import useFetchProduct from "../hooks/useFetchProduct.jsx";

export default function ProductsDetailPage() {

     const {cartItems , setCartItems} = useContext(CardContext)

    const {productId} = useParams();

    const post = useFetchProduct(productId)


    const {addToCart}  = useAddToCart(cartItems, setCartItems);
    const addToCardHandler = () => {
        addToCart(post, productId);
    }


    if (!post) {
        return <img className="w-20" src="../src/assets/Hourglass.gif" alt="Loading..." />
    }

    return (
        <main className="product-detail">
            <img src={`../${post?.image}`} className="product-image" alt="محصول"/>
            <div className="product-info">
                <h2>{post?.name}</h2>
                <p className="price">{post?.price.toLocaleString()} ریال</p>
                <p className="description">{post?.description}</p>
                <button onClick={()=>addToCardHandler(post)}  className="buy-btn">افزودن به سبد خرید</button>
            </div>
        </main>



    )
}