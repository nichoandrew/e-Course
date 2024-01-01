"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import herobg from "@/assets/images/bghero.svg";
import magang from "@/assets/images/magang.jpeg";
import tinyrightarrow from "@/assets/icons/arrow-right-Light.svg";
const NavbarUser = dynamic(() => import("@/components/NavbarUser"));
const Navbar = dynamic(() => import("@/components/Navbar"));
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const courseCategories = [
  {
    id: 1,
    title: "Digital Marketing",
    image: magang,
    detail: "Memahami dan menguasai berbagai aspek pemasaran digital.",
  },
  {
    id: 2,
    title: "Content Writer",
    image: magang,
    detail:
      "Pelatihan yang dirancang khusus untuk mengajarkan individu bagaimana menjadi penulis konten yang efektif.",
  },
  {
    id: 3,
    title: "Web Development",
    image: magang,
    detail:
      "Mengembangkan keterampilan yang diperlukan untuk menciptakan situs web dan aplikasi web.",
  },
  {
    id: 4,
    title: "Self Development",
    image: magang,
    detail:
      "Pelatihan soft-skill di bidang public speaking dan beragam pengembangan diri.",
  },
  {
    id: 5,
    title: "Graphic Design",
    image: magang,
    detail:
      "Mempraktekkan seni desain grafis yang menunjang kebutuhan promosi pasar.",
  },
];

const CourseCategoryPage = () => {
  const token = useSelector((state) => state.auth.token);
  const [displayedCourses, setDisplayedCourses] = useState(3); // Initially display 3 courses

  const filteredCourses = courseCategories.filter((category) =>
    category.title.toLowerCase()
  );

  const loadMoreCourses = () => {
    setDisplayedCourses((prev) => prev + 3); // Increase the number of displayed courses
  };

  return (
    <>
      <header>{token?.token ? <NavbarUser /> : <Navbar />}</header>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Hero section and search bar */}
        <section
          id="hero"
          className="min-w-full min-h-[440px] py-8 flex md:items-center lg:items-center"
          style={{
            backgroundImage: `url(${herobg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container flex items-center justify-center">
            <div className="w-11/12 lg:w-1/2 text-black">
              <h1 className="text-[30px] md:text-[45px] lg:text-[45px] font-bold text-center">
                Galeri Interaktif
              </h1>
            </div>
          </div>
        </section>

        <section id="galeri-interaktif" className="py-4 px-4 md:px-14 lg:px-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCourses.slice(0, displayedCourses).map((category) => (
                <Link key={category.id} href={`/search`} passHref>
                  <div className="shadow-lg rounded-xl flex items-center p-4 w-auto h-[245px] md:h-[260px] border-2 lg:h-[240px]">
                    <div className="flex gap-3 md:gap-3 lg:gap-6 items-center w-full h-auto">
                      <div className="w-[110px] h-[110px] md:w-[110px] md:h-[100px] lg:w-[200px] lg:h-[200px]">
                        <Image
                          src={category.image}
                          alt={category.title}
                          className="w-[110px] h-[110px] md:w-[110px]  md:h-[110px] lg:w-[200px] lg:h-[200px]"
                        />
                      </div>
                      <div className="w-[200px] md:w-[160px] lg:w-[370px]  gap-2 flex flex-col">
                        <h1 className="text-base font-bold">
                          {category.title}
                        </h1>
                        <p>{category.detail}</p>
                        <div className="text-[#055EA8] text-sm font-semibold flex items-center">
                          Lebih Lanjut
                          <Image
                            src={tinyrightarrow}
                            alt="Right Arrow"
                            width={12}
                            height={12}
                            className="ml-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Load More button */}
        {displayedCourses < filteredCourses.length && (
          <section className="flex justify-center mt-4 mb-8 mx-4 md:mx-0">
            <button
              className="w-[380px] h-[53px] bg-[#055EA8] text-white text-sm font-semibold flex items-center justify-center gap-2 rounded-md"
              onClick={loadMoreCourses}
            >
              Tampilkan Lebih Banyak
              <Image
                src={tinyrightarrow}
                alt="Right Arrow"
                width={12}
                height={12}
              />
            </button>
          </section>
        )}
      </motion.div>
    </>
  );
};

export default CourseCategoryPage;
