import Image from "next/image";
import Icon1 from "../assets/icons/reportIcon.svg";
import Icon2 from "../assets/icons/reportIcon2.svg";
import Icon3 from "../assets/icons/reportIcon3.svg";
import grafik from "../assets/images/reportgrafik.png";
import grafik2 from "../assets/images/grafik2.png";
import vector from "../assets/images/vectorReport.png";
import vector2 from "../assets/images/vectorReport2.png";
import LogoCourse from "../assets/icons/logoCourse.svg";
import Line1 from "../assets/images/blueLine.svg";
import Line2 from "../assets/images/greenLine.svg";
import Line3 from "../assets/images/orangeLine.svg";
import Line4 from "../assets/images/pinkLine.svg";
import check from "../assets/icons/checkLastAuto.svg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import BreadcrumbsVendor from "./BreadcrumbsVendor";

const headerContent = [
  {
    image: Icon1,
    title: "Total siswa",
    count: "230",
  },
  {
    image: Icon2,
    title: "Total penjualan",
    count: "2.120.000",
  },
  {
    image: Icon3,
    title: "Total kursus",
    count: "5",
  }
];

const reportContent = [
  {
    image: Line1,
    title: "Invoices  Created",
    count: "0",
    color: "#8FC9CD",
  },
  {
    image: Line2,
    title: "Credit Card Captures",
    count: "0",
    color: "#72B075",
  },
  {
    image: vector,
    title: "Overdue Supsions",
    count: "0",
    color: "#999999",
  },
  {
    image: Line3,
    title: "Overdue Supsions",
    count: "0",
    color: "#EBB785",
  },
  {
    image: Line4,
    title: "Inactive Tickets Closed",
    count: "0",
    color: "#DF94B3",
  },
  {
    image: vector2,
    title: "Inactive Tickets Closed",
    count: "0",
    color: "#A376B9",
  }
];

