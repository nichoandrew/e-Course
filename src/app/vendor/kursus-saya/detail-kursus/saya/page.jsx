"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Materi, Tugasvendor } from "@/assets/data/data";
import AddTugas from "@/assets/icons/addplus-blue.svg";
import hero from "@/assets/images/hero1.svg";
import Back from "@/assets/icons/button-left.svg";
import thumbnail from "@/assets/icons/thumbnail.svg";
import book from "@/assets/icons/icon-book.svg";
import edit from "@/assets/icons/icon-edit.svg";
import report from "@/assets/icons/report.svg";
import chart1 from "@/assets/images/chart1.svg";
import chart2 from "@/assets/images/chart2.svg";
import rate from "@/assets/images/rate.svg";
import peserta from "@/assets/images/peserta.svg";
import bulan from "@/assets/images/bulan.svg";
import luna from "@/assets/images/luna.svg";
import devandra from "@/assets/images/devandra.svg";
import like from "@/assets/icons/like.svg";
import nolike from "@/assets/icons/nolike.svg";
import comment from "@/assets/icons/comment.svg";
import nocomment from "@/assets/icons/nocomment.svg";
import emoticon from "@/assets/icons/emoticon.svg";
import send from "@/assets/icons/send.svg";
import home from "@/assets/icons/home.svg";
import surveiline from "@/assets/icons/survey-line-biru.svg"
import BreadcrumbsVendor from "@/components/BreadcrumbsVendor";
import FooterVendor from "@/components/FooterVendor";

const DinamicAccordion1Vendor = dynamic(() =>
  import("@/components/AccordionKurikulumVendor")
);
const DinamicAccordion2Vendor = dynamic(() =>
  import("@/components/AccordionTugasVendor")
);

