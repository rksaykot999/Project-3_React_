import React, { useState } from 'react'

export default function User() {
  const [value, setValue] = useState(10)

  const handleIncrease = () => {
    setValue(value + 1)
  }
  const handleDecrease = () => {
    setValue(value - 1)
  }

  return (
    <div className='text-center'>
      <h1 className='text-4xl '>All Users</h1>
      <h2 className='text-2xl mt-2'>The number is {value} </h2>
      <div className='mt-4'>
        <button onClick={handleDecrease} className='btn btn-secondary mr-8 text-white'> Decrease </button>
        <button onClick={handleIncrease} className='btn btn-primary text-white'> Increase </button>
      </div>
    </div>
  )
}
