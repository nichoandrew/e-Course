import Link from "next/link";
import Image from "next/image";
import book2 from "@/assets/icons/book2.svg";
import { usePathname } from "next/navigation";
import profile from "@/assets/icons/profile.svg";
import dashboard from "@/assets/icons/dashboard.svg";
import transaksi2 from "@/assets/icons/transaksi2.svg";
import sertifikat2 from "@/assets/icons/sertifikat2.svg";
import pengaturan2 from "@/assets/icons/pengaturan2.svg";
import { useSelector } from "react-redux";

const dataNav = [
  {
    link: "/user/dashboard",
    image: dashboard,
    alt: "dashboard",
    title: "Dashboard",
  },
  {
    link: "/user/kursus",
    image: book2,
    alt: "kursus",
    title: "Kursus saya",
  },
  {
    link: "/user/sertifikat",
    image: sertifikat2,
    alt: "sertifikat",
    title: "Sertifikat",
  },
  {
    link: "/user/transaksi",
    image: transaksi2,
    alt: "transaksi",
    title: "Transaksi",
  },
  {
    link: "/user/pengaturan",
    image: pengaturan2,
    alt: "pengaturan",
    title: "Pengaturan",
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="hidden md:flex md:flex-col">
        <div className="lg:px-4 lg:py-4">
          <Image src={profile} width={95} height={95} alt="profile" />
          <h6 className="font-bold text-[#45484F] lg:text-xl md:text-base">Selamat Datang,</h6>
          <h6 className="font-bold text-[#45484F] lg:text-xl md:text-base">yogi!</h6>
        </div>
        {dataNav.map((item, i) => (
          <div key={i} className="group">
            <Link href={item.link} className={`flex lg:px-4 px-3 py-4 gap-x-4 group-hover:bg-[#ACC9E2] group-hover:font-bold group-hover:rounded-xl md:text-[#45484F] duration-75 transition-all ease-out my-1 ${pathname === item.link ? "bg-[#ACC9E2] text-[#45484F] rounded-xl" : "text-[#45484F] " }`} >
              <Image src={item.image} alt={item.alt} />
              <p className={`font-semibold group-hover:text-[#45484F] w-full h-full ${pathname === item.link ? " text-[#45484F]" : "text-[#45484F]" }`} >
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;