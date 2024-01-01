"use client";
import React, { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function PopUp({ isOpenPopUp, closePopUp }) {
  return (
    <>
      <div
        className={`bg-black/50 fixed left-0 top-0 z-[9] w-full h-full
         ${isOpenPopUp ? "block" : "hidden"}`}
      >
        <div className="flex items-center justify-center">
          <div
            className={`w-80 md:w-96 p-5 flex flex-col items-center justify-center bg-white border rounded absolute top-1/3 lg:ms-10 z-10 `}
          >
            <FaRegCircleCheck className="text-2xl mb-1" />
            <h3 className="font-bold text-2xl">Unggah Kursus</h3>
            <p>Data kursus anda berhasil diunggah</p>
            <button
              type="button"
              className="px-6 py-1.5 text-white bg-blue rounded mt-5"
              onClick={closePopUp}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
