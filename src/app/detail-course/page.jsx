"use client";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/pagination";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ytb from "@/assets/icons/Ytb.svg";
import book from "@/assets/icons/book.svg";
import User from "@/assets/icons/User.svg";
import { Materi } from "@/assets/data/data";
import akses from "@/assets/icons/akses.svg";
import rating from "@/assets/icons/rating.svg";
import avatar from "@/assets/icons/avatar.svg";
import quiz from "@/assets/icons/quizdetail.svg";
import profile from "@/assets/images/profile.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import thumbnail from "@/assets/images/thumbnails.png";
import sertifikat from "@/assets/icons/sertifikat.svg";
import React, { useEffect, useRef, useState } from "react";
import backgroundHero from "@/assets/images/background.svg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const DinamicNavbar = dynamic(() => import("@/components/Navbar"));
const DinamicAccordion = dynamic(() => import("@/components/Accordion"));
const DinamicFooter = dynamic(() => import("@/components/FooterContent"));
const DinamicScrollToSection = dynamic(() => import("@/components/ScrollToSection"));

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const ref = useRef(null);
  const [materi, setMateri] = useState([]);
  const [open, setOpen] = useState(false);
  const [favorit, setFavorit] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const navContent = [
    {
      name: "Ikhtisar",
      link: "ikhtisar",
    },
    {
      name: "Kurikulum",
      link: "kurikulum",
    },
    {
      name: "Fasilitator",
      link: "fasilitator",
    },
    {
      name: "Review",
      link: "review",
    },
  ];

  const materiCarrosel = () => {
    setMateri(Materi);
  };

  const [activeSection, setActiveSection] = useState(null);

  const handleSetActiveSection = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    materiCarrosel();
  }, []);

  useEffect(() => {
    if (ref.current) {
      setShowReadMoreButton(
        ref.current.scrollHeight !== ref.current.clientHeight
      );
    }
  }, []);

  const code = `
    for (i in range(10)) {
        print("Slide " + str(i + 1));
    }
    `;

  const onclickFavorit = () => {
    setFavorit(!favorit);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Konfigurasi awal elemen (tidak terlihat dan posisi sedikit lebih bawah)
      animate={{ opacity: 1, y: 0 }} // Animasi elemen (menjadi terlihat dan kembali ke posisi awal)
      transition={{ duration: 1 }}
    >
      <DinamicNavbar />
      <title>Detail Kursus</title>
      {/* Detail */}
      <div
        className=" text-black py-20 mb-0 pt-32"
        style={{
          backgroundImage: `url(${backgroundHero.src})`,
        }}
      >
        <div className="container mx-auto px-10">
          <div>
            <h1 className="font-bold text-4xl mb-4">CSS Introduction</h1>
            <p className="text-xl w-full lg:w-[684px] mb-6 justify-start">
              Pada materi ini kamu akan mempelajari cara berpikir dan
              penggambaran suatu program dengan menggunakan CSS. Kamu akan
              belajar konsep dasar CSS
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Image src={rating} alt="rating" />
                <p className="text-[#FDB80B] font-bold">4/5</p>
              </div>
              <Link href="#" className="underline sm:self-start">
                &#40;1.000 ulasan&#41;
              </Link>
              <div className="flex items-center gap-2 sm:self-start">
                <Image src={User} alt="user" />
                <p>1000 siswa</p>
              </div>
            </div>
            <div className="flex flex-row gap-1 sm:flex-start">
              <p>Dibuat oleh</p>
              <p className="underline">Wahyu Prasetyo</p>
            </div>
          </div>
        </div>
      </div>
      {/* Detail */}

      <nav className="border-gray-200 bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between py-4 md:px-10 xl:p-2">
          <div
            className={`absolute left-0 md:static items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in ${isOpen
              ? "relative top-0 visible opacity-100 z-2"
              : "top-[40px] invisible opacity-0"
              } md:opacity-100 md:visible`}
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {navContent.map((nav, i) => {
                return (
                  <li className="md:ml-8 text-xl md:my-0 my-3 cursor-pointer" key={i} >
                    <DinamicScrollToSection
                      to={nav.link}
                      onSetActive={() => handleSetActiveSection(nav.link)}
                    >
                      {nav.name}
                    </DinamicScrollToSection>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* Card  */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-xl:hidden"
      >
        <div className="container mx-auto px-10 flex flex-col sm:flex-row sm:justify-end sm:-mt-[280px]">
          <div className="border w-full sm:w-80 h-auto sm:h-115 shadow-2xl rounded-3xl">
            <div
              className="h-[205px] sm:h-[205px] py-10 rounded-t-2xl"
              style={{
                backgroundImage: `url(${thumbnail.src})`,
              }}
            ></div>
            <div className="flex flex-col justify-between px-4 py-4 gap-3 bg-white rounded-b-2xl">
              <div className="flex">
                <h2 className="text-black font-bold text-3xl">Rp. 274.500</h2>
                <p className="line-through text-red-500 text-sm font-bold my-auto ml-3">
                  Rp. 500.000
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  className="bg-white border-2 rounded-xl w-14 h-14 flex justify-center items-center"
                  onClick={onclickFavorit}
                >
                  {favorit ? (
                    <AiFillHeart className="text-red-500" size={26} />
                  ) : (
                    <AiOutlineHeart size={26} />
                  )}
                </button>
                <Link href="/laman-checkout">
                  <button className="bg-dark-blue w-56 h-14 rounded-lg text-white font-bold tracking-wide hover:brightness-125">
                    IKUTI KURSUS
                  </button>
                </Link>
              </div>
              <h2 className="text-[18px] pt-4 font-semibold">Paket Kelas</h2>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="aspect-w-4 aspect-h-3">
                    <Image src={ytb} alt="course" />
                  </div>
                  <p className="text-sm text-black font-normal w-56">
                    10 Video pembelajaran
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      className="text-black items-start"
                      src={book}
                      alt="paket kelas"
                    />
                  </div>
                  <p className="text-sm text-black font-normal w-56">
                    7 Kurikulum
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      className="text-black items-start"
                      src={quiz}
                      alt="a"
                    />
                  </div>
                  <p className="text-sm text-black font-normal w-56">5 Quiz</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      className="text-black items-start"
                      src={sertifikat}
                      alt="b"
                    />
                  </div>
                  <p className="text-sm text-black font-normal  w-56">
                    Sertifikat elektronik
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="aspect-w-4 aspect-h-3">
                    <Image src={akses} alt="c" />
                  </div>
                  <p className="text-sm text-black font-normal w-56">
                    Akses kelas seumur hidup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Card  */}

      {/* Kurikulum */}
      <section
        id="kurikulum"
        className="container mx-auto px-5 md:px-10 py-5 mb-20 xl:-mt-60 "
      >
        <h1 className="font-bold text-base md:text-2xl">Kurikulum</h1>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="h-full place-items-center">
            <div className="max-w-[800px] max-md:w-full mt-6">
              {materi.map((item, index) => {
                return (
                  <DinamicAccordion
                    key={index}
                    open={index === open}
                    name={item.name}
                    lesson1={item.lesson1}
                    lesson2={item.lesson2}
                    toggle={() => toggle(index)}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>
      {/* Kurikulum */}

      {/* Deskripsi */}
      <section id="ikhtisar">
        <div className="container mx-auto px-5 md:px-10 mb-14 pt-0 ">
          <h1 className="text-black text-base md:text-2xl font-bold mb-4">
            Deskripsi
          </h1>
          <div
            className={
              isOpen
                ? null
                : "relative h-[200px] sm:h-[150px]  w-full lg:w-[800px]  overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-[100%] before:h-[100px] before:bg-gradient-to-b before:from-transparent before:to-[#ffffff]"
            }
            ref={ref}
          >
            <p className="w-full lg:w-[850px] text-sm md:text-[18px] leading-7 indent-6  justify-start">
              Kursus adalah sebuah program pendidikan atau pelatihan yang
              terstruktur dan dirancang untuk memberikan pemahaman, pengetahuan,
              atau keterampilan tambahan kepada pesertanya dalam suatu bidang
              atau topik tertentu. Dalam kursus, peserta akan belajar dari
              seorang instruktur yang memiliki keahlian di bidang yang
              diajarkan, mengikuti kurikulum yang telah disusun, dan biasanya
              mengikuti evaluasi atau penilaian untuk mengukur kemajuan mereka.
              Kursus dapat mencakup berbagai subjek, baik itu mata pelajaran
              akademis, keterampilan praktis, atau pelatihan profesional, dan
              sering kali memiliki tujuan yang jelas, seperti persiapan untuk
              pekerjaan tertentu atau pencapaian sertifikat. Kursus hadir dalam
              berbagai bentuk, dari yang diajarkan di lembaga pendidikan formal
              hingga kursus online atau pelatihan non-formal, dan berperan
              penting dalam membantu individu mengembangkan pengetahuan dan
              keterampilan mereka.
            </p>
          </div>

          {showReadMoreButton && (
            <a
              className="text-[#6495ED] cursor-pointer font-semibold text-base"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Baca lebih sedikit" : "Baca selengkapnya"}
            </a>
          )}
        </div>
      </section>

      {/* TESTIMONI */}
      <section
        id="review"
        className="overflow-x-hidden container px-5 md:px-10 mb-14 "
      >
        <div className="flex h-auto flex-col justify-start">
          <h3 className="text-base md:text-2xl font-bold text-black">
            Testimoni Tentang Kursus Ini
          </h3>
          <div className="max-w-[400px] md:max-w-[768px] lg:max-w-[820px] px-5 lg:px-0 flex items-center">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              navigation={false}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  loop: true,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                  loop: true,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="flex flex-col justify-center align-center mt-10"
            >
              {code.split("\n").map((slide, i) => (
                <SwiperSlide
                  key={i + 1}
                  className="bg-white w-10 text-black h-48 rounded-2xl py-5 px-2 border-2 flex flex-col justify-center items-center mt-16"
                >
                  <div className="flex flex-col gap-2 mb-5 items-center justify-center relative">
                    <Image
                      className="rounded-full -mt-16"
                      src={avatar}
                      width={72}
                      height={72}
                      alt="Picture"
                    />
                    <h6 className="text-xl font-semibold">Roberto Kalvin</h6>
                    <div className="text-yellow-400 gap-3 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">
                      “Worth it banget belajar disini! Materi sangat lengkap,
                      dapet sertifikat juga”
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* TESTIMONI */}

      {/*Fasilitator/Instruktur */}
      <section id="fasilitator">
        <div className="flex flex-col container mx-auto px-5 md:px-10 md:mb-56 gap-6 md:gap-12 mb-64 xl:mb-14">
          <div className="flex flex-col">
            <h1 className="font-bold text-base md:text-2xl  pb-4 md:pb-8">
              Fasilitator
            </h1>
            <div className="flex flex-row md:flex-row gap-4 md:gap-6 lg:gap-10">
              <Image
                className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden"
                src={profile}
                alt="profile"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-black md:text-xl text-base font-medium">
                  PT Otak Kanan
                </h1>
                <p className="w-[300px] md:w-[570px] lg:w-[670px] h-auto text-black text-base md:text-xl lg:text-xl font-light">
                  Sebuah perusahaan mempunyai banyak ide yang telah teruji dan
                  telah melayani lebih dari 100 perusahaan dari berbagai segmen
                  pasar. Kami Menciptakan, Membangun, dan Menjalankan sebuah
                  perusahaan yang berkelanjutan dengan menantang “status quo”.
                  Sehingga terdorong untuk menjadi lebih Kreatif dan Inovatif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Fasilitator/Instruktur */}

      {/* Button Bottom */}
      <section className="xl:hidden flex justify-center items-center">
        <div className="fixed bg-white border-[#BFBEBE] border-2 bottom-0 left-0 w-full h-36 z-20 shadow-[0_0_36px_0_rgba(0,0,0,0.25);] max-h-40">
          <div className="flex flex-col px-4 md:px-12 py-2 gap-4">
            <div className="flex">
              <h1 className="font-bold text-[28px] md:flex md:items-end">
                Rp 274.500
              </h1>
              <p className="line-through text-red-500 text-sm font-bold my-auto ml-3">
                Rp. 500.000
              </p>
            </div>

            <div className="flex flex-row gap-4 md:gap-3">
              <button
                className="bg-white border-2 rounded-xl w-[60px] h-[60px] flex justify-center items-center"
                onClick={onclickFavorit}
              >
                {favorit ? (
                  <AiFillHeart className="text-red-500" size={40} />
                ) : (
                  <AiOutlineHeart size={40} />
                )}
              </button>

              <Link href="/laman-checkout">
                <button className="bg-dark-blue w-auto px-14 md:px-40 rounded-2xl text-white font-bold text-[14px] h-[60px] md:text-[20px]">
                  IKUTI KURSUS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Button Bottom */}
      <DinamicFooter />
    </motion.div>
  );
};

export default Page;