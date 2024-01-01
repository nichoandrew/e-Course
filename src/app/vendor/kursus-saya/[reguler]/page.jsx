import React from "react";
// import Kiribar from "./new-kiri-bar";
// import Headbar from "../../../../../components/head-bar.jsx";
import Reguler from "@/app/vendor/kursus-saya/card-hall";
import BreadcrumbsVendor from "@/components/BreadcrumbsVendor";

const cardhall = () => {
  return (
    <div className="bg-white">
      <div className="flex">
        <div className="min-w-screen max-md:hidden">
          <BreadcrumbsVendor link="/reguler/jenis/hall"/>
        </div>
        <div className="w-full max-md:min-w-full border-l-2 drop-shadow">
          {/* <Headbar /> */}
          <Reguler />
        </div>
      </div>
    </div>
  );
};

export default cardhall;
