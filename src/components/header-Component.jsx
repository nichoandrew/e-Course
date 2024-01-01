import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const headerContent = [
  {
    title: "Peserta",
    deskripsi:
      "Materi ini dirancang untukmu yang ingin belajar Digital Marketing. Cocok untuk pemula untuk memperdalam skill",
  },
  {
    title: "Peluang",
    deskripsi:
      "Materi ini dirancang untukmu yang ingin belajar Digital Marketing. Cocok untuk pemula untuk memperdalam skill",
  },
  {
    title: "Benefit",
    deskripsi:
      "Materi ini dirancang untukmu yang ingin belajar Digital Marketing. Cocok untuk pemula untuk memperdalam skill",
  },
];

export default function Header() {
  return (
    <>
      <div className="w-full h-full flex justify-center pb-24 lg:pb-32 bg-[#6495ED] pt-32">
        <div className="w-[80%]">
          <div className="text-left mx-auto lg:pt-12 pt-6 relative z-1 text-white w-full">
            <h1 className="lg:text-4xl text-2xl font-bold">Web Development</h1>
            <div className="lg:w-2/3 w-full lg:pt-8 pt-2">
              <h2 className="font-light lg:text-xl text-base">
                Kursus digital marketing ini mencakup berbagai kurikulum yang
                berkaitan dengan Digital Marketing. Maksimalkan potensi bisnis
                dengan strategi digital yang efektif.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center space-x-6 relative z-1 text-grey md:overflow-x-auto -mt-20">
        {headerContent.map((item, i) => {
          return (
            <div
              key={i}
              className="bg-white px-10 py-4 shadow-xl rounded-lg w-80 text-left border border-slate-300"
            >
              <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
              <p className="text-gray-700">{item.deskripsi}</p>
            </div>
          );
        })}
      </div>
      <div className="w-full h-full flex justify-center">
        <div className="block w-[90%] lg:hidden pt-6 -mt-20 ms-5">
          <Swiper
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {headerContent.map((item, i) => {
              return (
                <SwiperSlide className="flex justify-center items-center">
                  <div
                    key={i}
                    className="bg-white px-10 py-4 shadow-card rounded-lg w-80 text-left border border-slate-300"
                  >
                    <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
                    <p className="text-gray-700">{item.deskripsi}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
