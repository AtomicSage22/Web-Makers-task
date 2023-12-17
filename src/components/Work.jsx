import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import frame12 from '../assets/Frame 12.jpg';
import frame13 from '../assets/Frame 13.jpg';
import frame11 from '../assets/Frame 11.jpg';
import frame10 from '../assets/Frame 10.jpg';
import frame9 from '../assets/Frame 9.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Work = () => {
    return (
        <div className=''>
            <div className='flex justify-between h-[15vh] sm:h-[20vh] md:h-[28vh] lg:h-[38vh] xl:h-[50vh] w-full mt-20 mb-10'>
                <img src={frame12} alt="" />
                <img src={frame9} alt="" />
                <img src={frame10} alt="" />
                <img src={frame11} alt="" />
                <img src={frame13} alt="" />
            </div>
            <div className='flex justify-center'>
                <button className="text-gray-600 text-xl font-semibold py-3 px-12 border-gray-600 border rounded-lg">
                    View recent work
                </button>
            </div>
        </div>
    );
};

export default Work;