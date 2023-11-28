import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import AddWeekPlan from '../shared/AddWeekPlan'

function Home() {
  return (
    <div>
      <Header/>
      <AddWeekPlan/>
      <div className='flex justify-between px-10'>
        <p className='w-[20%] text-center'>day</p>
        <p className='w-[20%] text-center'>Meal 1</p>
        <p className='w-[20%] text-center'>Meal 2</p>
        <p className='w-[20%] text-center'>Meal 3</p>
      </div>
      <div className='bg-red-100 flex justify-between px-10'>
        <h1 className='w-[20%] text-center'>Monday</h1>
        <p className='w-[20%] text-center'>stack</p>
        <p className='w-[20%] text-center'>bacon</p>
        <p className='w-[20%] text-center'>pomes</p>
      </div>
      <div className='bg-red-100 flex justify-between px-10'>
        <h1 className='w-[20%] text-center'>Monday</h1>
        <p className='w-[20%] text-center'>stack</p>
        <p className='w-[20%] text-center'>bacon</p>
        <p className='w-[20%] text-center'>pomes</p>
      </div>
      <div className='bg-red-100 flex justify-between px-10'>
        <h1 className='w-[20%] text-center'>Monday</h1>
        <p className='w-[20%] text-center'>stack</p>
        <p className='w-[20%] text-center'>bacon</p>
        <p className='w-[20%] text-center'>pomes</p>
      </div>
      <div className='bg-red-100 flex justify-between px-10'>
        <h1 className='w-[20%] text-center'>Monday</h1>
        <p className='w-[20%] text-center'>stack</p>
        <p className='w-[20%] text-center'>bacon</p>
        <p className='w-[20%] text-center'>pomes</p>
      </div>
      <div className='bg-red-100 flex justify-between px-10'>
        <h1 className='w-[20%] text-center'>Monday</h1>
        <p className='w-[20%] text-center'>stack</p>
        <p className='w-[20%] text-center'>bacon</p>
        <p className='w-[20%] text-center'>pomes</p>
      </div>
      <div className='bg-red-100 flex justify-between px-10'>
        <h1 className='w-[20%] text-center'>Monday</h1>
        <p className='w-[20%] text-center'>stack</p>
        <p className='w-[20%] text-center'>bacon</p>
        <p className='w-[20%] text-center'>pomes</p>
      </div>
      <div className='bg-red-100 flex justify-between px-10'>
        <h1 className='w-[20%] text-center'>Monday</h1>
        <p className='w-[20%] text-center'>stack</p>
        <p className='w-[20%] text-center'>bacon</p>
        <p className='w-[20%] text-center'>pomes</p>
      </div>
      <Footer/>
    </div>
  )
}

export default Home