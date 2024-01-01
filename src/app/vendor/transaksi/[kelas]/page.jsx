"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import avatar from "@/assets/icons/avatarTransaksi.svg";
// import kursus from "@/assets/icons/iconKursusVendor.svg";
// import siswa from "@/assets/icons/iconSiswaVendor.svg";
// import reguler from "@/assets/images/kelasreguler.svg";
// import interaktif from "@/assets/images/kelasinteraktif.svg";
import BreadcrumbsVendor from "@/components/BreadcrumbsVendor";
import Link from "next/link";
import Back from "@/assets/icons/button-left.svg";
import { CiSearch } from "react-icons/ci";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const contentDataTransaksi = [
  {
    no: 1,
    kursus: "CSS Introduction",
    harga: "850000",
    link:"css-introduction"
  },
  {
    no: 2,
    kursus: "Digital Marketer",
    harga: "700000",
    link:"digital-marketer"
  },
  {
    no: 3,
    kursus: "UI/UX Design",
    harga: "600000",
    link:"ui/ux-design"
  },
  {
    no: 4,
    kursus: "Front End Developer",
    harga: "1000000",
    link:"frontend-developer"
  },
  {
    no: 5,
    kursus: "Back End Developer",
    harga: "900000",
    link:"backend-developer"
  },
  {
    no: 6,
    kursus: "Analyst Sistem",
    harga: "550000",
    link:"analyst-sistem"
  },
  {
    no: 7,
    kursus: "Project Management",
    harga: "500000",
    link:"project-management"
  },
  {
    no: 8,
    kursus: "CSS Introduction",
    harga: "850000",
    link:"css-introduction"
  },
  {
    no: 9,
    kursus: "Digital Marketer",
    harga: "700000",
    link:"digital-marketer"
  },
  {
    no: 10,
    kursus: "UI/UX Design",
    harga: "600000",
    link:"ui/ux-design"
  },
  {
    no: 11,
    kursus: "Front End Developer",
    harga: "1000000",
    link:"frontend-developer"
  },
  {
    no: 12,
    kursus: "Back End Developer",
    harga: "900000",
    link:"backend-developer"
  },
  {
    no: 13,
    kursus: "Analyst Sistem",
    harga: "550000",
    link:"analyst-sistem"
  },
  {
    no: 14,
    kursus: "Project Management",
    harga: "500000",
    link:"project-management"
  },
  {
    no: 15,
    kursus: "CSS Introduction",
    harga: "850000",
    link:"css-introduction"
  },
  {
    no: 16,
    kursus: "Digital Marketer",
    harga: "700000",
    link:"digital-marketer"
  },
];

function formatHarga(harga) {
  return harga.toLocaleString('id-ID'); // 'id-ID' untuk format angka Indonesia
}

function KelasTransaksiVendor({ params }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const recordsPerPage = 5;
  const lastIndex = currentPage * 5;
  const firstIndex = lastIndex - recordsPerPage;
  const records = contentDataTransaksi.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(contentDataTransaksi.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  const router = useRouter();
const handleSearch = (e) => {
  e.prevenDefault()

}
const handleChangePage = (id) =>{
  setCurrentPage(id)
}
const handlePrevPage = () =>{
  if(currentPage !== 1){
    setCurrentPage(currentPage - 1)
  }

  
}
const handleNextPage = () =>{
  if(currentPage !== nPage){
    setCurrentPage(currentPage + 1)
  }
}

  return (
    <>
      <div className=" bg-[#E4ECF4]">
        <div className="p-4 gap-3 flex flex-col bg-[#E4ECF4] h-auto md:min-h-screen ">
          <div className="row-span-1">
            <BreadcrumbsVendor
              link="/kursus-saya/detail-kursus"
              title="Kursus Saya"
              nav="home / kursus-saya / detail-kursus"
            />
          </div>
          <div className="flex flex-col  w-full p-5 md:px-16 md:pb-16 bg-white rounded-xl ">
            <Link href="/kursus-saya" className="flex gap-1 pb-3">
              <Image src={Back} alt="back" />
              <p className="text-md font-medium text-[#055EA8] flex items-center">
                Kembali
              </p>
            </Link>
            <div className="flex flex-col w-full items-center">
              <h2 className="text-xl font-semibold text-blue">DAFTAR KELAS</h2>
              <div className="flex mt-10 relative border border-blue p-2 rounded-md w-full">
                <CiSearch className="absolute top-4 left-3" />
                <input
                  className="outline-none border-none pl-8 w-full"
                  placeholder="Cari nama kursus"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="button" className="py-1 px-4 bg-blue text-white rounded-md hover:brightness-110" onClick={handleSearch} >
                  Cari
                </button>
              </div>
              <div className="w-full overflow-auto rounded-lg ">
              <table className="w-full mt-10 ">
                <thead className="text-left">
                  <tr>
                  <th className="p-3 whitespace-nowrap"> No</th>
                  <th className="p-3 whitespace-nowrap">Kursus</th>
                  <th className="p-3 whitespace-nowrap">Harga</th>
                  <th className="p-3 whitespace-nowrap"> </th>
                  </tr>
                </thead>
                <tbody>
                {
                    records.map((_, i)=>(
                      <tr key={i} className="hover:bg-slate-100 cursor-pointer border-b" onClick={()=>router.push(`/vendor/transaksi/${params.kelas}/${_.link}`)}>
                      <td className="p-3 whitespace-nowrap"> {_.no}</td>
                      <td className="p-3 whitespace-nowrap">{_.kursus}</td>
                      <td className="p-3 whitespace-nowrap">{formatHarga(_.harga)}</td>
                      <td className="p-3 whitespace-nowrap"><BsChevronRight /></td>
                    </tr>
                    ))
                }
                </tbody>
              </table>
              </div>
             
              <div className="flex rounded-lg gap-2 mt-4">
                <button className="border-slate-400 text-slate-400 hover:bg-blue hover:text-white p-1 px-2 border rounded-md" onClick={ handlePrevPage}><BsChevronLeft /></button>
                {numbers.map((number,i) => (
                  <button className={`border-slate-400 text-slate-400 hover:bg-blue hover:text-white p-1 px-3 border rounded-md ${currentPage === number ? 'text-white bg-blue' : ''}`} key={i} onClick={()=>handleChangePage(number)}>
                    {number}
                  </button>
                ))}
                
                <button className="border-slate-400 text-slate-400 hover:bg-blue hover:text-white p-1 px-2  border rounded-md" onClick={handleNextPage}><BsChevronRight /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KelasTransaksiVendor;
