import React from "react";
// import Headbar from "@/components/head-bar.jsx";
// import Kiribar from "./new-kiri-bar.jsx";
import BreadcrumbsVendor from "@/components/BreadcrumbsVendor";
import Informasi from "@/components/informasi-dasar.jsx";

const page = () => {
  return (
    <div className="bg-white">
      <div className="flex">
        <div className="min-w-screen max-md:hidden">
          <BreadcrumbsVendor link="/upload/informasi-dasar/"/>
          {/* <Kiribar /> */}
        </div>
        <div className="w-full max-md:min-w-full border-l-2 drop-shadow">
          {/* <Headbar /> */}
          <Informasi />
        </div>
      </div>
    </div>
  );
};

export default page;
