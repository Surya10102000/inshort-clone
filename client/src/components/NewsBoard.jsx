import React from 'react'
import Article from './Article'

const NewsBoard = () => {

  return (
    <div className='mt-5 flex flex-col'>
        <div className='w-full flex flex-col gap-6 lg:gap-1 '>
            <Article/>
            <Article/>
            <Article/>
        </div>
        <button className='btn btn-active mx-auto' >Load More</button>
    </div>
  )
}

export default NewsBoard