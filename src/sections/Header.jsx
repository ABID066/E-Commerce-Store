import React from 'react';
import {CartIcon, ProfileIcon, SearchIcon} from "../components/svg.jsx";
import ProductSearch from "../components/ProductSearch.jsx";


const Header = () => {
    return (
        <header className="border-b border-gray-200 py-4 px-4 md:px-8">
            <div className="container mx-auto flex items-center justify-between">
                <a href="#" className="text-2xl font-bold">
                    LWS.SHOP
                </a>
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-gray-500 transition-colors">
                        Shop
                    </a>
                    <a href="#" className="hover:text-gray-500 transition-colors">
                        On Sale
                    </a>
                    <a href="#" className="hover:text-gray-500 transition-colors">
                        New Arrivals
                    </a>
                    <a href="#" className="hover:text-gray-500 transition-colors">
                        Brands
                    </a>
                </nav>
                <div className="flex items-center space-x-4">
                    <ProductSearch/>
                    <a href="#" className="hover:text-gray-500 transition-colors">
                        <CartIcon/>
                    </a>
                    <a href="#" className="hover:text-gray-500 transition-colors">
                        <ProfileIcon/>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;