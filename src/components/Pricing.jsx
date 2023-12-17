import React from 'react'
import checkBlack from '../assets/check.svg'
import checkWhite from '../assets/check-white.svg'
import checkGray from '../assets/check-gray.svg'

const Plan = ({title, desc, price, activeFeatures, passiveFeatures, darkTheme}) => {
    return (
        <div className={`${darkTheme?`bg-gray-800 shadow-[0px_10px_25px_0px_#1F293733;
        ]`: `bg-white`} w-[400px] bg-gray-800 rounded-[16px] shadow-md flex flex-col px-7 py-12`}>
            <h2 className={`${darkTheme? `text-white`: `text-[#191D23]`} text-2xl font-bold`}>{title}</h2>
            <p className={`${darkTheme? `text-white`:`text-gray-500`} py-4 w-[92%] font-medium`}>{desc}</p>
            <div className='flex items-center gap-3' >
                <h1 className={`${darkTheme? `text-white`: `text-gray-800`} text-6xl font-medium`}>${price}</h1>
                <p className={`${darkTheme? `text-white`: `text-gray-500`}`}>/ Month</p>
            </div>
            
            <button className={`${darkTheme?`bg-white border border-white text-gray-800 font-bold`: `text-gray-600 border border-gray-600 font-semibold`} w-full mx-auto text-gray-600 border border-gray-600 h-12 rounded-xl my-7`}>
                Get Started Now
            </button>
            <div className='flex flex-col gap-2'>
                {
                    activeFeatures.map((feature, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <img src={darkTheme?checkWhite: checkBlack} alt="" />
                            <p className={`${darkTheme?`text-white`: `text-gray-800`} font-medium`}>{feature}</p>
                        </div>
                    ))
                }
                {
                    passiveFeatures.map((feature, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <img src={checkGray} alt="" />
                            <p className='text-gray-400'>{feature}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const Pricing = () => {
  return (
    <div
        style={
            {
                background: 'linear-gradient(15deg, rgba(255,255,255,1) 0%, rgba(252,247,254,1) 60%, rgba(236,244,247,1) 100%)'
            }
        }
        className='w-full my-36 flex flex-col items-center justify-center gap-7 py-20'
    >
        <h2 className='text-[#262E35] text-6xl font-bold text-center'>
            Pricing made for collaborative support.
        </h2>
        <div>
            <p className='text-gray-500 text-center text-2xl w-[60%] mx-auto mb-6'>
                Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.
            </p>
        </div>
        <div className='flex gap-5'>
            <Plan 
                title='Freebie'
                desc='Ideal for individuals who need quick access to basic features.'
                price='0'
                activeFeatures={['20,000+ of PNG & SVG graphics', 'Access to 100 million stock images']}
                passiveFeatures={['Upload custom icons and fonts', 'Unlimited Sharing', 'Upload graphics & video in up to 4k', 'Unlimited Projects', 'Instant Access to our design system', 'Create teams to collaborate on designs']}
                darkTheme={false}
            />
            <Plan 
                title='Professional'
                desc='Ideal for individuals who who need advanced features and tools for client work.'
                price='25'
                activeFeatures={['20,000+ of PNG & SVG graphics', 'Access to 100 million stock images', 'Upload custom icons and fonts', 'Unlimited Sharing', 'Upload graphics & video in up to 4k']}
                passiveFeatures={['Unlimited Projects', 'Instant Access to our design system', 'Create teams to collaborate on designs']}
                darkTheme={true}
            />
            <Plan 
                title='Enterprise'
                desc='IIdeal for businesses who need personalized services and security for large teams.'
                price='100'
                activeFeatures={['20,000+ of PNG & SVG graphics', 'Access to 100 million stock images', 'Upload custom icons and fonts', 'Unlimited Sharing', 'Upload graphics & video in up to 4k', 'Unlimited Projects', 'Instant Access to our design system', 'Create teams to collaborate on designs']}
                passiveFeatures={[]}
                darkTheme={false}
            />
        </div>
    </div>
  )
}

export default Pricing
