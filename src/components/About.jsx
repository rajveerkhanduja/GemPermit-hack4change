import React from 'react';
import banner3 from '../assets/banner3.svg';

const About = () => {
  return (
    <div>
      {/* About text */}
      <div className='bg-neutralSilver'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
          <div className='w-full mx-auto'>
            <div className="my-28 md:my-8 py-20 flex flex-col md:flex-row-reverse items-center justify-center">
              <div>
                <img src={banner3} alt="Banner" />
              </div>
              <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>About GemPermit</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                  At GemPermit, we aim to revolutionize the business licensing process for Indian entrepreneurs, making it streamlined, transparent, and efficient. Our platform empowers business owners to focus on growth without the hassle of traditional licensing procedures.
                </p>
                <ul className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                  <li><b>Comprehensive Suite of Features:</b> GemPermit offers a wide range of functionalities tailored to simplify and expedite the licensing journey.</li><br />
                  <li><b>Hassle-Free Applications:</b> Enjoy a smooth application process with minimal complications.</li><br />
                  <li><b>Real-Time Tracking:</b> Keep track of your application status in real-time, ensuring you are always informed.</li><br />
                  <li><b>24/7 Support:</b> Access round-the-clock assistance to help you with any queries or issues.</li><br />
                  <li><b>State-of-the-Art Security Measures:</b> Experience top-notch security to protect your data and ensure your licensing experience is safe and secure.</li><br />
                  <li><b>Smooth and Stress-Free Experience:</b> GemPermit ensures that the entire licensing process is as seamless and stress-free as possible.</li>
                </ul>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                  We support you at every step, whether you're starting a new business or expanding an existing one. Join GemPermit and transform your business licensing experience, paving the way for your entrepreneurial success.
                </p>
                <button className='btn-primary'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;