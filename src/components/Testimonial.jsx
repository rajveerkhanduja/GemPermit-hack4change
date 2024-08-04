import React from 'react'

const Testimonial = () => {
    const testimonials = [
        {id: 1,title: "Raj, Small Business Owner",description: "“The real-time tracking and 24/7 support were game changers for us. Highly recommend GemPermit to any new entrepreneur.”", image: "/src/assets/testimonial.svg"},
        {id: 2,title: "Anjali, Startup Founder",description: "“GemPermit made the licensing process so simple! I was able to focus on growing my business instead of dealing with paperwork.”", image: "/src/assets/testimonial.svg"},
        {id: 3,title: "Priya, Entrepreneur",description: "“GemPermit streamlined the entire licensing process for us. The real-time updates and 24/7 support were invaluable.”", image: "/src/assets/testimonial.svg"},
    ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='mt-15 md:w-1/2 mx-auto text-center'>
        <h2 className='text-4xl text-brandPrimary font-semibold mb-3'>What Our Users Say</h2>
      </div>


      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {
            testimonials.map(testimonials => <div key={testimonials.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                <div>
                    <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl '><img src={testimonials.image} alt="" className='-ml-5'/></div>
                    <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{testimonials.title}</h4>
                    <p className='text-sm text-neutralGrey'>{testimonials.description}</p>
                </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Testimonial
