"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { notifikasi } from "@/assets/data/data.js";
import profile from "@/assets/icons/picProfile.svg";

export default function Page() {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [activeButton, setActiveButton] = useState("Semua"); // State untuk mengontrol tombol aktif
  const [notifikasiState, setNotifikasiState] = useState(notifikasi);

  notifikasiState.sort((a, b) => {
    const timeA = new Date(a.timestamp);
    const timeB = new Date(b.timestamp);
    return timeB - timeA;
  });

  // Fungsi untuk menandai notifikasi sebagai sudah dibaca saat diklik
  const handleNotifikasiClick = (index) => {
    const updatedNotifikasi = [...notifikasiState];
    updatedNotifikasi[index].status = "sudah_dibaca";
    setNotifikasiState(updatedNotifikasi);
  };

  const jumlahBelumDibaca = notifikasiState.filter(
    (data) => data.status === "belum_dibaca"
  ).length;

  // Menghitung jumlah total notifikasi
  const jumlahTotalNotifikasi = notifikasiState.length;

  const filteredNotifikasi =
    activeButton === "Semua"
      ? notifikasiState
      : notifikasiState.filter((item) => item.status === activeButton);

  const tandaiSemuaSudahDibaca = () => {
    const updatedNotifikasi = notifikasiState.map((data) => ({
      ...data,
      status: "sudah_dibaca",
    }));
    setNotifikasiState(updatedNotifikasi);
  };

  return (
    <div className="flex flex-col relative py-16 ">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-3 pt-4 lg:px-48 lg:pt-10 border-b-[3px] border-[#C1C2C4] "
      >
        <div className="flex justify-between">
          <div className="text-3xl font-semibold">Notifikasi</div>
          <button
            className="text-base text-[#055EA8] font-semibold"
            onClick={tandaiSemuaSudahDibaca}
          >
            Tandai semua telah dibaca
          </button>
        </div>
        <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-20 mt-5 md:mt-10 pt-3 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide md:overflow-x-visible">
          <button
            className={`w-[147px] md:w-full ${activeButton === "Semua" ? "text-xl font-semibold" : "text-lg"
              }`}
            onClick={() => setActiveButton("Semua")}
          >
            <div className="flex gap-1 lg:gap-5 justify-center">
              <div>Semua</div>
              <div
                className={`px-2 text-white rounded-md ${activeButton === "Semua" ? "bg-[#055EA8]" : "bg-[#C1C2C4]"
                  }`}
              >
                {jumlahTotalNotifikasi}
              </div>
            </div>
            {activeButton === "Semua" && (
              <div className="h-[5px] rounded-full bg-[#055EA8] mt-2 relative -mb-1 z-20"></div>
            )}
          </button>
          <button
            className={`w-[147px] md:w-full ${activeButton === "belum_dibaca"
                ? "text-xl font-semibold"
                : "text-lg"
              }`}
            onClick={() => setActiveButton("belum_dibaca")}
          >
            <div className="flex gap-1 lg:gap-5 justify-center">
              <div>Belum Dibaca</div>
              <div
                className={`px-2 text-white rounded-md ${activeButton === "belum_dibaca"
                    ? "bg-[#055EA8]"
                    : "bg-[#C1C2C4]"
                  }`}
              >
                {jumlahBelumDibaca}
              </div>
            </div>
            {activeButton === "belum_dibaca" && (
              <div className="h-[5px] rounded-full bg-[#055EA8] mt-2 relative -mb-1"></div>
            )}
          </button>
          <button
            className={`w-[147px] md:w-full ${activeButton === "sudah_dibaca"
                ? "text-xl font-semibold"
                : "text-lg"
              }`}
            onClick={() => setActiveButton("sudah_dibaca")}
          >
            Sudah dibaca
            {activeButton === "sudah_dibaca" && (
              <div className="h-[5px] rounded-full bg-[#055EA8] mt-2 relative -mb-1"></div>
            )}
          </button>
        </div>
      </motion.div>
      {filteredNotifikasi.map((data, index) => (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={index}
          className={`flex flex-col px-3 lg:px-48 pt-5 ${data.status === "belum_dibaca"
              ? "bg-[#055EA8] bg-opacity-[15%]"
              : ""
            }`}
          onClick={() => {
            if (data.status === "belum_dibaca") {
              handleNotifikasiClick(index);
            }
          }}
        >
          <div className="flex border-b-2 border-[#C1C2C4] pt-2 pb-3 gap-5">
            <Image className="w-[54px] h-[54px]" src={profile} alt="profile" />
            <div className="flex flex-col">
              <h3 className="text-lg font-normal">
                <span className="font-semibold">
                {/* {`${userInfo.first_name} ${userInfo.last_name}`} */}
                yogi
                  </span>{" "}
                {data.message}
              </h3>
              <p className="text-sm font-normal">
                {formatTimestamp(data.timestamp)}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function formatTimestamp(timestamp) {
  const time = new Date(timestamp);
  const now = new Date();

  const timeDiff = now - time;
  const millisecondsPerMinute = 60000; // 1 menit = 60000 milidetik
  const millisecondsPerHour = 3600000; // 1 jam = 3600000 milidetik
  const millisecondsPerDay = 86400000; // 1 hari = 86400000 milidetik

  if (timeDiff < millisecondsPerMinute) {
    return "Baru saja";
  } else if (timeDiff < millisecondsPerHour) {
    const minutesAgo = Math.floor(timeDiff / millisecondsPerMinute);
    return `${minutesAgo} menit yang lalu`;
  } else if (timeDiff < millisecondsPerDay) {
    const hoursAgo = Math.floor(timeDiff / millisecondsPerHour);
    return `${hoursAgo} jam yang lalu`;
  } else {
    const daysAgo = Math.floor(timeDiff / millisecondsPerDay);
    return `${daysAgo} hari yang lalu`;
  }
}