function DetailKursusVendor() {
  const [materiData, setMateriData] = useState([]);
  const [openData, setOpenData] = useState(false);
  const [materiTugas, setMateriTugas] = useState([]);
  const [openTugas, setOpenTugas] = useState(false);

  useEffect(() => {
    setMateriData(Materi);
    setMateriTugas(Tugasvendor);
  }, []);

  const toggle = (index) => {
    if (openData == index) {
      return setOpenData(null);
    }
    setOpenData(index);
  };

  const toggletugas = (index) => {
    if (openTugas == index) {
      return setOpenTugas(null);
    }
    setOpenTugas(index);
  };

  const nextPagetugas = (e) => {
    e.preventDefault();
    window.location.href = '/vendor/kursus-saya/detail-kursus/tambah-tugas-kursus'
  }

  const Pagepeserta = (e) => {
    e.preventDefault();
    window.location.href = '/vendor/kursus-saya/detail-kursus/detail-peserta'
  }

  return (
    <div classname="bg-white">

      {/* <hr className="h-1 bg-[#044E8C] opacity-60 border-0 rounded my-3 mb-7"/> */}
      <div className="flex">
        <div className="min-w-screen">
          {/* <div className=" bg-[#E4ECF4]"> */}
          <BreadcrumbsVendor link="/kursus-saya/detail-kursus" />
          <div className="min-w-screen border-l-2 drop-shadow">
            {/* <Headbar /> */}
            <div className="p-3 sm:p-3.5 md:p-4 lg:p-5 gap-3 grid grid-rows-1 bg-[#E4ECF4]">
              <div className="w-full row-span-1 py-3">
                <p className="text-[#055EA8] lg:text-xl md:text-base text-base font-semibold">CSS Introduction</p>
                <div className="flex gap-1 pt-2">
                  <Image src={home} alt="home" className="col-span-1" />
                  <p className="col-span-1 font-semibold text-[#5894C5] self-center lg:text-xl md:text-base text-sm">/ Kursus Saya / Kelas Reguler / CSS Introduction</p>
                </div>
              </div>
              <div className="bg-white rounded-xl lg:flex lg:flex-row grid max-md:flex-col">
                <div className="w-full md:w-full lg:w-2/3 row-span-1 p-5">
                  <div>
                    <div>
                      <Link href="/kursus-saya" className="flex gap-3 pb-3" >
                        <Image src={Back} alt="back" />
                        <p className="text-md font-medium text-[#055EA8] flex items-center">
                          Kembali
                        </p>
                      </Link>
                      <div className="p-3">
                        <div className="">
                          <Image src={hero} className="w-full" />
                          <Link href="/" className="justify-end flex gap-3 px-6 mt-3" >
                            <Image src={edit} className="" alt="edit" />
                            <p className=" font-semibold text-[#055EA8] flex items-center">
                              Edit Kursus
                            </p>
                          </Link>
                          <div className="flex mt-6 md:mt-10 lg:mt-10 justify-between px-2.5 sm:px-5 md:px-8 lg:px-11" >
                            <div className="gap-3 flex text-left w-full">
                              <Image src={thumbnail} className="w-9" alt="thumbnail" />
                              <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-black items-center">
                                CSS Introduction
                              </p>
                            </div>
                            <div className="text-right w-full">
                              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#FFAE00] items-center">
                                Rp 150.000,-
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-3 mt-3 px-2.5 sm:px-5 md:px-8 lg:px-11" >
                            <Image src={book} className="" alt="thumbnail" />
                            <p className="text-base font-thin text-black flex items-center">
                              4 Modul | Kelas Reguler | IT dan Perangkat Lunak
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="px-2.5 sm:px-5 md:px-8 lg:px-11 py-3 sm:py-4 md:py-6 lg:py-9">
                        <p className="text-xl md:text-2xl font-semibold text-black flex items-center">
                          Deskripsi Kursus
                        </p>
                        <p className=" mt-3 text-base font-thin text-black flex items-center text-justify">
                          Pada materi ini kamu akan mempelajari cara berpikir dan penggambaran suatu program dengan menggunakan CSS. Kamu akan belajar konsep dasar CSS. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero lorem, mattis non efficitur faucibus, pellentesque id tortor. Pellentesque interdum turpis vel dui pellentesque, sed interdum ipsum bibendum. Maecenas sollicitudin vehicula est, non varius eros molestie in.
                        </p>
                      </div>
                      <div className="px-2.5 sm:px-5 md:px-8 lg:px-11 py-3 sm:py-4 md:py-6 lg:py-9 divide-y-2">
                        <h1 className="text-xl md:text-2xl font-semibold pb-3 sm:pb-4 md:pb-6 lg:pb-8">Kurikulum</h1>
                        <motion.div
                          initial={{ opacity: 0, x: -60 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 1 }}
                        >
                          <div className="h-full place-items-center">
                            <div className="max-w-[800px] max-md:w-full //bg-[#DAF7A6]">
                              {/* //bg-[#DAF7A6] */}
                              {materiData.map((item, index) => {
                                return (
                                  <DinamicAccordion1Vendor
                                    key={index}
                                    open={index === openData}
                                    name={item.name}
                                    lesson1={item.lesson1}
                                    lesson2={item.lesson2}
                                    jumlahmodul={item.modul}
                                    toggle={() => toggle(index)}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="px-2.5 sm:px-5 md:px-8 lg:px-11 py-3 sm:py-4 md:py-6 lg:py-9 divide-y-2">
                        <div className="flex justify-between">
                          <h1 className="text-xl md:text-2xl font-semibold pb-5 sm:pb-6 md:pb-9 lg:pb-11">Tugas</h1>
                          <button className="rounded-2xl text-[#055EA8] text-sm md:text-base font-normal flex h-10 items-center px-4 gap-2"
                            style={{ backgroundColor: "rgba(5, 94, 168, 0.2)" }} onClick={nextPagetugas}>
                            <Image
                              src={AddTugas}
                              alt="plus"
                              width="auto"
                              height="auto">
                            </Image>
                            Tambahkan Tugas
                          </button>
                        </div>
                        <div className="pt-2 h-full place-items-center">
                          <div className="max-w-[800px] max-md:w-full">
                            {materiTugas.map((item, index) => {
                              return (
                                <DinamicAccordion2Vendor
                                  key={index}
                                  open={index === openTugas}
                                  name={item.name}
                                  batas={item.batas}
                                  task1={item.task1}
                                  task2={item.task2}
                                  status={item.status}
                                  toggle={() => toggletugas(index)}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="px-2.5 sm:px-5 md:px-8 lg:px-11 py-3 sm:py-4 md:py-6 lg:py-9 divide-y-2">
                        <div className="justify-between">
                          <h1 className="text-xl md:text-2xl font-semibold pb-3 sm:pb-6 md:pb-9 lg:pb-11">Tanya Jawab</h1>
                          <div className="pt-5 pb-2">
                            <div className="flex flex-row gap-4">
                              <div className="w-[50px]">
                                <Image src={luna} alt="Profile" className="w-full" />
                              </div>
                              <div className="flex-grow">
                                <h2 className="font-bold pt-1">Luna armelia</h2>
                                <div className="flex flex-row">
                                  <p className="md:text-[12px] text-xs text-[#64666C] font-medium lg:tracking-normal md:tracking-wider tracking-wide">
                                    Siswa
                                  </p>
                                  <p className="md:text-[12px] pl-5 text-xs text-[#64666C] font-medium lg:tracking-normal md:tracking-wider tracking-wide">
                                    06.15 AM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <p className="pl-14">Bagaimana cara memahami css dengan cepat ?</p>
                            <div className="flex flex-row pt-5 pb-2 pl-14">
                              <button className="w-[50px]">
                                <Image src={comment} alt="Profile" width={33} height={23} />
                              </button>
                              <button className="w-[50px]">
                                <Image src={like} alt="Profile" width={33} height={23} />
                              </button>
                            </div>
                          </div>
                          <div className="pt-5 pb-2 pl-20">
                            <div className="flex flex-row gap-4">
                              <div className="w-[50px]">
                                <Image src={bulan} alt="Profile" className="w-full" />
                              </div>
                              <div className="flex-grow">
                                <h2 className="font-bold pt-1">Bulan Pramesti</h2>
                                <div className="flex flex-row">
                                  <p className="md:text-[12px] text-xs text-[#64666C] font-medium lg:tracking-normal md:tracking-wider tracking-wide">
                                    Vendor
                                  </p>
                                  <p className="md:text-[12px] pl-5 text-xs text-[#64666C] font-medium lg:tracking-normal md:tracking-wider tracking-wide">
                                    06.15 AM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <p className="pl-14">Kamu bisa mengikuti kelas css yang tersedia</p>
                            <div className="flex flex-row pt-5 pb-2 pl-14">
                              <button className="w-[50px]">
                                <Image src={nocomment} alt="Profile" width={27} height={24} />
                              </button>
                              <button className="w-[50px]">
                                <Image src={nolike} alt="Profile" width={24} height={23} />
                              </button>
                            </div>
                          </div>
                          <div className="pt-5 pb-2">
                            <div className="flex flex-row gap-4">
                              <div className="w-[50px]">
                                <Image src={devandra} alt="Profile" className="w-full" />
                              </div>
                              <div className="flex-grow">
                                <h2 className="font-bold pt-1">Devandra</h2>
                                <div className="flex flex-row">
                                  <p className="md:text-[12px] text-xs text-[#64666C] font-medium lg:tracking-normal md:tracking-wider tracking-wide">
                                    Siswa
                                  </p>
                                  <p className="md:text-[12px] pl-5 text-xs text-[#64666C] font-medium lg:tracking-normal md:tracking-wider tracking-wide">
                                    06.15 AM
                                  </p>
                                </div>
                              </div>
                            </div>
                            <p className="pl-14">Materinya sangat bermanfaat</p>
                            <div className="flex flex-row pt-5 pb-2 pl-14">
                              <button className="w-[50px]">
                                <Image src={nocomment} alt="Profile" width={27} height={24} />
                              </button>
                              <button className="w-[50px]">
                                <Image src={nolike} alt="Profile" width={24} height={23} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-5 pb-2">
                        <div className="flex flex-row pl-11">
                          <div className="flex flex-row border-b-4 border-blue w-full focus:outline-none">
                            <button className="w-[50px] pb-2">
                              <Image src={emoticon} alt="Profile" width={30} height={30} />
                            </button>
                            <div className="">
                              <input type="text" id="input" placeholder="Tulis Komentar" name="input" className="outline-none" />
                            </div>
                          </div>
                          <button className="border-b-4 border-blue">
                            <Image src={send} alt="Profile" width={30} height={30} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* REPORT */}
                <div className="flex justify-center">
                <div className="bg-[#F7F9FC] m-0 sm:m-4 md:m-6 lg:m-10 max-w-md rounded-xl overflow-hidden lg:w-full md:w-full w-full">
                  <div className="flex flex-row pt-10 pb-2 mx-8">
                    <div className="w-[50px]">
                      <Image src={report} alt="Profile" width={45} height={45} />
                    </div>
                    <div className="text-3xl font-bold mb-2 text-[#065EA8]">Report</div>
                  </div>
                  <div className="px-6 pt-4 pb-2 ">
                    <div className="place-items-center mb-5 mt-5">
                      <h2>Statistik penjualan course</h2>
                    </div>
                    <Image src={chart1} alt="chart1" className="w-full" />
                  </div>
                  <div className="px-6 pt-4 pb-2 ">
                    <div className="place-items-center mb-5 mt-5">
                      <h2>Statistik siswa</h2>
                    </div>
                    <Image src={chart2} alt="chart2" className="w-full" />
                  </div>
                  <div className="px-6 pt-4 pb-2 ">
                    <div className="place-items-center mb-5 mt-5">
                      <h2>Peringkat dan ulasan</h2>
                    </div>
                    <Image src={rate} alt="rating" className="w-full" />
                  </div>
                  <div className="px-6 pt-4 pb-2 ">
                    <div className="place-items-center mb-5 mt-5">
                      <h2>Peserta Kursus CSS Introduction</h2>
                    </div>
                    <button onClick={Pagepeserta}>
                      <Image src={peserta} alt="peserta" width={200} height={100} />
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* <FooterVendor /> */}
      </div>
    </div>
  );
}

export default DetailKursusVendor;