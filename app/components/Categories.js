
import React from 'react'
import Title from './Title'
import TweetSlider from './TweetSlider'

const Categories = () => {


  return (
    <section className='py-[72px]'>
        <div className="container mx-auto px-6">
            <div>
                <Title subtitle="category" titlePart1="popular" titlePart2="category"/>
                <div className='pt-[65px]'>
                    <TweetSlider slidesToShow='7'/>
                </div>

                
            </div>
        </div>
    </section>
  )
}

export default Categories