"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import left from '@/assets/icons/chevron-left.svg'
import hero from '@/assets/images/hero-detail-kursus-vendor.svg'
// import laluna from '@/assets/icons/Laluna.svg'
// import sabrina from '@/assets/icons/sabrina.svg'
// import niken from '@/assets/icons/Niken.svg'
import check from '@/assets/icons/check-circle.svg'
import { PesertaKursus } from '@/assets/data/data.js'
import BreadcrumbsVendor from '@/components/BreadcrumbsVendor'

const page = () => {

    const [selectedPeserta, setSelectedPeserta] = useState(null)


    const handlePesertaClick = (pesertaId) => {
        setSelectedPeserta(selectedPeserta === pesertaId ? null : pesertaId);
    };

    return (
        <section className="bg-[#E4ECF4] p-10">
            <h1 className='text-xl font-semibold text-[#055EA8]'>Detail Peserta</h1>
            <BreadcrumbsVendor link="/kursus-saya/detail-kursus/detail-peserta" title="" nav="Home / Kursus Saya / Detail kursus / Detail Peserta" />
            <div className='w-full h-full  mt-10 px-4 md:px-10 rounded-2xl pt-9 pb-14 border shadow-xl bg-white '>
                <button className='flex flex-row gap-1 self-center items-center'>
                    <Image className='w-6 h-6' src={left} alt='' />
                    <p className='text-xl text-[#044E8C] font-medium'>Kembali</p>
                </button>

                <div className='max-h-[500px] mt-8 relative w-full rounded-xl'>
                    <div className='absolute text-white text-xl md:text-4xl font-bold h-full max-h-[500px] flex self-center mx-8 items-center'>
                        <h2>CSS Introduction</h2>
                    </div>
                    {/* Gantilah dengan sumber gambar yang sesuai */}
                    <Image className='w-full h-32 max-h-[500px] rounded-xl object-cover' src={hero} alt='' />
                </div>

                <h3 className='mt-8 font-semibold text-2xl'>
                    Peserta Kursus
                </h3>

                {/* Tampilan Desktop */}
                <div className='mt-11 mx-4 grid max-md:hidden grid-cols-2 gap-7'>
                    {PesertaKursus.map((peserta) => (
                        <div key={peserta.id} className='w-auto h-auto borde'>
                            <div className='flex flex-row gap-4'>
                                <Image className=' w-16 h-16' src={peserta.image} alt='' />
                                <h4 className='flex self-center w-52 font-semibold text-xl'>{peserta.name}</h4>
                            </div>
                            <h4 className='mt-4 text-[#5894C5] text-base font-medium'>Kelas Reguler</h4>

                            {/* Map Kuis */}
                            <ul className='mt-1'>
                                <h5 className='text-base font-bold'>Kuis CSS </h5>
                                {peserta.kuis.map((kuis) => (
                                    <li key={kuis.title} className='flex flex-row ml-6'>
                                        <p className=' w-9/12 '>{kuis.title}</p>
                                        <span className=' w-3/12 mt-1 flex flex-row gap-7 '>
                                            <p className={`text-sm font-medium ${kuis.progress === 'selesai' ? 'text-[#34BD32]' : 'text-[#E2313D]'}`}>
                                                {kuis.progress}
                                            </p>
                                            {kuis.progress === 'selesai' && <Image className='w-6 h-6' src={check} alt='' />}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Map Tugas */}
                            <ul className=' mt-5'>
                                <h5 className='text-base font-bold'>Tugas CSS </h5>
                                {peserta.tugas.map((tugas) => (
                                    <li key={tugas.title} className='flex flex-row ml-6'>
                                        <p className=' w-9/12 '>{tugas.title}</p>
                                        <span className=' w-3/12 flex flex-row gap-7 '>
                                            <p className={`text-sm font-medium ${tugas.progress === 'selesai' ? 'text-[#34BD32]' : 'text-[#E2313D]'}`}>
                                                {tugas.progress}
                                            </p>
                                            {tugas.progress === 'selesai' && <Image className='w-6 h-6' src={check} alt='' />}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Responsive mobile */}
                <div className='mt-11  grid grid-cols-1 md:hidden gap-7'>
                    {PesertaKursus.map((peserta) => (
                        <div key={peserta.id} className='w-auto h-auto'>
                            <div className='flex flex-row gap-4' onClick={() => handlePesertaClick(peserta.id)}>
                                <Image className='w-16 h-16' src={peserta.image} alt='' />
                                <h4 className='flex self-center w-52 font-semibold text-xl'>{peserta.name}</h4>
                            </div>

                            {selectedPeserta === peserta.id && (
                                <div>

                                    <h4 className='mt-4 text-[#5894C5] text-base font-medium'>Kelas Reguler</h4>
                                    {/* Map Kuis */}
                                    <ul className='mt-1'>
                                        <h5 className='text-base font-bold'>Kuis CSS </h5>
                                        {peserta.kuis.map((kuis) => (
                                            <li key={kuis.title} className='flex flex-row ml-6'>
                                                <p className='w-[65%]'>{kuis.title}</p>
                                                <span className='w-[35%] mt-1 flex flex-row gap-7 '>
                                                    <p className={`text-base font-medium ${kuis.progress === 'selesai' ? 'text-[#34BD32]' : 'text-[#E2313D]'}`}>
                                                        {kuis.progress}
                                                    </p>
                                                    {kuis.progress === 'selesai' && <Image className='w-6 h-6' src={check} alt='' />}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Map Tugas */}
                                    <ul className=' mt-5'>
                                        <h5 className='text-base font-bold'>Tugas CSS </h5>
                                        {peserta.tugas.map((tugas) => (
                                            <li key={tugas.title} className='flex flex-row ml-6'>
                                                <p className='w-[65%]'>{tugas.title}</p>
                                                <span className='w-[35%] flex flex-row gap-7 '>
                                                    <p className={`text-sm font-medium ${tugas.progress === 'selesai' ? 'text-[#34BD32]' : 'text-[#E2313D]'}`}>
                                                        {tugas.progress}
                                                    </p>
                                                    {tugas.progress === 'selesai' && <Image className='w-6 h-6' src={check} alt='' />}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page