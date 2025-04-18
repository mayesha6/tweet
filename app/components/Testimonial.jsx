import React from 'react'
import Title from './Title'
import Image from 'next/image'
import TestimonialBanner from '@/public/img/testimonial.png'
import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  return (
    <section className='py-[80px] testimonial'>
        <div className="container mx-auto px-6">
            <div className='flex flex-col lg:flex-row justify-between items-center gap-[73px]'>
                <div>
                    <Title subtitle='Testimonial' titlePart1='What' titlePart2='Customer Saying'/>
                    <h2 className='!font-poppins !font-semibold md:text-[40px] text-[30px] leading-[42px] text-[#333333] capitalize pb-7'>About our Services</h2>
                    <TestimonialSlider />
                </div>
                <div>
                    <Image src={TestimonialBanner} alt='Testimonial Banner image'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial