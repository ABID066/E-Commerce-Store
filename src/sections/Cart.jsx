
import YourCart from "../components/YourCart.jsx";
import OrderSummary from "../components/OrderSummary.jsx";

const Cart = () => {
    return (
        <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

                <YourCart/>

                <div className="mt-6">
                    <h3 className="font-bold text-lg mb-4">Order Summary</h3>

                    <OrderSummary/>

                </div>
            </div>
        </div>
    );
};

export default Cart;