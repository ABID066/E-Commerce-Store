import {useContext} from "react";
import {AppContext} from "../context/Context.jsx";

const SortedProducts = () => {

    const {dispatch} = useContext(AppContext);

    function handleChange (e) {
        dispatch({
            type: 'SORT_PRODUCTS',
            payload: e.target.value,
        })
    }

    return (
        <div className="flex items-center space-x-2">
            <span className="text-sm">Sort by:</span>
            <select
                className="border-none bg-gray-200 rounded-md px-2 py-1 text-sm"
                onChange={handleChange}
            >
                <option>All</option>
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
            </select>
        </div>
    );
};

export default SortedProducts;