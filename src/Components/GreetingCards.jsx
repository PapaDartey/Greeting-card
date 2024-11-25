import React from 'react'

const GreetingCards = ({title, message}) => {
  return (
    <div className='flex justify-center border p-20'>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  )
}

export default GreetingCards
