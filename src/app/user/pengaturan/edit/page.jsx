"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import nama from "@/assets/icons/nama.svg";
import email from "@/assets/icons/email.svg";
import alamat from "@/assets/icons/alamat.svg";
import profile from "@/assets/icons/profile.svg";
import pekerjaan from "@/assets/icons/pekerjaan.svg";
import jenis_kelamin from "@/assets/icons/jkelamin.svg";
const Sidebar = dynamic(() => import("@/components/Sidebar"));

const userData = [
  {
    key: "Nama Lengkap",
    value: "Marcella Diva",
    image: nama,
  },
  {
    key: "Email",
    value: "marcelladiva@gmail.com",
    image: email,
  },
  {
    key: "Alamat",
    value: "Jl. Ahmad Yani No. 18, Surabaya, Jawa Timur",
    image: alamat,
  },
  {
    key: "Pekerjaan",
    value: "Mahasiswa",
    image: pekerjaan,
  },
];

export default function Page() {
  const router = useRouter();
  const [popup, setPopup] = useState(false);
  const onFocus = () => {
    setPopup(true);
  };
  const onCancel = () => {
    setPopup(false);
  };
  return (
    <div className="lg:pt-32 lg:pb-10 md:pt-16">
      <div className="flex flex-col md:flex-row gap-2 md:gap-10 mx-4 md:mx-24 mb-0 md:mb-5 mt-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/4 mt-2 md:mt-0"
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
          className={`flex-col w-full items-center md:w-3/4 flex transition duration-300 ${popup ? "hidden" : "flex"}`} >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-full flex flex-col md:border-2 rounded-2xl py-6 px-2 md:px-4 lg:px-14"
          >
            <div className="justify-start text-xl font-bold mb-2">
              <h3>Profil Saya</h3>
            </div>
            <div className="flex flex-col items-center mb-10">
              <Image className="w-[350] h-[350]" src={profile} alt="profile" />
            </div>

            <div>
              {userData.map((i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold mb-4">{i.key}</h3>
                  <div className="relative mb-8">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <Image src={i.image} className="w-4 h-4" alt="image" />
                    </div>
                    <form>
                      <input type="text" id="text" className="bg-gray-50 border border-[#055EA8] text-black text-md font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder={i.value}></input>
                    </form>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <h3 className="text-lg font-bold mb-4">Jenis Kelamin</h3>
              <div className="relative mb-4 md:flex">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <Image src={jenis_kelamin} className="w-4 h-4" alt="jenis kelamin" />
                </div>
                <form className="w-full md:w-auto"> {/* Menambahkan kelas md:w-auto untuk form */}
                  <select id="gender" name="gender" className="bg-gray-50 border border-[#055EA8] text-black text-md font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" >
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={()=> router.back()} className="flex justify-center w-[100px] border border-[#ACC9E2] rounded-3xl text-[#055EA8] hover:bg-[#94acc1] py-2 text-md font-bold mt-2 mr-2"> {/* Menambahkan mr-2 untuk memberikan margin antara tombol */}
                Batal
              </button>
              <button type="submit" className="flex justify-center w-[100px] rounded-3xl text-[#055EA8] bg-[#ACC9E2] hover:bg-[#94acc1] py-2 text-md font-bold mt-2">
                Simpan
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}