import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

// should send a Request to server (form)
// if response is OK should go to HomePage


  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-gray-300 p-10 rounded-2xl flex flex-col gap-4 w-96 justify-center'>
        <form className='flex flex-col gap-5'>
          <input className='rounded-md p-2' type="email" placeholder='Email'/>
          <input className='rounded-md p-2' type="password" placeholder='Password' />
          <input className='rounded-md p-2 bg-gray-700 text-white font-bold w-28 mx-auto cursor-pointer' type="submit" value='Login' />
        </form>
        <Link className='text-blue-700 underline' to={'/register'}>Register</Link>
      </div>
    </div>
  )
}

export default Login