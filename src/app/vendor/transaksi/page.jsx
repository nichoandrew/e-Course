"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import avatar from "@/assets/icons/avatarTransaksi.svg";
import kursus from "@/assets/icons/iconKursusVendor.svg";
import siswa from "@/assets/icons/iconSiswaVendor.svg";
import reguler from "@/assets/images/kelasreguler.svg";
import interaktif from "@/assets/images/kelasinteraktif.svg";
import BreadcrumbsVendor from "@/components/BreadcrumbsVendor";


const contentTransaksi = [
  {
    title: "KELAS REGULER",
    image: reguler,
    desc: [
      {
        title: "Mark Zuckerbag",
        icon: avatar,
      },
      {
        title: "20 Kursus",
        icon: kursus,
      },
      {
        title: "500 Siswa",
        icon: siswa,
      },
    ],
    link:"kelas-reguler"
  },
  {
    title: "KELAS INTERAKTIF",
    image: interaktif,
    desc: [
      {
        title: "Mark Zuckerbag",
        icon: avatar,
      },
      {
        title: "10 Kursus",
        icon: kursus,
      },
      {
        title: "100 Siswa",
        icon: siswa,
      },
    ],
    link:"kelas-interaktif"
  },
];

function TransaksiVendor() {
  const router = useRouter();

  return (
    <>
      <div className=" bg-[#E4ECF4]">
        <div className="p-4 gap-3 flex flex-col bg-[#E4ECF4] h-auto md:min-h-screen">
          <div className="row-span-1">
            <BreadcrumbsVendor
              link="/kursus-saya/detail-kursus"
              title="Kursus Saya"
              nav="home / kursus-saya / detail-kursus"
            />
          </div>
          <div className="flex flex-col w-full p-5 py-10 pb-16 bg-white rounded-xl items-center">
            <h2 className="text-xl font-semibold text-blue" >DAFTAR KELAS</h2>
            <div className="flex flex-col md:flex-row gap-12 mt-10">
              {contentTransaksi.map((content, i) => (
                <div
                  className="flex flex-col w-full shadow-lg pb-4 rounded-md"
                  key={i}
                >
                  <Image src={content.image} alt="w-full h-full" />
                  <div className="flex flex-col px-8">
                    <div className="flex justify-center w-full">
                    <h3 className="text-md font-semibold text-blue py-3 ">
                      {content.title}
                    </h3>
                    </div>
                    <div className="h-4 border-blue w-full border-t" />
                    {content.desc.map((content, i) => (
                      <div className="w-full flex gap-4 my-1" key={i}>
                        <Image src={content.icon} alt=""/>
                        <p className="text-xs text-slate-600">{content.title}</p>
                      </div>
                      ))}
                <button className="w-full rounded-full bg-blue text-white hover:brightness-110 py-2 mt-4" onClick={() => router.push(`/vendor/transaksi/${content.link}`)}>Lihat</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransaksiVendor;
