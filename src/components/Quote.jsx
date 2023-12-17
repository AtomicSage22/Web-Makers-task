import React from 'react'
import Sisphus from '../assets/Sisphus.png'
import Avatar from '@mui/material/Avatar';
import AvatarPic from '../assets/Avatar.png'

const Quote = () => {
    return (
        <div 
            style={{
            background: 'linear-gradient(30deg, rgba(255,253,254,1) 3%, rgba(252,250,255,1) 41%, rgba(255,250,254,1) 100%)'
            }}
            className='w-full my-36'
        >
            <div className='flex flex-col items-center justify-center gap-7 w-[65%] py-20 mx-auto'>
                <img src={Sisphus} alt="" />
                <h2 className='text-5xl font-semibold text-center'>
                    We’ve been with unicraft to kick start every new project and can’t imagine working without it.
                </h2>
                <div className='flex flex-col mt-10 justify-center items-center'>
                    <Avatar alt="Candice Wu" src={AvatarPic}  sx={{ width: 70, height: 70 }} />
                    <p className='text-center font-semibold mt-4 mb-2 text-gray-900'>Candice Wu</p>
                    <p className='text-center font-medium text-gray-500'>Product Manager, Sisyphus</p>
                </div>
            </div>
        </div>
    )
}

export default Quote