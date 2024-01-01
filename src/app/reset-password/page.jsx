"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Eye from "@/assets/icons/eye.svg";
import Lock from "@/assets/icons/unlock.svg";
import Back from "@/assets/icons/arrow-left.svg";
import LoginBg from "@/assets/images/bglogin.svg";
import LogoAuth from "@/assets/icons/logo_auth.svg";
import PopUpResetPassword from "@/components/Auth-PopUp-reset/PopUpResetBerhasil";

export default function Page() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const handleKirimClick = () => {
    setShowPopUp(true);
  };

  const handleOK = (e) => {
    e.preventDefault();
    setShowPopUp(false);
    window.location.href = "/login";
  };
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col relative h-screen px-4 py-4 md:py-10 lg:px-0 lg:py-0"
    >
      <Link href="/login" className="flex gap-3 md:pl-4 lg:pl-0 lg:absolute lg:top-4 lg:left-20" >
        <Image src={Back} alt="back" />
        <p className="text-md font-medium text-[#055EA8] flex items-center">
          Kembali
        </p>
      </Link>
      <div className="flex flex-col lg:flex-row lg:overflow-y-hidden">
        <div className="lg:w-1/2 hidden lg:block mt-10 lg:mt-0">
          <Image src={LoginBg} alt="bg" />
        </div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full lg:w-1/2 justify-center items-center lg:px-10 pt-8 md:pt-16 lg:pt-0"
        >
          <div className="flex flex-col justify-center w-full md:w-2/3">
            <div className=" mx-auto mb-1 lg:mb-1">
              <Image src={LogoAuth} alt="logo" />
            </div>
            <div className="py-5 lg:py-10">
              <h3 className="text-center text-2xl font-semibold text-[#45484F] mb-2">
                Lupa Kata Sandi
              </h3>
              <h3 className="text-center text-sm font-medium  text-[#83858A]">
                Masukkan kata sandi baru anda
              </h3>
            </div>
            <h3 className="text-sm font-medium leading-6 text-[#45484F]">
              Masukkan Kata Sandi Baru
            </h3>
            <div className="relative w-full flex items-center pt-3 pb-3">
              <input
                id="passwordBaru"
                name="passwordBaru"
                autoComplete="new-password"
                placeholder="Masukkan kata sandi baru anda"
                type={showPassword ? "text" : "password"}
                className="block w-full border-0 py-1.5 px-10  text-gray-900 shadow-sm ring-1 ring-inset ring-[#055EA8] placeholder:text-gray-400 focus:outline-none  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Image className="absolute left-2" src={Lock} alt="lock" />
              <button
                className="absolute right-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Image src={Eye} alt="eye" />
              </button>
            </div>
            <h3 className="text-sm font-medium leading-6 text-[#45484F]">
              Konfirmasi Kata Sandi Baru
            </h3>
            <div className="relative w-full flex items-center pt-3 pb-8">
              <input
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="new-password"
                placeholder="Konfirmasi kata sandi baru anda"
                type={showConfirmPassword ? "text" : "password"}
                className="block w-full border-0 py-1.5 px-10  text-gray-900 shadow-sm ring-1 ring-inset ring-[#055EA8] placeholder:text-gray-400 focus:outline-none  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <Image className="absolute left-2" src={Lock} alt="lock" />
              <button
                className="absolute right-2"
                onClick={() => setConfirmShowPassword(!showConfirmPassword)}
              >
                <Image src={Eye} alt="eye" />
              </button>
            </div>

            <button
              className="w-full bg-[#055EA8] text-white py-1.5"
              onClick={handleKirimClick}
            >
              Kirim
            </button>
          </div>
        </motion.div>
      </div>
      {showPopUp && <PopUpResetPassword onClick={handleOK} />}
    </motion.div>
  );
}