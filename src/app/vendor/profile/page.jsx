"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import rating from "@/assets/icons/star1.svg";
import rating2 from "@/assets/icons/star2.svg";
import Profile from "@/assets/icons/profile1.svg";
import React, { useState, useEffect } from "react";
import { ProfileVendor } from "@/assets/data/data";
import BreadcrumbsVendor from "@/components/BreadcrumbsVendor";

export default function Page() {

    const [profile, setProfile] = useState([])

    useEffect(() => {
        setProfile(ProfileVendor);
    }, []);

    return (
        <div className="p-8 bg-[#E4ECF4]">
            <BreadcrumbsVendor link="/vendor/profile" title={"Profile"} nav={"/ profile"} />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className=" flex flex-col mx-3 md:mx-0 mb-6">
                <div className="w-full flex flex-col lg:flex-row gap-4 border py-14 xl:px-[50px] px-[14px] h-full lg:h-[1079px] bg-white rounded-3xl shadow-[0px_8px_16px_0px_rgba(4,_75,_134,_0.08),_0px_0px_4px_0px_rgba(0,_0,_0,_0.04)]">
                    <div className="w-full lg:w-[35%]  flex flex-col gap-4 xl:gap-10">
                        <div className="w-full lg:border-2 h-auto lg:h-[335px] lg:py-8 lg:px-8 xl:px-[40px] gap-1 lg:gap-3 lg:rounded-[18px] lg:bg-[rgba(255,_255,_255,_0.60)] lg:backdrop-blur-[2px] flex flex-col items-center lg:shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] ">
                            <Image className="w-[114px] h-[114px] rounded-full" src={Profile} alt="profile" width={114} height={114} />
                            <h3 className="text-xl lg:text-2xl text-[#06152B] font-semibold">
                                Marcella Diva
                            </h3>
                            <div className="flex flex-row justify-center gap-2 xl:gap-[15px] w-auto">
                                <Image className="w-[30px] h-[30px] xl:w-[35px] xl:h-[35px]" src={rating} alt="rating" />
                                <Image className="w-[30px] h-[30px] xl:w-[35px] xl:h-[35px]" src={rating} alt="rating" />
                                <Image className="w-[30px] h-[30px] xl:w-[35px] xl:h-[35px]" src={rating} alt="rating" />
                                <Image className="w-[30px] h-[30px] xl:w-[35px] xl:h-[35px]" src={rating} alt="rating" />
                                <Image className="w-[30px] h-[30px] xl:w-[35px] xl:h-[35px]" src={rating2} alt="rating" />
                            </div>
                            <h4 className="text-3xl lg:text-5xl font-normal text-[#06152B]">
                                4.2
                            </h4>
                        </div>

                        {/* Responsive Mobile */}
                        {profile.map((item, index) => (
                            <form key={index} className="w-full h-auto border flex flex-col gap-4 bg-[rgba(255,_255,_255,_0.60)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-[18px] px-[8px] py-[20px] lg:hidden">
                                <div className="flex flex-col gap-3">
                                    <label className="text-base font-medium text-[#055EA8]">
                                        Nama Lengkap
                                    </label>
                                    <p className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal">{item.fullName}</p>

                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-base font-medium text-[#055EA8]">
                                        Email
                                    </label>

                                    <p className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal">{item.email}</p>

                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-base font-medium text-[#055EA8]">
                                        Alamat
                                    </label>
                                    <p className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal">{item.address}</p>

                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-base font-medium text-[#055EA8]">
                                        Jenis Kelamin
                                    </label>
                                    <p className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal">{item.gender}</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-base font-medium text-[#055EA8]">
                                        Pekerjaan
                                    </label>
                                    <p className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal">{item.occupation}</p>
                                </div>
                                <Link href="profile/edit-profile">
                                    <button className="border-none text-base flex justify-end text-[#055EA8] font-medium">
                                        Edit Profile
                                    </button>
                                </Link>
                            </form>
                        ))}
                        {/* Responsive Mobile */}

                        <div className="w-full border-2 flex flex-col h-[520px] rounded-[18px] bg-[rgba(255,_255,_255,_0.60)] xl:backdrop-blur-[2px] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] py-8 px-9 gap-6">
                            <h2 className="text-xl text-[#055EA8] font-semibold">
                                Rating Kelas
                            </h2>
                            <div className="flex flex-col">
                                <h3 className="text-base font-medium text-black">
                                    Introduction to CSS
                                </h3>
                                <p className="text-base font-normal text-[#A8A8A8]">
                                    Web Development
                                </p>
                                <div className="flex flex-row gap-3 mt-8">
                                    <div className="h-auto w-auto flex flex-row gap-2 self-center">
                                        <Image className="w-[22px] h-[22px]" src={rating} alt="rating" />
                                        <Image className="w-[22px] h-[22px]" src={rating} alt="rating" />
                                        <Image className="w-[22px] h-[22px]" src={rating} alt="rating" />
                                        <Image className="w-[22px] h-[22px]" src={rating2} alt="rating" />
                                        <Image className="w-[22px] h-[22px]" src={rating2} alt="rating" />
                                    </div>
                                    <h4 className="text-3xl font-normal">
                                        3.6
                                    </h4>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-base font-medium text-black">
                                    Manajemen Pemasaran
                                </h3>
                                <p className="text-base font-normal text-[#A8A8A8]">
                                    Web Development
                                </p>
                                <div className="flex flex-row gap-3 mt-8">
                                    <div className="h-auto w-auto flex flex-row gap-2 self-center">
                                        <Image className="w-[22px] h-[22px]" src={rating} alt="rating" />
                                        <Image className="w-[22px] h-[22px]" src={rating} alt="rating" />
                                        <Image className="w-[22px] h-[22px]" src={rating} alt="rating" />
                                        <Image className="w-[22px] h-[22px]" src={rating} alt="rating" />
                                        <Image className="w-[22px] h-[22px]" src={rating2} alt="rating" />
                                    </div>
                                    <h4 className="text-3xl font-normal">
                                        4.8
                                    </h4>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-base font-medium text-black">
                                    Pengenalan HTML
                                </h3>
                                <p className="text-base font-normal text-[#A8A8A8]">
                                    Web Development
                                </p>
                                <div className="flex flex-row gap-3 mt-8">
                                    <div className="h-auto w-auto flex flex-row gap-2 self-center">
                                        <Image className="w-[22px] h-[22px]" src={rating} alt="rating" />
                                        <Image className="w-[22px] h-[22px]" src={rating} alt="rating" />
                                        <Image className="w-[22px] h-[22px]" src={rating} alt="rating" />
                                        <Image className="w-[22px] h-[22px]" src={rating} alt="rating" />
                                        <Image className="w-[22px] h-[22px]" src={rating2} alt="rating" />
                                    </div>
                                    <h4 className="text-3xl font-normal">
                                        4.0
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {profile.map((item, index) => (
                        <form key={index} className=" lg:w-[65%] h-[750px] border flex flex-col gap-8 bg-[rgba(255,_255,_255,_0.60)] xl:backdrop-blur-[2px] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-[18px] py-11 px-10 max-lg:hidden">
                            <div className="flex flex-col gap-3">
                                <label className="text-base font-normal text-[#055EA8]">
                                    Nama Lengkap
                                </label>
                                <p className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal">{item.fullName}</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="text-base font-normal text-[#055EA8]">
                                    Email
                                </label>
                                <p className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal">{item.email}</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="text-base font-normal text-[#055EA8]">
                                    Alamat
                                </label>
                                <p className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal">{item.address}</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="text-base font-normal text-[#055EA8]">
                                    Jenis Kelamin
                                </label>
                                <p className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal">{item.gender}</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="text-base font-normal text-[#055EA8]">
                                    Pekerjaan
                                </label>
                                <p className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal">{item.occupation}</p>
                            </div>

                            <Link href="profile/edit-profile">
                                <button className="border-none text-base flex justify-end text-[#055EA8] font-medium">
                                    Edit Profile
                                </button>
                            </Link>
                        </form>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}