import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaYoutube } from 'react-icons/fa6';
import thumbnail from "@/assets/icons/thumbnail.png";

export const CardPopular = (item, name) => {
    return (
        <Link
            href="/category"
            key={index}
            className='border w-80 lg:w-[100%] h-auto bg-white p-5  shadow-[0px_8px_16px_0px_rgba(4,_75,_134,_0.08),_0px_0px_4px_0px_rgba(0,_0,_0,_0.04)] duration-300'>
            <div className="flex flex-col gap-4">
                <div className="w-auto] h-[138px] bg-[#055EA8] rounded-lg flex flex-row py-5 px-2">
                    <h1 className="text-2xl font-bold tracking-wide text-white self-center">{item.name}</h1>
                    <Image className="max-w-none ml-auto"
                        src={thumbnail}
                        alt={item.name} />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="w-auto h-auto flex flex-col gap-1">
                        <p className="font-bold text-black text-lg">{item.name}</p>
                        <div className="flex flex-row gap-1">
                            <FaStar className="text-[#FFBB2A] w-5 h-5" />
                            <p className=" text-[12px] font-normal text-[#45484F]">4,9</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <FaYoutube className="text-[#E43535] w-5 h-5" />
                            <p className=" text-[12px] font-normal text-[#45484F]">5 Videos</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <div className="w-auto h-auto p-1 bg-[#F0989E] rounded">
                                <p className="text-[12px] font-normal text-[#E2313D]">50%</p>
                            </div>
                            <p className=" text-[12px] font-normal text-[#A2A3A7] line-through self-center">Rp. 549.000</p>
                        </div>
                    </div>
                    <h1>{item.price}</h1>
                </div>
            </div>
        </Link>
    )
}
