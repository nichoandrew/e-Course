import Image from "next/image";
import React, { useState } from "react";

const Cardpayment = ({ title, subtitle, logosrc, width, height }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div className="flex my-2.5 ml-2">
      <input
        type="radio"
        className="form-radio h-3 w-3 mt-4 md:h-3.5 md:w-3.5 md:mt-6 lg:h-5 lg:w-5 lg:mt-2.5 text-[#055EA8]-500 bg-[#055EA8]-500 transition duration-150 ease-in-out focus:ring focus:ring-[#055EA8]-200"
        name="paymentMethod"
        checked={isSelected}
        onChange={handleSelect}
      />
      <div className="flex items-center">
        <div className="w-14 h-10 sm:w-15 sm:h-11 md:w-16 md:h-12  flex justify-center items-center border ml-2.5">
          <Image src={logosrc} alt="logopayment" width={width} height={height} loading="eager" />
        </div>
        <div className="ml-4">
          <span className="text-black text-sm md:text-base lg:text-base font-semibold block">{title}</span>
          <span className="text-black text-xs md:text-sm lg:text-sm block">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Cardpayment;