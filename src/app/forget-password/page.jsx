"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Back from "@/assets/icons/arrow-left.svg";
import LoginBg from "@/assets/images/bglogin.svg";
import Email from "@/assets/icons/blue-email.svg";
import LogoAuth from "@/assets/icons/logo_auth.svg";
import PopUpResetPassword from "@/components/Auth-PopUp-reset/PopUpResetPassword";

export default function Page() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [email, setEmail] = useState("");

  const handleKirimClick = () => {
    setShowPopUp(true);
  };

  const handleOK = (e) => {
    e.preventDefault();
    setShowPopUp(false);
    window.location.href = "/reset-password";
  };
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col relative h-screen px-4 py-4 md:py-10 lg:px-0 lg:py-0 "
    >
      <Link href="/login" className="flex gap-3 md:pl-4 lg:pl-0 lg:absolute lg:top-4 lg:left-20">
        <Image src={Back} alt="back" />
        <p className="text-md font-medium text-[#055EA8] flex items-center">
          Kembali
        </p>
      </Link>
      <div className="flex flex-col lg:flex-row lg:overflow-y-hidden">
        <div className="lg:w-1/2 hidden lg:block mt-10 lg:mt-0">
          <Image src={LoginBg} alt="bg" />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-center lg:px-10 pt-8 md:pt-16 lg:pt-0">
          <div className="flex flex-col justify-center w-full md:w-2/3 ">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" mx-auto mb-1"
            >
              <Image src={LogoAuth} alt="logo" />
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="py-10">
                <h3 className="text-center text-2xl font-semibold text-[#45484F] mb-2">
                  Lupa Kata Sandi?
                </h3>
                <h3 className="text-center text-sm font-medium  text-[#83858A]">
                  Masukkan E-mail yang anda gunakan
                </h3>
              </div>
              <label className="text-sm font-medium leading-6 text-[#45484F]">
                Masukkan E-mail
              </label>
              <div className="relative w-full flex items-center pt-3 pb-8">
                <input
                  id="email"
                  name="email"
                  placeholder="Cth. kursusonline123@gmail.com"
                  type="text"
                  autoComplete="email"
                  className="block w-full border-0 py-1.5 pl-10  text-gray-900 shadow-sm ring-1 ring-inset ring-[#055EA8] placeholder:text-gray-400 focus:outline-none  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                  //   value={form.email}
                  //   onChange={handleChange}
                />
                <Image className="absolute left-2" src={Email} alt="" />
              </div>

              <button
                className="w-full bg-[#055EA8] text-white py-1.5"
                onClick={handleKirimClick}
              >
                Kirim
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      {showPopUp && <PopUpResetPassword onClick={handleOK} email={email} />}
    </motion.div>
  );
}