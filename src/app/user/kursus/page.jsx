"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import bg from "@/assets/icons/lines.svg";
import searchlogo from "@/assets/icons/search.svg";
import aktif1 from "@/assets/images/kursussaya_kelasaktif1.svg";
import aktif2 from "@/assets/images/kursussaya_kelasaktif2.svg";
import aktif3 from "@/assets/images/kursussaya_kelasaktif3.svg";
const CardKursusSaya = dynamic(() => import("./CardKursusSaya"));
import selesai from "@/assets/images/kursussaya_kelasselesai1.svg";
const Sidebar = dynamic(() => import("../../../components/Sidebar"));
import wavyright from "@/assets/images/checkout-Vector-top-right.svg";
import wavyleft from "@/assets/images/checkout-Vector-bottom-left.svg";

const TabsKursusSayaComponent = dynamic(() =>
  import("./TabsKursusSayaComponent")
);

const ItemsKelasTabs = [
  {
    title: "Kelas Aktif",
    content: (
      <div className="rounded-lg flex-row grid grid-cols-2 lg:grid-cols-3 gap-x-5">
        <CardKursusSaya
          imageCourse={aktif1}
          title={"Introduction To PHP"}
          subtitle={"Mitra : Otak Kanan Academy"}
          buttonKursus={"Lanjutkan"}
          link={"Introduction_To_PHP"}
        />
        <CardKursusSaya
          imageCourse={aktif2}
          title={"Introduction to Html & CSS"}
          subtitle={"Mitra : Otak Kanan Academy"}
          buttonKursus={"Lanjutkan"}
          link={"Introduction_to_Html_&_CSS"}
        />
        <CardKursusSaya
          imageCourse={aktif3}
          title={"Introduction to Html"}
          subtitle={"Mitra : Otak Kanan Academy"}
          buttonKursus={"Lanjutkan"}
          link={"Introduction_to_Html"}
        />

        <CardKursusSaya
          imageCourse={aktif1}
          title={"Introduction To PHP"}
          subtitle={"Mitra : Otak Kanan Academy"}
          buttonKursus={"Lanjutkan"}
          link={"Introduction_To_PHP"}
        />
        <CardKursusSaya
          imageCourse={aktif2}
          title={"Introduction to Html & CSS"}
          subtitle={"Mitra : Otak Kanan Academy"}
          buttonKursus={"Lanjutkan"}
          link={"Introduction_to_Html_&_CSS"}
        />
        <CardKursusSaya
          imageCourse={aktif3}
          title={"Introduction to Html"}
          subtitle={"Mitra : Otak Kanan Academy"}
          buttonKursus={"Lanjutkan"}
          link={"Introductio_ to_Html"}
        />

        <CardKursusSaya
          imageCourse={aktif1}
          title={"Introduction To PHP"}
          subtitle={"Mitra : Otak Kanan Academy"}
          buttonKursus={"Lanjutkan"}
          link={"Introduction_To_PHP"}
        />
        <CardKursusSaya
          imageCourse={aktif2}
          title={"Introduction to Html & CSS"}
          subtitle={"Mitra : Otak Kanan Academy"}
          buttonKursus={"Lanjutkan"}
          link={"Introduction_to_Html_&_CSS"}
        />
      </div>
    ),
  },
  {
    title: "Kelas Selesai",
    content: (
      <div className="rounded-lg grid grid-cols-2 lg:grid-cols-3 gap-x-5">
        <CardKursusSaya
          imageCourse={selesai}
          title={"App Development"}
          subtitle={"Mitra : Otak Kanan Academy"}
          link={"App_Development"}
        />
        <CardKursusSaya
          imageCourse={selesai}
          title={"Web Development"}
          subtitle={"Mitra : Otak Kanan Academy"}
          link={"Web_Development"}
        />
        <CardKursusSaya
          imageCourse={selesai}
          title={"Mobile Development"}
          subtitle={"Mitra : Otak Kanan Academy"}
          link={"Mobile_Development"}
        />
      </div>
    ),
  },
];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(ItemsKelasTabs);
    
  }, []);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchEnter = (event) => {
    event.preventDefault();
    // data.filter((item) => {
    //   item.toLowerCase().includes(searchTerm.toLowerCase());
    // });
  };



  return (
    <div className="lg:pt-20 lg:pb-8 md:pt-14">
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
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
          className={`flex-col w-full items-center md:w-3/4 flex transition duration-300 `}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" md:w-full flex flex-col md:border-2 rounded-2xl py-6 px-2 md:px-4 lg:px-14"
          >
            <div className="justify-start text-xl font-bold py-5">
              <p className="text-sm">Kursus Saya</p>
              <div className="flex flex-col gap-y-4 items-center justify-center mt-4 gap-x-4">
                {/* searchbar */}
                <div className="w-full mx-3 sm:mx-0">
                  <div className="relative flex w-full items-center">
                    <Image
                      className="absolute left-5 h-2.5 sm:h-5"
                      src={searchlogo}
                      alt="searchIcons"
                      width="auto"
                      height={18}
                    />
                    <input
                      type="text"
                      id="search"
                      autoComplete="off"
                      value={searchTerm}
                      onChange={handleSearch}
                      className="w-full h-8 sm:h-[50px] px-10 sm:pr-10 sm:pl-16 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:outline-none"
                      placeholder="Cari Kursus Anda"
                    />
                    <button
                      className="absolute right-5 sm:right-2.5 h-5 sm:h-7 w-14 sm:w-20 text-xs sm:text-sm bg-[#055EA8] rounded text-white transition hover:-translate-y-1 duration-200 hover:text-black"
                      onClick={handleSearchEnter}
                    >
                      Cari
                    </button>
                  </div>
                </div>
                <div className="flex">
                  {searchTerm ? (
                    <TabsKursusSayaComponent ItemsKelasTabs={data} />
                  ) : (
                    <TabsKursusSayaComponent ItemsKelasTabs={ItemsKelasTabs} />
                  )}
                </div>
                <div className="grid grid-cols-5 gap-x-3">
                  <button className="grid-cols-1 border-2 p-3 rounded-md">
                    <Image
                      src={wavyleft}
                      alt="wavyleft"
                      width="15"
                      height="15"
                    />
                  </button>
                  <button className="grid-cols-1 border-2 text-white rounded-md font-normal bg-[#044E8C]">
                    1
                  </button>
                  <button className="grid-cols-1 border-2 rounded-md font-normal opacity-80">
                    2
                  </button>
                  <button className="grid-cols-1 border-2 rounded-md font-normal opacity-80">
                    3
                  </button>
                  <button className="grid-cols-1 border-2 rounded-md">
                    <Image
                      src={wavyright}
                      alt="wavyright"
                      width="5"
                      height="5"
                      className="ml-4"
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
