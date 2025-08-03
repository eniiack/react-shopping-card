import {Link} from "react-router-dom";
import MinesCartButton from "./buttons/MinesCartButton.jsx";
import AddToCartButton from "./buttons/AddToCartButton.jsx";
import {memo} from "react";


const Cart = ({product , addToCart , minesCart , count}) => {


    return (
        <div
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center gap-3"
        >
            <Link
                to={`/products/${product.id}`}
                className="w-full flex flex-col items-center"
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-36 object-contain rounded"
                />
                <h3 className="text-center font-bold text-lg mt-2">
                    {product.name}
                </h3>
                <p className="text-green-600 font-semibold">
                    {product.price.toLocaleString()} ریال
                </p>
            </Link>

            {/* دکمه‌های افزایش/کاهش ظاهر */}
            <div className="flex items-center gap-3 mt-2">

                <MinesCartButton className=" cursor-pointer bg-red-500 text-white w-8 h-8 rounded hover:bg-red-600"
                                 onClick={() => minesCart(product , count)} />
                <span className="min-w-[24px] text-center font-bold">{count}</span>
                <AddToCartButton className=" cursor-pointer bg-green-500 text-white w-8 h-8 rounded hover:bg-green-600"
                                 onClick={()=>addToCart(product , product?.id)}  />
            </div>
        </div>
    )
}

export default memo(Cart, (prev, next) => {
    return prev.count === next.count &&
        prev.product.id === next.product.id;
});