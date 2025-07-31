import {useEffect, useState} from "react";
import axios from "axios";

export default function FetchProducts () {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get('https://68185c425a4b07b9d1cebb26.mockapi.io/todos');
                setData(response.data)
            } catch (error) {
                console.error("❌ خطا در دریافت داده:", error);
            }
        };
        getPosts();
    }, []);
    return data;

}