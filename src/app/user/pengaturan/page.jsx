"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React, { useState } from "react";
// import bg from "@/assets/icons/line.svg";
import edit from "@/assets/icons/edit.svg";
import nama from "@/assets/icons/nama.svg";
import email from "@/assets/icons/email.svg";
import alamat from "@/assets/icons/alamat.svg";
import lock from "@/assets/icons/icon_lock.svg";
import profile from "@/assets/icons/profile.svg";
import pekerjaan from "@/assets/icons/pekerjaan.svg";
import jenis_kelamin from "@/assets/icons/jkelamin.svg";
const Sidebar = dynamic(() => import("@/components/Sidebar"));

const userData = [
  {
    idlabel: "name",
    key: "Nama Lengkap",
    value: "Marcella Diva",
    image: nama,
    desc: "Nama lengkap kamu",
  },
  {
    idlabel: "email",
    key: "Email",
    value: "marcelladiva@gmail.com",
    image: email,
    desc: "Alamat email kamu",
  },
  {
    idlabel: "alamat",
    key: "Alamat",
    value: "Jl. Ahmad Yani No. 18, Surabaya, Jawa Timur",
    image: alamat,
    desc: "Alamat lengkap kamu",
  },
  {
    idlabel: "pekerjaan",
    key: "Pekerjaan",
    value: "Mahasiswa",
    image: pekerjaan,
    desc: "Pekerjaan kamu saat ini",
  },
];

export default function Page() {
  const [popup, setPopup] = useState(false);
  const onFocus = () => {
    setPopup(true);
  };
  const onCancel = () => {
    setPopup(false);
  };
  return (
    <div className="lg:pt-20 lg:pb-8 md:pt-16">
      <div className="flex flex-col md:flex-row gap-2 md:gap-10 mx-4 md:mx-24 mb-0 md:mb-5 mt-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className=" md:w-1/4 mt-2 md:mt-0"
        >
          <Sidebar />
        </motion.div>
        <div
          // style={{
          //   backgroundImage: `url(${bg.src})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
          className={`flex-col w-full items-center md:w-3/4 flex transition duration-300 ${popup ? "hidden" : "flex"
            }`}
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className=" md:w-full flex flex-col md:border-2 rounded-2xl py-6 px-2 md:px-4 lg:px-14"
          >
            <div className="flex flex-col items-center mb-10">
              <Image className="w-[350] h-[350]" src={profile} alt="profile" />
              <Link
                href="/user/pengaturan/edit"
                className="flex items-center gap-x-2 text-[#055EA8] hover:text-[#334b83]"
              >
                <Image src={edit} alt="edit" className="w-[5] h-[5]" />
                <span className="underline font-bold text-lg">Edit Profil</span>
              </Link>
            </div>

            <div>
              {userData.map((i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold mb-4">{i.key}</h3>
                  <div className="relative mb-8">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <Image src={i.image} className="w-4 h-4" alt={i.desc} />
                    </div>
                    <input
                      type="text"
                      id={i.idlabel}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                      placeholder={i.value}
                      autoComplete="off"
                      disabled
                    ></input>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <h3 className="text-lg font-bold mb-4">Jenis Kelamin</h3>
              <div className="relative mb-4 md:flex">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <Image
                    src={jenis_kelamin}
                    className="w-4 h-4"
                    alt="jenis kelamin"
                  />
                </div>
                <input
                  type="text"
                  id="text"
                  autoComplete="off"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                  placeholder="Perempuan"
                  disabled
                ></input>
              </div>
            </div>
            <Link href="/reset-password">
              <button className="m-auto flex justify-center w-[170px] rounded-md bg-[#055EA8] hover:bg-[#385098] py-2 text-sm text-white font-bold mt-2">
                <Image src={lock} alt="ubahSandi" />
                <span className="pl-2">Ganti Kata Sandi</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}