"use client";
import "swiper/css";
import "swiper/css/thumbs";
import Link from "next/link";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import "../assets/css/HomeSwiper.css";
import { motion } from "framer-motion";
import Book from "@/assets/img/Book.svg";
// import { Data } from "@/assets/data/data";
import Student from "@/assets/img/Student.svg";
import BgBanner from "@/assets/img/bg-hero.svg";
import Graphic from "@/assets/img/GraphicUp.svg";
import BgBanner2 from "@/assets/img/bg-hero2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import search from "@/assets/icons/search_home.svg";
import thumbnail from "@/assets/icons/thumbnail.svg";
import Banner from "@/assets/icons/banner-header.svg";
import CarbonTime from "@/assets/icons/carbon_time.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import YellowStar from "@/assets/icons/star-Filled.svg";
import SilverStar from "@/assets/icons/silver_star.svg";
import Book2 from "@/assets/icons/iconoir_book-stack.svg";
import testimonial1 from "@/assets/icons/testimonial1.svg";
import testimonial2 from "@/assets/icons/testimonial2.svg";
import testimonial3 from "@/assets/icons/testimonial3.svg";
import testimonial4 from "@/assets/icons/testimonial4.svg";
import testimonial5 from "@/assets/icons/testimonial5.svg";
import testimonial6 from "@/assets/icons/testimonial6.svg";
import testimonial7 from "@/assets/icons/testimonial7.svg";
import React, { useState, useEffect, useRef } from "react";
const Navbar = dynamic(() => import("@/components/Navbar"));
import ContentWriter from "@/assets/img/icon_content-writer.svg";
const Footer = dynamic(() => import("@/components/FooterContent"));
import ChalkboardTeacher from "@/assets/img/ChalkboardTeacher.svg";
import WebDevelopment from "@/assets/img/icon_web_development.svg";
const NavbarUser = dynamic(() => import("@/components/NavbarUser"));
import CreateAccount from "@/assets/icons/register_account_home.svg";
import Certificate from "@/assets/icons/clarity_certificate-line.svg";
import DigitalMarketing from "@/assets/img/icon_digital_marketing.svg";
import ChalkBoard from "@/assets/icons/ph_chalkboard-teacher-light.svg";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import galerinteraktif1 from "@/assets/images/galeri_interaktif1.svg"
import galerinteraktif2 from "@/assets/images/galeri_interaktif2.svg"

