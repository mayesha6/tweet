import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import LOCATIONICON from '@/public/img/location.png'
import HERO from '@/public/img/hero.png'
import CUSTOMER from '@/public/img/customer.png'
import FUSION from '@/public/img/fusion.png'
import LikeButton from './LikeButton';

const Hero = () => {
  return (
    <section className="bg-[linear-gradient(-145deg,hsla(20,86%,95%,1),hsla(21,99%,65%,0.2),hsla(21,99%,65%,0.5))] lg:h-[791px] py-10 lg:py-0">
        <div className="container mx-auto px-6 h-full">
            <div className='flex justify-between items-center flex-col h-full lg:flex-row gap-16 lg:gap-2'>
                <div className='max-w-[584px] w-full order-2 lg:order-1'>
                    <h3 className='font-rancho text-[40px] sm:text-[60px] md:text-[100px] text-[#ED6923] pb-2 capitalize'>hungry?</h3>
                    <h1 className='!font-poppins !font-bold !text-3xl sm:!text-5xl md:!text-7xl'><span>Let Us</span> <span className='text-[#ED6923]'>Bring The Feast to You</span></h1>
                    <p className='!font-poppins !text-base sm:text-[18px] text-[#333333] py-6'>Explore hundreds of delicious options from top restaurants and  Enjoy fast, reliable delivery right to you.</p>
                    <form>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center justify-between w-full sm:py-5 py-[9px] ps-[9px] border border-[#ED6923] rounded-s-xl sm:px-[15px]'>
                                <input type="text" name="" id="" placeholder='Enter your location'  className='sm:!text-sm !text-xs font-poppins text-[#6C757D] outline-0'/>
                                <div className='flex items-center justify-between'>
                                    <Image src={LOCATIONICON} alt='map icon' className='w-4 pe-1'/>
                                    <span className='hidden md:block text-sm !font-poppins text-[#ED6923]'>Locate me</span>
                                </div>
                            </div>
                            <div className='md:max-w-[159px] w-[110px]'>
                                <input type="submit" value="Find Food" className='sm:py-[17px] md:px-8 sm:px-4 p-2 bg-[#ED6923] rounded-e-xl !text-white sm:!text-xl !text-sm font-semibold !font-poppins'/>
                            </div>
                        </div>
                    </form>
                </div>
                {/* image  */}
                <div className='order-1 lg:order-2 relative'>
                    <Image src={HERO} alt='HERO icon' className=''/>
                    <div className='bg-white py-3 px-[18px] absolute rounded-[14px] top-[10px]'>
                        <Image src={CUSTOMER} alt='CUSTOMER icon' className=''/>
                        <h5 className='!font-semibold text-[#333333] py-2.5'>Satisfied Customer</h5>
                        <div className='flex justify-between'>
                            <FaStar className='text-[#F4C700] me-2'/>
                            <p className='text-[#333333]'>5.0 (3K Reviews)</p> 
                        </div>
                    </div>

                    <div className='backdrop-blur-2xl bg-white/50 p-[15px] absolute rounded-[14px] -bottom-[55px]'>
                        <div className='relative flex justify-between items-center gap-2.5'>
                            <Image src={FUSION} alt='FUSION icon' className='w-[60px] md:w-[113px]'/>
                            <div>
                                <h5 className='!font-semibold text-black !font-poppins'>Flavor Fusion Bistro</h5>
                                <p className='text-[#3D3D3D] text-xs py-2'>Kaliurang, Seleman</p>
                                <div className='flex items-center'>
                                    <p className='text-[#171621]'>4.9</p>
                                    <FaStar className='text-[#F4C700] ms-2'/>
                                </div>
                            </div>
                            <div className='absolute bottom-0 right-0 w-[30px] h-[30px] border border-[#1716211F] rounded-full flex items-center justify-center'>
                                <LikeButton />
                            </div>
                        </div>
                    </div>

                    <div className='backdrop-blur-2xl bg-white/80 py-3 px-[18px] absolute end-0 -bottom-7 rounded-[14px] flex justify-between items-center gap-2.5'>
                        <div className='w-[41px] h-[41px] rounded-[20px] bg-[#F5EAE3] flex items-center justify-center'>
                            <FaTruckFast className='text-[#ED6923]'/>
                        </div>
                        <div>
                            <h5 className='!font-semibold text-[#0D062D]'>24/7</h5>
                            <p className='text-[#737373] text-sm'>Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero