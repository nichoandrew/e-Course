import React from "react";
// import Kiribar from "./new-kiri-bar";
// import Headbar from "../../components/head-bar.jsx";
import Mykursulhall from "./mykursus-hall";
import BreadcrumbsVendor from "@/components/BreadcrumbsVendor";

export const metadata = {
  title: "My Kursus",
};

const page = () => {
  return (
    <div className="bg-white">
      <div className="flex">
        <div className="min-w-screen max-md:hidden">
          <BreadcrumbsVendor link="/kursus-saya"              />
           
        </div>
        <div className="w-full max-md:min-w-full border-l-2 drop-shadow">
          {/* <Headbar /> */}
          <Mykursulhall />
        </div>
      </div>
    </div>
  );
};

export default page;
