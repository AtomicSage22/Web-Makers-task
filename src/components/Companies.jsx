import React from 'react'
import zapier from '../assets/zapier.svg'
import slack from '../assets/slack.svg'
import adobe from '../assets/adobe.svg'
import amazon from '../assets/amazon.svg'
import zoom from '../assets/zoom.svg'
import spotify from '../assets/spotify.svg'

const Companies = () => {
  return (
    <div className='w-[70%] mx-auto mt-20 mb-10 text-gray-400'>
        <p className='text-center  mb-6'>
            Trusted By 250+ Companies
        </p>
      <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-around gap-6 sm:gap-6 md:gap-2 lg:gap-2 xl:gap-2 w-full'>
        <img src={zapier} className='h-10' alt="zapier" />
        <img src={slack} className='h-10' alt="slack" />
        <img src={adobe} className='h-10' alt="adobe" />
        <img src={amazon} className='h-10' alt="amazon" />
        <img src={zoom} className='h-5' alt="zoom" />
        <img src={spotify} className='h-10' alt="spotify" />
      </div>
    </div>
  )
}

export default Companies
