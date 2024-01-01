"use client";
import "swiper/css";
import "./style.css";
import Link from "next/link";
import "swiper/css/pagination";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import catatan from "@/assets/images/carousel.svg";
import avatar from "@/assets/images/testicard.svg";
import vector1 from "@/assets/images/bgVector1.svg";
import vector2 from "@/assets/images/bgVector2.svg";
import { AnimatePresence, motion as m } from "framer-motion";
import mengajar from "@/assets/images/mengajar1.svg";
import card1 from "@/assets/images/cardMengajar.svg";
import card3 from "@/assets/images/cardMendapatkan.svg";
import card2 from "@/assets/images/cardMenginspirasi.svg";
const Navbar = dynamic(() => import("@/components/Navbar"));
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Footer = dynamic(() => import("@/components/FooterContent"));
const NavbarUser = dynamic(() => import("@/components/NavbarUser"));
import { useSelector } from "react-redux";

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const mainContent = [
  {
    image: catatan,
    alt: "catatan",
    title: "Merencanakan materi belajar anda",
    desc: "Bantu orang lain mengembangkan minat, keterampilan, dan karir mereka dengan berbagi pengetahuan yang dimiliki",
  },
  {
    image: catatan,
    alt: "catatan",
    title: "Merekam video materi yang ingin anda buat",
    desc: "Anda dapat mendokumentasi dan mengontrol konten sesuai keinginan anda!",
  },
  {
    image: catatan,
    alt: "catatan",
    title: "Upload video kursus anda",
    desc: "Anda dapat mempublikasikan kursus dan mengontrol konten sesuai keinginan anda!",
  },
];
const cardContent = [
  {
    image: card1,
    alt: "teacher",
    title: "Mengajar",
    titleDesc: "darimana saja!",
    desc: "Anda dapat mempublikasikan kursus dan mengontrol konten sesuai keinginan anda!",
  },
  {
    image: card2,
    alt: "wisuda",
    title: "Menginspirasi",
    titleDesc: "untuk belajar!",
    desc: "Bantu orang lain mengembangkan minat, keterampilan, dan karir mereka dengan berbagi pengetahuan yang dimiliki",
  },
  {
    image: card3,
    alt: "achivement",
    title: "Mendapatkan",
    titleDesc: "hadiah mengajar!",
    desc: "Anda dapat mempublikasikan kursus dan mengontrol konten sesuai keinginan anda!",
  },
];
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};

