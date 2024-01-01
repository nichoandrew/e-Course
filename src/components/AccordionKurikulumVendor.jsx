import React from "react";
import Image from "next/image";
// import { FiPlay } from "react-icons/fi";
import { Collapse } from "react-collapse";
// import { AiOutlineLock } from "react-icons/ai";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import IconKurikulumVendor from "@/assets/icons/iconVendorKurikulum-green.svg";
import IconVideoVendor1 from "@/assets/icons/Filmstrip Play.svg";
import IconMateriVendor1 from "@/assets/icons/Feed.svg";
import IconVideoVendor2 from "@/assets/icons/iconVendorVideoKurikulum.svg";
import IconMateriVendor2 from "@/assets/icons/iconVendorMateriKurikulum.svg";

const BoldArrowDown = () => <SlArrowDown strokeWidth={40} size={16} />;
const BoldArrowUp = () => <SlArrowUp strokeWidth={40} size={16} />;

const AccordionKurikulumVendor = ({
  open,
  toggle,
  name,
  jumlahmodul,
  lesson1,
  lesson2,
}) => {
  return (
    <div className="divide-y-2 divide-y-reverse">
      <div
        className="bg-white rounded-2xl py-[10px] md:py-[12px] lg:py-[15px] px-4 flex items-center cursor-pointer md:justify-start gap-4 md:gap-7 lg:gap-7 "
        onClick={toggle}
      >
        <Image
          src={IconKurikulumVendor}
          className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] "
          alt=""
        />
        <div className="flex-grow">
          <p className="md:text-[1.1rem] font-semibold text-sm lg:tracking-normal md:tracking-wider tracking-wide">
            {name}
          </p>
        </div>
        <div className="">
          <p className="text-sm md:text-base font-medium">{jumlahmodul}</p>
        </div>
        <div className="text-xs md:text-sm p-1 mx-1 md:p-2 md:mx-2 bg-[#055EA8] rounded-full text-white ">
          {open ? <BoldArrowUp /> : <BoldArrowDown />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="flex flex-col pt-2.5 pb-3 gap-1 md:gap-3 pl-2 md:pl-16 pr-2 md:pr-16">
          <div className="bg-white px-4 md:px-10 py-2 md:py-2 lg:py-4 h-[90px] md:h-[100px] rounded-xl relative ">
            <div className="flex flex-row items-center justify-between ">
              <div className="flex flex-row gap-5">
                <Image
                  className="md:w-6 md:h-6 lg:h-8 lg:w-8 w-6 h-6"
                  src={IconVideoVendor1}
                  alt=""
                />
                <div className="flex flex-col gap-1 md:gap-1">
                  <p className="text-black text-center text-sm md:text-base lg:text-base font-semibold ">
                    {lesson1}
                  </p>
                  <button className="bg-[#3A36DB] shadow-md flex flex-row gap-1 w-auto px-4 py-2 lg:px-5 lg:py-4 md:px-7 md:py-5 items-center rounded-3xl h-[30px]">
                    {/* <FiPlay className="text-white" size={20} /> */}
                    <p className="text-white text-xs md:text-base lg:text-base">
                      Buka Materi
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex items-end">
                <Image
                  className="md:w-14 md:h-14 lg:h-16 lg:w-16 w-12 h-12"
                  src={IconVideoVendor2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white px-4 md:px-10 py-2 md:py-2 lg:py-4 h-[90px] md:h-[100px] rounded-xl relative">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-5">
                <Image
                  className="md:w-6 md:h-6 lg:h-8 lg:w-8 w-6 h-6"
                  src={IconMateriVendor1}
                  alt=""
                />
                <div className="flex flex-col gap-1 md:gap-1">
                  <p className="text-black text-center text-sm md:text-base lg:text-base font-semibold ">
                    {lesson2}
                  </p>
                  <button className="bg-[#3A36DB] shadow-md flex flex-row gap-1 w-auto px-4 py-2 lg:px-5 lg:py-4 md:px-7 md:py-5 items-center rounded-3xl h-[30px] ">
                    {/* <AiOutlineLock className="text-white" size={20} /> */}
                    <p className="text-white text-xs md:text-base lg:text-base">
                      Buka Materi
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex items-end">
                <Image
                  className="md:w-14 md:h-14 lg:h-16 lg:w-16 w-12 h-12"
                  src={IconMateriVendor2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionKurikulumVendor;