const cardVariants = {
  offscreen: {
    y: 80,
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

export default function Home() {
  const token = useSelector((state) => state.auth.token);
  const [data, setData] = useState([]);
  const [all, setAllData] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  var nf = new Intl.NumberFormat();

  const loadCourses = async () => {
    await fetch("https://kursusonline.net/api/get-courses")
      .then((res) => res.json())
      .then((data) => {
        const initialData = data.courses.filter(
          (item) => item.coursecategory === "Mobile App Development"
        );
        setData(initialData);
        console.log(initialData);
        setAllData(data.courses);
        // setLoading(false);
      });
  };

  useEffect(() => {
    // setData(initialData);
    loadCourses();
  }, []);

  const filterType = (category) => {
    console.log("cat:" + category);
    setData(
      all.filter((item) => {
        return item.coursecategory === category;
      })
    );
    setSelectedCategory(category);
  };

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i}>
          {rating >= i ? (
            <Image src={YellowStar} alt="rating" />
          ) : (
            <Image src={YellowStar} alt="rating" />
          )}
        </span>
      );
    }

    return stars;
  };




  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <header>{token?.token ? <NavbarUser /> : <Navbar />}</header>

      <section className="w-full lg:h-[27rem] pt-10">
        <div className="relative -mt-16 md:-mt-20">
          <Image
            src={BgBanner}
            width={100}
            height={100}
            alt="Background Hero"
            className="absolute w-full -z-10 pointer-events-none object-cover object-center py-5"
          />
        </div>
        <div className="mt-20 md:mt-24 mx-4 lg:mt-[120px] xl:mt-[120px] 2xl:mt-[120px] md:mx-7">
          <div className="flex flex-col-reverse lg:flex-row pb-0 md:justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center md:self-center lg:text-left lg:w-1/2"
            >
              <h3 className="font-medium text-3xl md:text-4xl text-[#64666C]">
                Kursus Online Bersertifikat
              </h3>
              <h4 className="font-medium text-2xl md:text-4xl text-dark-grey mt-4">
                Kembangkan Potensi, <br /> Ikuti Kursus Online Di Sini!
              </h4>
              <p className="font-normal text-xl md:text-2xl text-[#83858A] mt-6">
                Terdapat lebih dari 100 kursus online bersertifikat dari
                berbagai kategori dengan dibimbing oleh mentor profesional untuk
                menunjang karir anda.
              </p>
              <h4 className="font-semibold text-2xl md:text-3xl text-dark-grey mt-10">
                Daftar Sekarang dan Mulai Belajar Hari Ini!
              </h4>
              <div className=" mt-6">
                <form className="flex flex-nowrap border-2 w-full lg:w-[490px] rounded-lg py-1 px-3 gap-3 md:gap-10 bg-white">
                  <Image
                    src={search}
                    alt="search"
                    className="self-center text-blue w-6 h-6 md:w-8 md:h-8"
                  />
                  <input
                    className="outline-none border-none flex-1"
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Cari Kursus"
                  />
                  <Link href="/search">
                    <button className="border-2 px-4 py-2 md:px-8 md:py-3 bg-blue text-white text-base md:text-xl font-normal rounded-lg hover:brightness-125">
                      Cari
                    </button>
                  </Link>
                </form>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <Image
                className="w-full h-full object-cover"
                src={Banner}
                alt="banner"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-[40px] lg:mt-[420px] 2xl:mt-[620px] xl:mx-[75px] mx-4 md:mx-7 justify-center flex ">
        <div className="flex flex-col lg:flex-row gap-5 xl:gap-5 w-full">
          <div className="flex flex-row md:gap-8 lg:gap-2 xl:gap-6 w-full xl:w-1/2">
            <div className="w-[180px] md:w-[340px] lg:w-[240px] xl:w-1/2 h-auto flex flex-row gap-3 border-r-4 border-[#055EA8]">
              <div className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]">
                <Image
                  className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px] "
                  src={ChalkboardTeacher}
                  alt="teacher"
                />
              </div>
              <div className="w-[90px] lg:w-[120px] xl:w-auto">
                <h1 className="text-dark-grey text-[25px] md:text-[35px] lg:text-[40px] font-medium">
                  50+
                </h1>
                <h2 className="text-dark-grey text-[16px] md:text-[20px] lg:text-[24px] font-normal">
                  Mentor
                </h2>
              </div>
            </div>
            <div className="w-[180px] md:w-[340px] lg:w-[240px] xl:w-1/2 h-auto flex flex-row gap-3 lg:border-r-4 border-[#055EA8]">
              <div className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]">
                <Image
                  className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px] "
                  src={Student}
                  alt="student"
                />
              </div>
              <div className="w-[90px] lg:w-[120px] xl:w-auto">
                <h1 className="text-dark-grey text-[25px] md:text-[35px] lg:text-[40px] font-medium">
                  100+
                </h1>
                <h2 className="text-dark-grey text-[16px] md:text-[20px] lg:text-[24px] font-normal">
                  Peserta
                </h2>
              </div>
            </div>
          </div>

          <div className=" flex flex-row md:gap-8 lg:gap-6 w-full xl:w-1/2">
            <div className="w-[180px] md:w-[340px]  lg:w-[240px] xl:w-1/2 h-auto flex flex-row gap-3 border-r-4 border-[#055EA8]">
              <div className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px]">
                <Image
                  className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] lg:w-[100px] lg:h-[100px] xl:w-[120px] xl:h-[120px] "
                  src={Book}
                  alt="book"
                />
              </div>
              <div className="w-[90px] lg:w-[120px] xl:w-auto">
                <h1 className="text-dark-grey text-[25px] md:text-[35px] lg:text-[40px] font-medium">
                  100+
                </h1>
                <h2 className="text-dark-grey text-[16px] md:text-[20px] lg:text-[24px] font-normal">
                  Kursus
                </h2>
              </div>
            </div>

            <div className="w-[180px] md:w-[340px] lg:w-[240px] xl:w-1/2 h-auto flex flex-row gap-3 ">
              <div className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] xl:w-[120px] xl:h-[120px]">
                <Image
                  className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] xl:w-[120px] xl:h-[120px] "
                  src={Graphic}
                  alt="graphic"
                />
              </div>
              <div className="w-[90px] lg:w-[120px] xl:w-auto">
                <h1 className="text-dark-grey text-[25px] md:text-[35px] lg:text-[40px] font-medium">
                  100+
                </h1>
                <h2 className="text-dark-grey text-[16px] md:text-[20px] lg:text-[24px] font-normal">
                  Materi
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        key="n"
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        className="relative"
      >
        <div className="relative">
          <Image
            src={BgBanner}
            width={100}
            height={100}
            alt="Background Hero"
            className="absolute w-full -z-10 pointer-events-none md:object-cover md:object-center py-5 md:mt-52"
          />
        </div>
        <div className="mx-4 md:mx-7 2xl:mx-[75px] mt-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-center">
            Mengapa Memilih KursusOnline?
          </h1>
          <p className="text-xl md:text-2xl font-medium text-center mt-3">
            Kami memiliki beberapa keunggulan sebagai penunjang pembelajaran
            kamu.
          </p>

          <div className="flex flex-col md:flex-row md:gap-4 lg:gap-[20px] gap-6 mt-14 justify-center">
            <motion.div className="flex flex-col gap-6 w-full lg:w-[35%]">
              <div className="border flex flex-row gap-3 w-full md:w-full h-auto md:h-auto lg:w-[100%] lg:h-auto shadow-lg bg-white px-3 lg:px-5 py-4 rounded-md">
                <div className="w-[75px] h-[75px] md:w-[25%] md:h-[85px] lg:w-[25%] lg:h-24 rounded-lg bg-[#FF5FA7] flex items-center justify-center">
                  <Image
                    src={CarbonTime}
                    alt="Time"
                    className="text-white w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
                <div className="w-[260px] md:w-[75%] lg:w-[75%]">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#123B59]">
                    Fleksibel
                  </h2>
                  <p className="text-lg md:text-xl font-normal text-[#64666C]">
                    Dapat menyesuaikan jadwal kamu
                  </p>
                </div>
              </div>
              <div className="border flex flex-row gap-3 w-full md:w-full h-auto md:h-auto lg:w-[100%] lg:h-auto shadow-lg bg-white px-3 lg:px-5 py-4 rounded-md">
                <div className="w-[75px] h-[75px] md:w-[25%] md:h-[85px] lg:w-[25%] lg:h-24 rounded-lg bg-[#9848FF] flex items-center justify-center">
                  <Image
                    src={ChalkBoard}
                    alt="Chalk Board Teacher"
                    className="text-white w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
                <div className="w-[260px] md:w-[75%] lg:w-[75%] ">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#123B59]">
                    Profesional Mentor
                  </h2>
                  <p className="text-lg md:text-xl font-normal text-[#64666C]">
                    Kursus online dengan profesional mentor terbaik
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="flex flex-col gap-6 w-full lg:w-[35%]">
              <div className="border flex flex-row gap-3 w-full md:w-full h-auto md:h-auto lg:w-[100%] lg:h-auto shadow-lg bg-white px-3 lg:px-5 py-4 rounded-md">
                <div className="w-[75px] h-[75px] md:w-[25%] md:h-[85px] lg:w-[25%] lg:h-24 rounded-lg bg-[#5094DD] flex items-center justify-center">
                  <Image
                    src={Book2}
                    alt="Book"
                    className="text-white w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
                <div className="w-[260px] md:w-[75%] lg:w-[75%]">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#123B59]">
                    Kuis Online
                  </h2>
                  <p className="text-lg md:text-xl font-normal text-[#64666C]">
                    Uji pengetahuan kamu dengan kuis online
                  </p>
                </div>
              </div>
              <div className="border flex flex-row gap-3 w-full md:w-full h-auto md:h-auto lg:w-[100%] lg:h-auto shadow-lg bg-white px-3 lg:px-5 py-4 rounded-md">
                <div className="w-[75px] h-[75px] md:w-[25%] md:h-[85px] lg:w-[25%] lg:h-24 rounded-lg bg-[#A8CF4E] flex items-center justify-center">
                  <Image
                    alt="Certificate"
                    src={Certificate}
                    className="text-white w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
                <div className="w-[260px] md:w-[75%] lg:w-[75%]">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#123B59]">
                    Sertifikat
                  </h2>
                  <p className="text-lg md:text-xl font-normal text-[#64666C]">
                    Dapatkan sertifikat dan tingkatkan kredibilitas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        key="y"
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="mx-4 md:mx-7 xl:mx-[75px] mt-24">
          <h1 className="font-bold text-3xl text-center">Rekomendasi Materi</h1>
          <p className="text-[24px] font-medium text-[#64666C] text-center mt-2">
            Kuasai berbagai materi dari mentor berpengalaman
          </p>

          <div className="flex lg:flex-row justify-center lg:gap-6 ">
            <div className="flex justify-between gap-2 xl:flex-wrap overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
              {["Mobile App Development", "Web Development", "Digital Marketing", "Microsoft Excel", "UI/UX Designer"].map((category, index) => (
                <button
                  key={index}
                  onClick={() => filterType(category)}
                  className={`m-1  text-[20px] font-medium rounded-2xl py-2 px-6 h-auto w-auto mt-6 text-center border ${selectedCategory === category ? "border-blue bg-blue text-white" : "bg-white border-blue border-solid"
                    }`}
                >
                  {category}
                </button>
              ))}

            </div>
          </div>

          <div className={`flex flex-row mx-auto gap-10 pt-4 overflow-x-scroll cursor-pointer active:cursor-grabbing whitespace-normal scroll-smooth  scrollbar-hide ${data.length === 1 ? 'justify-center' : ''}`} ref={sliderRef}>
            {data.map((item, index) => (
              <Link
                href={{
                  pathname: `/detail-course/${item.shortname}`,
                }}
                key={index}
                className="border w-80 lg:w-[250px] h-auto bg-white p-5  shadow-[0px_8px_16px_0px_rgba(4,_75,_134,_0.08),_0px_0px_4px_0px_rgba(0,_0,_0,_0.04)] duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-auto] h-[138px] bg-blue rounded-lg flex flex-row py-5 px-2">
                    <h5 className="text-sm font-bold tracking-wide text-white self-center">
                      {item.coursecategory}
                    </h5>
                    <Image
                      className="max-w-none ml-auto"
                      src={thumbnail}
                      alt={item.fullname}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="w-auto h-auto flex flex-col gap-1">
                      <p className="font-normal text-black text-sm">
                        PT OTAK KANAN
                      </p>
                      <p className="font-bold text-black text-sm">
                        {item.fullname}
                      </p>

                      <div className="flex flex-row gap-1">
                        {renderStars(item.review)}
                        <p>{item.review}</p>
                      </div>
                      <div className="flex flex-row gap-1">
                        <div className="w-auto h-auto p-1 bg-[#F0989E] rounded">
                          <p className="text-[12px] font-normal text-[#E2313D]">
                            50%
                          </p>
                        </div>
                        <p className=" text-[12px] font-normal text-[#A2A3A7] line-through self-center">
                          Rp.{nf.format(item.idnumber)}
                        </p>
                        <h1>Rp{nf.format((50 / 100) * item.idnumber)}</h1>
                      </div>
                    </div>
                    <button className="bg-blue w-full py-2 rounded-md text-white hover:brightness-125">
                      Ikuti Kursus
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-end">
            <Link href="/category-course">
              <button className="text-[20px] text-blue font-medium border-none ml-auto lg:mr-32 flex gap-4 w-auto h-auto py-3 hover:brightness-125">
                Lihat Semua{" "}
                <Image
                  src={ArrowRight}
                  alt="Arrow"
                  className="self-center w-6 h-6"
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative ">
          <Image
            src={BgBanner2}
            width={100}
            height={100}
            alt="Background Hero"
            className="absolute w-full -z-10 pointer-events-none md:object-cover md:object-center py-5 -mt-72"
          />
        </div>
      </motion.section>

      <motion.section
        key="k"
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        className=" mt-12 flex flex-col gap-3 mx-4 md:mx-7 xl:mx-[75px] justify-center"
      >
        <h1 className="text-[40px] font-medium text-dark-grey text-center">
          Kategori Kursus
        </h1>
        <p className="text-[24px] font-medium text-center text-[#64666C]">
          Lihat selengkapnya dan pilih sesuai dengan minat keahlianmu.
        </p>
        <div className="flex flex-col lg:flex-row gap-16 mt-3 justify-center">
          <div className="p-3 flex flex-row gap-3 w-full lg:w-[425px] h-auto bg-white rounded-xl shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.08),_0px_0px_4px_0px_rgba(0,_0,_0,_0.04)] ">
            <Image src={DigitalMarketing} alt="image" />
            <div className="flex flex-col gap-2 self-center">
              <h2 className="text-[20px] font-medium text-dark-grey">
                Digital Marketing
              </h2>
              <p className="text-[16px] font-normal text-[#83858A]">
                Memahami dan menguasai berbagai aspek pemasaran digital.
              </p>
              <Link href="/category-course">
                <button className=" text-[16px] font-semibold text-blue border-none flex flex-row mt-auto  w-full h-auto">
                  Lebih Lanjut
                  <Image
                    src={ArrowRight}
                    alt="Arrow Right"
                    className="w-6 h-6 ml-2"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="p-3 flex flex-row gap-3 w-full lg:w-[425px] h-auto bg-white rounded-xl shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.08),_0px_0px_4px_0px_rgba(0,_0,_0,_0.04)] ">
            <Image src={WebDevelopment} alt="image" />
            <div className="flex flex-col gap-2 self-center">
              <h2 className="text-[20px] font-medium text-dark-grey">
                Web Development
              </h2>
              <p className="text-[16px] font-normal text-[#83858A]">
                Mengembangkan keterampilan yang diperlukan untuk menciptakan
                situs web dan aplikasi web.
              </p>
              <Link href="/category-course">
                <button className="text-[16px] font-semibold text-blue border-none flex flex-row  w-full h-auto">
                  Lebih Lanjut
                  <Image
                    src={ArrowRight}
                    alt="Arrow Right"
                    className="w-6 h-6 ml-2"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="p-3 flex flex-row gap-3 lg:w-[425px] md:w-full h-auto bg-white rounded-xl shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.08),_0px_0px_4px_0px_rgba(0,_0,_0,_0.04)] ">
            <Image src={ContentWriter} alt="image" />
            <div className="flex flex-col gap-2">
              <h2 className="text-[20px] font-medium text-dark-grey">
                Content Writer
              </h2>
              <p className="text-[16px] font-normal text-[#83858A]">
                Pelatihan yang dirancang khusus untuk mengajarkan individu
                bagaimana menjadi penulis konten yang efektif.
              </p>
              <Link href="/category-course">
                <button className=" text-[16px] font-semibold text-blue border-none flex flex-row w-full h-auto">
                  Lebih Lanjut
                  <Image
                    src={ArrowRight}
                    alt="Arrow Right"
                    className="w-6 h-6 ml-2"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Link href="/category-course">
          <div className="flex justify-end">
            <button className="text-[20px] text-blue font-medium border-none ml-auto lg:mr-32 flex gap-4 w-auto h-auto py-3 hover:brightness-125">
              Lihat Semua
              <Image
                alt="Arrow Right"
                src={ArrowRight}
                className="self-center w-6 h-6"
              />
            </button>
          </div>
        </Link>
      </motion.section>

      <motion.section
        key="ca"
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        className="flex flex-col bg-blue h-auto w-full mt-14 px-4 md:px-14 py-10 md:py-20 "
      >
        <h1 className="text-[40px] leading-[64px] text-white font-medium text-center mb-8 md:mb-12">
          Testimoni Peserta KursusOnline
        </h1>
        <div className="w-full h-full">
          <Swiper
            loop={true}
            onSwiper={setThumbsSwiper}
            watchSlidesProgress={true}
            spaceBetween={10}
            slidesPerView={1}
            freeMode={true}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="slider h-[180px] md:h-[110px] lg:h-full box-border md:mb-12 w-[110px] md:w-[500px]  lg:w-[570px]"
          >
            <SwiperSlide className="flex justify-center items-center opacity-[0.4] active:opacity-100 hover:opacity-100 cursor-pointer bg-transparent rounded-full  w-[110px] h-[110px]">
              <Image
                className=" rounded-full relative w-[110px] h-[110px] "
                src={testimonial1}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center opacity-[0.4] active:opacity-100 hover:opacity-100 cursor-pointer bg-transparent rounded-full w-[110px] h-[110px]">
              <Image
                className=" rounded-full relative w-[110px] h-[110px]"
                src={testimonial2}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center opacity-[0.4] active:opacity-100 hover:opacity-100 cursor-pointer bg-transparent rounded-full w-[110px] h-[110px]">
              <Image
                className=" rounded-full relative w-[110px] h-[110px]"
                src={testimonial3}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center opacity-[0.4] active:opacity-100 hover:opacity-100 cursor-pointer bg-transparent rounded-full w-[110px] h-[110px]">
              <Image
                className=" rounded-full relative w-[110px] h-[110px]"
                src={testimonial4}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center opacity-[0.4] active:opacity-100 hover:opacity-100 cursor-pointer bg-transparent rounded-full w-[110px] h-[110px]">
              <Image
                className="rounded-full relative w-[110px] h-[110px]"
                src={testimonial5}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center opacity-[0.4] active:opacity-100 hover:opacity-100 cursor-pointer bg-transparent rounded-full w-[110px] h-[110px]">
              <Image
                className="rounded-full relative w-[110px] h-[110px]"
                src={testimonial6}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center opacity-[0.4] active:opacity-100 hover:opacity-100 cursor-pointer bg-transparent rounded-full w-[110px] h-[110px]">
              <Image
                className="rounded-full relative w-[110px] h-[110px]"
                src={testimonial7}
                alt="image"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="h-[60%] sm:h-[70%] md:h-[80%] lg:h-[90%] xl:h-[100%] w-full bg-transparent"
          >
            <SwiperSlide className=" text-center w-full text-[18px] text-white flex justify-center items-center bg-cover bg-center ">
              <div className="bg-blue">
                <h1 className="text-3xl font-medium text-white ">
                  Angeline Fanny Rosalina
                </h1>
                <p>SMAS 1 Wijaya Santosa</p>
                <p>
                  “Studying at academind is very fun and comfortable, the mentor
                  is very good, so my grades have increased this semester”
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-center text-[18px] text-white flex justify-center items-center bg-cover bg-center ">
              <div className="bg-blue">
                <h1 className="text-3xl font-medium text-white">
                  Ultraman Dyna
                </h1>
                <p>SMAS 1 Wijaya Santosa</p>
                <p>
                  “Studying at academind is very fun and comfortable, the mentor
                  is very good, so my grades have increased this semester”
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-center text-[18px] text-white flex justify-center items-center bg-cover bg-center">
              <div className="bg-blue">
                <h1 className="text-3xl font-medium text-white">
                  Ultraman Mebius
                </h1>
                <p>SMAS 1 Wijaya Santosa</p>
                <p>
                  “Studying at academind is very fun and comfortable, the mentor
                  is very good, so my grades have increased this semester”
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-center text-[18px] text-white flex justify-center items-center bg-cover bg-center">
              <div className="bg-blue">
                <h1 className="text-3xl font-medium text-white">
                  Ultraman Cosmos
                </h1>
                <p>SMAS 1 Wijaya Santosa</p>
                <p>
                  “Studying at academind is very fun and comfortable, the mentor
                  is very good, so my grades have increased this semester”
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-center text-[18px] text-white flex justify-center items-center bg-cover bg-center">
              <div className="bg-blue">
                <h1 className="text-3xl font-medium text-white">
                  Monkey D. Luffy
                </h1>
                <p>SMAS 1 Wijaya Santosa</p>
                <p>
                  “Studying at academind is very fun and comfortable, the mentor
                  is very good, so my grades have increased this semester”
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-center text-[18px] text-white flex justify-center items-center bg-cover bg-center">
              <div className="bg-blue">
                <h1 className="text-3xl font-medium text-white">
                  Kamen Rider Kuuga
                </h1>
                <p>SMAS 1 Wijaya Santosa</p>
                <p>
                  “Studying at academind is very fun and comfortable, the mentor
                  is very good, so my grades have increased this semester”
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="text-center text-[18px] text-white flex justify-center items-center bg-cover bg-center">
              <div className="bg-blue">
                <h1 className="text-3xl font-medium text-white">
                  Ultraman Nexus
                </h1>
                <p className="text-2xl text-[#BBBFBF] font-normal">
                  SMAS 1 Wijaya Santosa
                </p>
                <p className="text-xl font-normal">
                  “Studying at academind is very fun and comfortable, the mentor
                  is very good, so my grades have increased this semester”
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.section>

      {token ? null : (
        <motion.section
          key="ci"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-8 mx-4 md:mx-7 xl:mx-[75px] flex flex-col md:flex-row items-center justify-center md:justify-between"
        >
          <div className="flex flex-col text-center md:text-left md:items-start md:mt-0 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-normal text-dark-grey">
              Buat Akun Sekarang, Gratis!
            </h1>
            <p className="text-xl md:text-2xl font-normal text-[#83858A] mt-1">
              Gabung bersama kami dan dapatkan informasi hingga diskon spesial
              buat kamu
            </p>
            <Link href="/register">
              <button className="text-lg md:text-xl font-medium text-white bg-blue rounded-[4px] px-6 py-2 w-full md:w-[220px] h-12 mt-8 md:mt-4 hover:brightness-125">
                Daftar Sekarang
              </button>
            </Link>
          </div>
          <div className="flex-shrink-0 mt-8 md:mt-0 md:ml-8">
            <Image
              className="w-full md:w-[455px] h-[365px] object-cover"
              src={CreateAccount}
              alt="Create Account"
            />
          </div>
        </motion.section>
      )
      }

      <section className="flex flex-col items-center gap-5 mt-20 md:mt-18 mx-4 lg:mt-[75px] md:mx-7 lg:mx-[70px] mb-16">
        <h3 className="text-2xl md:text-4xl text-[#45484F] font-medium text-center">
          Galeri Interaktif
        </h3>
        <p className="text-xl md:text-2xl text-[#64666C] font-medium text-center">
          Temukan konten interaktif pada Galeri Interaktif
        </p>
        <div className="flex flex-row gap-8 overflow-x-scroll scroll scroll-smooth scrollbar-hide scroll select-none cursor-pointer active:cursor-grabbing" ref={sliderRef}>
          <Image className="h-[409] w-[329]" src={galerinteraktif1} alt="image" />
          <Image className="h-[409] w-[329]" src={galerinteraktif2} alt="image" />
          <Image className="h-[409] w-[329]" src={galerinteraktif1} alt="image" />
          <Image className="h-[409] w-[329]" src={galerinteraktif2} alt="image" />
          <Image className="h-[409] w-[329]" src={galerinteraktif1} alt="image" />
          <Image className="h-[409] w-[329]" src={galerinteraktif2} alt="image" />
          <Image className="h-[409] w-[329]" src={galerinteraktif1} alt="image" />
          <Image className="h-[409] w-[329]" src={galerinteraktif2} alt="image" />
        </div>


        <Link href="/galeri-interaktif">
          <button className="px-8 py-3 mt-20 bg-[#055EA8] text-white text-xl font-medium">
            Lihat Galeri Lainnya
          </button>
        </Link>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
