import React from "react";

const Navbar = () => {
    return (
        <nav className="w-full flex justify-between items-center bg-violet-700 text-white px-10 py-4 shadow-md">
            <h3 className="font-bold text-xl">SWE IIT ROPAR</h3>
            <div className="flex space-x-8">
                <a href="#about" className="hover:text-gray-200">About</a>
                <a href="#events" className="hover:text-gray-200">Events</a>
                <a href="#contact" className="hover:text-gray-200">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
