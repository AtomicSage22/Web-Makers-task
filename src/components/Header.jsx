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
            <div className='flex flex-col items-center gap-7 w-full sm:w-full md:w-[70%] lg:w-[60%] xl:w-[60%] mx-auto text-center mt-28'>
                <h1 className='font-black text-7xl text-gray-800'>Elevate Your Presence with Seamless Design and Innovation.</h1>
                <p className='text-xl text-gray-600 font-medium'>
                    From strategic planning to digital presence, we&apos;re your dedicated partner in achieving solo success.
                </p>
                <button className='bg-gray-800 text-white text-xl font-semibold py-4 px-10 rounded-md'>
                    View Pricing
                </button>
            </div>
        </div>
    );
}

export default Header;