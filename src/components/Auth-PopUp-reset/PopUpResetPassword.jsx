import React from "react";
import Image from "next/image";
import imagePopUpReset from "@/assets/images/illustration_Password.svg";

const PopUpResetPassword = ({ onClick, email }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 h-screen w-screen bg-slate-800 opacity-40"></div>
      <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
        <div className="bg-white text-black p-4 rounded-lg flex flex-col items-center w-[482px]">
          <div className="mt-10">
            <Image className="" src={imagePopUpReset} alt="iconback" />
          </div>
          <div className="text-center mt-8">
            <h3 className="text-center text-2xl font-semibold text-[#45484F] mb-2">
              Lupa Kata Sandi
            </h3>
            <h3 className="text-center text-sm font-medium  text-[#83858A]">
              Email verifikasi telah dikirimkan ke
            </h3>
            <h3 className="text-center text-sm font-medium  text-[#055EA8]">
              {email}
            </h3>
          </div>
          <div className="w-full">
            <button
              className="bg-[#2A48FD] text-white text-lg font-semibold w-full py-1.5 my-4"
              type="button"
              id="confirm-reset"
              onClick={onClick}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpResetPassword;