import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Onboarding() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/login')
    }, 2000)
  }, [])

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-[48px]'>LOGO</div>
    </div>
  )
}

export default Onboarding