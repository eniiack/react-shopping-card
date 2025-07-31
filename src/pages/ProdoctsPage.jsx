import Cart from "../components/Cart.jsx";
import FetchProducts from "../hooks/useFetchProducts.jsx";
import LoadingIndicator from "../components/LoadingIndicator.jsx";

export default function ProdoctsPage(){

    const posts = FetchProducts()
    const hasProducts = posts.length > 0;


    return (
        <main className={hasProducts ? 'grid grid-cols-4 gap-6 p-4' : 'flex justify-center items-center min-h-screen'}>
            {hasProducts ? (
                posts.map(product => (
                    <Cart product={product} key={product?.id} />
                ))
            ) : (
                <LoadingIndicator />
            )}
        </main>
    );

}