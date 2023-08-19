import React from 'react'
import { BiSearch } from 'react-icons/bi'

const AutoCompleteBar = ({queryContent}) => {
  return (
    <div className=" mx-8 text-md text-gray-600 flex gap-2 items-center hover:bg-gray-200  bg-white cursor-pointer py-2  w-full">
    <BiSearch className='text-gray-400'/><h1> {queryContent}</h1>
    
   </div>
  )
}

export default AutoCompleteBar
