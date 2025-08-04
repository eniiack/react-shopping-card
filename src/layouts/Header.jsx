import { NavLink } from "react-router-dom";
import {useCallback, useContext, useMemo, memo, lazy, Suspense} from "react";

import {CardContext} from "../context/CardContext.jsx";



import useAddToCart from "../hooks/useAddToCart.jsx";
import UseMinesCart from "../hooks/useMinesCart.jsx";

const CartItem = lazy(() => import("../components/CartItem.jsx"));


const Header = () => {

    const { cartItems , setCartItems} = useContext(CardContext)

    const navigation = useMemo(() => [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
    ], []);

    const {addToCart}  = useAddToCart(cartItems, setCartItems);
    const {minesCart} = UseMinesCart(cartItems, setCartItems)


    const addToCardHandler = useCallback((product) => {
        addToCart(product, product.id);
    }, [addToCart]);

    const minesCartHandler = useCallback((product) => {
        minesCart(product, product.count);
    }, [minesCart]);


    const total = useMemo(()=>{
        return cartItems.reduce((sum, item) => sum + item.price * item.count, 0);
    },[cartItems]);




    return (
        <nav className="bg-gray-800 relative z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* لوگو و منو - وسط و راست */}
                    <div className="flex flex-1 items-center justify-center sm:justify-start">
                        <div className="flex shrink-0 items-center mr-4">
                            <img
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={item.href}
                                        aria-current={item.current ? "page" : undefined}
                                        className={({ isActive }) =>
                                            `${isActive
                                                ? "bg-gray-900 text-white"
                                                : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                            } rounded-md px-3 py-2 text-sm font-medium`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ✅ آیکن سبد خرید - سمت چپ */}
                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <button className="text-gray-300 hover:text-white focus:outline-none relative">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8h14l-2-8M10 21h4"
                                    />
                                </svg>
                                <Suspense fallback={<div className="p-4 text-center">در حال بارگذاری...</div>}>
                                    {cartItems.length > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 py-0.5 rounded-full">
                    {cartItems.length}

                  </span>

                                    )}
                                </Suspense >

                            </button>

                            {/* 🟨 Dropdown Cart */}
                            <div className="absolute left-0 mt-2 w-80 bg-white text-black rounded-xl shadow-xl border hidden group-hover:block z-50">
                                <div className="p-4 max-h-64 overflow-y-auto space-y-3">
                                    {cartItems.length === 0 ? (
                                        <p className="text-center text-sm text-gray-500">سبد خرید خالی است</p>
                                    ) : (
                                        cartItems.map((product) => (
                                            <CartItem
                                                key={product.id}
                                                product={product}
                                                onAdd={addToCardHandler}
                                                onRemove={minesCartHandler}
                                            />
                                        ))
                                    )}
                                </div>

                                <div className="border-t p-3 flex justify-between items-center">
                                    <span className="font-bold text-sm">جمع کل:</span>
                                    <span className="text-green-700 font-bold text-sm">
      {total.toLocaleString()} ریال
    </span>
                                </div>

                                <div className="border-t px-4 py-2 text-center">
                                    <NavLink
                                        to="/checkout"
                                        className="text-sm text-white bg-green-600 hover:bg-green-700 px-4 py-1.5 rounded-xl inline-block w-full"
                                    >
                                        رفتن به پرداخت
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default memo(Header);