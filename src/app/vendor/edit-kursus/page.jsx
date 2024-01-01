"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import left from '@/assets/icons/chevron-left.svg'
import hero from '@/assets/images/hero-detail-kursus-vendor.svg'
import trash from '@/assets/icons/trash-Bold.svg'
import kamera from '@/assets/icons/camera.svg'
import add from '@/assets/icons/icon_add.svg'
import IconKurikulumVendor from "@/assets/icons/iconVendorKurikulum-green.svg";
import IconEditKurikulum from "@/assets/icons/icon_edit_kurikulum.svg";
import IconTrashKurikulum from "@/assets/icons/icon_trash_kurikulum.svg";
import ThumbnailKursus from "@/assets/icons/thumbnail_edit_kursus_vendor.svg";
import PlayButton from "@/assets/icons/icon_play_vendor.svg";

const page = () => {
    const [modal, setModal] = useState(false)

    const toggleModal = (e) => {
        e.preventDefault();
        setModal(!modal)
    }

    return (
        <section className=" mx-5 md:mx-7 lg:mx-[35px] mt-8 ">
            <h1 className='text-xl font-semibold text-[#055EA8]'>Tambah Tugas</h1>
            <div className='w-full h-full  mt-[60px] px-4 md:px-10 rounded-2xl pt-9 pb-14 border shadow-xl bg-white '>
                <button className='flex flex-row gap-1 self-center items-center'>
                    <Image className='w-6 h-6' src={left} alt='' />
                    <p className='text-xl text-[#044E8C] font-medium'>Kembali</p>
                </button>

                <div className='max-h-[300px] mt-8 relative w-full rounded-xl'>
                    <div className='absolute text-[#022F54] h-full max-h-[300px] flex self-end items-end bottom-4 right-4  md:bottom-8 md:right-9'>
                        <button className=' w-[107px] h-[35px] md:w-[174px] px-2 md:h-[54px] bg-[#ACC9E2] rounded-[30px]  flex flex-row gap-2'>
                            <Image className='w-5 h-5 md:w-10 md:h-9 flex items-center self-center' src={kamera} />
                            <p className='flex items-center self-center font-medium md:text-base text-[10px]'>Pilih gambar</p>
                        </button>
                    </div>
                    <Image className='w-full h-[133px] md:h-[285px] rounded-xl object-cover' src={hero} alt='' />
                </div>

                <div className='mt-12 flex flex-col gap-5'>
                    <p className='text-xs md:text-lg lg:text-2xl font-medium'>Harga Kursus</p>
                    <input placeholder='Rp. 150.000' className='w-full h-10 lg:h-16 lg:py-4 lg:px-6 border p-2 border-[#055EA8] rounded-xl outline-none' type='input' />
                </div>

                <div className='mt-12 flex flex-col gap-5'>
                    <p className='text-xs md:text-lg lg:text-2xl font-medium'>Judul Tugas</p>
                    <input placeholder='CSS Introduction' className='w-full h-10 lg:h-16 lg:py-4 lg:px-6 border p-2 border-[#055EA8] rounded-xl outline-none' type='input' />
                </div>

                <div className='mt-6 flex flex-col gap-5'>
                    <p className='text-xs md:text-lg lg:text-2xl font-medium'>Kurikulum</p>
                    <div className='flex flex-row gap-2 w-full  h-[129px] lg:h-[229px] border border-[#055EA8] lg:py-3 lg:px-5 p-2 rounded-xl'>
                        <textarea
                            placeholder='Pada materi ini kamu akan mempelajari cara berpikir dan penggambaran suatu program dengan menggunakan CSS. Kamu akan belajar konsep dasar CSS. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero lorem, mattis non efficitur faucibus, pellentesque id tortor. Pellentesque interdum turpis vel dui pellentesque, sed interdum ipsum bibendum. Maecenas sollicitudin vehicula est, non varius eros molestie in. Proin sit amet finibus metus. Etiam at diam at purus dictum tincidunt cursus nec elit. Integer maximus arcu sit amet lacus fringilla condimentum. Ut vulputate nunc ullamcorper, laoreet tellus eu, iaculis diam. Nulla facilisi. Pellentesque eget magna ut erat facilisis lobortis aliquet sed augue.'
                            className='w-full h-full outline-none'
                            style={{ resize: 'none' }}
                        />
                    </div>
                </div>

                {/* Jenis Kelamin */}
                <div className="mt-6 flex flex-col gap-5">
                    <label className='text-xs md:text-lg lg:text-2xl font-medium'>Deskripsi Kursus</label>
                    <select
                        name="Jenis Kelas"
                        className="w-full h-10 lg:h-[75px] px-[10px] py-[6px] lg:py-4 border rounded-xl border-[#055EA8] text-base font-normal"
                    >
                        <option value="Kelas Reguler">Kelas Reguler</option>
                        <option value="Kelas Interaktif">Kelas Interaktif</option>
                    </select>
                </div>


                <div className='flex flex-row lg:flex-col mt-8 lg:mt-16 max-lg:items-center '>
                    <p className=' text-xs md:text-lg lg:text-2xl font-medium'>Kurikulum</p>

                    <button className='w-36 max-lg:hidden h-7 md:w-80 md:h-14 text-[10px] md:text-base flex justify-center items-center ml-auto font-medium  bg-[#055EA833] text-[#055EA8] px-3 py-2 lg:mt-6 rounded-[20px]'>
                        + tambahkan kurikulum dan quiz
                    </button>

                    <button className='w-36 h-7 lg:hidden md:w-44 md:h-12 text-[10px] md:text-base flex justify-center items-center ml-auto font-medium  bg-[#055EA833] text-[#055EA8] px-3 py-2  rounded-[20px]'>
                        + kurikulum dan quiz
                    </button>
                </div>

                <div className='mt-6 h-auto lg:mx-12'>
                    <div className='flex flex-row gap-3 lg:gap-7  rounded-md shadow-md lg:border-b border-[#BFBEBE] px-4 py-2 lg:py-6'>
                        <Image className='w-4 h-4 md:w-[30px] md:h-[30px]' src={IconKurikulumVendor} alt='' />
                        <div className='flex-grow'>
                            <p className='text-xs md:text-2xl font-medium'>Dasar-Dasar CSS</p>

                        </div>
                        <a
                            onClick={toggleModal}
                            className='text-xs md:text-xl text-[#E2313D] font-medium ml-auto cursor-pointer'>Hapus Kurikulum</a>
                    </div>
                    <div className=' mt-4 md:mt-9 flex flex-row gap-3'>
                        <button className='text-white bg-[#055EA8] rounded-md md:rounded-lg w-[16px] h-[16px] md:w-[31px] md:h-[31px] flex items-center justify-center'>
                            <Image className='w-3 h-3' src={add} alt='' />
                        </button>
                        <p className='flex items-center text-[10px] md:text-base text-[#055EA8] font-medium'>Tambah modul</p>
                    </div>

                    <div className='mt-4 md:mt-9 grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div className=' w-44 h-28 md:w-auto md:h-auto border flex flex-col py-2 md:py-4 lg:py-8 border-[#F6F6F6] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]'>
                            <div className='flex flex-row gap-2 lg:gap-6 border-b w-full h-auto md:h-[69px] lg:h-[64px] border-[#A2A3A7] justify-center items-center self-center pb-1 md:pb-3 lg:pb-6 px-4 lg:px-6'>
                                <div className='flex-grow'>
                                    <p className='font-medium md:text-xl text-[10px]'>Dasar-Dasar CSS  </p>
                                </div>
                                <button>
                                    <Image className='w-3 h-3 md:w-5 md:h-5' src={IconEditKurikulum} alt='' />
                                </button>
                                <button>
                                    <Image className='w-3 h-3 md:w-5 md:h-5' src={IconTrashKurikulum} alt='' />
                                </button>
                            </div>
                            <div className='mt-2 md:mt-3 lg:mt-5 relative w-full h-auto px-2 md:px-4 lg:px-6'>
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <button className='w-6 h-6 md:w-14 md:h-14  lg:w-20 lg:h-20'>
                                        <Image className='w-6 h-6 md:w-14 md:h-14  lg:w-20 lg:h-20' src={PlayButton} />
                                    </button>
                                </div>
                                <Image className='w-full h-auto md:h-full lg:h-auto rounded-xl' src={ThumbnailKursus} alt='' />
                            </div>
                        </div>

                        <div className=' w-44 h-28 md:w-auto md:h-auto border flex flex-col py-2 md:py-4 lg:py-8 border-[#F6F6F6] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]'>
                            <div className='flex flex-row gap-2 lg:gap-6 border-b w-full h-auto md:h-[69px] lg:h-[64px] border-[#A2A3A7] justify-center items-center self-center pb-1 md:pb-3 lg:pb-6 px-4 lg:px-6'>
                                <div className='flex-grow'>
                                    <p className='font-medium md:text-xl text-[10px]'>Quiz</p>
                                </div>
                                <button>
                                    <Image className='w-3 h-3 md:w-5 md:h-5' src={IconEditKurikulum} alt='' />
                                </button>
                                <button>
                                    <Image className='w-3 h-3 md:w-5 md:h-5' src={IconTrashKurikulum} alt='' />
                                </button>
                            </div>
                            <div className='mt-2 md:mt-3 lg:mt-5 relative w-full h-auto px-2 md:px-4 lg:px-6'>
                                <p className='text-[10px] md:text-lg font-light text-[#393C42]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            </div>
                        </div>

                        {/* <div className=' w-44 h-28 md:w-auto md:h-auto border flex flex-col py-2 md:py-4 lg:py-8 border-[#F6F6F6] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]'>
                            <div className='flex flex-row gap-2 lg:gap-6 border-b w-full h-[30%] border-[#A2A3A7] justify-center items-center self-center pb-1 md:pb-3 lg:pb-6 px-4 lg:px-6'>
                                <div className='flex-grow'>
                                    <p className='font-medium md:text-xl text-[10px]'>Quiz</p>
                                </div>
                                <button>
                                    <Image className='w-3 h-3 md:w-5 md:h-5' src={IconEditKurikulum} alt='' />
                                </button>
                                <button>
                                    <Image className='w-3 h-3 md:w-5 md:h-5' src={IconTrashKurikulum} alt='' />
                                </button>
                            </div>
                            <div className='mt-2 md:mt-3 lg:mt-5 relative w-full h-[70%] px-2 md:px-4 lg:px-6'>
                            <p className='text-lg font-light text-[#393C42]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            </div>
                        </div> */}
                    </div>
                </div>


                <button
                    type='submit'
                    className='w-full flex justify-center mt-8 lg:mt-16 py-2 lg:py-5 rounded-xl text-2xl text-white font-semibold bg-[#055EA8]'>
                    Simpan
                </button>

                {modal && (
                    <div className='fixed inset-0 left-0 w-full h-full bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-20'>
                        <div className='bg-white p-8 rounded-xl w-[487px] h-72 overflow-hidden flex flex-col justify-center items-center text-center'>
                            <Image src={trash} alt='' className='w-[38px] h-10' />
                            <p className='font-bold text-3xl mt-2 '>
                                Konfirmasi Hapus Kurikulum
                            </p>
                            <p className='text-lg font-normal text-[#49454F] mt-2 justify-center'>Yakin ingin menghapus semua data pada kurikulum ini ?</p>
                            <div className='mt-12 flex flex-row gap-4 justify-center self-center'>
                                <button className=' text-[#055EA8] border border-[#055EA8] bg-white py-[10px] px-3 w-[190px] rounded-xl'>TIdak</button>
                                <button className=' bg-[#055EA8] text-white py-[10px] px-3 w-[190px] rounded-xl'>Ya</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default page