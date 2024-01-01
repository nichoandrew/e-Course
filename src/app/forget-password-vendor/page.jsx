"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import LogoKursus from "@/assets/img/logokursusonline.svg";
import Email from "@/assets/icons/blue-email.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [showPopUp, setShowPopUp] = useState(false);
  const [email, setEmail] = useState("");

  const handleKirimClick = () => {
    router.push("/login-vendor");
  };

  const handleOK = (e) => {
    e.preventDefault();
    setShowPopUp(false);
    window.location.href = "/reset-password";
  };
  return (
    <div className="flex w-full h-screen flex-col items-center justify-center px-8 lg:px-0">
      <Image
        className="absolute left-6 top-6"
        src={LogoKursus}
        width={200}
        height={205}
        alt="logo"
      />
      <div className="flex flex-col items-center w-full lg:w-[35%]">
        <div>
          <h3 className="text-3xl text-center font-semibold mb-2">
            Lupa password ?
          </h3>
          <p className="text-center px-2 [#83858A]">
            Silahkan masukkan alamat email anda pada form dibawah Jika email
            terdaftar, maka kami akan mengirimkan email untuk mereset password
            anda.
          </p>
        </div>
        <div className="w-full mt-4 flex-col items-center text-center">
          <div className="relative w-full flex items-center pt-3 mb-4">
            <input
              id="email"
              name="email"
              placeholder="Cth. kursusonline123@gmail.com"
              type="text"
              autoComplete="email"
              className="block w-full border-0 py-3 pl-10  text-gray-900 shadow-sm ring-1 ring-inset ring-blue placeholder:text-gray-400 focus:outline-none  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-full"
              onChange={(e) => setEmail(e.target.value)}
              //   value={form.email}
              //   onChange={handleChange}
            />
            <Image className="absolute left-2" src={Email} alt="" />
          </div>
          <button
            className="w-full bg-blue text-white py-3 rounded-full"
            onClick={handleKirimClick}
          >
            Reset Password
          </button>
<div className="mt-4">
          <Link
            href="/login-vendor"
            className="text-blue"
          >
            Kembali
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
