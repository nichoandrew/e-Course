"use client";
import Image from "next/image";
import Link from "next/link";
import back from "@/assets/icons/back.svg";
import profilpeople from "@/assets/icons/ic-profilpeople.svg";

export default function page() {
  return (
    <main className="w-full h-full flex justify-center flex-col items-center min-h-screen bg-white">
      <div className="flex flex-col w-full flex-1 p-9">
        <div className="text-left flex">
          <Link href="/" className="text-xs">
            <Image
              src={back}
              className="pr-3 pt-1"
              alt="Picture of the author"
              width={50}
              height={40}
            />
          </Link>
          <span className="text-black text-base pt-3">Kembali ke kursus</span>
        </div>
        <div className="mx-auto lg:pt-12 pt-6 relative z-1 text-white w-5/6">
          <span className="text-blue-500 text-4xl pt-3 font-bold">
            Checkout
          </span>
          <div className="flex flex-wrap mt-8">
            <div className="w-full md:w-3/5 mt-5">
              <span className="text-black text-2xl font-semibold">
                Pesanan anda
              </span>
              <div className="flex pt-3">
                <Image
                  src={profilpeople}
                  className=" pr-5"
                  alt="Picture of the author"
                  width={150}
                  height={90}
                />
                <div className="flex-row">
                  <div className="flex flex-col md:flex-row">
                    <span className="text-black text-2xl font-bold w-full md:w-3/4 pt-4">
                      Introduction to CSS
                    </span>
                    <span className="text-black text-sm font-bold w-full md:w-auto px-5 py-5">
                      Rp.150.000
                    </span>
                  </div>
                  <div className="text-black">
                    Mitra: Otak Kanan Academy
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5">
              <div className="grid grid-cols-2">
                <div className="text-gray-400 text-xl font-semibold col-span-1 p-4 ">
                  Harga
                </div>
                <div className="text-black  col-span-1 p-4 text-right">
                  Rp.450.000
                </div>
              </div>
              <div className="bg-green-100 border-white border p-3 rounded-2xl grid grid-cols-2">
                <div className="text-green-700 col-span-1">Diskon</div>
                <div className="text-green-700 text-right col-span-1">Rp.0</div>
              </div>
              <div className="border border-gray-300 mt-4"></div>
              <div className="grid grid-cols-2">
                <div className="text-gray-400 text-2xl font-semibold col-span-1 p-4">
                  Total
                </div>
                <span className="text-black font-bold text-2xl p-4 text-right col-span-1">
                  Rp.450.000
                </span>
              </div>
              <button className="w-full bg-[#FF9900] hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md mt-3">
                <Link href="/laman-checkout/invoice-page" className="">
                  BAYAR SEKARANG
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
