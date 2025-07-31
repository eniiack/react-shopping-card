import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


export default function AppLayouts({children}){
    return (
        <>
            <Header />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                {children}
            </div>
            <Footer />
        </>
    )
}