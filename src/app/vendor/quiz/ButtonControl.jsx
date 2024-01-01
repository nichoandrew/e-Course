import React from 'react'

export default function ButtonControl({ backPage, nextPage, currentStep, className }) {
  return (
    <div className={`flex justify-between ${className}`}>
      <button type="button" className='text-white text-center px-8 py-2 bg-gray-400 rounded' onClick={backPage}>Sebelumnya</button>
      <button type="button" className={`text-white text-center px-8 py-2 bg-blue rounded ${currentStep === 5 && 'hidden'}`} onClick={nextPage}>Selanjutnya</button>
    </div>
  )
}
