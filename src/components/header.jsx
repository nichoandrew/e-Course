import "swiper/css";
import 'swiper/css/pagination';
import Image from "next/image";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const headerContent = [
  {
    title: "Peserta",
    deskripsi: "Materi ini dirancang untukmu yang ingin belajar Digital Marketing. Cocok untuk pemula untuk memperdalam skillZ"
  },
  {
    title: "Peluang",
    deskripsi: "Materi ini dirancang untukmu yang ingin belajar Digital Marketing. Cocok untuk pemula untuk memperdalam skillZ"
  },
  {
    title: "Benefit",
    deskripsi: "Materi ini dirancang untukmu yang ingin belajar Digital Marketing. Cocok untuk pemula untuk memperdalam skillZ"
  }
]


export default function Header() {
  return (
    <>
      <div className="w-full h-full flex justify-center lg:pb-8">
        <Image src={bg} alt="" className="absolute top-[-100px] sm:top-[-100px] md:top-[-100px] lg:top-[-100px] xl:top-[-200px] z-[-1]" />
        <div className="flex flex-col w-[80%]">
          <div className="text-left mx-auto lg:pt-12 pt-6 relative z-1 text-white w-full">
            <h1 className="lg:text-4xl text-lg font-bold">Web Development</h1>
            <div className="lg:w-2/3 w-full lg:pt-8 pt-2">
              <h2 className="font-light lg:text-base text-xs">
                Kursus digital marketing ini mencakup berbagai kurikulum yang
                berkaitan dengan Digital Marketing. Maksimalkan potensi bisnis
                dengan strategi digital yang efektif.
              </h2>
            </div>
          </div>
          <div className=" hidden lg:flex justify-center space-x-6 mt-8 relative z-1 text-grey md:overflow-x-auto">
            {headerContent.map((item, i) => {
              return (
                <div key={i} className="bg-white px-10 py-4 shadow-xl rounded-lg w-80 text-left border border-slate-300">
                  <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                  <p className="text-gray-700">{item.deskripsi}</p>
                </div>
              )
            })}
          </div>
          <div className="block lg:hidden pt-6">
            <Swiper
              spaceBetween={3}
              slidesPerView={1}
              navigation
              loop={true}
              pagination={{
                clickable: true,
              }} modules={[Pagination]} className="mySwiper"
            >
              {headerContent.map((item, i) => {
                return (
                  <SwiperSlide key={i}  className="flex justify-center items-center">
                    <div className="bg-white px-10 py-4 shadow-card rounded-lg w-80 text-left border border-slate-300">
                      <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                      <p className="text-gray-700">{item.deskripsi}</p>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
