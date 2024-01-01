import Image from "next/image";
import Link from "next/link";
import home from "@/assets/icons/home.svg";
import arrowleft from "../assets/icons/arrow-left.svg";
import arrowright from "@/assets/icons/arrow-right.svg";
import Dropzone from "@/components/Dropzone";

const InformasiDasar = () => {
  return (
    <div className="p-10 bg-[#E4ECF4]">
      <div className="text-[#055EA8] font-semibold text-xl">Informasi Dasar</div>
      <div className="flex">
        <Image src={home} alt="Notification" width={15} height={15} className="block" />
        <p className="text-[#055EA8] ml-1 text-base">/ Unggah Kursus</p>
        <p className="text-[#055EA8] ml-1 text-base">/ Informasi Dasar</p>
      </div>

      <div className="bg-[#FFF] p-10 mt-10 rounded-xl">
        <div className="text-center mt-10 sm:mt-10">
          <div className="font-bold text-2xl sm:text-2xl text-[#055EA8]">Informasi Dasar</div>
          <div className="text-xs sm:text-sm mt-2">Tambahkan lebih detail tentang kursus ini</div>
        </div>
        <form>
          <div className="mt-6 sm:mt-[50px]">
            <div className="font-bold text-lg text-start mb-3">Judul Kursus</div>
            <input type="text" className="border border-[#055EA8] rounded-xl p-3 sm:p-5 focus:outline-none focus:border-black w-full h-4" placeholder="Masukkan judul kursus disini" />
          </div>
          <div className="mt-6 sm:mt-[50px]">
            <div className="font-bold text-lg text-start mb-3">Jenis Kelas</div>
            <select id="select" name="select" className="border border-[#055EA8] rounded-xl p-3 sm:p-3 focus:outline-none focus:border-black w-full">
              <option value="option0">Pilih Jenis kelas</option>
              <option value="option1">IT dan Perangkat Lunak</option>
              <option value="option2">Design Grafis</option>
              <option value="option3">Bisnis</option>
              <option value="option4">Seni Musik</option>
            </select>
          </div>
          <div className="mt-6 sm:mt-[50px]">
            <div className="font-bold text-lg text-start mb-3">Deskripsi</div>
            <textarea type="text" className="border border-[#055EA8] rounded-xl p-3 sm:p-5 focus:outline-none focus:border-black w-full" placeholder="Masukkan deskripsi kursus anda disini" row="4" />
          </div>
          <div className="mt-6 sm:mt-[50px]">
            <div className="font-bold text-lg text-start mb-3">Harga Kursus</div>
            <div className="mb-3">
              <div className="flex items-center">
                <span className=" border border-[#055EA8] bg-[#055EA8] rounded-s-xl text-white font-bold p-2 " id="basic-addon1">
                  Rp.
                </span>
                <input className="border border-[#055EA8] rounded-e-xl focus:outline-none focus:border-black w-full p-2" type="number" id="numberInput" name="numberInput" />
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-[50px]">
            <div className="font-bold text-lg text-start mb-3">Unggah cover Kursus</div>
            <Dropzone className="p-16 border border-[#055EA8] rounded-xl w-full" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-6 md:mt-12 space-y-4 md:space-y-0 md:space-x-4"></div>
        </form>

        <div className="flex">
          <div className="w-1/2">
            <a href=".">
              <button className="bg-[#055ea8] w-full md:w-48 rounded-xl text-center py-2 md:py-2 px-4 md:px-4">
                <div className="flex items-center justify-center">
                  <Image src={arrowleft} alt="Notification" width={20} height={25} className="block" />
                  <span className="text-white font-bold text-lg md:text-xl ml-2">Kembali</span>
                </div>
              </button>
            </a>
          </div>
          <div className="w-1/2 flex justify-end">
            <a href="../../vendor/upload/informasi-dasar/kurikulum">
              <button className="bg-[#055ea8] w-full md:w-48 rounded-xl text-center py-2 md:py-2 px-4 md:px-4">
                <div className="flex items-center justify-center">
                  <span className="text-white font-bold text-lg md:text-xl mr-2">Selanjutnya</span>
                  <Image src={arrowright} alt="Notification" width={20} height={25} className="block" />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="mt-[43px]">
        <hr className=" border-b-0 border-[#022F54] w-full" />
        <p className="text-base font-semibold text-center py-[14px]">© E-Course.</p>
      </div> */}
    </div>
  );
};

export default InformasiDasar;
