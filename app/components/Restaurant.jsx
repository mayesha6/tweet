'use client'
import { Card } from 'antd'
import Image from 'next/image'
import React from 'react'
import { Clock3, Bike, BadgePercent  } from 'lucide-react';
import Link from 'next/link';

const Restaurant = ({title, deliveryDuration, deliveryCharge, discount, rating, image, items}) => {
  return (
    <div>
        <Card
            hoverable
            className="flex flex-col h-full drop-shadow-[0_1px_1px_hsla(0,0%,0%,0.05)] relative"
            style={{ width: 282 }}
            cover={<Image src={image} alt={`${title} image`} className='h-[175px] object-cover'/>}
        >
            <div className='flex flex-col h-[80px]'>
                <div className='flex items-center justify-between gap-4'>
                    <h2 className='!font-poppins !font-medium text-lg leading-[130%] text-[#262626]'>{title}</h2>
                </div>
                <div className='py-2'>
                    <div className='flex gap-6 items-center'>
                        <div className='flex gap-1 items-center'>
                            <Clock3 className='w-3 h-3 text-[#5C5C5C]'/>
                            <p className='!text-xs !font-poppins font-medium text-[#ED6923]'>{deliveryDuration}</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Bike className='w-3.5 h-3.5 text-[#5C5C5C]' />
                            <p className='!text-xs !font-poppins font-medium text-[#ED6923]'>Delivery Fee $0{deliveryCharge}</p>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul className='flex'>
                        {items.map((item, index)=>{
                            const isFirst = index === 0;
                            const isLast = index === items.length - 1;
                            return(
                                <li key={item} className={`inline-block leading-2 capitalize relative text-[#767676] text-xs ${!isLast ? "before:absolute before:content-[''] before:border-r-[1px] before:!border-[#686868] before:h-[10px] before:top-0 before:right-0" : ""} ${!isFirst ? "px-2.5" : "pe-2.5"}`}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>

            <div className='absolute top-[28px] left-0 bg-[#ED6923] rounded-e-[50px] flex w-[83px] items-center gap-1'>
                <BadgePercent className='text-white w-5 ps-1'/>
                <p className='text-white text-xs font-bold'>{discount}% Off</p>
            </div>
            <div className='absolute top-[138px] right-3 bg-[#FFFFFF] rounded-[50px] flex items-center gap-1 py-1 px-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#ED6923" stroke="#ED6923" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
                <p className='text-[#707070] text-xs font-bold'>{rating} (85)</p>
            </div>
        </Card>
    </div>
  )
}

export default Restaurant