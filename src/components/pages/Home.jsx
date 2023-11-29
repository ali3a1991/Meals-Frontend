import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import DayPlanItem from '../shared/DayPlanItem'

function Home() {
  return (
    <div>
      <Header/>
      <div className='flex justify-between px-10'>
        <p className='w-24'>day</p>
        <div className='flex justify-between w-[70%]'>
          <p className='w-[20%]'>Breakfast</p>
          <p className='w-[20%]'>Lunch</p>
          <p className='w-[20%]'>Dinner</p>
        </div>
        <p className='w-8'></p>
      </div>
      <DayPlanItem day='Monday'/>
      <DayPlanItem day='Tuesday'/>
      <DayPlanItem day='Wednesday'/>
      <DayPlanItem day='Thursday'/>
      <DayPlanItem day='Friday'/>
      <DayPlanItem day='Saturday'/>
      <DayPlanItem day='Sunday'/>
      <Footer/>
    </div>
  )
}

export default Home