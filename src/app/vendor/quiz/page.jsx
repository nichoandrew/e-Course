"use client"
import BreadcrumbsVendor from '@/components/BreadcrumbsVendor'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentStep } from '@/redux/slices/quizSlice'
import StepContent from './StepContent'
import CategoryCourse from './CategoryCourse'
import Information from './Information'
import Question from './Question'
import Overview from './Overview'
import Submittion from './Submittion'

export default function Page() {
  const currentStep = useSelector((state) => state.quiz.currentStep)
  const dispatch = useDispatch()

  const handleBackPage = () => {
    dispatch(setCurrentStep(currentStep - 1))
  }
  return (
    <div className=" min-h-screen bg-[#E4ECF4]">
      <div className="p-4 gap-3 grid grid-rows-1 bg-[#E4ECF4]">
        <div className="row-span-1">
          <BreadcrumbsVendor link="/kursus-saya/detail-kursus" title="Kursus Saya" nav="home / Quiz" />
        </div>
        <div className="w-full bg-white rounded-tl-xl rounded-tr-xl border-b-2 border-black/30 pb-5">
          <StepContent currentStep={currentStep} />
          <div className="py-10">
            {
              currentStep === 1 && <CategoryCourse />
            }
            {
              currentStep === 2 && <Information backPage={handleBackPage} />
            }
            {
              currentStep === 3 && <Question backPage={handleBackPage} />
            }
            {
              currentStep === 4 && <Overview backPage={handleBackPage} />
            }
            {
              currentStep === 5 && <Submittion backPage={handleBackPage} currentStep={currentStep} />
            }
          </div>
        </div>
      </div>
    </div >
  )
}
