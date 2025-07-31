import {Fragment, useContext} from "react";
import {CardContext} from "../context/CardContext.jsx";

export default function CartPage() {

    const {cartItems} = useContext(CardContext)

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);

    return (
        <main className="cart">
            {cartItems.length > 0 ? (

                cartItems.map((cart, index) => (
                    <Fragment key={cart?.id}>
                        <div  className="cart-item">
                            <img className="  h-[150px]" src={ cart?.image } alt="محصول"/>
                            <div >
                                <h3>{ cart?.name }</h3>
                                <p>{cart?.count} عدد × { cart?.price.toLocaleString() } ریال</p>
                            </div>
                            <span className="price">{(cart.price * cart.count).toLocaleString()} ریال </span>
                        </div>
                    </Fragment>
                ))
            ) : (
                <h2>سبد خرید شما خالی است</h2>
            )}
            <div  className="cart-summary">
                <p>جمع کل: <strong> ریال {totalPrice.toLocaleString()}</strong></p>
                <a href="checkout.html" className="buy-btn">ادامه خرید</a>
            </div>

        </main>

    )
}