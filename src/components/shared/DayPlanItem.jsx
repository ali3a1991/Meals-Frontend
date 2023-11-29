import React, { useState } from 'react'

function DayPlanItem(props) {
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
      <p className='w-24'>{props.day}</p>
      {!edit ? <div className='flex justify-between w-[70%]'>
        <p className='w-[20%]'>{breakfast}</p>
        <p className='w-[20%]'>{lunch}</p>
        <p className='w-[20%]'>{dinner}</p>
      </div> : 
      <div className='flex justify-between w-[70%]'>
        <select className='w-[20%]' onChange={handleSelectValue} name="breakfast" value={breakfast === '' ? 'Select' : breakfast}>
          <option value="">Select</option>
          <option value="Stack">Stack</option>
          <option value="Pasta">Pasta</option>
        </select>
        <select className='w-[20%]' onChange={handleSelectValue} name="lunch" value={lunch === '' ? 'Select' : lunch}>
          <option value="">Select</option>
          <option value="Stack">Stack</option>
          <option value="Pasta">Pasta</option>
        </select>
        <select className='w-[20%]' onChange={handleSelectValue} name="dinner" value={dinner === '' ? 'Select' : dinner}>
          <option value="">Select</option>
          <option value="Stack">Stack</option>
          <option value="Pasta">Pasta</option>
        </select>
      </div>
      }
      <button onClick={handleEditPlan} className='bg-gray-200'>{!edit ? 'Edit' : 'Add'}</button>
    </div>
  )
}

export default DayPlanItem