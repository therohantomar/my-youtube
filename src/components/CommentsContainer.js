import React from 'react'
import Commentlist from './Commentlist';
import { CommentsData } from '../utils/constants';
const CommentsContainer = () => {
  return (
    <div className='w-full h-96'>

      <h1>Comments</h1>
      <Commentlist CommentsData={CommentsData}/>
    </div>
  )
}

export default CommentsContainer
