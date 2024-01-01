import React from "react";
// import Headbar from "@/components/head-bar.jsx";
import Upload from "@/components/uploadkursus.jsx";
import BreadcrumbsVendor from "@/components/BreadcrumbsVendor";
// import Kiribar from "./new-kiri-bar.jsx";
// import Informasi from "@/components/informasi-dasar.jsx";
// import Kurikulum from "@/components/kurikulum-kursus.jsx";
// import Uploadkursus from "@/components/upload-kursus.jsx";

const page = () => {
  return (
    <div className="bg-white">
      <div className="flex">
        <div className="min-w-screen max-md:hidden">
          <BreadcrumbsVendor link="/upload" />
          {/* <Kiribar /> */}
        </div>
        <div className="w-full max-md:min-w-full border-l-2 drop-shadow">
          {/* <Headbar /> */}
          <Upload />
        </div>
      </div>
    </div>
  );
};

export default page;
