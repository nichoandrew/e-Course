"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React, { useState } from "react";
// import bg from "@/assets/icons/line.svg";
const Sidebar = dynamic(() => import("@/components/Sidebar"));
const Sertifikat = dynamic(() => import("@/components/CerificateContent"));

export default function Page() {
  const [popup, setPopup] = useState(false);
  const onFocus = () => {
    setPopup(true);
  };
  const onCancel = () => {
    setPopup(false);
  };
  return (
    <div className="pt-20 pb-8">
      <div className="flex flex-col md:flex-row gap-2 md:gap-10 mx-4 md:mx-24 mb-0 md:mb-5 mt-4">
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
            <div className="flex flex-col md:flex-row gap-y-4 items-center justify-center mb-10 mt-6 gap-x-4">
              <Sertifikat />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