export default function MengajarPage() {
  const token = useSelector((state) => state.auth.token);
  const code = `
    for (i in range(10)) {
        print("Slide " + str(i + 1));
    }
    `;
  return (
    <>
      <header>{token?.token ? <NavbarUser /> : <Navbar />}</header>
      <AnimatePresence>
        {/* HERO SECTION */}
        <section>
          <div className=" text-kelvin py-0 lg:h-[400px] pt-24">
            <Image
              src={vector1}
              className="absolute w-full md:grid hidden -z-10"
              alt=""
            />
            <div className="container mx-auto px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <m.div
                  key="hero"
                  className="md:col-span-1"
                  initial={{ x: -32, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <h1 className="lg:text-4xl md:text-xl text-lg font-semibold mb-4 text-dark-grey">
                    Mari Bergabung dan Jadilah Bagian dari Perubahan Positif!
                  </h1>
                  <p className="lg:text-lg text-md mb-6 text-dark-grey">
                    Ajarkan pengetahuan dan keterampilanmu kepada generasi
                    mendatang dan Bergabunglah bersama kami dalam misi untuk
                    menciptakan masa depan yang lebih cerah melalui pendidikan
                    yang berkualitas tinggi.
                  </p>
                  <div className="relative">
                    <Link
                      href="/register-vendor"
                      className="border-2 border-white flex w-2/3 h-12 justify-center items-center text-white bg-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-orange-300 font-bold rounded-lg text-md px-4 py-2 shadow-lg"
                    >
                      Bergabung Sekarang!
                    </Link>
                  </div>
                </m.div>
                <motion.div
                  key="h"
                  className="md:col-span-1 flex items-center justify-center"
                  initial={{ x: 32, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <Image
                    src={mengajar}
                    alt="Hero Image"
                    className="max-w-full md:max-h-100"
                    height={400}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* HERO SECTION */}

        {/* MATERI POPULER */}
        <motion.section
          key="e"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="flex flex-col lg:pt-40">
            <div className="w-2/3 mx-auto pt-20">
              <h2 className="lg:text-4xl md:text-xl text-lg font-bold text-blue text-center pb-12">
                Temukan alasan anda untuk memulai karir bersama kami!
              </h2>
            </div>
            <Image
              src={vector2}
              className="absolute w-full mt-40 md:grid hidden -z-10"
              alt=""
            />
            <div className="md:flex flex-row hidden px-0 gap-5 pt-4 overflow-x-scroll whitespace-normal scroll-smooth scrollbar-hide mb-10 overflow-hidden w-[80%] mx-auto z-0">
              {cardContent.map((_, i) => (
                <div
                  key={i}
                  className="border min-w-[300px] lg:w-[800px] h-[250px] shadow-xl rounded-3xl duration-300 flex relative px-8 z-1 bg-white"
                >
                  <div className="flex-1 z-1">
                    <Image
                      src={_.image}
                      alt={_.alt}
                      className=" rounded-3xl absolute top-0 left-0 -mt-8 bottom-0"
                    />
                  </div>
                  <div className="flex flex-col px-2 text-end pt-4 w-[70%] flex-1 z-10">
                    <h2 className="lg:text-2xl md:text-xl text-lg text-blue font-bold">
                      {_.title}
                    </h2>
                    <h2 className="text-md text-dark-grey font-bold">
                      {_.titleDesc}
                    </h2>
                    <p className="text-dark-grey text-sm pt-6">{_.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:hidden w-[80%] mx-auto gap-2">
              {cardContent.map((item, index) => (
                <div
                  key={index}
                  className="border min-w-[300px] lg:w-[800px] shadow-xl rounded-2xl duration-300 flex relative py-4 px-2 z-10"
                >
                  <div className="flex flex-col w-[70%] flex-1 text-center">
                    <h2 className="lg:text-2xl md:text-xl text-md text-blue font-bold">
                      {item.title}
                    </h2>
                    <h2 className="text-sm text-dark-grey font-semibold">
                      {item.titleDesc}
                    </h2>
                    <p className="text-dark-grey text-xs pt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
        <motion.section
          key="r"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="flex flex-col md:px-20 pt-10">
            <div className="container mx-auto px-10">
              <h2 className="lg:text-4xl md:text-xl text-lg font-bold text-blue text-center pb-10">
                Cara memulai mengajar di E-Course
              </h2>
              <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
              >
                <div className="text-black w-full">
                  {mainContent.map((item, ind) => (
                    <SwiperSlide
                      key={ind}
                      className="flex flex-col md:flex-row justify-center gap-4 mb-4"
                    >
                      <div className="relative">
                        <Image
                          src={item.image}
                          className="rounded-2xl z-20"
                          alt={item.alt}
                        />
                        <div className="absolute lg:bottom-24 md:bottom-10 bottom-5 left-0 right-0 text-white w-2/3 mx-auto">
                          <h3 className="lg:text-2xl md:text-lg text-mds lg:font-bold font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="lg:text-2xl md:text-md text-xs">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </motion.section>
        {/* MATERI POPULER */}

        {/* TESTIMONI */}
        <motion.section
          key="0"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="overflow-x-hidden md:bg-white">
            <div className="flex flex-col items-center justify-start p-10 md:p-20">
              <h3 className="lg:text-4xl md:text-xl text-lg font-bold text-blue">
                Testimoni
              </h3>
              <div className="px-15 lg:px-52 mt-2">
                <p className="text-base font-medium text-center">
                  E-Course memberikan bukti nyata keberhasilan dan manfaat yang
                  diperoleh oleh peserta kursus. Lihat bagaimana pengalaman
                  mereka bergabung dalam E-Course
                </p>
              </div>
              <div className="max-w-[400px] md:max-w-[768px] lg:max-w-[1143px] px-5 lg:px-0 flex">
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
                      className="bg-white w-10 text-black h-48 rounded-2xl"
                    >
                      <div className="border shadow-xl rounded-3xl">
                        <div className="grid grid-cols-2">
                          <Image
                            className="rounded-md my-swipper-slide"
                            src={avatar}
                            width={58}
                            height={58}
                            alt="Picture of the author"
                          />
                          <div className="text-left px-2 py-2">
                            <div className="text-yellow-400 flex gap-1">
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
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#D2D2D2"
                                className="bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                              <p className="text-sm font-light text-dark-grey ps-2">
                                4/5
                              </p>
                            </div>
                            <h2 className="text-md font-bold">
                              Roberto Kalvin
                            </h2>
                            <h2 className="text-xs font-base text-dark-grey pb-2">
                              Course motivator
                            </h2>
                            <p className="text-xs">
                              “Worth it banget belajar disini! Materi sangat
                              lengkap, dapet sertifikat juga”
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          {/* TESTIMONI */}
        </motion.section>
      </AnimatePresence>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
