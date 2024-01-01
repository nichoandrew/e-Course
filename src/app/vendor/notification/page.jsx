"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import bg from "@/assets/icons/line.svg";
import { NotifikasiVendor } from "@/assets/data/data"
import close from "@/assets/icons/close-vendor.svg"
import history from "@/assets/icons/history.svg"


export default function Page() {

  const [notification, setNotification] = useState([])

  useEffect(() => {
    setNotification(NotifikasiVendor);
  }, []);

  const handleDeleteNotification = (index) => {
    const updatedNotifications = [...notification];
    updatedNotifications.splice(index, 1);
    setNotification(updatedNotifications);
  };


  return (
    <div className="md:mt-5 mx-3 md:mx-7 mb-0 md:mb-5 mt-4 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" flex flex-col "
      >
        <div className="justify-start font-bold  my-6">
          <h3 className="text-lg md:text-xl text-[#055EA8] font-semibold">Notifikasi</h3>
        </div>

        <div className=" w-full flex flex-col border-2 py-8 lg:py-[66px] px-3 lg:px-[57px] h-[618px] md:h-[900px] lg:h-[1079px] overflow-y-auto  bg-white rounded-3xl  shadow-[0px_8px_16px_0px_rgba(4,_75,_134,_0.08),_0px_0px_4px_0px_rgba(0,_0,_0,_0.04)]">
          {notification.map((item, index) => (
            <div key={index} className="flex flex-row border-b border-[#64666C] px-1 pb-[17px] pt-[10px] md:pt-[15px] md:pb-[22px] lg:pb-[40px] lg:pt-[20px] gap-3 ">
              <button className="w-[35px] h-[35px] flex self-center" onClick={() => handleDeleteNotification(index)}>
                <Image className="w-[17px] h-[17px] lg:w-[35px] lg:h-[35px]" src={close} alt="" />
              </button>
              <div className="flex flex-col gap-1 lg:gap-3 w-[661px]">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#055EA8]">
                  {item.title}
                </h3>
                <p className=" text-base md:text-lg lg:text-xl font-medium text-[#64666C]">{item.message} </p>
              </div>
              <div className="flex flex-row gap-3 self-center max-lg:hidden">
                <div className="flex row self-center w-6 h-6">
                  <Image className="w-6 h-6" src={history} alt=""/>
                </div>
                <p className="text-xl text-[#64666C] font-normal">{item.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
  </div>
);
}