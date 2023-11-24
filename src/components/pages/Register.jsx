import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [passValue, setPassValue] = useState('')
  const [passCorrect, setPassCorrect] = useState(true)

  const passwordValue = (event) => {
    setPassValue(event.target.value)
  }

  const confirmPassword = (event) => {
    const confirmPassValue = event.target.value
    if (confirmPassValue === passValue) {
      setPassCorrect(true)
    }else{
      setPassCorrect(false)
    }
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-gray-300 p-10 rounded-2xl flex flex-col gap-4 h-[450px] w-96'>
        <form className='flex flex-col gap-5'>
          <input className='rounded-md p-2' type="text" placeholder='Username' />
          <input className='rounded-md p-2' type="email" placeholder='Email'/>
          <input onChange={passwordValue} className='rounded-md p-2' type="password" placeholder='Password' />
          <input onChange={confirmPassword} className='rounded-md p-2' type="password" placeholder='Confirm Password' />
          <input className='rounded-md p-2 bg-gray-700 text-white font-bold w-28 mx-auto cursor-pointer' type="submit" value='Register' />
        </form>
        <Link className='text-blue-700 underline' to={'/login'}>Login</Link>
        {!passCorrect && <p className='text-red-500'>Confirm Password is not correct</p>}
      </div>
    </div>
  )
}

export default Register