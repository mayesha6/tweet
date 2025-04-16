import React from 'react'

const Title = ({subtitle, titlePart1, titlePart2}) => {
  return (
    <div>
        <p className='font-lobster !text-xl leading-[150%] text-[#333333] capitalize'>{subtitle}</p>
        <h2 className='!font-poppins !font-semibold sm:text-[40px] text-[30px] leading-[42px] text-[#333333] capitalize'>{titlePart1} <span className='text-[#ED6923]'>{titlePart2}</span></h2>
    </div>
  )
}

export default Title 