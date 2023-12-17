import React from 'react'
import zapier from '../assets/zapier.svg'
import slack from '../assets/slack.svg'
import adobe from '../assets/adobe.svg'
import amazon from '../assets/amazon.svg'
import zoom from '../assets/zoom.svg'
import spotify from '../assets/spotify.svg'

const Companies = () => {
  return (
    <div className='w-[70%] mx-auto mt-20 text-gray-400'>
        <p className='text-center  mb-6'>
            Trusted By 250+ Companies
        </p>
      <div className='flex justify-around w-full'>
        <img src={zapier} alt="zapier" />
        <img src={slack} alt="slack" />
        <img src={adobe} alt="adobe" />
        <img src={amazon} alt="amazon" />
        <img src={zoom} alt="zoom" />
        <img src={spotify} alt="spotify" />
      </div>
    </div>
  )
}

export default Companies
