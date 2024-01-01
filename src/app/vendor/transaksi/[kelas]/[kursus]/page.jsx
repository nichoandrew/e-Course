"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import avatar from "@/assets/icons/avatarTransaksi.svg";
import kursus from "@/assets/icons/iconKursusVendor.svg";
import siswa from "@/assets/icons/iconSiswaVendor.svg";
import reguler from "@/assets/images/kelasreguler.svg";
import interaktif from "@/assets/images/kelasinteraktif.svg";
import BreadcrumbsVendor from "@/components/BreadcrumbsVendor";
import Link from "next/link";
import Back from "@/assets/icons/button-left.svg";
import { CiSearch } from "react-icons/ci";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const contentDataTransaksi = [
  {
    tanggal: "28 September 2023",
    nama: "Ahmad Musa",
    status: "aktif"
  },
  {
    tanggal: "27 September 2023",
    nama: "Bagus Adi",
    status: "pending"
  },
  {
    tanggal: "20 September 2023",
    nama: "Clara Angelina",
    status: "selesai"
  },
  {
    tanggal: "21 September 2023",
    nama: "Dwi Putra",
    status: "aktif"
  },
  {
    tanggal: "24 September 2023",
    nama: "Erina Maharani",
    status: "aktif"
  },
  {
    tanggal: "23 September 2023",
    nama: "Musa",
    status: "aktif"
  },
  {
    tanggal: "25 September 2023",
    nama: "Bagus",
    status: "pending"
  },
  {
    tanggal: "2 September 2023",
    nama: "Angelina",
    status: "selesai"
  },
  {
    tanggal: "20 September 2023",
    nama: " Putra",
    status: "aktif"
  },
  {
    tanggal: "22 September 2023",
    nama: "Eri Maharani",
    status: "aktif"
  },
];

const navTransaksi = [
  {
    nama:"Semua Transaksi",
    link: 'all'
  },
  {
    nama:"Aktif",
    link: 'aktif'
  },
  {
    nama:"Pending",
    link: 'pending'
  },
  {
    nama:"Selesai",
    link: 'selesai'
  },
]

function KursusTransaksiVendor({params}) {
    const [currentPage, setCurrentPage] = useState(1); 
    const [activeStatus, setActiveStatus] = useState('all'); 
    const [search, setSearch] = useState('');
    const recordsPerPage = 5;
    const lastIndex = currentPage * 5;
    const firstIndex = lastIndex - recordsPerPage;
    const records = contentDataTransaksi.slice(firstIndex, lastIndex);
    const filterData = activeStatus === 'all' ? records : contentDataTransaksi.filter((item)=> item.status === activeStatus).slice(firstIndex, lastIndex);
    const nPage = Math.ceil(activeStatus === 'all' ? contentDataTransaksi.length / recordsPerPage : contentDataTransaksi.filter((item)=> item.status === activeStatus).length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1)
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

  useEffect(()=>{
    setCurrentPage(1)
  },[activeStatus])
  
  return (
    <>
      <div className=" bg-[#E4ECF4]">
        <div className="p-4 gap-3 flex flex-col bg-[#E4ECF4] h-auto md:min-h-screen">
          <div className="row-span-1">
            <BreadcrumbsVendor
              link="/kursus-saya/detail-kursus"
              title="Kursus Saya"
              nav="home / kursus-saya / detail-kursus"
            />
          </div>
          <div className="flex flex-col w-full p-5 md:px-10 md:pb-16 bg-white rounded-xl">
            <Link href="/kursus-saya" className="flex gap-1 pb-3">
              <Image src={Back} alt="back" />
              <p className="text-md font-medium text-[#055EA8] flex items-center">
                Kembali
              </p>
            </Link>
            <div className="flex flex-col w-full items-center">
            <div className="grid grid-cols-2 md:flex md:justify-center rounded-lg gap-2 mt-4 w-full h-auto">
                
                {navTransaksi.map((nav,i) => (
                  <button className={`border-slate-400 text-slate-400 hover:bg-blue hover:text-white p-1 border rounded-md w-36 ${nav.link === activeStatus  ? 'text-white bg-blue' : ''}`} key={i} onClick={()=>setActiveStatus(nav.link)}>
                    {nav.nama}
                  </button>
                ))}
                
              </div>
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
              <div className="w-full overflow-auto rounded-lg">
              <table className="w-full pl-4 mt-10 ">
                <thead className="w-full text-left ">
                  <tr>
                  <th className="p-3 whitespace-nowrap">Tanggal</th>
                  <th className="p-3 whitespace-nowrap">Nama</th>
                  <th className="p-3 whitespace-nowrap">Status</th>
                  <th className="p-3 whitespace-nowrap"> </th>
                  </tr>
                </thead>
                <tbody className="w-full">
                {
                    filterData.map((_, i)=>(
                      <tr key={i} className="hover:bg-slate-100 cursor-pointer border-b" onClick={()=>router.push(`/vendor/transaksi/${params.kelas}/${params.kursus}/detail-transaksi`)}>
                      <td className="p-3 whitespace-nowrap">{_.tanggal}</td>
                      <td className="p-3 whitespace-nowrap">{_.nama}</td>
                      <td className="p-3 whitespace-nowrap">{_.status}</td>
                      <td className="p-3 whitespace-nowrap"><BsChevronRight /></td>
                    </tr>
                    ))
                }
                </tbody>
              </table>
              </div>
              <div className="flex rounded-lg gap-2 mt-4 ">
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

export default KursusTransaksiVendor;

