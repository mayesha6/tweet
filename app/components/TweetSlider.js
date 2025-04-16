'use client'
import React from 'react'
import categories from '@/app/Data/categoriesData'
import Category from './category'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from './CustomArrows'

const TweetSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        responsive: [
            {
              breakpoint: 1282,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
          ]
    };
  return (
    <Slider {...settings} className='slider-container h-[146px]'>
                    {categories.map((category)=>{
                        return(
                            <div key={category.id}>
                                <div  className="flex xl:justify-between justify-center">
                                    
                                <Category bgColor={category.bgColor} image={category.image} title={category.title}  />
                                </div>
                            </div>
                        )
                    })}
                </Slider>
  )
}

export default TweetSlider