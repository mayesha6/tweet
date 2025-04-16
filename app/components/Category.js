import Image from 'next/image'
import React from 'react'

const Category = ({ bgColor, image, title}) => {
  return (
    <div className='h-[146px]'>
        <div style={{ backgroundColor: bgColor }} className='w-[138px] rounded-lg translate-y-4'>
            <div>
                {image && (
                <Image src={image} alt={`${title} image`}  className='-translate-y-4'/>
            )}
            <h3 className='font-poppins font-medium text-xl text-white text-center pt-2 capitalize -translate-y-4'>{title}</h3>
            </div>
        </div>
    </div>
  )
}

export default Category