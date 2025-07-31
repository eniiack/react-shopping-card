// hooks/useFetchProduct.js
import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchProduct(productId) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!productId) return;

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://68185c425a4b07b9d1cebb26.mockapi.io/todos/${productId}`);
                setData(response.data);
            } catch (error) {
                console.error("❌ خطا در گرفتن محصول:", error);
            }
        };

        fetchData();
    }, [productId]);

    return data;
}
