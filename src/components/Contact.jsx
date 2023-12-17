import React from 'react'

const Contact = () => {
  return (
    <div
        style={{
            background: 'linear-gradient(129deg, rgba(255,245,255,1) 0%, rgba(235,204,255,0.1) 48%, rgba(255,204,255,0.2)',
        }}
        className="flex flex-col items-center justify-center gap-4 py-16"
    >
        <h1 className="text-7xl text-gray-900 font-black mb-2">
            No long-term contracts.
        </h1>
        <h1 className="text-7xl text-gray-900 font-black mb-2">
            No catches. Simple
        </h1>
        <p className="mb-4 text-xl font-medium text-gray-500">
            Start your 30-day free trial. Cancel anytime.
        </p>
        <button className='bg-gray-800 text-white text-xl font-semibold py-4 px-14 rounded-lg'>
            Contact us
        </button>
    </div>
  )
}

export default Contact