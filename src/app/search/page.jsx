"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import bgHero from "@/assets/images/bg-hero.svg";
import { allCourses as data } from "@/assets/data/data";
import React, { useEffect, useRef, useState } from "react";
const CardCourse = dynamic(() => import("@/components/CardCourse"));
const ButtonKategori = dynamic(() => import("@/components/ButtonKategori"));

export default function SearchPage() {
  const [courses, setCourses] = useState(data);
  const [defaultCourse, setDefaultCouser] = useState(4);
  const [isSelectedKategori, setIsSelectedKategori] = useState("");
  const [isSelectedFilter, setIsSelectedFilter] = useState("");
  const [isOpenKategori, setIsOpenKategori] = useState(false);
  const [isOpenViewFilteredBy, setIsOpenViewFilteredBy] = useState(false);
  const [querySearch, setQuerySearch] = useState("");
  const [resultSearchItem, setResultSearchItem] = useState("");
  const kategoriRef = useRef();
  const filterRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!kategoriRef.current.contains(e.target)) {
        setIsOpenKategori(false);
      }
      if (!filterRef.current.contains(e.target)) {
        setIsOpenViewFilteredBy(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChangeCourse = (e) => {
    setDefaultCouser(Number(e.target.value));
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

  const handleKategoriFiltered = (e) => {
    e.preventDefault();
    const kategoriResult =
      isSelectedKategori == "Semua Kategori"
        ? data
        : data.filter((item) => item.category.includes(isSelectedKategori));
    setCourses(kategoriResult);
    setIsOpenKategori(!isOpenKategori);
  };

  const handleFilteredBy = (e) => {
    e.preventDefault();
    let filteredBy = data;
    switch (isSelectedFilter) {
      case "Harga Terendah":
        filteredBy.sort(
          (lowPrice, highPrice) => lowPrice.price - highPrice.price
        );
        setCourses(filteredBy);
        break;
      case "Harga Tertinggi":
        filteredBy.sort(
          (lowPrice, highPrice) => highPrice.price - lowPrice.price
        );
        setCourses(filteredBy);
        break;
      case "Nilai Tertinggi":
        filteredBy.sort(
          (firstRate, secondRate) => secondRate.rating - firstRate.rating
        );
        setCourses(filteredBy);
        break;
      case "Abjad":
        filteredBy.sort((firstAbjadName, secondAbjadName) =>
          firstAbjadName.name
            .toLowerCase()
            .localeCompare(secondAbjadName.name.toLowerCase())
        );
        setCourses(filteredBy);
        break;
      //terbaru
      default:
        filteredBy.sort((firstId, secondId) => secondId.id - firstId.id);
        setCourses(filteredBy);
    }
    setIsOpenViewFilteredBy(!isOpenViewFilteredBy);
  };

  const kategoriAll = [
    {
      id: 1,
      name: "Kursus Siap Kerja",
    },
    {
      id: 2,
      name: "Teknologi",
    },
    {
      id: 3,
      name: "Bahasa",
    },
    {
      id: 4,
      name: "Web Development",
    },
    {
      id: 5,
      name: "UI/UX Designer",
    },
  ];
  const filterAll = [
    {
      id: 1,
      name: "Harga Terendah",
    },
    {
      id: 2,
      name: "Harga Tertinggi",
    },
    {
      id: 3,
      name: "Terbaru",
    },
    {
      id: 4,
      name: "Nilai Tertinggi",
    },
    {
      id: 5,
      name: "Abjad",
    },
  ];

  return (
    <div className="lg:px-14 md:px-12 sm:px-3">
      {" "}
      {/* alternative lg:ml-16 md:ml-12 */}
      <section id="heroContent" className="w-full lg:h-[27rem] pt-28 md:pt-24">
        <div className="relative -mt-24">
          <Image
            src={bgHero}
            width={100}
            height={100}
            alt="Background Hero"
            className="absolute w-full -z-10 pointer-events-none md:object-cover md:object-center py-5 "
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center h-full mt-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-11/12 md:w-3/5 lg:w-2/5 text-center mt-10"
          >
            <h1 className="text-3xl lg:text-[40px] font-bold tracking-wide text-[#45484F]">
              Kategori Kursus
            </h1>
            <p className="text-base lg:text-lg text-[#83858A] mt-3">
              Banyak beragam pilihan kategori kursus yang bisa kamu pilih untuk
              memaksimalkan potensimu. Pilih kategori kursus yang sesuai
              denganmu!
            </p>
          </motion.div>
        </div>
      </section>
      <section id="filterContent" className="pt-12 md:pt-5 lg:-mt-20 xl:mt-0 ">
        <div className="container">
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-xl md:text-2xl text-[#45484F] font-bold"
          >
            Cari Kursus
          </motion.h1>
          <div className="w-full py-3">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
              <form onSubmit={handleSubmitSearch}>
                <div>
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="w-full md:w-11/12 "
                  >
                    <div className="relative flex items-center ">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          className="h-5 w-5 fill-[#055EA8]"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                        >
                          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                        </svg>
                      </span>
                      <input
                        className="w-full border border-[#055EA8] rounded-lg py-2 md:py-3 pl-10 pr-4 focus:outline-none border-opacity-[20%]"
                        placeholder="UI/UX"
                        type="search"
                        name="search"
                        autoComplete="off"
                        onChange={(e) => setQuerySearch(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="py-1 px-4 bg-[#055EA8] hover:opacity-95 rounded text-white absolute right-2 flex items-center"
                      >
                        Cari
                      </button>
                    </div>
                  </motion.div>
                </div>
              </form>
              <div className="flex justify-center space-x-3 items-center">
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="w-full relative"
                  ref={kategoriRef}
                >
                  <ButtonKategori
                    onClick={() => setIsOpenKategori(!isOpenKategori)}
                    buttonName={
                      isSelectedKategori ? isSelectedKategori : "Kategori"
                    }
                  />
                  <div
                    className={`${isOpenKategori
                        ? "block translate-y-1 "
                        : "hidden translate-y-0 "
                      } absolute z-1 bg-white top-full w-full lg:w-4/5 border py-2 rounded-lg shadow-md mt-2 transition-transform`}
                  >
                    <span className="block font-bold pt-1 pb-1 px-4">
                      Pilih Kategori
                    </span>
                    <form onSubmit={handleKategoriFiltered}>
                      <button
                        className="block py-1.5 px-4 hover:bg-[#055EA8]/20 w-full rounded text-left cursor-pointer"
                        onClick={() => setIsSelectedKategori("Semua Kategori")}
                      >
                        Semua Kategori
                      </button>
                      {kategoriAll?.map((kategori) => (
                        <button
                          key={kategori.id}
                          className="block py-1.5 px-4 hover:bg-[#055EA8]/20 w-full rounded text-left cursor-pointer"
                          onClick={() => setIsSelectedKategori(kategori.name)}
                        >
                          {kategori.name}
                        </button>
                      ))}
                    </form>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="w-full relative"
                  ref={filterRef}
                >
                  <ButtonKategori
                    onClick={() =>
                      setIsOpenViewFilteredBy(!isOpenViewFilteredBy)
                    }
                    buttonName={isSelectedFilter ? isSelectedFilter : "Urutkan"}
                  />
                  <div
                    className={`${isOpenViewFilteredBy
                        ? "block translate-y-1 "
                        : "hidden translate-y-0 "
                      } absolute z-1 bg-white top-full w-full lg:w-4/5 border py-2 rounded-lg shadow-md mt-2 transition-transform`}
                  >
                    <span className="block font-bold pt-1 pb-1 px-4">
                      Pilih Urutan
                    </span>
                    <form onSubmit={handleFilteredBy}>
                      {filterAll?.map((filter) => (
                        <button
                          key={filter.id}
                          type="submit"
                          className="block py-1.5 px-4 hover:bg-[#055EA8]/20 w-full rounded text-left cursor-pointer"
                          onClick={() => setIsSelectedFilter(filter.name)}
                        >
                          {filter.name}
                        </button>
                      ))}
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
            {resultSearchItem && (
              <div className="mt-2">
                <h1 className="font-bold text-sm md:text-base lg:text-lg text-[#83858A]">
                  {courses.length}Kursus untuk hasil pencarian{'"'}
                  {resultSearchItem}
                  {'"'}
                </h1>
              </div>
            )}
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
                  <option value="4">
                    {resultSearchItem ? courses.length : "4"}
                  </option>
                  <option value="8">8</option>
                  <option value="12">12</option>
                  <option value="16">16</option>
                </select>
                <span>Dari {courses.length} kelas</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section id="courses" className="pb-16 pt-5">
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {courses?.slice(0, defaultCourse).map((course) => (
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
      </section>
    </div>
  );
}
