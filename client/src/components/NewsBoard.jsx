import React from 'react'
import Article from './Article'

const NewsBoard = () => {

  return (
    <div className='mt-5'>
        <div className='w-full flex flex-col  gap-6 '>
            <Article/>
            <Article/>
            <Article/>
        </div>
    </div>
  )
}

export default NewsBoard