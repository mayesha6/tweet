'use client'
import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// Prev Arrow
export const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 
                 left-2 sm:-left-6 md:-left-5 lg:-left-6 xl:-left-20 
                 w-10 h-10 sm:w-12 sm:h-12 
                 bg-white flex justify-center items-center 
                 rounded-full shadow-md hover:bg-gray-100 
                 cursor-pointer z-10"
    >
      <ArrowLeft size={20} />
    </div>
  )
}

// Next Arrow
export const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 
                 right-2 sm:-right-6 md:-right-5 lg:-right-5 
                 w-10 h-10 sm:w-12 sm:h-12 
                 bg-white flex justify-center items-center 
                 rounded-full shadow-md hover:bg-gray-100 
                 cursor-pointer z-10"
    >
      <ArrowRight size={20} />
    </div>
  )
}
