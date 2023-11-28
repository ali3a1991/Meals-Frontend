import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-gray-400 absolute bottom-0 w-screen h-24 px-10 py-3 flex justify-between items-center'>
      <Link to={'/home'}>Dashboard</Link>
      <Link to={'/access'}>Access</Link>
      <Link to={'/favourite'}>My Food</Link>
      <Link to={'/shoppinglist'}>Shopping List</Link>
    </footer>
  )
}

export default Footer