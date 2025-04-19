import Link from 'next/link'
import React from 'react'

const Title = ({subtitle, titlePart1, titlePart2, viewBtn}) => {
  return (
    <div className='flex flex-wrap justify-between items-end gap-3'>
       <div>
          <p className='font-lobster !text-xl leading-[150%] text-[#333333] capitalize pb-1'>{subtitle}</p>
          <h2 className='!font-poppins !font-semibold md:text-[40px] text-[30px] leading-[42px] text-[#333333] capitalize'>{titlePart1} <span className='text-[#ED6923]'>{titlePart2}</span></h2>
       </div>
       {
        viewBtn && 
        <Link href="/" className="ant-btn ant-btn-link rounded-lg border border-[#ED6923] md:px-12 px-6 md:py-4 py-3 text-[#ED6923] font-semibold font-poppins md:text-xl text-base duration-300 hover:bg-[#ED6923] hover:text-white">
          {viewBtn}
        </Link>
        }
    </div>
  )
}

export default Title 