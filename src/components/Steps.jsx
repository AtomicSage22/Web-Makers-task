import React from 'react'

import arrow from '../assets/Right arrow.svg'

const Steps = () => {

  return (
    <div className='w-[80%] text-center py-12 my-10 mx-auto shadow-[0px_10.988372802734375px_36.627906799316406px_0.9156976938247681px_rgba(28,25,23,0.05)] border-[0.92px] border-gray-200'>
        <h2 className='text-4xl font-medium text-gray-800'>
            How it works
        </h2>
        <p className='text-gray-600'>
            Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.
        </p>
        <div className='flex justify-around'>
            <div className='relative w-[20%]'>
                <h1 className='font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-bl from-[#D8B4FE] to-[#D8B4FE00] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 -z-10'>
                    1
                </h1>
                <h3 className='pt-16 font-bold text-2xl text-gray-800'>
                    Subscribe
                </h3>
                <p className='text-gray-600 text-xs'>
                    Subscribe to a plan & you&apos;ll get an instant access to your private Slack channel.
                </p>
            </div>
            <img src={arrow} alt="" />
            <div className='relative w-[20%]'>
                <h1 className='font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-bl from-[#D8B4FE] to-[#D8B4FE00] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 -z-10'>
                    2
                </h1>
                <h3 className='pt-16 font-bold text-2xl text-gray-800'>
                    Request
                </h3>
                <p className='text-gray-600 text-xs'>
                    Submit any number of requests. We&apos;ll work through them, one at a time, ensuring consistent updates every 24-48 hours
                </p>
            </div>
            <img src={arrow} alt="" />
            <div className='relative w-[20%]'>
                <h1 className='font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-bl from-[#D8B4FE] to-[#D8B4FE00] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 -z-10'>
                    3
                </h1>
                <h3 className='pt-16 font-bold text-2xl text-gray-800'>
                    Revise
                </h3>
                <p className='text-gray-600 text-xs'>
                    Need changes? We guarantee unlimited revisions until you&apos;re 200% satisfied.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Steps     