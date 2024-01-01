import React from "react";
import Link from "next/link";
import Image from "next/image";

const CardKursusSaya = ({
  title,
  subtitle,
  imageCourse,
  buttonKursus,
  link,
}) => {
  const hasButton = buttonKursus !== undefined;
  return (
    <div className="w-full flex flex-col border-2 rounded-2xl my-4 text-center ">
      <div className="p-4">
        <Image
          className=""
          src={imageCourse}
          width="250px"
          height="250px"
          alt="LogoCard"
          priority
        />
      </div>
      <div className="p-2">
        <h1 className="text-sm sm:text-base font-bold">{title}</h1>
        <p className="text-xs sm:text-sm font-normal mb-2">{subtitle}</p>
      </div>
      {hasButton && (
        <div className="mb-4">
          <button className="bg-[#022F54] text-center text-white rounded-[30px] p-2.5 text-xs sm:text-sm md:text-base font-medium transition ease-in-out hover:-translate-y-1 duration-200 hover:bg-light-grey">
            <Link href={`/user/kursus/${link}`}>{buttonKursus}</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default CardKursusSaya;