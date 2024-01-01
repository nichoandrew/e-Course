"use client";
import "swiper/css";
import Image from "next/image";
import search from "@/assets/icons/search.svg";
import document from "@/assets/icons/doc.svg";

const certificateContent = [
  {
    title: "Certificate of CSS Course",
    link: "https://",
  },
  {
    title: "Certificate of HTML Course",
    link: "https://",
  },
  {
    title: "Certificate of JS Course",
    link: "https://",
  },
  {
    title: "Certificate of JS Course",
    link: "https://",
  },
  {
    title: "Certificate of JS Course",
    link: "https://",
  },
];

const MainCertificate = () => {
  return (
    <div className=" relative z-1 w-full">
      <div className=" mx-auto bg-transparent rounded-2xl p-6 grid gap-y-6">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold mb-4">Sertifikat</h1>
        </div>
        <div className="bg-white rounded-2xl outline outline-1 outline-slate-300 relative z-1 px-4 py-2 flex gap-4">
          <Image
            src={search}
            className="w-5 text-white bg-white"
            alt="certificate"
          />
          <form className="w-full flex justify-between">
            <input
              className="outline outline-0 w-full"
              type="text"
              id="search"
              name="q"
              placeholder="Cari Sertifikat"
              required
            ></input>
            <button
              type="submit"
              className="text-white font-medium text-sm px-4 rounded-full bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300"
            >
              Cari
            </button>
          </form>
        </div>
        {certificateContent.map((item, i) => {
          return (
            <div
              key={i}
              className="outline outline-1 outline-slate-300 rounded-xl px-4 py-2 flex gap-6 bg-white"
            >
              <Image src={document} className="w-8" alt="document" />
              <h2 className="text-slate-500 mt-2">{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainCertificate;
