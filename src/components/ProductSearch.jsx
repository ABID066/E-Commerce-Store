import {useContext, useState} from 'react';
import {SearchIcon} from "./svg.jsx";
import {AppContext} from "../context/Context.jsx";

const ProductSearch = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const {dispatch} = useContext(AppContext);

    function handleSearch(value) {
        setSearchTerm(value);
        dispatch({
            type: "SEARCH_PRODUCT",
            payload: value
        })
    }

    return (
        <div className="relative hidden md:block w-64">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for data..."
                className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
            />
            <span
                className="absolute right-3 top-2"
            >
                <SearchIcon/>
            </span>
        </div>
    );
};

export default ProductSearch;