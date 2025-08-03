import MinesCartButton from "./buttons/MinesCartButton.jsx";
import AddToCartButton from "./buttons/AddToCartButton.jsx";
import {NavLink} from "react-router-dom";
import {memo} from "react";

const CartItem = ({product, onAdd, onRemove }) => {
    return (
        <div key={product.id} className="flex gap-3 border-b pb-2">
            <img
                src={`../${product.image}`}
                className="w-12 h-12 object-cover rounded"
            />
            <div className="flex-1">
                <p className="font-medium text-sm">{product.name}</p>
                <p className="text-xs text-gray-600 mb-1">
                    {product.count} عدد × {product.price.toLocaleString()} ریال
                </p>

                {/* دکمه‌های + و − */}
                <div className="flex items-center gap-2">

                    <MinesCartButton onClick={()=>onRemove(product ,  product.count)}
                                     className="cursor-pointer w-6 h-6 bg-red-500 text-white rounded hover:bg-red-600 text-sm" />
                    <span className="text-sm font-bold">{product.count}</span>

                    <AddToCartButton onClick={()=>onAdd(product , product?.id)}
                                     className="cursor-pointer w-6 h-6 bg-green-500 text-white rounded
                                                                          hover:bg-green-600 text-sm" />
                </div>
            </div>
            <div className="text-sm font-semibold whitespace-nowrap">
                {(product.count * product.price).toLocaleString()} ریال
            </div>
        </div>
    )
}

export default memo(CartItem);