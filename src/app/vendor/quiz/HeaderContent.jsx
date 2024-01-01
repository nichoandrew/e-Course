import React from 'react'

export default function HeaderContent({ title, description }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className='text-blue text-xl text-center md:text-2xl font-bold'>{title}</h3>
      <p className='text-black text-base'>{description}</p>
    </div>
  )
}
