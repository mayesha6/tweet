import React from 'react'
import Title from './Title'
import PopularSlider from './PopularSlider'
import popularFoodData from '@/app/Data/popularFoodData'
import Food from './Food'

const PopularFood = () => {
  return (
    <section className='py-[75px]'>
        <div className="container mx-auto px-6">
            <div>
                <Title subtitle='Popular Food' titlePart1='Popular' titlePart2='Food Near me' viewBtn='View All'/>
                <div className='pt-[65px]'>
                    <PopularSlider slidesToShow={4} data={popularFoodData} CardComponent={Food} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopularFood