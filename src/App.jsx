
import Header from "./sections/Header.jsx";
import AnnouncementBar from "./sections/AnnouncementBar.jsx";
import NewsLatter from "./sections/NewsLatter.jsx";
import Footer from "./sections/Footer.jsx";
import Cart from "./sections/Cart.jsx";
import ProductList from "./sections/ProductList.jsx";
import {AppContext} from "./context/Context.jsx";
import {useReducer} from "react";
import {ProductData} from "./data/data.js";
import CartReducer from "./reducers/CartReducer.js";

const App = () => {

    const [state, dispatch] = useReducer(CartReducer, {
        cart : [],
        products : ProductData,
        allProducts: ProductData
    })

    return (
        <>
            <AppContext.Provider value={{state, dispatch}}>
                <AnnouncementBar/>
                <Header/>
                <main className="container mx-auto px-4 md:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <ProductList/>
                        <Cart/>
                    </div>
                </main>
                <NewsLatter/>
                <Footer/>
            </AppContext.Provider>
        </>
    );
};

export default App;