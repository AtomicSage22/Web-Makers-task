import React from 'react';

const Nav = () => {
    return (
        <nav className="flex justify-between px-12 py-5 w-full">
            <div>
                <h3 className="font-medium text-xl">UniCraft</h3>
            </div>
            <div className="space-x-6">
                <a href="#how-it-works" className="hover:underline">How it works</a>
                <a href="#pricing" className="hover:underline">Pricing</a>
                <a href="#faq" className="hover:underline">FAQ</a>
            </div>
            <div>
                <button className="text-gray-600 font-normal py-2 px-6 border-gray-600 border rounded">
                    Contact Us
                </button>
            </div>
        </nav>
    );
};

export default Nav;