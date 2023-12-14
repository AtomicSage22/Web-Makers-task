import React from 'react';
import Nav from './Nav';

function Header() {
    return (
        <div
            className=""   
            style={{
                background: 'linear-gradient(11deg, rgba(255,255,255,0.9780287114845938) 19%, rgba(254,237,255,1) 100%)',
                
            }}>
            <Nav />
            <div className='flex flex-col items-center gap-7 w-[80%] mx-auto text-center mt-6'>
                <h1 className='font-bold text-6xl'>Elevate Your Presence with Seamless Design and Innovation.</h1>
                <p>From strategic planning to digital presence, we&apos;re your dedicated partner in achieving solo success.</p>
                <button className='bg-gray-800 text-white w-44 h-12 rounded-md'>
                    View Pricing
                </button>
            </div>
        </div>
    );
}

export default Header;