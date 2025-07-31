import Header from "../layouts/Header.jsx";
import Footer from "../layouts/Footer.jsx";
import {Outlet} from "react-router-dom";
import {CardContext} from "../context/CardContext.jsx";
import {useEffect, useState} from "react";


export default function Root(){

    const [cartItems, setCartItems] = useState([]);

    // وقتی کامپوننت mount شد، localStorage رو بخون
    useEffect(() => {
        const saved = localStorage.getItem("cart");
        if (saved) setCartItems(JSON.parse(saved));
    }, []);

    // وقتی cartItems تغییر کرد، localStorage رو آپدیت کن
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);


    return (
       <>
           <CardContext.Provider value={{cartItems , setCartItems}}>
               <Header />
               <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                   <Outlet />
               </div>
               <Footer />
           </CardContext.Provider >
       </>
    )
}