import React from 'react'
import photo from '../../assets/image/man-person-icon.png'

function Header() {
  return (
    <div className='bg-gray-400 py-3 px-10 flex justify-between items-center'>
      <div className='flex flex-col items-center w-24'>
        <img className='w-24 rounded-full' src={photo} alt="" />
        <p>Hello Ali!</p>
      </div>
      <h1 className='w-36'>LOGO</h1>
      <div className='pb-6'>
        <p className='h-2'>___</p>
        <p className='h-2'>___</p>
        <p className='h-2'>___</p>
      </div>
    </div>
  )
}

export default Header