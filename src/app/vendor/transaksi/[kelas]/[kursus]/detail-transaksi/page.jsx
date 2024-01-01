"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@//assets/img/logokursusonline.svg";
import BreadcrumbsVendor from "@/components/BreadcrumbsVendor";
import Link from "next/link";
import Back from "@/assets/icons/button-left.svg";
import { LuDownload } from "react-icons/lu";

function DetailTransaksiVendor() {
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
          <div className="flex flex-col w-full p-2 md:p-5 md:pb-16 bg-white rounded-xl">
            <div className="flex justify-between ">
              <Link href="/kursus-saya" className="flex gap-1 pb-3">
                <Image src={Back} alt="back" />
                <p className="text-md font-medium text-[#055EA8] flex items-center">
                  Kembali
                </p>
              </Link>
              <div className="fixed md:static flex justify-center items-center right-0 left-0 bottom-0 md:bg-transparent bg-white md:border-none border-t border-blue border-dashed z-10 h-20  md:h-auto">
                <button className="p-1 px-2 flex gap-2 items-center justify-center bg-blue text-white hover:brightness-110 rounded-md w-2/3 md:w-auto">
                  <LuDownload />
                  <span>Unduh</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full items-center relative">
              <h2 className="text-3xl font-semibold text-[#022F54]">
                CSS INTRODUCTION
              </h2>
              <div className="flex flex-col md:flex-row gap-4 md:gap-0 mt-10 border p-2 px-10 rounded-md w-full  justify-between">
                <div className="flex flex-col">
                  <h5 className="text-xl font-semibold text-[#022F54]">
                    Invoice Pembelian
                  </h5>
                  <p className="font-bold text-sm pb-1 text-[#022F54]">
                    Course: CSS Introduction
                  </p>
                  <div className="flex flex-col">
                    <div className="flex text-xs ">
                      <p className="w-24 text-slate-500">Order No.</p>
                      <p className="text-[#022F54]">#1020230001</p>
                    </div>
                    <div className="flex text-xs ">
                      <p className="w-24 text-slate-500">Invoice Date </p>
                      <p className="text-[#022F54]">18/10/2023</p>
                    </div>
                    <div className="flex text-xs ">
                      <p className="w-24 text-slate-500">Due Date </p>
                      <p className="text-[#022F54]">18/10/2023</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <Image src={logo} alt="" width={150} height={150} />
                  <div className="flex flex-col w-56 mt-4">
                    <div className="text-xs text-slate-500 ">
                      Graha Pena, Ruang 1503, Jl. Ahmad Yani No.88, Ketintang,
                      Kec. Gayungan, Surabaya, Jawa Timur
                    </div>
                    <p className="text-xs text-slate-500 ">PT Otak Kanan</p>
                    <p className="text-xs text-slate-500 ">(031) 8286155</p>
                  </div>
                </div>
              </div>
              <div className="flex  border p-2 md:px-10 rounded-md w-full  justify-between">
                <div className="flex flex-col">
                  <p className="font-bold pb-1 text-[#022F54]">
                    Costomer Details
                  </p>
                  <p className="text-xs">Ahmad Musa</p>
                  <p className="text-xs">ahmadmusa@gmail.com</p>
                  <p className="text-xs">031 98765 43210</p>
                </div>
              </div>
              <div className="flex border p-2 md:px-10 rounded-md w-full  justify-between">
                <div className="w-full overflow-auto rounded-lg">
                  <table className="w-full pl-4 mt-10 ">
                    <thead className="w-full text-left ">
                      <tr className="border-b">
                        <th className="p-3 whitespace-nowrap text-slate-500">
                          #
                        </th>
                        <th className="p-3 whitespace-nowrap text-slate-500">
                          Course
                        </th>
                        <th className="p-3 whitespace-nowrap text-slate-500 text-right">
                          Harga
                        </th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      <tr className=" border-b">
                        <td className="p-3 whitespace-nowrap">1</td>
                        <td className="p-3 whitespace-nowrap">
                          CSS Introduction
                        </td>
                        <td className="py-3 whitespace-nowrap text-right">
                          Rp. 900.000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex border md:px-10 rounded-md w-full gap-4 justify-end">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-slate-500">Subtotal</p>
                  <p className="text-xs text-slate-500">Diskon</p>
                  <p className="text-xl">TOTAL</p>
                </div>
                <div className="flex flex-col gap-1 pr-2">
                  <p className="text-xs text-slate-500 text-right">
                    Rp.900.000
                  </p>
                  <p className="text-xs text-slate-500 text-right">Rp.20.000</p>
                  <p className="text-xl">Rp.880.000</p>
                </div>
              </div>
              <div className="flex flex-col mt-4 border p-2 md:px-10 rounded-md w-full">
                <p className="text-[#022F54] font-semibold">
                  Metode Pembayaran
                </p>
                <p className="text-slate-500">Dana</p>
              </div>
              <div className="w-[300px] left-8 md:left-20 lg:left-80 md:w-auto md:px-8 text-center absolute bottom-40 md:bottom-40 -rotate-[30deg] font-bold text-[60px] md:text-[160px] text-green-500 border-4 rounded-sm border-green-500 opacity-20">
                LUNAS
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailTransaksiVendor;
