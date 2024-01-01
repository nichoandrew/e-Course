"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { deleteCookie } from "cookies-next";
import LogoAuth from "@/assets/icons/logo_auth.svg";
import avatar from "@/assets/icons/profile1.svg";
import hamberger from "@/assets/icons/hamberger-vendor.svg";
import notification from "@/assets/icons/notif-vendor.svg";
import { FaUser } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa6";
import { Button } from "react-scroll";
import { useSelector } from "react-redux";
import LogoKursus from "../assets/img/logokursusonline.svg";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const navContentDekstop = [
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

const navContentMobile = [
  {
    name: "Dashboard",
    link: "/vendor/dashboard",
  },
  {
    name: "Kursus Saya",
    link: "/vendor/kursus",
  },
  {
    name: "Upload Kursus",
    link: "/vendor/upload",
  },
  {
    name: "Quiz",
    link: "/vendor/quiz",
  },
  {
    name: "Transaksi",
    link: "/vendor/transaksi",
  },
];

const NavbarVendor = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    deleteCookie("token");
    router.push("/");
  };
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

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [isprofileMobileOpen, setIsProfilMobileOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toogleProfileMobileDropdown = () => {
    setIsProfilMobileOpen(!isprofileMobileOpen);
  };

  return (
    <nav
      className={`border-gray-200 lg:static fixed top-0 right-0 left-0 z-10  ${
        navbar ? " bg-blue lg:bg-white shadow-xl" : "bg-blue lg:bg-transparent"
      }`}
    >
      <div
        className={` ${isOpen ? "overlay left-0" : "hidden left-[-5000px]"}`}
        onClick={() => {
          setIsOpen((prevIsOpen) => !prevIsOpen);
        }}
      ></div>
      <div
        className={`sidebar lg:hidden ${isOpen ? "left-0" : "left-[-225px] "}`}
      >
        <div className="flex justify-center sidebar-heading py-4">
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
        <div className="lg:w-[14rem] md:w-20 overflow-hidden mt-2 mb-24">
          <ul className="menuDrop">
           {navContentMobile.map((nav,i)=>
            (
              <li key={i}> 
              <Link href={nav.link}>{nav.name}</Link>
              </li>
            )
           )}
          </ul>
        </div>
        <div className="sidebar-footer px-4">
          <div className="flex flex-row space-x-2 place-items-center">
            <div className="dropdown">
              <button>
                <Image
                  src={avatar}
                  alt="User Online"
                  width={60}
                  height={60}
                  priority
                  className="rounded-full cursor-pointer pt-4"
                />
              </button>
              <nav
                tabIndex="0"
                className="border border-gray-400 rounded-md bottom-12 bg-white py-2 text-gray-900 -mt-2"
              >
                <div className="flex flex-col">
                  <div className="px-2 hover:bg-blue">
                    <Link href="/user/pengaturan">Edit</Link>
                  </div>
                </div>
              </nav>
            </div>

            <div className="text-black items-center">
              <Link href="/user/pengaturan">
                <button className="relative rounded border border-gray-900 px-2 py-1">
                  {/* <span>{`${userInfo.first_name} ${userInfo.last_name}`}</span> */}
                  <span>yogi ganteng</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap items-center justify-end lg:mx-4 px-4 lg:px-8 ">
        <div className="flex justify-between items-center w-full lg:hidden">
          <div
            className="flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden cursor-pointer focus:outline-none "
            onClick={toggleMobileMenu}
          >
            {isOpen ? (
              <Image
                src={close}
                alt=""
                className="hover:scale-125 duration-300 transition-all"
                width="100%" height="100%"
              />
            ) : (
              <Image
                src={hamberger}
                alt=""
                className="hover:scale-125 duration-300 transition-all"
                width="100%" height="100%"
              />
            )}
          </div>
          <Link href="/" className="flex items-center">
            <Image
              src={LogoKursus}
              alt="ecourse Logo"
              width={150}
              height={100}
            />
          </Link>
          <div className="flex items-center">
            <Link href="/user/notification" className="flex items-center mr-2">
              <Image
                src={notification}
                alt="Notification"
                width={30}
                height={30}
                className="block"
              />
            </Link>
            <div className="group hover:bg-white hover:rounded-md">
              <button className="block" onClick={toogleProfileMobileDropdown}>
                <Image
                  src={avatar}
                  alt="Avatar"
                  width={45}
                  height={45}
                  className="block rounded-2xl pt-1"
                />
              </button>
              {isprofileMobileOpen && (
                <div className="absolute mt-3 inline-block text-left">
                  <div
                    className="origin-top-right absolute -right-12 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="p-3" role="none">
                      <Link
                        href={"/user/pengaturan"}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        role="menuitem"
                      >
                        <FaUser className="mr-2" />
                        <span className="ml-2">Profile</span>
                      </Link>

                      <button
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        role="menuitem"
                        onClick={handleLogout}
                      >
                        <FaDoorOpen className="mr-2" />
                        <span className="ml-2">Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:flex lg:order-2">
          <div className=" order-none lg:order-2 lg:gap-2 items-center hidden lg:flex">
            <Link href="/">
              <Image
                src={notification}
                alt="Notification"
                width={30}
                height={30}
    
              />
            </Link>
            <div className="group hover:bg-dark-blue hover:rounded-md pr-2 ">
              <button className="flex pt-1" onClick={toggleProfileDropdown}>
                <Image
                  src={avatar}
                  alt="Avatar"
                  width={45}
                  height={45}
                  className="hidden lg:flex rounded-2xl"
                />
                <h3 className="py-1 text-blue mr-2 group-hover:text-white">
                  {/* {`${userInfo.first_name} ${userInfo.last_name}`} */}
                  yogi ganteng
                </h3>
                <div>
                {isProfileOpen ? <SlArrowUp className="text-blue group-hover:text-white pt-2 h-full"/> : <SlArrowDown className="text-blue group-hover:text-white pt-2  h-full"/>}
                </div>
    
              </button>
              {isProfileOpen && (
                <div className="absolute mt-3  text-left">
                  <div
                    className="border-2 xl:origin-top-left md:origin-top-right md:-right-36 absolute w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="p-3">
                      <Link
                        href={"/vendor/pengaturan"}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        role="menuitem"
                      >
                        <FaUser className="mr-2" />
                        <span className="ml-2">Profile</span>
                      </Link>

                      <button
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        role="menuitem"
                        onClick={handleLogout}
                      >
                        <FaDoorOpen className="mr-2" />
                        <span className="ml-2">Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavbarVendor;
