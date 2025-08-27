
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

            {(state.products.length > 0)
                ? (<div className="product-grid">
                        {
                            state.products.map((p) => (
                                <ProductCard key={p.id} product={p}/>
                            ))
                        }
                    </div>)
                : (<div className="text-center text-2xl text-gray-500">No products found</div>)
            }


        </div>
    );
};

export default ProductList;
