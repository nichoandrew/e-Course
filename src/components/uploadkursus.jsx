import Image from "next/image";
import Link from "next/link";
import arrow1 from "src/assets/icons/chevron-left.svg";
import arrow2 from "src/assets/icons/arrow-right.svg";
import home from "src/assets/icons/home.svg";
import logo1 from "src/assets/images/1.svg";
import logo2 from "src/assets/images/2.svg";
import logo3 from "src/assets/images/3.svg";
import logo4 from "src/assets/images/4.svg";

export default function Tugas5() {
  return (
    <div className="min-h-screen max-w-full bg-[#E4EDF4] p-10 max-md:p-4">
      <div className="flex justify-between max-md:flex-col">
        <div className="text-[#065EA8]">
          <span className="text-xl font-bold">Unggah Kursus</span>
          <div className="flex place-items-center">
            <Image src={home} alt="Home" className="mr-1" width={18} height={18} priority />/ Unggah Kursus
          </div>
        </div>
      </div>

      <div className="w-full bg-white border rounded-lg mt-10 max-md:mt-4 text-center p-10">
        <Link href="../../../">
          <div className="flex flex-row place-items-center">
            <Image src={arrow1} alt="Kembali" className="mr-1" width={18} height={18} priority />
            <div className="text-[#065EA8] font-semibold">Kembali</div>
          </div>
        </Link>

        <div className="text-2xl font-semibold text-[#055EA8] font-sans mt-8">Pilih Kategori Kursus</div>
        <div className="text-[20px] font-normal text-[#454140] font-sans mb-10">Pilih kategori kursus yang ingin anda buat</div>

        <div className="flex flex-row gap-x-8 justify-center max-md:flex-col max-md:gap-y-8">
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-1/2 max-md:w-full bg-[#F0F0F0] p-5">
            <figure>
              <Image src={logo1} alt="logo" className="rounded-lg" />
              <figcaption className="mt-6 mb-4 text-[24px] font-medium text-[#000000] font- ">IT dan Perangkat Lunak</figcaption>
            </figure>
          </div>

          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-1/2 max-md:w-full bg-[#F0F0F0] p-5">
            <figure>
              <Image src={logo2} alt="logo" className="rounded-lg" />
              <figcaption className="mt-6 mb-4 text-[24px] font-medium text-[#000000] font- ">Design Grafis</figcaption>
            </figure>
          </div>
        </div>

        <div className="flex flex-row gap-x-8 justify-center max-md:flex-col max-md:gap-y-8 mt-8">
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-1/2 max-md:w-full bg-[#F0F0F0] p-5">
            <figure>
              <Image src={logo3} alt="logo" className="rounded-lg" />
              <figcaption className="mt-6 mb-4 text-[24px] font-medium text-[#000000] font- ">Bisnis</figcaption>
            </figure>
          </div>

          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-1/2 max-md:w-full bg-[#F0F0F0] p-5">
            <figure>
              <Image src={logo4} alt="logo" className="rounded-lg" />
              <figcaption className="mt-6 mb-4 text-[24px] font-medium text-[#000000] font- ">Seni Musik</figcaption>
            </figure>
          </div>
        </div>

        <div className="flex justify-end mt-10 mx-20">
          <a href="../vendor/upload/informasi-dasar">
            <div className="w-[40px] md:w-[150px] h-[51px] bg-[#055ea8] rounded-2xl">
              <div className="flex justify-center">
                <span className="text-[16px] font-bold text-[#fff] font-sans mt-3">Selanjutnya</span>
                <Image src={arrow2} alt="selanjutnya" width={20} height={25} className="mt-4" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
