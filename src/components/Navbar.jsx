"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import close from "@/assets/icons/closeIcon.svg";
import LogoAuth from "@/assets/icons/logo_auth.svg";
import hamberger from "@/assets/icons/hamberger.svg";
import LogoKursus from "../assets/img/logokursusonline.svg";

const navContent = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Kategori",
    link: "/category-course",
  },
  {
    name: "Mengajar",
    link: "/mengajar",
  },
  {
    name: "Galeri Interaktif",
    link: "/galeri-interaktif",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const changeBackground = () => {
        if (window.scrollY >= 70) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };

      window.addEventListener("scroll", changeBackground);
      return () => {
        window.removeEventListener("scroll", changeBackground);
      };
    }
  }, []);

  return (
    <nav
      className={`border-gray-200 fixed top-0 right-0 left-0 z-10 py-2 ${
        navbar ? "bg-white shadow-xl" : "bg-transparent"
      }`}
    >
      <div
        className={` ${isOpen ? "overlay left-0" : "hidden left-[-5000px]"}`}
        onClick={() => {
          setIsOpen((prevIsOpen) => !prevIsOpen);
        }}
      ></div>
      <div
        className={`sidebar md:hidden ${isOpen ? "left-0" : "left-[-225px] "}`}
      >
        <div className="py-3 flex justify-center sidebar-heading">
          <Image
            src={LogoKursus}
            alt="Logo eCourse"
            width={150}
            height={50}
            priority
            onClick={() => {
              setIsOpen((prevIsOpen) => !prevIsOpen);
            }}
            className="cursor-pointer"
          />
        </div>
        <div className="lg:w-[14rem] md:w-20 overflow-hidden mt-2">
          <ul className="menuDrop">
            <li>
              <Link href="/">Beranda</Link>
            </li>
            <li>
              <Link href="/category-course">Kategori</Link>
            </li>
            <li>
              <Link href="/mengajar">Mengajar di KursusOnline</Link>
            </li>
            <li>
              <Link href="/galeri-interaktif">Galeri Interaktif</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Buat Akun</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between md:mx-4 px-4 md:px-0 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image src={LogoKursus} alt="ecourse Logo" width={150} height={100} />
        </Link>
        <div className="md:flex md:order-2 ">
          <div className="hidden md:flex gap-5 ">
            <Link href="/register">
              <button
                type="button"
                className="text-blue focus:outline-none border-2 border-blue font-medium rounded-md text-sm px-5 py-1 text-center bg-white hover:brightness-75 "
              >
                Daftar
              </button>
            </Link>
            <Link href="/login">
              <button
                type="button"
                className="text-white focus:outline-none border-2 border-blue font-medium rounded-md text-sm px-5 py-1 text-center bg-blue hover:brightness-75 "
              >
                Masuk
              </button>
            </Link>
          </div>
          <div
            className="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isOpen ? (
              <Image
                src={close}
                alt=""
                className="hover:scale-125 duration-300 transition-all"
              />
            ) : (
              <Image
                src={hamberger}
                alt=""
                className="hover:scale-125 duration-300 transition-all"
              />
            )}
          </div>
        </div>
        <div
          className={`hidden items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            navbar ? "bg-white" : "bg-transparent "
          }`}
        >
          <ul className="flex-col font-medium hidden md:flex mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 text-gray-500">
            {navContent.map((nav, i) => {
              return (
                <li
                  key={i}
                  className="md:ml-8 md:my-0 my-3 cursor-pointer font-medium hover:text-blue"
                >
                  <Link
                    href={nav.link}
                    className={`hover:text-blue ${
                      pathname === nav.link ? "text-blue" : "text-gray-500"
                    }`}
                  >
                    {nav.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
