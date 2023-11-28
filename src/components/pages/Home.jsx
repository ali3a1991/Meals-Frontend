import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import AddWeekPlan from '../shared/AddWeekPlan'
import DayPlanItem from '../shared/DayPlanItem'

function Home() {
  return (
    <div>
      <Header/>
      {/* <AddWeekPlan/> */}
      <div className='flex justify-between px-10'>
        <p className='w-[20%] text-center'>day</p>
        <p className='w-[20%] text-center'>Meal 1</p>
        <p className='w-[20%] text-center'>Meal 2</p>
        <p className='w-[20%] text-center'>Meal 3</p>
      </div>
      <DayPlanItem/>
      <Footer/>
    </div>
  )
}

export default Home