"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import left from '@/assets/icons/chevron-left.svg'
import hero from '@/assets/images/hero-detail-kursus-vendor.svg'
import trash from '@/assets/icons/trash-Bold.svg'
import survey from '@/assets/icons/survey-line.svg'
import BreadcrumbsVendor from '@/components/BreadcrumbsVendor'

const page = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = (e) => {
    e.preventDefault();
    setModal(!modal)
  }

  const closeModal = (e) => {
    e.preventDefault();
    setModal(false)
    setTimeout(() => {
      window.location.href = '/vendor/kursus-saya/detail-kursus/saya'
    }, 1500);
  }

  const backPage = (e) => {
    e.preventDefault();
    window.location.href = '/vendor/kursus-saya/detail-kursus'
  }

  return (
    <section className=" bg-[#E4ECF4] p-10">
      <h1 className='text-xl font-semibold text-[#055EA8]'>Tambah Tugas</h1>
      <BreadcrumbsVendor link="/kursus-saya/detail-kursus/tambah-tugas-kursus" title="" nav="Home / Kursus Saya / Detail kursus / Tambah Tugas Kursus" />
      <form className='w-full h-full  mt-10 px-4 md:px-10 rounded-2xl pt-9 pb-14 border shadow-xl bg-white '>
        <button className='flex flex-row gap-1 self-center items-center' onClick={backPage}>
          <Image className='w-6 h-6' src={left} alt='' />
          <p className='text-xl text-[#044E8C] font-medium'>Kembali</p>
        </button>

        <div className='max-h-[300px] mt-8 relative w-full rounded-xl'>
          <div className='absolute text-white text-xl md:text-4xl font-bold h-full max-h-[300px] flex self-center mx-8 items-center'>
            <h2>CSS Introduction</h2>
          </div>
          <Image className='w-full max-h-[300px]  rounded-xl object-cover' src={hero} alt='' />
        </div>

        <div className='mt-12 flex flex-col gap-5'>
          <label className='text-xs md:text-lg lg:text-2xl font-medium'>Judul Tugas</label>
          <input className='w-full h-10 lg:h-16 lg:py-4 lg:px-6 border p-2 border-[#055EA8] rounded-xl outline-none' placeholder='Masukkan judul tugas disini' type='title' />
        </div>

        <div className='mt-12 flex flex-col gap-5'>
          <label className='text-xs md:text-lg lg:text-2xl font-medium'>Isian Tugas</label>
          <textarea
            className='w-full h-14 lg:px-5 lg:py-3 p-2 lg:h-28 border border-[#055EA8] rounded-xl outline-none'
            placeholder='Tuliskan isian tugas disini'
            style={{ resize: 'none' }}
          />

        </div>

        <div className='mt-6 flex flex-col gap-5'>
          <label className='text-xs md:text-lg lg:text-2xl font-medium'>Daftar Tugas</label>
          <div className='flex flex-row gap-2 w-full  h-20 lg:h-24 border border-[#055EA8] lg:py-3 lg:px-5 p-2 rounded-xl'>
            <textarea
              className='w-full h-full outline-none'
              placeholder='Tuliskan daftar tugas disini'
              style={{ resize: 'none' }}
            />
            <button className='w-5 h-5 flex items-center self-center'>
              <Image className='w-5 h-5' src={trash} />
            </button>
          </div>

          <div className='flex flex-row gap-2 w-ful h-20 lg:h-24 border border-[#055EA8] lg:py-3 lg:px-5 p-2 rounded-xl'>
            <textarea
              className='w-full h-full outline-none'
              placeholder='Tuliskan daftar tugas disini'
              style={{ resize: 'none' }}
            />
            <button className='w-5 h-5 flex items-center self-center'>
              <Image className='w-5 h-5' src={trash} />
            </button>
          </div>
        </div>

        <button
          type='submit'
          onClick={toggleModal}
          className='w-full flex justify-center mt-8 lg:mt-16 py-2 lg:py-5 rounded-xl text-2xl text-white font-semibold bg-[#055EA8]'>
          Simpan
        </button>

        {modal && (
          <div className='fixed inset-0 left-0 w-full h-full bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-20'>
            <div className='bg-white p-8 rounded-xl w-[487px] h-72 overflow-hidden flex flex-col justify-center items-center'>
              <Image src={survey} alt='' className='w-[38px] h-10' />
              <p className='font-bold text-3xl mt-2'>
                Tambah Tugas
              </p>
              <p className='text-lg font-normal text-[#49454F] mt-2'>Tugas berhasil ditambahkan</p>
              <button className='mt-12 bg-[#055EA8] text-white py-[10px] px-3 flex justify-center self-center w-[190px] rounded-3xl' onClick={closeModal}>Tutup</button>
            </div>

          </div>
        )}

      </form>
    </section>
  )
}

export default page