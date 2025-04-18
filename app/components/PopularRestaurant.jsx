import React from 'react'
import Title from './Title'
import PopularSlider from './PopularSlider'
import Restaurant from './Restaurant'
import popularRestaurantData from '../Data/popularRestaurantData'

const PopularRestaurant = () => {
  return (
    <section className='py-[75px]'>
            <div className="container mx-auto px-6">
                <div>
                    <Title subtitle='Popular Food' titlePart1='Popular' titlePart2='Restaurent Near me' viewBtn='View All'/>
                    <div className='pt-[65px]'>
                        <PopularSlider slidesToShow={4} data={popularRestaurantData} CardComponent={Restaurant} />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default PopularRestaurant