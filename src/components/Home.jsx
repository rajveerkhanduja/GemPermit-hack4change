import { Carousel } from 'flowbite-react';
import React from 'react'
import banner2 from "../assets/banner2.svg"

const Home = () => {
  return (
    <div className='bg-neutralSilver'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <div className='w-full mx-auto'>
            <div className="my-28 md:my-8 py-20 flex flex-col md:flex-row-reverse items-center justify-center">
                <div>
                    <img src={banner2} alt="image" />
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4'>"Making Business Licensing
                    <span className='text-brandPrimary leading-snug'> Simple and Efficient"</span></h1>
                    <p className='text-neutralGrey text-base mb-8'>GemPermit simplifies obtaining business licenses and permits, making the process faster and more transparent. Join thousands of successful entrepreneurs using GemPermit to simplify their business journey</p>
                    <button className='btn-primary'>Get Started Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;