import React from 'react'
import { BiUser } from 'react-icons/bi'
import Commentlist from './Commentlist'

const Comment = ({comment}) => {
  return (
    <>
    <div className='flex  shadow-md my-2 p-4 items-center border-l-2  gap-4'>
      <BiUser className='p-2 border-2 rounded-full mx-2 w-10 h-10 text-gray-300'/>
      <span className='flex flex-col'>
      <h1>{comment.name}</h1>
      <p>{comment.Comment}</p>
      </span>
    </div>
    <div className="ml-4">
      {comment.replies ? (
        <Commentlist CommentsData={comment.replies} />
      ) :null}</div>
    </>
  )
}

export default Comment
