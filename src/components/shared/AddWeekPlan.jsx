import React from 'react'

function AddWeekPlan() {
  return (
    <form>
      <select name="days">
        <option value="0" disabled>Day</option>
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
        <option value="7">Sunday</option>
      </select>
      <select name="Meals">
        <option value="0" disabled>Meal</option>
        <option value="1">Breakfast</option>
        <option value="2">Lunch</option>
        <option value="3">Dinner</option>
      </select>
      <input type="text" placeholder='Search Food' />
      <button>Add Meal</button>
    </form>
  )
}

export default AddWeekPlan