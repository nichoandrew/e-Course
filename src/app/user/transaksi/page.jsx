"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState } from "react";
// import bg from "@/assets/icons/line.svg";
import IconUnduh from "@/assets/icons/icon_unduh.svg";
import { motion, AnimatePresence } from "framer-motion";
import IconTransaksi from "@/assets/icons/icon_transaksi.svg";
const Sidebar = dynamic(() => import("@/components/Sidebar"));

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeStatus, setActiveStatus] = useState("Semua");

  const handleStatusChange = (status) => {
    setActiveStatus(status);
  };

  const transaksi = [
    {
      id: 1,
      course: "Introduction to CSS",
      mitra: "Otak Kanan Academy",
      status: "Dibayar",
    },
    {
      id: 2,
      course: "Introduction to HTML",
      mitra: "Otak Kanan Academy",
      status: "Unpaid",
    },
    {
      id: 3,
      course: "Introduction to React Js",
      mitra: "Otak Kanan Academy",
      status: "Dibayar",
    },
    {
      id: 4,
      course: "UI/UX for Beginner",
      mitra: "Otak Kanan Academy",
      status: "Pending",
    },
  ];

  const filteredTransaksi =
    activeStatus === "Semua"
      ? transaksi
      : transaksi.filter((item) => item.status === activeStatus);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Konfigurasi awal elemen (tidak terlihat dan posisi sedikit lebih bawah)
        animate={{ opacity: 1, y: 0 }} // Animasi elemen (menjadi terlihat dan kembali ke posisi awal)
        transition={{ duration: 0.5 }}
        className="pt-20 pb-8"
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 mx-4 md:mx-24 mb-0 md:mb-5 mt-4">
          {/* kiri */}
          <div className={`${!isOpen && "-mt-5"}  md:w-1/4 mt-2 md:mt-0`}>
            <div
              className={`${isOpen ? "block" : "hidden"} md:flex md:flex-col `}
            >
              <Sidebar />
            </div>
          </div>

          <div
            // style={{
            //   backgroundImage: `url(${bg.src})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
            className={`${isOpen && "hidden"
              } flex-col md:w-2/3 md:flex xl:max-w-5xl`}
          >
            <div className="flex flex-col md:border-2 rounded-2xl">
              <div className="px-[40px] py-5">
                <h3 className="text-2xl font-bold text-center md:text-left">
                  Transaksi
                </h3>
              </div>
              <div className="flex flex-col px-4 md:px-[40px]">
                <div className="grid grid-cols-2 gap-2 md:flex md:justify-between md:space-x-3 xl:justify-stretch xl:space-x-4 border">
                  <button
                    onClick={() => handleStatusChange("Semua")}
                    type="submit"
                    className={`flex justify-center gap-2 rounded-[30px] w-[155px] h-[36px] sm:w-[160px] sm:h-[40px]   transition hover:-translate-y-1 duration-200 hover:bg-[#DDDD] ${activeStatus === "Semua"
                        ? "bg-[#E0EAFB] text-blue shadow-md border-2 border-blue"
                        : "bg-white border-2"
                      } py-1.5 text-sm text-blue font-bold`}
                  >
                    Semua
                  </button>
                  <button
                    onClick={() => handleStatusChange("Pending")}
                    type="submit"
                    className={`flex justify-center gap-2 rounded-[30px] w-[155px] h-[36px] sm:w-[160px] sm:h-[40px]   transition hover:-translate-y-1 duration-200 hover:bg-[#DDDD] ${activeStatus === "Pending"
                        ? "bg-[#E0EAFB] shadow-md border-2 border-blue"
                        : "bg-white border-2"
                      } py-1.5 text-sm text-blue font-bold`}
                  >
                    Tertunda
                  </button>
                  <button
                    onClick={() => handleStatusChange("Paid")}
                    type="submit"
                    className={`flex justify-center gap-2 rounded-[30px] w-[155px] h-[36px] sm:w-[160px] sm:h-[40px]   transition hover:-translate-y-1 duration-200 hover:bg-[#DDDD] ${activeStatus === "Paid"
                        ? "bg-[#E0EAFB] shadow-md border-2 border-blue"
                        : "bg-white border-2"
                      } py-1.5 text-sm text-blue font-bold`}
                  >
                    Dibayar
                  </button>
                  <button
                    onClick={() => handleStatusChange("Unpaid")}
                    type="submit"
                    className={`flex justify-center gap-2 rounded-[30px] w-[155px] md:h-[65px] sm:w-[160px] sm:h-[40px]  transition hover:-translate-y-1 duration-200 hover:bg-[#DDDD] ${activeStatus === "Unpaid"
                        ? "bg-[#E0EAFB] shadow-md border-2 border-blue"
                        : "bg-white border-2"
                      } py-1.5 text-sm text-blue font-bold`}
                  >
                    Belum Bayar
                  </button>
                </div>

                <div className="flex flex-col md:flex-row md:flex-wrap mt-5 mb-5 ">
                  {filteredTransaksi.map((item) => (
                    <div className="md:w-1/3 lg:h-[300px] md:h-[230px] xl:h-[320px] 2xl:h-[350px] md:p-1 lg:p-3 xl:p-3" key={item.id}>
                      <div className="border rounded-xl md:rounded-3xl md:items-center md:shadow-md md:shadow-slate-200 flex md:flex-col h-[145px] md:h-full p-2 md:px-3 md:py-5 mb-2 md:mb-0">
                        <div className="rounded-md w-[84px] lg:w-[130px] xl:w-[160px] 2xl:w-[200px]">
                          <Image src={IconTransaksi} alt=" " />
                        </div>
                        <div className="flex md:h-full w-full flex-col">
                          <div className="flex md:flex-col">
                            <div className="md:items-center flex w-full flex-col ml-1 md:ml-0">
                              <h1 className="md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold">
                                {item.course}
                              </h1>
                              <p className=" text-xs xl:text-sm 2xl:text-base">
                                Mitra : {item.mitra}
                              </p>
                            </div>
                            <div className="flex md:justify-center h-full md:mt-2 w-full justify-end">
                              <div className="">
                                {item.status === "Dibayar" ? (
                                  <div
                                    type="submit"
                                    className="flex justify-center text-center w-full rounded-3xl bg-[#34BD32] py-1 px-1 md:py-1 md:px-4 text-xs lg:text-xs md:text-xs xl:text-sm text-white font-bold"
                                  >
                                    Dibayar
                                  </div>
                                ) : item.status === "Unpaid" ? (
                                  <div className="flex justify-center text-center w-full rounded-3xl bg-[#E2313D] py-1 px-1 md:py-0 lg:py-1 md:px-4 text-xs lg:text-xs md:text-xs text-white font-bold xl:text-sm">
                                    Belum Bayar
                                  </div>
                                ) : item.status === "Pending" ? (
                                  <div className="flex justify-center text-center w-full rounded-3xl bg-[#FFAE00] py-1 px-1 md:py-2 md:px-4 text-xs lg:text-xs md:text-xs text-white font-bold xl:text-sm">
                                    Tertunda
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-end md:justify-center items-end h-full w-full">
                            {item.status === "Dibayar" ? (
                              <button
                                type="submit"
                                className="flex justify-center items-center py-2 px-5 lg:py-2 lg:px-5 md:px-1 md:py-1 rounded-lg shadow-lg bg-blue text-white font-bold text-xs lg:text-xs xl:text-base gap-2"
                              >
                                Unduh Faktur
                                <Image src={IconUnduh} alt=" " />
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}