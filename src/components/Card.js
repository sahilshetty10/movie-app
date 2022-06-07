import React from 'react'

const Card = (props) => {
    const base_url = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className=' border-2 rounded-3xl drop-shadow-sm'>
        <img className='w-full asect-[1/1.5] rounded-3xl drop-shadow-md' src= {base_url + props.img}></img>
        <h1 className='text-center text-lg font-bold h-8 truncate px-4'>{props.title}</h1>
    </div>
  )
}

export default Card