"use client"
import { setCurrentStep, setQuizInformation } from '@/redux/slices/quizSlice'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeaderContent from './HeaderContent'
import ButtonControl from './ButtonControl'

export default function Information({ backPage }) {
  const currentStep = useSelector((state) => state.quiz.currentStep)
  const quizInformation = useSelector((state) => state.quiz.quizInformation)
  const dispatch = useDispatch()


  const [data, setData] = useState({
    name: "",
    description: "",
    // hours: 0,
    minutes: 0,
    seconds: 0
  })

  const onChangeHandler = (e) => {
    setData(() => ({
      ...data,
      [e.target.name]: e.target.value,
    }))
  }

  const handleNextPage = () => {
    dispatch(setQuizInformation(data))
    dispatch(setCurrentStep(currentStep + 1))
  }

  useEffect(() => {
    if (quizInformation) {
      setData({
        name: quizInformation.name,
        description: quizInformation.description,
        minutes: quizInformation.minutes,
        seconds: quizInformation.seconds,
      })
    }
  }, [quizInformation])
  return (
    <>
      <HeaderContent title={'Informasi Dasar'} description={'Tambahkan lebih detail tentang kuis ini'} />
      <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col justify-center mt-10 mx-auto p-6 md:p-3">
        <form >
          <div className="mb-3">
            <label htmlFor="name" className='font-bold'>Nama Kuis</label>
            <input type="text" name="name" id="name" placeholder='Ketikkan nama kuis disini' className='py-1.5 px-3 w-full border rounded ring-1 ring-blue active:border-blue focus:outline-none mt-2' value={data.name} onChange={onChangeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className='font-bold'>Deskripsi</label>
            <textarea name="description" id="description" cols="20" className='py-1.5 px-3 block w-full border rounded ring-1 ring-blue active:border-blue focus:outline-none mt-2' placeholder='Ketikkan deskripsi kuis disini' value={data.description} onChange={onChangeHandler} />
          </div>
          <div className="mb-3">
            <h3 className='font-bold'>Durasi Pengerjaan Kuis</h3>
            <div className="flex items-center space-x-3 mt-2">
              {/* <label htmlFor="hours">
              <span className='text-sm me-2'>Hours :</span>
              <input type="number" id='hours' name='hours' className='w-12 h-8 ring-1 ring-blue active:border-blue focus:outline-none rounded text-center' min={0} value={quizHours} onChange={onChangeHandler} />
            </label> */}
              <label htmlFor="minutes">
                <span className='text-sm me-2'>Minutes :</span>
                <input type="number" id='minutes' name='minutes' className='w-12 h-8 ring-1 ring-blue active:border-blue focus:outline-none rounded text-center' min={0} value={data.minutes} onChange={onChangeHandler} />
              </label>
              <label htmlFor="seconds">
                <span className='text-sm me-2'>Seconds :</span>
                <input type="number" id='seconds' name='seconds' className='w-12 h-8 ring-1 ring-blue active:border-blue focus:outline-none rounded text-center' min={0} value={data.seconds} onChange={onChangeHandler} />
              </label>
            </div>
          </div>
          <ButtonControl className={'mt-10'} backPage={backPage} nextPage={handleNextPage} currentStep={currentStep} />
        </form>
      </div>
    </>
  )
}
