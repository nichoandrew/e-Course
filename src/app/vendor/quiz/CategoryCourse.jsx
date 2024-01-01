"use client"
import { resetData, setCategory, setCurrentStep } from '@/redux/slices/quizSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeaderContent from './HeaderContent'
import Image from 'next/image'
import software from '@/assets/images/software.svg'
import desain from '@/assets/images/desain.svg'
import bisnis from '@/assets/images/bisnis.svg'
import seni from '@/assets/images/seni.svg'
import checklist from '@/assets/images/checklist.svg'

export default function CategoryCourse() {
  const currentStep = useSelector((state) => state.quiz.currentStep)
  const dispatch = useDispatch()

  const handleKategori = (categoryId) => {
    const chooseCategory = categories.find((category) => category.id === categoryId)
    dispatch(setCategory(chooseCategory))
    dispatch(setCurrentStep(currentStep + 1))
  }
  const categories = [
    {
      id: 1,
      image: software,
      title: 'IT dan Perangkat Lunak'
    },
    {
      id: 2,
      image: desain,
      title: 'Desain Grafis'
    },
    {
      id: 3,
      image: bisnis,
      title: 'Bisnis'
    },
    {
      id: 4,
      image: seni,
      title: 'Seni Musik'
    },
  ]

  useEffect(() => {
    if (currentStep === 1) {
      dispatch(resetData())
    }
  }, [])
  return (
    <>
      <HeaderContent title={'Pilih Kategori Kursus'} description={'Pilih kategori kursus yang ingin anda buat'} />
      <div className="w-full md:w-3/4 lg:w-3/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:max-w-3xl gap-5 mt-10 p-5">
        {
          categories.map((category) => (
            <button className="bg-[#F0ECECB2] py-6 px-5 rounded-xl text-start relative group" key={category.id} onClick={() => handleKategori(category.id)}>
              <Image src={checklist} alt='' className='absolute right-6 bottom-16 opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-200 group-hover:delay-100' />
              <Image src={category.image} alt={`Gambar ${category.title}`} />
              <h3 className='font-bold text-base mt-2'>{category.title}</h3>
            </button>
          ))
        }
      </div>
    </>
  )
}
