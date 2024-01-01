"use client";
import React, { useEffect, useState, useRef } from "react";

const TabsKursusSayaComponent = ({ ItemsKelasTabs }) => {

  const [selectedKelas, setSelectedKelas] = useState(0);
  const firstBtnRef = useRef();
  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="rounded-xl flex items-center gap-x-3.5 sm:gap-x-5 font-bold">
          {ItemsKelasTabs.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedKelas(index)}
              className={`ml-2 mt-2 mb-3 px-6 sm:px-8 py-1.5 sm:py-2 text-xs sm:text-sm bg-[#fff] rounded-[30px] w-[155px] h-[36px] sm:w-[160px] sm:h-[40px] outline-none border transition hover:-translate-y-1 duration-200 hover:bg-[#DDDD] focus:ring-2 focus:bg-[#E0EAFB] focus:text-blue ${
                selectedKelas === index
                  ? "ring-2 bg-[#E0EAFB] text-blue shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
                  : ""
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="rounded-lg p-4">
          {ItemsKelasTabs.map((item, index) => (
            <div
              key={index}
              className={`${selectedKelas === index ? "" : "hidden"}`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsKursusSayaComponent;