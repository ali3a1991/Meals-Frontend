import React, { useState } from 'react'

function DayPlanItem() {
  const [edit, setEdit] = useState(false)
  const [breakfast, setBreakfast] = useState('')
  const [lunch, setLunch] = useState('')
  const [dinner, setDinner] = useState('')

  const handleEditPlan = () => {
    setEdit(prev => !prev)
  }

  const handleSelectValue = (event) => {
    const selectValue = event.target.value

    if (event.target.name === 'breakfast') {
      setBreakfast(selectValue)
    }else if (event.target.name === 'lunch') {
      setLunch(selectValue)
    }else if (event.target.name === 'dinner') {
      setDinner(selectValue)
    }
  }

  return (
    <div className='flex justify-between px-10'>
      <p>Monday</p>
      {!edit ? <div className='flex justify-between gap-24'>
        <p className='bg-yellow-200 h-10 w-10'>{breakfast}</p>
        <p className='bg-yellow-200 h-10 w-10'>{lunch}</p>
        <p className='bg-yellow-200 h-10 w-10'>{dinner}</p>
      </div> : 
      <div>
        <select onChange={handleSelectValue} name="breakfast">
          <option value="select" selected disabled>select</option>
          <option value="Stack">Stack</option>
        </select>
        <select onChange={handleSelectValue} name="lunch">
          <option value="select" selected disabled>select</option>
          <option value="Stack">Stack</option>
        </select>
        <select onChange={handleSelectValue} name="dinner">
          <option value="select" selected disabled>select</option>
          <option value="Stack">Stack</option>
        </select>
      </div>
      }
      <button onClick={handleEditPlan} className='bg-gray-200'>{!edit ? 'Edit' : 'Add'}</button>
    </div>
  )
}

export default DayPlanItem