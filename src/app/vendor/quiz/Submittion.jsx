"use client"
import { resetData, setCurrentStep } from '@/redux/slices/quizSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeaderContent from './HeaderContent'
import ButtonControl from './ButtonControl'
import PopUp from './PopUp'

export default function Submittion({ backPage, currentStep }) {
  const category = useSelector((state) => state.quiz.category)
  const quizInformation = useSelector((state) => state.quiz.quizInformation)
  const [isOpenPopUp, setIsOpenPopUp] = useState(false)
  const dispatch = useDispatch()


  const [data, setData] = useState({
    title: '-',
    name: '-',
    minutes: 0,
    seconds: 0,
  })

  const openPopUp = () => {
    setIsOpenPopUp(true)
  }
  const closePopUp = () => {
    setIsOpenPopUp(false)
    setTimeout(() => {
      dispatch(setCurrentStep(1))
    }, 2000)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(resetData())
    openPopUp()
  }

  useEffect(() => {
    if (category && quizInformation) {
      setData({
        title: category.title || data.title,
        name: quizInformation.name || data.name,
        minutes: quizInformation.minutes || data.minutes,
        seconds: quizInformation.seconds || data.seconds,
      })
    }
  }, [category, quizInformation])

  return (
    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col justify-center mx-auto px-4 md:p-3 ">
      <HeaderContent title={'Submit Quiz Untuk Kursus Anda'} />
      <div className="mt-10 mb-5 border border-blue rounded-lg p-5">
        <h3 className='font-bold text-lg mb-2'>Kuis 1</h3>
        <div className="flex items-center space-x-2  text-base">
          <h3 className='w-[6rem] font-bold'>Course </h3>
          <h3>: {data.title}</h3>
        </div>
        <div className="flex items-center space-x-2  text-base">
          <h3 className='w-[6rem] font-bold'>Nama Kuis </h3>
          <h3>: {data.name} </h3>
        </div>
        <div className="flex items-center space-x-2  text-base">
          <h3 className='w-[6rem] font-bold'>Durasi Kuis </h3>
          <h3>: {data.minutes} Menit {data.seconds} Detik</h3>
        </div>
      </div>

      <PopUp isOpenPopUp={isOpenPopUp} closePopUp={closePopUp} />
      <div className="flex items-center justify-between">
        <ButtonControl backPage={backPage} currentStep={currentStep} />
        <button type='submit' className='bg-blue text-white rounded px-8 py-2 ' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