const data = [
  {
    idPemesanan: "#123DA",
    kursus: "Introduction to CSS",
    harga: "150.000",
    diskon: "0",
    hargaTotal: "150.000",
    status: "PAID",
  },
  {
    idPemesanan: "#321DA",
    kursus: "Introduction to CSS",
    harga: "150.000",
    diskon: "0",
    hargaTotal: "150.000",
    status: "UNPAID",
  },
  {
    idPemesanan: "#456DA",
    kursus: "Introduction to CSS",
    harga: "150.000",
    diskon: "0",
    hargaTotal: "150.000",
    status: "PAID",
  },
];

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "paid":
      return "bg-[#3A36DB] text-white";
    case "unpaid":
      return "bg-[#FF69B4] text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export default function Header() {
  return (
    <div className="w-full p-2 px-6 bg-[#E4ECF4]">
      <BreadcrumbsVendor link="/vendor/dashboard" title={"Dashboard"} nav={"/ dashboard"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {headerContent.map((item, i) => {
          return (
            <div
              key={i}
              className="flex bg-white px-4 py-6 shadow-xl rounded-lg text-left border border-slate-300 gap-4"
            >
              <Image src={item.image} className="w-15 h-auto" alt="icon"/>
              <div>
                <h2 className="text-2xl font-bold ">{item.count}</h2>
                <p className="text-gray-700">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:flex grid grid-cols-1 gap-4 py-4">
        <div className="lg:w-2/3 w-full">
          <div className="shadow-2xl rounded-xl py-4 bg-white">
            <div className="flex mx-4 justify-between">
              <h2 className="lg:text-2xl text-lg font-bold text-[#06152B]">
                Grafik Penjualan
              </h2>
            </div>
            <Image src={grafik} alt="grafik" className="mx-auto w-[95%] h-auto" />
          </div>
          <div className="shadow-2xl rounded-xl lg:p-4 py-4 my-4 bg-white">
            <div className="flex justify-between lg:mx-auto mx-4">
              <h2 className="lg:text-2xl text-lg font-bold text-[#06152B]">
                Pembelian Terbaru
              </h2>
              <span>...</span>
            </div>
            <div className="container mx-auto mt-8 overflow-scroll">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="p-2 lg:text-base text-xs text-[#06152B]">Id Pemesanan</th>
                    <th className="p-2 lg:text-base text-xs text-[#06152B]">Kursus</th>
                    <th className="p-2 lg:text-base text-xs text-[#06152B]">Harga</th>
                    <th className="p-2 lg:text-base text-xs text-[#06152B]">Diskon</th>
                    <th className="p-2 lg:text-base text-xs text-[#06152B]">Harga Total</th>
                    <th className="p-2 lg:text-base text-xs text-[#06152B]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.idPemesanan}>
                      <td className="p-2 lg:text-base text-xs text-[#788B9A] text-center">
                        {item.idPemesanan}
                      </td>
                      <td className="p-2 lg:text-base text-xs text-[#788B9A] flex gap-2">
                        <Image src={LogoCourse} alt="logo" height="auto" width="auto" className="lg:grid hidden "/>
                        {item.kursus}
                      </td>
                      <td className="p-2 lg:text-base text-xs text-[#788B9A] text-center">Rp.{item.harga}</td>
                      <td className="p-2 lg:text-base text-xs text-[#788B9A] text-center">Rp.{item.diskon}</td>
                      <td className="p-2 lg:text-base text-xs text-[#788B9A] text-center">
                        Rp.{item.hargaTotal}
                      </td>
                      <td className="text-center">
                        <span
                          className={`px-4 rounded-full lg:text-base text-xs ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="shadow-2xl rounded-xl pt-4 pb-8 bg-white">
            <div className="flex mx-4 justify-between">
              <h2 className="lg:text-2xl text-lg font-bold text-[#06152B] pb-2">
                Billing
              </h2>
            </div>
            <table className="ml-4 w-[80%] mx-auto">
              <tbody>
                <tr>
                  <td className="border-4 border-[#C1C2C4] lg:p-8 p-2 text-xl w-1/2">
                    <span className="lg:my-4 lg:text-7xl text-2xl text-[#70B672]">Rp0</span>
                    <h2 className="lg:my-4 text-[#45484F] font-bold">Today</h2>
                  </td>
                  <td className="border-4 border-[#C1C2C4] lg:p-8 p-2 text-xl w-1/2">
                    <span className="lg:my-4 lg:text-7xl text-2xl text-[#DCB276]">Rp0</span>
                    <h2 className="lg:my-4 text-[#45484F] font-bold">Month</h2>
                  </td>
                </tr>
                <tr>
                  <td className="border-4 border-[#C1C2C4] lg:p-8 p-2 text-xl">
                    <span className="lg:my-4 lg:text-7xl text-2xl text-[#CF6396]">Rp0</span>
                    <h2 className="lg:my-4 text-[#45484F] font-bold">Years</h2>
                  </td>
                  <td className="border-4 border-[#C1C2C4] lg:p-8 p-2 text-xl">
                    <span className="lg:my-4 lg:text-7xl text-2xl">Rp1,500,000</span>
                    <h2 className="lg:my-4 text-[#45484F] font-bold">All the Time</h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:w-1/3 w-full">
          <div className="shadow-2xl rounded-xl p-4 bg-white">
            <div className="flex mx-4 mb-4 justify-between">
              <h2 className="lg:text-2xl text-lg font-bold text-[#022F54]">Billing</h2>
            </div>
            <div className="border-t-2 border-gray-300 my-4 text-center">
              {reportContent.map((item,i) => (
                <div key={i} className="mx-auto my-8 w-2/3">
                  <Image src={item.image} alt="vector" className="w-full h-auto"/>
                  <h2 className="my-4 text-[#45484F]">{item.title}</h2>
                  <span className="my-4 text-4xl" style={{color: item.color}}>{item.count}</span>
                </div>
              ))}
            </div>
            <div className="flex m-4 md:gap-2 gap-1 justify-center">
              <Image src={check} alt="vector" className="md:w-8 w-5 h-auto" />
              <span className="md:text-xl text-xs">Last Automation : </span>
              <span className="font-semibold md:text-xl text-xs">Today</span>
              <span className="md:text-xl text-xs"> at 10:00 AM</span>
            </div>
          </div>
          <div className="shadow-2xl rounded-xl p-4 my-4 bg-white">
            <div className="flex justify-between m-4 ">
              <h2 className="lg:text-2xl text-lg font-bold text-[#022F54]">Statistik Pendapatan</h2>
            </div>
            <Image src={grafik2} alt="grafik" className="w-[80%] h-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
}
