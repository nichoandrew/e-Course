import React from "react";
import { Collapse } from "react-collapse";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const BoldArrowDown = () => <SlArrowDown strokeWidth={40} size={16} />;
const BoldArrowUp = () => <SlArrowUp strokeWidth={40} size={16} />;

const AccordionTugasVendor = ({
  open,
  toggle,
  name,
  batas,
  status,
  task1,
  task2,
}) => {
  return (
    <div className="divide-y-2 divide-y-reverse">
      <div
        className="bg-white rounded-2xl py-[10px] md:py-[12px] lg:py-[15px] px-4 flex items-center cursor-pointer md:justify-start gap-4 md:gap-7 lg:gap-7 "
        onClick={toggle}
      >
        <div className="flex-grow">
          <p className="md:text-[1.1rem] font-semibold text-sm lg:tracking-normal md:tracking-wider tracking-wide">
            {name}
          </p>
          <p className="md:text-[14px] pt-1 text-xs text-[#64666C] font-medium lg:tracking-normal md:tracking-wider tracking-wide">
            {batas}
          </p>
        </div>
        <div className="">
          <p className="text-sm md:text-base text-[#34BD32] font-medium">
            {status === "selesai" ? "Tugas selesai" : ""}
          </p>
        </div>
        <div className="text-xs md:text-sm p-1 mx-1 md:p-2 md:mx-2 bg-[#055EA8] rounded-full text-white ">
          {open ? <BoldArrowUp /> : <BoldArrowDown />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="flex flex-col py-2 gap-1.5 pl-16 md:pl-40 pr-2 md:pr-16">
          <div className="bg-white px-4 md:px-10 py-1 md:py-1 lg:py-2 h-[40px] md:h-[50px] rounded-xl relative">
            <div className="flex flex-row items-center justify-between">
              <p className="text-black text-center text-sm md:text-base lg:text-base font-semibold ">
                {task1}
              </p>
              <button className="bg-[#3A36DB] shadow-md flex flex-row gap-1 w-auto px-4 py-2 lg:px-5 lg:py-4 md:px-7 md:py-5 items-center rounded-3xl h-[30px]">
                <p className="text-white text-xs md:text-base lg:text-base">
                  Buka Tugas
                </p>
              </button>
            </div>
          </div>
          <div className="bg-white px-4 md:px-10 py-1 md:py-1 lg:py-2 h-[40px] md:h-[50px] rounded-xl relative">
            <div className="flex flex-row items-center justify-between">
              <p className="text-black text-center text-sm md:text-base lg:text-base font-semibold ">
                {task2}
              </p>
              <button className="bg-[#3A36DB] shadow-md flex flex-row gap-1 w-auto px-4 py-2 lg:px-5 lg:py-4 md:px-7 md:py-5 items-center rounded-3xl h-[30px]">
                <p className="text-white text-xs md:text-base lg:text-base">
                  Buka Tugas
                </p>
              </button>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionTugasVendor;
