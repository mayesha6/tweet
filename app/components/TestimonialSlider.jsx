'use client'
import React from "react";
import Slider from "react-slick";
import TestimonialUser from '@/public/img/testimonialUser.png'
import StartQuote from '@/public/img/startQuote.png'
import EndQuote from '@/public/img/endQuote.png'
import Image from "next/image";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
  };
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="!max-w-[485px]">
      <Slider {...settings}>
        <div className="!max-w-[485px] border-[1px] border-[#FFCABB] rounded-lg p-[25px]">
          <div>
                <div className="relative h-[103px]"> 
                    <p className="!font-poppins text-[#262626] pt-4 ps-6 leading-[24px]">Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery cravings.</p>
                    <Image src={StartQuote} alt='quatation' className="absolute top-0"/>
                    <Image src={EndQuote} alt='quatation' className="absolute bottom-[20%] right-0"/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-4">
                        <Image src={TestimonialUser} alt='Testimonial User image' className="w-[74px]"/>
                        <div>
                            <h3 className="!font-poppins !font-semibold text-xl text-[#010F1C] capitalize">Leon Fischer</h3>
                            <p className="!font-poppins !font-light text-xs leading-[150%] text-[#767676] capitalize">Satisfied Customer</p>
                        </div>
                    </div>
                    <div className="bg-[#ED6923] rounded p-2.5 flex gap-2.5">
                    {stars.map((_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                    ))}
                    </div>
                </div>
          </div>
        </div>
        <div className="!max-w-[485px] border-[1px] border-[#FFCABB] rounded-lg p-[25px]">
          <div>
                <div className="relative h-[103px]"> 
                    <p className="!font-poppins text-[#262626] pt-4 ps-6 leading-[24px]">Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery cravings.</p>
                    <Image src={StartQuote} alt='quatation' className="absolute top-0"/>
                    <Image src={EndQuote} alt='quatation' className="absolute bottom-[20%] right-0"/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-4">
                        <Image src={TestimonialUser} alt='Testimonial User image' className="w-[74px]"/>
                        <div>
                            <h3 className="!font-poppins !font-semibold text-xl text-[#010F1C] capitalize">Leon Fischer</h3>
                            <p className="!font-poppins !font-light text-xs leading-[150%] text-[#767676] capitalize">Satisfied Customer</p>
                        </div>
                    </div>
                    <div className="bg-[#ED6923] rounded p-2.5 flex gap-2.5">
                    {stars.map((_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                    ))}
                    </div>
                </div>
          </div>
        </div>
        <div className="!max-w-[485px] border-[1px] border-[#FFCABB] rounded-lg p-[25px]">
          <div>
                <div className="relative h-[103px]"> 
                    <p className="!font-poppins text-[#262626] pt-4 ps-6 leading-[24px]">Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery cravings.</p>
                    <Image src={StartQuote} alt='quatation' className="absolute top-0"/>
                    <Image src={EndQuote} alt='quatation' className="absolute bottom-[20%] right-0"/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-4">
                        <Image src={TestimonialUser} alt='Testimonial User image' className="w-[74px]"/>
                        <div>
                            <h3 className="!font-poppins !font-semibold text-xl text-[#010F1C] capitalize">Leon Fischer</h3>
                            <p className="!font-poppins !font-light text-xs leading-[150%] text-[#767676] capitalize">Satisfied Customer</p>
                        </div>
                    </div>
                    <div className="bg-[#ED6923] rounded p-2.5 flex gap-2.5">
                    {stars.map((_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                    ))}
                    </div>
                </div>
          </div>
        </div>
        <div className="!max-w-[485px] border-[1px] border-[#FFCABB] rounded-lg p-[25px]">
          <div>
                <div className="relative h-[103px]"> 
                    <p className="!font-poppins text-[#262626] pt-4 ps-6 leading-[24px]">Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery cravings.</p>
                    <Image src={StartQuote} alt='quatation' className="absolute top-0"/>
                    <Image src={EndQuote} alt='quatation' className="absolute bottom-[20%] right-0"/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-4">
                        <Image src={TestimonialUser} alt='Testimonial User image' className="w-[74px]"/>
                        <div>
                            <h3 className="!font-poppins !font-semibold text-xl text-[#010F1C] capitalize">Leon Fischer</h3>
                            <p className="!font-poppins !font-light text-xs leading-[150%] text-[#767676] capitalize">Satisfied Customer</p>
                        </div>
                    </div>
                    <div className="bg-[#ED6923] rounded p-2.5 flex gap-2.5">
                    {stars.map((_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                    ))}
                    </div>
                </div>
          </div>
        </div>
        <div className="!max-w-[485px] border-[1px] border-[#FFCABB] rounded-lg p-[25px]">
          <div>
                <div className="relative h-[103px]"> 
                    <p className="!font-poppins text-[#262626] pt-4 ps-6 leading-[24px]">Love the convenience of Tweet! Fast, reliable, and super easy to use for all your food delivery cravings.</p>
                    <Image src={StartQuote} alt='quatation' className="absolute top-0"/>
                    <Image src={EndQuote} alt='quatation' className="absolute bottom-[20%] right-0"/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center gap-4">
                        <Image src={TestimonialUser} alt='Testimonial User image' className="w-[74px]"/>
                        <div>
                            <h3 className="!font-poppins !font-semibold text-xl text-[#010F1C] capitalize">Leon Fischer</h3>
                            <p className="!font-poppins !font-light text-xs leading-[150%] text-[#767676] capitalize">Satisfied Customer</p>
                        </div>
                    </div>
                    <div className="bg-[#ED6923] rounded p-2.5 flex gap-2.5">
                    {stars.map((_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                    ))}
                    </div>
                </div>
          </div>
        </div>
       
        
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
