import { getImgUrl } from "../utils/ImageURL.jsx";
import Rating from "../utils/Rating.jsx";
import {useContext} from "react";
import {AppContext} from "../context/Context.jsx";

const ProductCard = ({product}) => {

    const {state, dispatch} = useContext(AppContext);

    function handleAddToCart(product) {
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        })
    }

    const isAddedToCart = state.cart.find((p) => p.id === product.id);

    function handleRemoveFromCart(productID) {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: productID
        })
    }

    return (

        <div  className="bg-gray-100 min-w-[210px] rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center ">
                <img src={getImgUrl(product.image)} alt={product.title}
                     className="h-full w-auto object-cover"/>
            </div>
            <div className="p-4">
                <h3 className="font-medium truncate whitespace-nowrap">{product.name}</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center my-1">
                        <Rating value={product.rating}/>
                        <span className="text-xs text-gray-500 ml-1">{product.rating}/5</span>
                    </div>
                    <span className="text-xs text-gray-700">({product.stock} pcs left)</span>
                </div>
                <div className="flex items-center">
                    <p className="font-bold">${product.price}</p>
                    {product.oldPrice !== null &&
                        <p className="text-gray-400 line-through ml-2">${product.oldPrice}</p>}
                </div>

                {(isAddedToCart)
                    ? (<button
                        onClick={()=> handleRemoveFromCart(product.id)}
                        className="cursor-pointer w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
                            Remove from Cart
                        </button>)
                    : (<button
                        disabled={product.stock === 0}
                        className="cursor-pointer disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
                        onClick={() => handleAddToCart(product)}
                    >
                        Add to Cart
                    </button>)}


            </div>
        </div>
    );
};

export default ProductCard;