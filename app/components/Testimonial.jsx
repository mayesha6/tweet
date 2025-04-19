import React from 'react'
import Title from './Title'
import Image from 'next/image'
import TestimonialBanner from '@/public/img/testimonial.png'
import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  return (
    <section className='py-[80px] testimonial'>
        <div className="container mx-auto !px-6">
            <div className='flex flex-col lg:flex-row justify-between items-center gap-[73px]'>
                <div className='order-2 lg:order-1'>
                    <p className='font-lobster !text-xl leading-[150%] text-[#333333] capitalize pb-1 md:text-start text-center'>Testimonial</p>
                    <h2 className='!font-poppins !font-semibold md:text-[40px] text-[30px] leading-[42px] text-[#333333] capitalize md:text-start text-center'>What <span className='text-[#ED6923]'>Customer Saying</span></h2>
                    <h2 className='!font-poppins !font-semibold md:text-[40px] text-[30px] leading-[42px] md:text-start text-center text-[#333333] capitalize pb-7'>About our Services</h2>
                    <TestimonialSlider />
                </div>
                <div className='order-1 lg:order-2'>
                    <Image src={TestimonialBanner} alt='Testimonial Banner image'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial