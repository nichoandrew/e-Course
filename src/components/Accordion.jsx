import React from "react";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import { Collapse } from "react-collapse";
import { AiOutlineLock } from "react-icons/ai";
import IconVideo from "@/assets/icons/IconVideo.svg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import IconKurtikulum from "@/assets/icons/IconKurikulum.svg";

const Accordion = ({ open, toggle, name, lesson1, lesson2 }) => {
  return (
    <div className="pt-1">
      <div
        className="bg-white border-solid border-2 rounded-2xl py-[10px] md:py-[15px] lg:py-[10px]  px-4 flex items-center cursor-pointer justify-between md:justify-start gap-7"
        onClick={toggle}
      >
        <Image
          src={IconKurtikulum}
          className="rounded-full w-[40px] h-[40px]"
          alt=""
        />
        <div className="flex-grow">
          <p className="md:text-[1.1rem] font-semibold text-[1.1rem] lg:tracking-normal md:tracking-wider tracking-wide">
            {name}
          </p>
          {/* <p className="text-[#82878E] font-normal text-base my-2 text-[15px]">
            0/5
          </p> */}
        </div>
        <div className="text-30px mx-2">
          {open ? <SlArrowUp /> : <SlArrowDown />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="flex flex-col pt-3 gap-3 pl-7 md:pl-40">
          <div className="bg-white border-solid border-2 px-4 md:px-10 py-2 md:py-2 lg:py-4 h-[90px] md:h-[100px] rounded-xl relative ">
            <div className="flex flex-row items-center justify-between ">
              <div className="flex flex-col gap-1 md:gap-1">
                <p className="text-black text-[18px] font-semibold ">
                  {lesson1}
                </p>
                <button className="bg-dark-blue shadow-md flex flex-row gap-1 w-auto px-4 py-2 lg:px-5 lg:py-4 md:px-7 md:py-5 items-center rounded-3xl h-[30px]">
                  <FiPlay className="text-white" size={20} />
                  <p className="text-white">Play</p>
                </button>
              </div>
              <div className="flex items-end">
                <Image
                  className="md:w-12 md:h-12 lg:h-12 lg:w-12 w-12 h-12"
                  src={IconVideo}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white border-solid border-2 px-4 md:px-10 py-2 md:py-2 lg:py-4 h-[90px] md:h-[100px] rounded-xl relative ">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col gap-1 md:gap-1">
                <p className="text-black text-[18px] font-semibold ">
                  {lesson1}
                </p>
                <button className="bg-[#BFBEBE] shadow-md flex flex-row gap-1 w-auto px-4 py-2 lg:px-5 lg:py-4 md:px-7 md:py-5 items-center rounded-3xl h-[30px] ">
                  <AiOutlineLock className="text-white" size={20} />
                  <p className="text-white">Terkunci</p>
                </button>
              </div>
              <div className="flex items-end">
                <Image
                  className="md:w-12 md:h-12 lg:h-12 lg:w-12 w-12 h-12"
                  src={IconVideo}
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

export default Accordion;