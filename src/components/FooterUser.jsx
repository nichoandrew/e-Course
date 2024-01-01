import React from "react";

const FooterUser = () => {
  return (
    <>
      <footer className="">
        {/* Pembuat Website */}
        <div className="flex flex-col p-5 bg-gray-50 px-14">
          <h1 className="font-poppins text-gray-800 text-xs font-light">
            &copy; 2023 PT Otak Kanan
          </h1>
        </div>
      </footer>
    </>
  );
};

export default FooterUser;