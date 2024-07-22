import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { mensShoesPage1 } from '../../../Data/shoes'
import { mens_shirt } from '../../../Data/mens_shirt'
import { sareePage1 } from '../../../Data/women_saree'
import { women_dress } from '../../../Data/women_dress'


const HomePage = () => {
  return (
    <div>
        <MainCrosel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Mens Kurta"}/>
            <HomeSectionCarosel data={mensShoesPage1} sectionName={"Mens Shoes"}/>
            <HomeSectionCarosel data={mens_shirt} sectionName={"Mens Shirt"}/>
            <HomeSectionCarosel data={sareePage1} sectionName={"Womens Saree"}/>
            <HomeSectionCarosel data={women_dress} sectionName={"Womens Dress"}/>
        </div>
    </div>
  )
}

export default HomePage