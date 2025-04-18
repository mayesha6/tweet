'use client'
import { Card } from 'antd'
import Image from 'next/image'
import React from 'react'
import RestaurantIcon from '@/public/img/restaurant-icon.png'
import { Clock3, Bike  } from 'lucide-react';

const Food = ({id,title, shopName, deliveryDuration, deliveryCharge, regularPrice, discount, price, rating, image}) => {
  return (
    <div>
        <Card
            hoverable
            className="flex flex-col h-full drop-shadow-[0_1px_1px_hsla(0,0%,0%,0.05)]"
            style={{ width: 282 }}
            cover={<Image src={image} alt={`${title} image`} className='h-[175px]'/>}
        >
            <div className='flex flex-col h-[107px]'>
                <div className='flex items-center justify-between gap-4'>
                    <h2 className='!font-poppins !font-medium text-lg leading-[130%] text-[#262626]'>{title}</h2>
                    <div>
                        <p className="relative before:content-[''] before:absolute before:w-[100%] before:h-[1px] before:bg-[#767676] before:left-0 before:top-1/2 inline-block text-[#767676] font-light !font-poppins text-xs">€ {regularPrice}</p>
                        <h3 className='font-poppins font-semibold text-base leading-4 text-[#ED6923]'>€{(regularPrice - ((discount*regularPrice)/100)).toFixed(2)}</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='flex gap-2 items-center py-3'>
                            <Image src={RestaurantIcon} alt={`${RestaurantIcon} image`} className='w-4 h-4'/>
                            <p className='text-[#262626] text-base leading-[130%] !font-poppins'>{shopName}</p>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <div className='flex gap-1 items-center'>
                                <Clock3 className='w-3 h-3 text-[#5C5C5C]'/>
                                <p className='!text-xs !font-poppins font-medium text-[#5C5C5C]'>{deliveryDuration}</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <Bike className='w-3.5 h-3.5 text-[#5C5C5C]' />
                                <p className='!text-xs !font-poppins font-medium text-[#5C5C5C]'>$0{deliveryCharge}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default Food