import React, {useContext} from 'react';
import {getImgUrl} from "../utils/ImageURL.jsx";
import {AppContext} from "../context/Context.jsx";

const YourCart = () => {

    const {state, dispatch} = useContext(AppContext)

    function handleAddToCart(product) {
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        })
    }


    function handleRemoveFromCart(productID) {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: productID
        })
    }

    function handleDelete(productID) {
        dispatch({
            type: "DELETE_PRODUCT",
            payload: productID
        })
    }

    return (
        <>
            {state.cart.map((p) => {
                const product = state.products.find((pp) => pp.id === p.id);
                return (
                    <div key={p.id} className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
                        <div
                            className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                            <img src={getImgUrl(p.image)} alt={p.name}
                                 className="h-full w-auto object-cover"/>
                        </div>
                        <div className="flex-grow">
                            <div className="flex justify-between">
                                <h3 className="font-medium">{p.name}</h3>
                                <span onClick={()=>handleDelete(p.id)} className="cursor-pointer text-red-500 text-sm">×</span>
                            </div>
                            <p className="text-sm text-gray-500">Size: Large</p>
                            <p className="text-sm text-gray-500">Color: White</p>
                            <div className="flex justify-between items-center mt-2">
                                <p className="font-bold">${p.price}</p>
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="cursor-pointer w-6 h-6 bg-gray-100 rounded flex items-center justify-center"

                                        onClick={() => {
                                            handleRemoveFromCart(p.id)
                                        }}
                                    >
                                        −
                                    </button>
                                    <span className="text-sm">{p.quantity}</span>
                                    <button
                                        className="cursor-pointer w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                                        disabled={product.stock === 0}
                                        onClick={() => {
                                            handleAddToCart(p)
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default YourCart;