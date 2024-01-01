import React from "react";
import Image from "next/image";
import { FiPlay } from "react-icons/fi";
import { Collapse } from "react-collapse";
import { AiOutlineLock } from "react-icons/ai";
import IconVideo from "@/assets/icons/IconVideo.svg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import IconKurtikulum from "@/assets/icons/IconKurikulum.svg";
import { useRouter } from "next/navigation";

const AccordionSidebar = ({ open, toggle, name, lesson1, lesson2 }) => {
  const router = useRouter()
  return (
    <div className="pt-1">
      <div
        className="bg-white border-solid border-2 rounded-2xl py-[10px] md:py-[15px] lg:py-[10px]  px-4 flex items-center cursor-pointer justify-between md:justify-start gap-7 "
        onClick={toggle}
      >
        <Image
          src={IconKurtikulum}
          className="rounded-full w-[40px] h-[40px]"
          alt=""
        />
        <div className="flex-grow">
          <p className="md:text-[1.025rem] font-semibold text-base lg:tracking-normal md:tracking-wider tracking-wide">
            {name}
          </p>
        </div>
        <div className="text-base mx-2">
          {open ? <SlArrowUp /> : <SlArrowDown />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="flex flex-col pt-3 gap-3 pl-7 ">
          <div className="bg-white border-solid border-2 px-4 md:px-10 py-2 md:py-2 lg:py-2.5 w-full rounded-xl relative ">
            <div className="flex flex-row items-center justify-between ">
              <div className="flex flex-col gap-1 md:gap-1">
                <p className="text-black text-base md:text-[1.025rem] font-semibold ">
                  {lesson1}
                </p>
                <button className="bg-dark-blue shadow-md flex flex-row justify-center py-1 gap-1 w-auto   items-center rounded-3xl ">
                  <FiPlay className="text-white text-sm md:text-base" />
                  <p className="text-white text-sm md:text-base">Play</p>
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
          <div className="bg-white border-solid border-2 px-4 md:px-10 py-2 md:py-2 lg:py-2.5 w-full rounded-xl relative ">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col gap-1 md:gap-1">
                <p className="text-black text-base md:text-[1.025rem] font-semibold ">
                  {lesson2}
                </p>
                <button onClick={() => router.push('/user/quiz')} className="bg-[#BFBEBE] shadow-md flex flex-row justify-center py-1 px-4 gap-1 w-auto  items-center rounded-3xl ">
                  <AiOutlineLock className="text-white text-sm md:text-base" />
                  <p className="text-white text-sm md:text-base">Terkunci</p>
                </button>
              </div>
              <div className="flex items-end">
                <button >
                  <Image
                    className="md:w-12 md:h-12 lg:h-12 lg:w-12 w-12 h-12"
                    src={IconVideo}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionSidebar;