
import ProductCard from "../components/ProductCard.jsx";
import SortedProducts from "../components/SortedProducts.jsx";
import {useContext} from "react";
import {AppContext} from "../context/Context.jsx";

const ProductList = () => {

    const {state} = useContext(AppContext);

    return (
        <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Your Products</h2>
                <SortedProducts/>
            </div>


            <div className="product-grid">
                {
                    state.products.map((p)=> (
                        <ProductCard key={p.id} product={p}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductList;