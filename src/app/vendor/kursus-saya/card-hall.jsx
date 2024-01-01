"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import box from "@/assets/icons/package.svg";
import profile from "@/assets/icons/profile.svg";
import home from "@/assets/icons/home.svg";
import cari from "@/assets/icons/search.svg";
import leftArrow from "@/assets/icons/back.svg";
import bintang from "@/assets/icons/bintang.svg";
import thumbnail from "@/assets/icons/thumbnail.png";
import users from "@/assets/icons/users-three.svg";
import Kursuses from "@/app/course.json";

const warna = [
  "py-2 px-5 w-full bg-[#BBE9BB] h-36",
  "py-2 px-5  w-full bg-[#F5BABE] h-36",
  "py-2 px-5  w-full bg-[#FFE5AC] h-36",
  "py-2 px-5  w-full bg-[#C1C2C4] h-36",
  "py-2 px-5  w-full bg-[#ADC9E1] h-36",
  "py-2 px-5  w-full bg-[#D5F2D6] h-36",
  "py-2 px-5  w-full bg-[#F9D7D8] h-36",
  "py-2 px-5  w-full bg-[#FFEFCD] h-36",
];

export default function ClientComponent() {
  const router = useRouter()
  const params = useParams();
  const jenis = params.jenis;

  const awal = (params.hall - 1) * 8;
  const akhir = awal + 8;

  if (jenis == "semua") {
    var newkursus = [];
    Kursuses.kursus.map((item, i) => newkursus.push(item));

    var jlm = Kursuses.kursus.length;
  } else {
    var jlmkursus = [];
    Kursuses.kursus.map((item) => item.status == jenis && jlmkursus.push(item));

    var newkursus = [];
    Kursuses.kursus.map((item, i) => item.status == jenis && newkursus.push(item));

    var jlm = jlmkursus.length;
  }

  const btnJlm = Math.ceil(jlm / 8);

  var textRow = [];
  for (let x = 1; x < btnJlm + 1; x++) {
    textRow.push(x);
  }

  return (
    <div className="min-h-screen max-w-full bg-[#E4EDF4] p-10">
      <div className="flex justify-between">
        <div className="text-[#065EA8]">
          <span className="text-xl font-bold">Kursus {params.reguler}</span>
          <div className="flex place-items-center">
            <Image src={home} alt="Notifikasi" className="mr-1" width={18} height={18} priority />
            <a href="../../../ecourse" className="px-1">
              Kursus Saya
            </a>{" "}
            / Kursus {params.reguler}
          </div>
        </div>
      </div>

      <div className="w-full bg-white border rounded-lg mt-10 p-4 max-md:mt-4">
        <a href="../../../ecourse">
          <div className="flex flex-row place-items-center">
            <Image src={leftArrow} alt="Kembali" className="mr-1" width={18} height={18} priority />
            <div className="text-[#065EA8] font-semibold">Kembali</div>
          </div>
        </a>

        <div className="flex flex-row gap-3 mt-4 place-items-center justify-center max-md:justify-start flex-wrap">
          <a href="../semua/1">
            <button className="hover:bg-blue hover:text-white text-[#065EA8] border-2 border-[#065EA8] px-3 py-1 rounded-lg active:bg-red-400 active:text-white active:border-red-400 focus:bg-blue-700 focus:text-white">
              Semua Kursus
            </button>
          </a>

          <a href="../populer/1">
            <button className="hover:bg-blue hover:text-white text-[#065EA8] border-2 border-[#065EA8] px-3 py-1 rounded-lg active:bg-red-400 active:text-white active:border-red-400 focus:bg-blue-700 focus:text-white">
              Kursus Terpopuler
            </button>
          </a>

          <a href="../draft/1">
            <button className="hover:bg-blue hover:text-white text-[#065EA8] border-2 border-[#065EA8] px-3 py-1 rounded-lg active:bg-red-400 active:text-white active:border-red-400 focus:bg-blue-700 focus:text-white">
              Draft Kursus
            </button>
          </a>

          <a href="../aktif/1">
            <button className="hover:bg-blue hover:text-white text-[#065EA8] border-2 border-[#065EA8] px-3 py-1 rounded-lg active:bg-red-400 active:text-white active:border-red-400 focus:bg-blue focus:text-white">
              Kursus Aktif
            </button>
          </a>
        </div>

        <div className="mt-6 px-10 max-md:px-0">
          <form>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300 ">
              Cari
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <Image src={cari} alt="Cari" className="mr-1" width={18} height={18} priority />
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white border border-[#cbddec] focus:ring-blue-500 focus:border-[#cbddec] dark:bg-white dark:border-[#cbddec] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#cbddec] rounded-lg"
                placeholder="Cari nama kursus"
                required=""
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue hover:bg-main-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-main-blue dark:hover:bg-main-blue dark:focus:ring-blue-800 rounded-lg"
              >
                Cari
              </button>
            </div>
          </form>

          <div className="grid grid-cols-4 gap-4 w-full mt-6 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-2" id="itemView">
            {newkursus.map(
              (item, i) =>
                //i < 8 &&
                i >= awal &&
                i < akhir && (
                  <div className="max-w-sm rounded-xl overflow-hidden shadow-lg" key={i}>
                    <div className={warna[i % 8]}>
                      <div className="relative">
                        <div className="flex justify-center rounded-full bg-white px-2 w-14 py-0 absolute right-0">
                          <Image src={bintang} alt="Bintang" width={16} height={16} /> 4,5
                        </div>
                      </div>

                      <div className="flex justify-center mt-4">
                        <Image className="" src={thumbnail} alt="Latar" />
                      </div>
                    </div>

                    <div className="pt-4 pb-2 mx-8 border-b-2 border-gray-300 h-20 max-md:mx-2">
                      <div className="font-bold text-xl mb-2">{item.name}</div>
                    </div>

                    <div className="px-6 pt-4 pb-2 max-md:px-2">
                      <div className="flex flex-row place-items-center mb-2">
                        <div className="w-[35px]">
                          <Image src={profile} alt="Profile" width={24} height={24} />
                        </div>
                        <div className="">Mark Zuckerbag</div>
                      </div>
                      <div className="flex flex-row place-items-center mb-2">
                        <div className="w-[35px]">
                          <Image src={box} alt="Profile" width={24} height={24} />
                        </div>
                        <div className="">10 Modul</div>
                      </div>
                      <div className="flex flex-row place-items-center mb-2">
                        <div className="w-[35px]">
                          <Image src={users} alt="Profile" width={24} height={24} />
                        </div>
                        <div className="">500 Siswa</div>
                      </div>
                    </div>

                    <div className="px-6 mb-8 max-md:px-2">
                      <a href="#">
                        <button onClick={()=>router.push('/vendor/kursus-saya/detail-kursus')} className={item.status == "draft" ? "bg-[#FEC955] hover:bg-red-700 text-white text-sm px-4 py-1 rounded-full w-full" : "bg-blue hover:bg-main-blue text-white text-sm px-4 py-1 rounded-full w-full"}>
                          {item.status == "draft" ? "Pending" : "Aktif"}
                        </button>
                      </a>
                    </div>
                  </div>
                )
            )}
          </div>

          <div className="flex items-center space-x-5 mt-4 place-content-center">
            {textRow.map((item, i) => (
              <a href={item} className="cursor-pointer px-4 py-2 text-slate-400 border border-slate-400 rounded-md hover:bg-main-blue hover:text-white hover:border-blue-400" key={i}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
