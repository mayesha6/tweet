'use client'
import React from 'react'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from './CustomArrows'

const PopularSlider = ({ slidesToShow, data = [], CardComponent }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: Number(slidesToShow),
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  return (
    <Slider {...settings} className="slider-container h-full">
      {data.map((item) => (
        <div key={item.id} className="px-2 h-full">
          <div className="flex justify-center h-full">
            <CardComponent {...item} />
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default PopularSlider
