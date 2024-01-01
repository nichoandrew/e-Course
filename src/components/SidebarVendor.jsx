'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@//assets/img/logokursusonline.svg";
import Logout from "@/assets/icons/logout-vendor.svg";
import transaksivendor from '@/assets/icons/transaksivendor.svg'
import dashboardvendor from '@/assets/icons/dashboardvendor.svg'
import quizvendor from '@/assets/icons/quizvendor.svg'
import kursusvendor from '@/assets/icons/kursusvendor.svg'
import uploadvendor from '@/assets/icons/uploadvendor.svg'
import { usePathname } from "next/navigation";


const sidebarContent = [
    {
        name: "Dashboard",
        link: "/vendor/dashboard",
        icon:dashboardvendor
      },
      {
        name: "Kursus Saya",
        link: "/vendor/kursus-saya",
        icon:kursusvendor
      },
      {
        name: "Upload Kursus",
        link: "/vendor/upload",
        icon:uploadvendor
      },
      {
        name: "Quiz",
        link: "/vendor/quiz",
        icon:quizvendor
      },
      {
        name: "Transaksi",
        link: "/vendor/transaksi",
        icon:transaksivendor
      },
]
export default function SidebarVendor() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname()
  return (
    <>
      <div className="min-h-screen lg:flex lg:flex-col hidden fixed">
        <div className="w-full p-2 px-10">
        <div className="min-h-max border-b-4 border-[#ADC9E1] flex justify-center p-2">
          <Image src={logo} alt="Logo eCourse" width={150} height={150} />
        </div>
        </div>
        <div className="w-full px-2">
            {sidebarContent.map((item, index) => (
              <Link href={item.link} key={index} className={`flex py-3 px-10 gap-2 hover:bg-[#6495ED33] hover:rounded md:text-[#065EA8] opacity-70 hover:opacity-100 place-items-center  ${pathname === item.link   ? 'bg-[#6495ED33] rounded opacity-100 ' : ''}`}>
                <Image src={item.icon} alt={item.name} width={20} height={20}/>
                <p className="font-medium text-base">{item.name}</p>
              </Link>
            ))}
          <Link href="../../../" className="flex py-3 px-10 gap-2 hover:bg-[#6495ED33] hover:rounded md:text-[#065EA8] opacity-70 hover:opacity-100 place-items-center">
            <Image src={Logout} alt="logout" width={20} height={20} />
            <h6 className="font-semibold">Keluar</h6>
          </Link>
        </div>
      </div>
    </>
  );
}
