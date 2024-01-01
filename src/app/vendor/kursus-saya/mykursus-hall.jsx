"use client";
import Image from "next/image";
import Link from "next/link";
import home from "@/assets/icons/home.svg";
import LatarA from "@/assets/images/image1.svg";
import LatarB from "@/assets/images/image2.svg";
import profile from "@/assets/icons/profile.svg";
import box from "@/assets/icons/package.svg";
import users from "@/assets/icons/users-three.svg";

export default function cardhall() {
  return (
    <div className="min-h-screen max-w-full bg-[#E4EDF4] p-10 max-md:p-4">
      <div className="flex justify-between max-md:flex-col">
        <div className="text-[#065EA8]">
          <span className="text-xl font-bold">Kursus Saya</span>
          <div className="flex place-items-center">
            <Image src={home} alt="Notifikasi" className="mr-1" width={18} height={18} priority />/ Kursus Saya
          </div>
        </div>
      </div>

      <div className="w-full bg-white border rounded-lg mt-10 max-md:mt-4 text-center p-10">
        <div className="text-3xl font-semibold my-7">DAFTAR KELAS</div>

        <div className="flex flex-row gap-x-8 justify-center max-md:flex-col max-md:gap-y-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg w-1/2 max-md:w-full">
            <Image src={LatarA} alt="Latar" className="w-full" />

            <div className="pt-4 pb-2 mx-8 border-b-2 border-gray-300">
              <div className="font-bold text-xl mb-2">KELAS REGULER</div>
            </div>

            <div className="px-6 pt-4 pb-2 ">
              <div className="flex flex-row place-items-center mb-2">
                <div className="w-[50px]">
                  <Image src={profile} alt="Profile" width={24} height={24} />
                </div>
                <div className="">Mark Zuckerbag</div>
              </div>
              <div className="flex flex-row place-items-center mb-2">
                <div className="w-[50px]">
                  <Image src={box} alt="Profile" width={24} height={24} />
                </div>
                <div className="">20 Kursus</div>
              </div>
              <div className="flex flex-row place-items-center mb-2">
                <div className="w-[50px]">
                  <Image src={users} alt="Profile" width={24} height={24} />
                </div>
                <div className="">500 Orang</div>
              </div>
            </div>

            <div className="px-6 mb-8 ">
              <a href="kursus-saya/Reguler/semua/1">
                <button className="bg-blue hover:bg-main-blue text-white py-2 rounded-full w-full">Lihat</button>
              </a>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg w-1/2 max-md:w-full">
            <Image src={LatarB} alt="Latar" className="w-full" />

            <div className="pt-4 pb-2 mx-8 border-b-2 border-gray-300">
              <div className="font-bold text-xl mb-2">KELAS INTERAKTIF</div>
            </div>
            <div className="px-6 pt-4 pb-2 ">
              <div className="flex flex-row place-items-center mb-2">
                <div className="w-[50px]">
                  <Image src={profile} alt="Profile" width={24} height={24} />
                </div>
                <div className="">Mark Zuckerbag</div>
              </div>
              <div className="flex flex-row place-items-center mb-2">
                <div className="w-[50px]">
                  <Image src={box} alt="Profile" width={24} height={24} />
                </div>
                <div className="">10 Kursus</div>
              </div>
              <div className="flex flex-row place-items-center mb-2">
                <div className="w-[50px]">
                  <Image src={users} alt="Profile" width={24} height={24} />
                </div>
                <div className="">100 Orang</div>
              </div>
            </div>

            <div className="px-6 mb-8 ">
              <a href="kursus-saya/Interaktif/semua/1">
                <button className="bg-blue hover:bg-main-blue text-white py-2 rounded-full w-full">Lihat</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
