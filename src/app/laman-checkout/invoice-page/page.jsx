"use client";
import Link from "next/link";
import Image from "next/image";
import back from "@/assets/icons/chevron-left.svg";
// import lunas from "@/assets/images/lunas.png";
import ecourse from "@/assets/img/logokursusonline.svg";
import dana from "@/assets/icons/dana.svg";
import unduh from "@/assets/icons/Unduhinvoices.svg";
import bgkanan from "@/assets/images/bg-kanan-checkout.svg";
import bgbawah from "@/assets/images/bg-bawah-checkout.svg"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

export default function Page() {
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = (pdfHeight - imgHeight * ratio) / 2;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.output("dataurlnewwindow");
      pdf.save("download.pdf");
    });
  };

  return (
    <main className="min-h-screen overflow-x-scroll" style={{
      backgroundImage: `url(${bgkanan.src}), url(${bgbawah.src})`,
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundSize: "170% 55%, 100% 30%",
      backgroundPosition: "left top, right bottom",
    }}>
      <div className="w-5/6  mx-auto my-12">
        <span className="text-2xl sm:text-3xl md:text-4xl py-8 font-bold text-[#45484F]">
          Invoice
        </span>
        <div className="text-left flex justify-between">
          <Link href="/detail-course" className="text-xs flex">
            <Image src={back} className="pr-3 pt-1" alt="back" width={35} />
            <span className="text-[#044E8C] text-2xl py-8">Kembali</span>
          </Link>
          <div className="">
            <button
              className="flex items-center bg-blue hover:bg-[#314b8b] text-white font-semibold text-base py-2 px-4 rounded-xl shadow-md mt-6"
              onClick={downloadPDF}
            >
              <Image
                src={unduh}
                className="pr-2"
                alt="unduh"
                width={35}
                height={35}
              />
              Unduh
            </button>
          </div>
        </div>
        <div className="w-full bg-white border border-1" ref={pdfRef}>
          <div className="grid pb-12">
          <div className="w-[30px] left-8 md:left-20 lg:left-80 md:w-auto md:px-8 text-center md:pb-20 absolute bottom-40 md:bottom-48 -rotate-[20deg] font-bold text-[60px] md:text-[160px] text-green-500 border-4 rounded-sm border-green-500 opacity-20">
                LUNAS
              </div>
            <h2 className="md:text-3xl text-xl font-semibold text-[#022F54] md:text-center md:pt-12 pt-2">
              CSS INTRODUCTION
            </h2>
            {/* identitas */}
            <div className="md:w-5/6 w-full md:flex grid justify-between mx-auto py-12">
              <div>
                <h3 className="text-3xl font-semibold text-[#022F54]">
                  Invoice Pembelian
                </h3>
                <h3 className="text-xl font-semibold text-[#022F54] pt-4">
                  Course : CSS Introduction
                </h3>
                <div className="justify-between flex">
                  <div className="pt-4">
                    <p className="text-lg text-[#83858A]">Order No.</p>
                    <p className="text-lg text-[#83858A]">Invoice Date</p>
                    <p className="text-lg text-[#83858A]">Due Date</p>

                    <div className="pt-12">
                      <h3 className="text-3xl font-base text-[#022F54]">
                        Customers Details
                      </h3>
                      <p className="text-lg">Ahmad Musa</p>
                      <p className="text-lg">ahmadmusa@gmail.com</p>
                      <p className="text-lg">031 98765 43210</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-lg text-[#022F54]">#1020230001</p>
                    <p className="text-lg text-[#022F54]">18/10/2023</p>
                    <p className="text-lg text-[#022F54]">25/10/2023</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/4 w-full md:pt-0 pt-4">
                <Image
                  src={ecourse}
                  className="pr-3 pl-8 pt-1 md:w-[100%] w-[50%]"
                  alt="e-course"
                />
                <div className="lg:ml-8">
                  <p className="text-lg text-[#022F54]">
                    Graha Pena, Ruang 1503, Jl. Ahmad Yani No.88, Ketintang,
                    Kec. Gayungan, Surabaya, Jawa Timur
                  </p>
                  <p className="text-lg text-[#022F54]">PT. Otak Kanan</p>
                  <p className="text-lg text-[#022F54]">(031) 8286155</p>
                </div>
              </div>
            </div>
            <div className="md:w-5/6 w-full flex justify-between mx-auto">
              <span className="flex gap-4">
                <h4 className="text-xl font-base text-[#687076]">#</h4>
                <h4 className="text-xl font-base text-[#687076]">
                  Nama Course
                </h4>
              </span>
              <span className="text-xl font-base text-[#687076]">Harga</span>
            </div>
            <div className="md:w-5/6 w-full mx-auto border-t border-2 border-[#C1C2C4] my-2"></div>
            <div className="md:w-5/6 w-full flex justify-between mx-auto">
              <span className="flex gap-4">
                <h4 className="text-xl font-base text-[#687076]">1</h4>
                <div>
                  <h4 className="text-xl font-base text-[#687076]">
                    CSS Introduction
                  </h4>
                  <h4 className="text-md font-base text-[#C1C2C4]">
                    Kelas Interaktif
                  </h4>
                </div>
              </span>
              <span className="text-xl font-base">Rp 900.000</span>
            </div>
            <div className="md:w-5/6 w-full mx-auto border-t border-2 border-[#C1C2C4] my-2"></div>
            <div className="md:w-5/6 w-full md:flex grid justify-between mx-auto pt-12">
              <span className="gap-4">
                <h3 className="text-xl font-bold text-[#022F54]">
                  Metode Pembayaran
                </h3>
                <div className="flex pt-1">
                  <Image
                    src={dana}
                    className="pr-3 pt-2"
                    width={100}
                    height={100}
                    alt="back"
                  />
                  <p className="text-2xl font-base text-[#C1C2C4]">Dana</p>
                </div>
              </span>
              <div className="justify-between gap-12 flex md:pt-0 pt-4">
                <div className="grid gap-2">
                  <span className="text-md font-base text-[#C1C2C4]">
                    Sub Total
                  </span>
                  <span className="text-md font-base text-[#C1C2C4]">
                    Discount
                  </span>
                  <span className="text-3xl font-semibold ">TOTAL</span>
                </div>
                <div className="grid gap-2">
                  <span className="text-md font-base text-[#C1C2C4]">
                    Rp 900.000
                  </span>
                  <span className="text-md font-base text-[#C1C2C4]">
                    Rp 20.000
                  </span>
                  <span className="text-3xl font-semibold ">Rp 880.000</span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
