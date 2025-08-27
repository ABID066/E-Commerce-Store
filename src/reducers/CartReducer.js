export default function CartReducer(state, action) {
    switch (action.type) {

        case "ADD_TO_CART": {
            const product = action.payload;

            const isExist = state.cart.find((p) => p.id === product.id);

            let updatedCart;

            if (isExist) {
                updatedCart = state.cart.map((p) =>
                    p.id === product.id
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            } else {
                updatedCart = [...state.cart, { ...product, quantity: 1 }];
            }

            let updatedProducts = state.products.map((p)=>
                p.id === product.id
                    ? {...p, stock: p.stock - 1}
                    : p

            );

            return {...state, cart: updatedCart, products: updatedProducts, };
        }

        case "REMOVE_FROM_CART": {
            const productID = action.payload;

            const isExist = state.cart.find((p) => p.id === productID);

            if (!isExist) return state

            let updatedCart;
            if (isExist.quantity > 1) {
                updatedCart = state.cart.map((p) =>
                    p.id === productID
                        ? { ...p, quantity: p.quantity - 1 }
                        : p
                )
            } else {
                updatedCart=state.cart.filter((p) => p.id !== productID)
            }


            let updatedProduct = state.products.map((p)=>
                p.id === productID
                    ? {...p, stock: p.stock + 1}
                    : p

            );

            return {...state, cart: updatedCart, products: updatedProduct}
        }

        case "DELETE_PRODUCT" : {
            const productID = action.payload;

            const isExist = state.cart.find((p) => p.id === productID);

            const updatedCart=state.cart.filter((p) => p.id !== productID)

            let updatedProduct = state.products.map((p)=>
                p.id === productID
                    ? {...p, stock: p.stock + isExist.quantity}
                    : p

            );

            return {...state, cart: updatedCart, products: updatedProduct}
        }

        case "SEARCH_PRODUCT" : {

            if(action.payload=== "") {
                return {...state, products: state.allProducts};
            }

            const filteredProducts = state.products.filter((product) => product.name.toLowerCase().includes(action.payload.toLowerCase()));
            return {...state, products: filteredProducts};
        }

        case "SORT_PRODUCTS" : {

            let shortedProducts = [...state.allProducts];

            switch (action.payload) {

                case "Most Popular":{
                    shortedProducts = shortedProducts.filter((p) => p.isPopular === true );
                    break;
                }
                case "Newest" : {
                    shortedProducts = shortedProducts.filter((p) => p.isNew === true );
                    break;
                }
                case "Price: Low to High" : {
                    shortedProducts.sort((a,b) => a.price - b.price);
                    break
                }
                case "Price: High to Low" : {
                    shortedProducts.sort((a,b) => b.price - a.price);
                    break;
                }
                default: {
                    shortedProducts=[...state.allProducts];
                    break;
                }
            }
           return {...state, products: shortedProducts};
        }

        default: return state;

    }
}