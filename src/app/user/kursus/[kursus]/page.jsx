"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
// import bg from "@/assets/icons/lines.svg";
import BreadCrumbs from "@/app/user/kursus/BreadCrumbs";
import AccordionSidebar from "./AccordionSidebar";
import { Materi } from "@/assets/data/data";
import { useEffect, useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import ReactPlayer from 'react-player'
const Sidebar = dynamic(() => import("@/components/Sidebar"));




export default function Page({ params }) {
  const [materi, setMateri] = useState([]);
  const [open, setOpen] = useState(false);
  const [isOpenModule, setIsOpenModule] = useState(false)


  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
 
  };

  const materiCarrosel = () => {
    setMateri(Materi);
  };

  useEffect(() => {
    // const getCourse = async () => {
    //   const res = await fetch(`https://kursusonline.net/api/get-course/${1}`)
    //   const response = await res.json()
    // }
    // getCourse()
    materiCarrosel();
  }, []);
  return (
    <div className="pt-0 md:pt-20 pb-8">
      <div className={`lg:invisible ${isOpenModule ? "fixed z-[8] top-0 bottom-0 left-0 right-0 bg-black/70 transition-opacity delay-200 duration-300 " : " transition-opacity duration-300"}`} ></div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-3 mx-4 md:mx-10 mb-0 md:mb-5 mt-4 ">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="md:w-1/4 mt-2 md:mt-0 md:mx-3"
        >
          <aside>
            <Sidebar />
          </aside>
        </motion.div>
        <div
          // style={{
          //   backgroundImage: `url(${bg.src})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
          className={`flex-col w-full items-center md:flex-grow flex transition duration-300 `}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" md:w-full flex flex-col md:border-2 rounded-2xl py-6 px-5"
          >
            <div className="justify-start text-xl font-bold py-5 ">
              <div className="flex">
                <Link href="/user/kursus" className="text-sm hover:text-blue">
                  Kursus Saya
                </Link>
                <BreadCrumbs breadCrumbs={params.kursus} />
              </div>
              <div className="flex mt-5 space-x-5">
                <div className={`relative px-4  ${isOpenModule ? 'w-3/4 transition-all  duration-300' : 'w-full transition-all  duration-300'}`} >
                  <div className="w-full md:w-3/4 mx-auto py-3">
                    <h3 className="text-center text-[1.6rem] font-bold">Introduction to CSS</h3>
                    <p className="text-center text-base font-normal pt-2">Kursus pengenalan dengan css untuk pemula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero lorem, mattis non efficitur faucibus, pellentesque id.</p>
                  </div>
                  <div className={`w-full mx-auto  mt-5`}>
                    <ReactPlayer
                      className="mx-auto"
                      width='100%'
                      controls={true}
                      url='https://www.youtube.com/watch?v=1PnVor36_40&t=20s' />
                  </div>
                </div>

                <div className={`lg:relative absolute z-[9] right-10 md:right-14 -mt-12 lg:right-0 lg:z-0 flex  ${isOpenModule ? ' translate-x-0 transition-all duration-300 ' : 'translate-x-0 transition-all  duration-300 w-0'} `} >
                  <div className="">
                    <button onClick={() => setIsOpenModule(!isOpenModule)} className={`rounded-full p-1.5 bg-black ${isOpenModule ? '-ms-0 md:-ms-0 ' : '-ms-5'}`}>
                      {
                        !isOpenModule
                          ?
                          <MdMenuOpen className="text-2xl text-white font-bold " />
                          :
                          <IoIosArrowForward className="text-2xl text-white font-bold " />
                      }
                    </button>
                  </div>
                  <div className={`${isOpenModule ? "visible transition-all delay-200 duration-300" : "invisible"}`}>
                    <div className={`border-b py-2 `}>
                      <h3 className={`text-2xl text-center ${isOpenModule && 'text-white lg:text-black'}`}>Daftar Modul</h3>
                    </div>
                    <div className={`pt-3 overflow-scroll h-screen `}>
                      {Materi?.map((item, index) => (
                        <AccordionSidebar
                          key={index}
                          open={index === open}
                          name={item.name}
                          lesson1={item.lesson1}
                          lesson2={item.lesson2}
                          toggle={() => toggle(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}