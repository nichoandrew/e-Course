"use client"
import React from 'react'
import ButtonControl from './ButtonControl'
import { setCurrentStep } from '@/redux/slices/quizSlice'
import { useDispatch, useSelector } from 'react-redux'
import HeaderContent from './HeaderContent'

export default function Overview({ backPage }) {
  const currentStep = useSelector((state) => state.quiz.currentStep)
  const quizData = useSelector((state) => state.quiz.quizData)
  const dispatch = useDispatch()

  const handleNextPage = () => {
    dispatch(setCurrentStep(currentStep + 1))
  }
  return (
    <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col justify-center mx-auto px-4 md:p-3">
      <HeaderContent title={'Buat Kuis Untuk Kursus Anda'} description={'Atur sesuai dengan keinginan'} />
      <div className="mt-10">
        {
          quizData.length !== 0 && quizData[0].text !== '' ?
            quizData.map((quiz, index) => (
              <div key={index} className='border rounded-lg border-blue mb-5 p-5'>
                <h3 className='font-bold text-lg md:text-xl'>Pertanyaan {index + 1}</h3>
                <h4 className='text-base'>{quiz.text}</h4>
                {
                  quiz.options.map((opt, i) => (
                    <div className={`flex leading-relaxed space-x-2 mt-2 ${opt.isCorrect === true && 'text-blue'}`} key={i}>
                      <span>{opt.option}.</span>
                      <p> {opt.text}</p>
                    </div>
                  ))
                }
              </div>
            ))
            :
            <div className='text-2xl h-32 m-auto flex justify-center items-center '>
              <h4 className='text-gray-400 font-bold'>Tidak ada Kuis</h4>
            </div>
        }
      </div>
      <ButtonControl className={'mt-10'} nextPage={handleNextPage} backPage={backPage} />
    </div>
  )
}
