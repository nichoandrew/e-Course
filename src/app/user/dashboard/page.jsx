"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React, { useState } from "react";
// import bg from "@/assets/icons/line.svg";
import myclass from "@/assets/icons/kelas-saya.svg";
import class_done from "@/assets/icons/kelas-selesai.svg";
const Sidebar = dynamic(() => import("@/components/Sidebar"));
import my_certificate from "@/assets/icons/sertifikat-saya.svg";

export default function Page() {
  const [popup, setPopup] = useState(false);
  const onFocus = () => {
    setPopup(true);
  };
  const onCancel = () => {
    setPopup(false);
  };
  return (
    <div className="lg:pt-14 lg:pb-8 md:pt-14">
      <div className="flex flex-col md:flex-row gap-2 md:gap-10 md:mx-24 mb-0 md:mb-5 mt-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
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
          className={`flex-col w-full items-center md:w-3/4 flex transition duration-300 ${popup ? "hidden" : "flex"
            }`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" md:w-full flex flex-col md:border-2 rounded-2xl py-6 px-2 md:px-4 lg:px-14"
          >
            <div className="justify-start text-xl font-bold my-6">
              <h3>Dashboard</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-y-4 items-center justify-center mb-10 mt-6 gap-x-4">
              <Link href="/user/kursus" className="flex flex-col border-2 rounded-2xl p-4">
                <Image
                  className="w-[300] h-[320]"
                  src={myclass}
                  alt="myclass"
                />
                <h3 className="font-bold text-2xl">
                  Kelas Saya{" "}
                  <span className="text-lg font-normal pl-1">(3)</span>
                </h3>
              </Link>
              <Link href="/user/kursus" className="flex flex-col border-2 rounded-2xl p-4">
                <Image
                  className="w-[300] h-[350]"
                  src={class_done}
                  alt="class done"
                />
                <h3 className="font-bold text-2xl">
                  Kelas Selesai{" "}
                  <span className="text-lg font-normal pl-1">(3)</span>
                </h3>
              </Link>
              <Link href="/user/sertifikat" className="flex flex-col border-2 rounded-2xl p-4">
                <Image
                  className="w-[300] h-[350]"
                  src={my_certificate}
                  alt="certificate"
                />
                <h3 className="font-bold text-2xl">
                  Sertifikat Saya{" "}
                  <span className="text-lg font-normal pl-1">(5)</span>
                </h3>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}