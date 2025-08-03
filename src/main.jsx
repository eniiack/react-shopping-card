import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import AppRouter from "./routes"
import {Suspense} from "react";


createRoot(document.getElementById('root')).render(
    <Suspense fallback={<div className="p-4 text-center">در حال بارگذاری...</div>}>
        <RouterProvider router={AppRouter} />
    </Suspense>
)
