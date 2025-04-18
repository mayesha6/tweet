import React from 'react'
import Title from './Title'
import GooglePlay from '@/public/img/google-play.png'
import AppStore from '@/public/img/app-store.png'
import PhoneImage from '@/public/img/phone.png'
import AppBg from '@/public/img/app-bg.png'
import Image from 'next/image'

const AppExperience = () => {
  return (
    <section className='py-[75px]'>
        <div className='container mx-auto px-6 relative'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='max-w-[756px] w-full flex flex-col gap-6 md:pe-[68px] lg:pt-[120px]'>
                    <Title subtitle='Restaurants' titlePart1='Enhance your experience,' titlePart2='Download the Tweet app today!'/>
                    <p className='text-justify space-y-4 !font-poppins leading-[150%] text-[#5C5C5C]'>Discover a whole new level of convenience with our mobile app. From browsing our delectable menu to securing exclusive deals, it&apos;s your gateway to a world of culinary delights. Download now and elevate your dining experience with just a tap.</p>
                    <div className='flex flex-col sm:flex-row gap-[11px]'>
                        <Image src={GooglePlay} alt='Google Play' className='w-[148px] h-[48px]' />
                        <Image src={AppStore} alt='App Store' className='w-[148px] h-[48px]' />
                    </div>
                </div>
                <div className='hidden md:block'>
                    <Image src={PhoneImage} alt='Phone' className='lg:max-w-[343px] max-w-[143px] relative z-11' />
                </div>
            </div>
            <div className='lg:absolute lg:top-[64%] left-0 w-full h-full z-0 px-4'>
                <div className="bg-cover bg-center h-[298px] w-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ED6923FA] before:opacity-[98%] rounded-[20px] before:rounded-[20px] clip-diagonal" style={{ backgroundImage: `url(${AppBg.src})` }}>
                    <div className='absolute z-10 grid grid-cols-2 md:grid-cols-4 justify-between items-center w-full lg:w-[65%] px-[40px] h-[180px] bottom-0 lg:gap-[20px] gap-4'>
                        <div>
                            <h3 className='!font-poppins !font-bold xl:text-[40px] xl:leading-[150%] text-xl text-white'>100+</h3>
                            <p className='!font-poppins xl:text-xl xl:leading-[150%] text-white'>Food Menu</p>
                        </div>
                        <div>
                            <h3 className='!font-poppins !font-bold xl:text-[40px] xl:leading-[150%] text-xl text-white'>100+</h3>
                            <p className='!font-poppins xl:text-xl xl:leading-[150%] text-white'>Downloads </p>
                        </div>
                        <div>
                            <h3 className='!font-poppins !font-bold xl:text-[40px] xl:leading-[150%] text-xl text-white'>20+</h3>
                            <p className='!font-poppins xl:text-xl xl:leading-[150%] text-white'>Positive reviews</p>
                        </div>
                        <div>
                            <h3 className='!font-poppins !font-bold xl:text-[40px] xl:leading-[150%] text-xl text-white'>4.7</h3>
                            <p className='!font-poppins xl:text-xl xl:leading-[150%] text-white'>Average Review</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AppExperience