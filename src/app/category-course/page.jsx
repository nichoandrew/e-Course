"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React, { useState } from "react";
import herobg from "../../assets/images/bghero.svg";
import { allCourses as data } from "@/assets/data/data";
import webdev from "../../assets/icons/icon_webdev.svg";
import selfdev from "../../assets/icons/icon_egoSelf.svg";
import graphicDesign from "../../assets/icons/icon_graphic.svg";
import contentWritter from "../../assets/icons/icon_writer.svg";
const CardCourse = dynamic(() => import("@/components/CardCourse"));
import tinyrightarrow from "../../assets/icons/arrow-right-Light.svg";
import digitalMarketing from "../../assets/icons/icon_digitalmarketing.svg";
const NavbarUser = dynamic(() => import("@/components/NavbarUser"));
const Navbar = dynamic(() => import("@/components/Navbar"));
import { useSelector } from "react-redux";

const courseCategories = [
  {
    id: 1,
    title: "Digital Marketing",
    image: digitalMarketing,
    detail: "Memahami dan menguasai berbagai aspek pemasaran digital.",
  },
  {
    id: 2,
    title: "Content Writer",
    image: contentWritter,
    detail:
      "Pelatihan yang dirancang khusus untuk mengajarkan individu bagaimana menjadi penulis konten yang efektif.",
  },
  {
    id: 3,
    title: "Web Development",
    image: webdev,
    detail:
      "Mengembangkan keterampilan yang diperlukan untuk menciptakan situs web dan aplikasi web.",
  },
  {
    id: 4,
    title: "Self Development",
    image: selfdev,
    detail:
      "Pelatihan soft-skill di bidang public speaking dan beragam pengembangan diri.",
  },
  {
    id: 5,
    title: "Graphic Design",
    image: graphicDesign,
    detail:
      "Mempraktekkan seni desain grafis yang menunjang kebutuhan promosi pasar.",
  },
];

const CourseCategoryPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [displayedCourses, setDisplayedCourses] = useState(3); // Initially display 3 courses

  const [courses, setCourses] = useState(data);
  const [querySearch, setQuerySearch] = useState("");
  const [resultSearchItem, setResultSearchItem] = useState("");
  const [defaultCourse, setDefaultCourse] = useState(4);
  const token = useSelector((state) => state.auth.token);

  const handleChangeCourse = (e) => {
    setDefaultCourse(Number(e.target.value));
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const searchResult = !querySearch
      ? data
      : data.filter((item) =>
          item.name.toLowerCase().includes(querySearch.toLowerCase())
        );
    setResultSearchItem(querySearch);
    setCourses(searchResult);
  };

  // const handleSearch = (e) => {
  //   const searchTerm = e.target.value.toLowerCase();
  //   setSearchInput(searchTerm);
  // };

  const filteredCourses = courseCategories.filter((category) =>
    category.title.toLowerCase().includes(searchInput)
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
          className="min-w-full min-h-[440px] py-10 flex md:items-center lg:items-center"
          style={{
            backgroundImage: `url(${herobg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container flex items-center justify-center">
            <div className="w-11/12 lg:w-1/2 text-black">
              <h1 className="text-[30px] md:text-[45px] lg:text-[45px] font-bold text-center">
                Kategori Kursus
              </h1>
              <p className="text-[12px] md:text-[18px] lg:text-[18px] text-center">
                Banyak beragam pilihan kategori kursus yang bisa kamu pilih
                untuk memaksimalkan potensimu. Pilih kategori kursus yang sesuai
                denganmu!
              </p>
            </div>
          </div>
        </section>

        {/* Search bar section */}
        <section id="search" className="mx-4 md:mx-14 sm:mx-4">
          <div className="container">
            <h1 className="text-[15px] md:text-[18px] lg:text-[18px] font-bold mt-4 mb-4">
              Cari Kursus
            </h1>
            <div className="w-full">
              <form className="w-full" onSubmit={handleSubmitSearch}>
                <label
                  htmlFor="search"
                  className="mb-2 text-sm font-medium text-black sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    // onChange={handleSearch}
                    onChange={(e) => setQuerySearch(e.target.value)}
                    name="search"
                    id="search"
                    className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Cari kursus"
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2"
                  >
                    Cari
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section id="course-category" className="px-4 md:px-14 lg:px-20">
          <div className="container">
            {resultSearchItem && (
              <div className="mt-2">
                <h1 className="font-bold text-sm md:text-base lg:text-lg text-[#83858A]">
                  {courses.length} Kursus untuk pencarian {resultSearchItem}
                </h1>
                <div className="mt-5">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="text-[15px] md:text-base text-[#45484F] flex items-center space-x-2"
                  >
                    <span>Menampilkan </span>
                    <select
                      id="totalData"
                      className="w-16 lg:w-20 border border-[#055EA8] text-[#055EA8] focus:border-[#055EA8] focus:outline-none text-sm rounded-lg block p-1.5 md:p-2"
                      value={defaultCourse}
                      onChange={handleChangeCourse}
                    >
                      <option value="4">4</option>
                      <option value="8">8</option>
                      <option value="12">12</option>
                      <option value={resultSearchItem ? courses.length : ""}>
                        {resultSearchItem ? `All (${courses.length})` : "4"}
                      </option>
                    </select>
                    <span>Dari {courses.length} Kelas</span>
                  </motion.div>
                </div>
                <div className="container my-5">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                  >
                    {courses.slice(0, defaultCourse).map((course) => (
                      <CardCourse
                        key={course.id}
                        title={course.name}
                        rating={course.rating}
                        video={course.video}
                        image={course.image}
                        diskon={course.diskon}
                        price={course.price}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            )}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
                resultSearchItem ? "hidden" : ""
              }`}
            >
              {filteredCourses.slice(0, displayedCourses).map((category) => (
                <Link
                  key={category.id}
                  href={`/detail-course`} // /app/detail-course/${category.id}
                  passHref
                >
                  <div className="shadow-lg rounded-xl flex items-center p-4 w-auto h-[245px] md:h-[260px] lg:h-[240px]">
                    <div className="flex gap-3 md:gap-3 lg:gap-6 items-center w-full h-auto">
                      <div className="w-[110px] h-[110px] md:w-[110px] md:h-[110px] lg:w-[180px] lg:h-[180px]">
                        <Image
                          src={category.image}
                          alt={category.title}
                          className="w-[110px] h-[110px] md:w-[110px]  md:h-[110px] lg:w-[180px] lg:h-[180px]"
                        />
                      </div>
                      <div className="w-[200px] md:w-[160px] lg:w-full  gap-2 flex flex-col">
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
              className={`w-[380px] h-[53px] bg-[#055EA8] text-white text-sm font-semibold flex items-center justify-center gap-2 rounded-md ${
                resultSearchItem ? "hidden" : ""
              }`}
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
