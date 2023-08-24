import React from 'react'
import { useRouteError } from 'react-router-dom'
import errorImage from "../utils/images/undraw_donut_love_kau1.png"

const Error = () => {
    const error=useRouteError()
    
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <img src={errorImage} alt='errorimage' className='w-56 h-44'/>
      <h1 className='font-bold text-xl'>{error.status}</h1>
      <h1 className='font-bold text-xl'>{error.message}</h1>
      <h1 className='font-bold text-xl'>{error.statusText}</h1>
    </div>
  )
}

export default Error
