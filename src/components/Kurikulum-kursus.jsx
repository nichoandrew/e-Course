"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import home from "@/assets/icons/home.svg";
import arrowleft from "@/assets/icons/arrow-left.svg";
// import arrowright from "@/assets/icons/arrow-right.svg";
import Upload from "@/assets/icons/upload1.svg";
import PopUp from "@/app/vendor/upload/upload/PupUp";

const InformasiDasar = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpenPopUp(true);
  };

  const closePopUp = () => {
    setIsOpenPopUp(false);
  };
  return (
    <div className="p-10 bg-[#E4ECF4]">
      <div className="text-[#055EA8] font-semibold text-xl">Informasi Dasar</div>
      <div className="flex">
        <Image src={home} alt="Notification" width={15} height={15} className="block" />
        <p className="text-[#055EA8] ml-1 text-base">/ Unggah Kursus</p>
        <p className="text-[#055EA8] ml-1 text-base">/ Informasi Dasar</p>
        <p className="text-[#055EA8] ml-1 text-base">/ Kurikulum Kursus</p>
      </div>

      <div className="bg-[#FFF] p-10 mt-10 rounded-xl">
        <div className="text-center mt-10 sm:mt-10">
          <div className="font-bold text-2xl sm:text-2xl text-[#055EA8]">Kurikulum Kursus</div>
          <div className="text-xs sm:text-sm mt-2">Tambahkan kurikulum untuk penunjang pembelajaran kursus</div>
        </div>
        <form>
          <div className="mt-6 sm:mt-[50px]">
            <div className="font-bold text-lg text-start mb-3">Judul Kurikulum</div>
            <input type="text" className="border border-[#055EA8] rounded-xl p-3 sm:p-5 focus:outline-none focus:border-black w-full h-4" placeholder="Masukan judul kurikulum anda" />
          </div>

          <div className="mt-6 sm:mt-[50px]">
            <div className="font-bold text-lg text-start mb-3">Judul Modul</div>
            <input type="text" className="border border-[#055EA8] rounded-xl p-3 sm:p-5 focus:outline-none focus:border-black w-full h-4" placeholder="Masukan judul modul anda" />
          </div>

          <div className="mt-6 sm:mt-[50px]">
            <h2 className="font-bold text-lg text-start mb-3">Link Video Materi</h2>
            <input className="border border-[#055EA8] rounded-xl h-16 md:h-[200.62px] p-5 w-full" type="text" placeholder="Masukan link materi" />
          </div>

          <div className="mt-6 sm:mt-[50px]">
            <div className="font-bold text-lg text-start mb-3">File Materi (Opsional)</div>
            <div className="flex flex-col relative items-center border border-[#055EA8] rounded-xl h-[273.9px] p-2 text-xs w-full justify-center">
              <Image src={Upload} alt="upload" />
              <div className="inline-flex gap-1 mt-2">
                <p className="underline text-[#5894C5]">Klik untuk mengunggah</p>
                <p className="text-[#5894C5]"> atau seret dan lepas PDF</p>
              </div>
              <input className="opacity-0 absolute top-0 left-0 w-full h-full" type="file" />
            </div>
          </div>
        </form>

        <div className="flex mt-10">
          <div className="w-1/2">
            <a href=".">
              <button className="bg-[#055EA8] w-full md:w-48 rounded-xl text-center py-2 md:py-2 px-4 md:px-4">
                <div className="flex items-center justify-center">
                  <Image src={arrowleft} alt="Notification" width={25} height={15} className="block" />
                  <span className="text-white font-bold text-lg md:text-xl ml-2">Kembali</span>
                </div>
              </button>
            </a>
          </div>
          <div className="w-1/2 flex justify-end">
            <button onClick={handleSubmit} className="bg-[#055EA8] w-full md:w-48 rounded-xl text-center py-2 md:py-2 px-4 md:px-4">
              <div className="flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl mr-2">Kirim</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="mt-[43px]">
        <hr className=" border-b-0 border-[#022F54] w-full" />
        <p className="text-base font-semibold text-center py-[14px]">
          © E-Course.
        </p>
      </div> */}
      <PopUp isOpenPopUp={isOpenPopUp} closePopUp={closePopUp} />
    </div>
  );
};

export default InformasiDasar;
