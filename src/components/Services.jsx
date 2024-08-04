import React from 'react'

const Services = () => {
    const services = [
        {id: 1,title: "Hassle-Free Applications",description: "Say goodbye to paperwork and delays. Our platform guides you through every step, ensuring you have all the necessary documents and information", image: "/src/assets/Hassle-free logo.svg"},
        {id: 2,title: "Real-Time Tracking",description: "Stay informed with real-time updates on your application status. Know exactly where you stand and what needs to be done next", image: "/src/assets/Real-time tracking logo.svg"},
        {id: 3,title: "Secure and Reliable",description: "Your data is safe with us. GemPermit uses state-of-the-art security measures to protect your information and ensure a smooth application process", image: "/src/assets/shield logo.svg"},
    ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      {/* services card */}
      <div className='mt-15 md:w-1/2 mx-auto text-center'>
        <h2 className='text-4xl text-brandPrimary font-semibold mb-3'>Why Choose GemPermit?</h2>
      </div>
      {/* card */}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {
            services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                <div>
                    <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl '><img src={service.image} alt="" className='-ml-5'/></div>
                    <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                    <p className='text-sm text-neutralGrey'>{service.description}</p>
                </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Services
