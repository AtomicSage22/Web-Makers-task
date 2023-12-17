import React from 'react';

const Nav = () => {
    return (
        <nav className="flex justify-between px-12 py-5 w-full">
            <div>
                <h3 className="font-medium text-2xl">UniCraft</h3>
            </div>
            <div className=" font-medium text-xl hidden sm:hidden md:flex lg:flex xl:flex gap-6">
                <a href="#how-it-works" className="hover:underline">How it works</a>
                <a href="#pricing" className="hover:underline">Pricing</a>
                <a href="#faq" className="hover:underline">FAQ</a>
            </div>
            <div>
                <button className="text-gray-600 font-medium py-3 px-8 border-gray-600 border rounded-lg text-xl">
                    Contact Us
                </button>
            </div>
        </nav>
    );
};

export default Nav;