import React from "react";
import Link from "next/link";
import Image from "next/image";
import tiktok from "../assets/icons/tiktok.svg";
import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";
import LogoAuth from "../assets/icons/logo_auth.svg";
import instagram from "../assets/icons/instagram.svg";
import LogoKursus from "../assets/img/logokursusonline.svg";
import bg from "@/assets/icons/lines2.svg";
const FooterContent = () => {
  return (
    <>
      <footer>
        <div style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "170% 105%",
        backgroundPosition: "left top",
      }} className="bg-gray-50 h-1/2 w-full flex md:flex-col flex-col justify-center md:justify-around items-start px-10 border-2 border-gray-200">
          <div className="p-5 ">
            <ul>
              <Image
                src={LogoKursus}
                alt="Logo"
                className="mb-4 w-48 lg:w-64"
              />
              <p className="font-inter font-semibold text-black">
                Kembangkan Skill Bersama kursusonline.com
              </p>
              <p className="font-inter font-semibold text-black">
                Kenali Kami Lebih Dekat
              </p>

              {/* Sosial Media Perusahaan */}
              <div className="mt-4  pb-5 flex">
                <Link href="#" className="mr-2">
                  <Image
                    src={facebook}
                    alt="Facebook"
                    width={8}
                    height={8}
                    className="w-8 h-8"
                  />
                </Link>
                <Link href="#" className="mr-2">
                  <Image
                    src={instagram}
                    alt="Instagram"
                    width={8}
                    height={8}
                    className="w-8 h-8"
                  />
                </Link>
                <Link href="#" className="mr-2">
                  <Image
                    src={linkedin}
                    alt="Linkedin"
                    width={8}
                    height={8}
                    className="w-8 h-8"
                  />
                </Link>
                <Link href="#" className="mr-2">
                  <Image
                    src={twitter}
                    alt="Twitter"
                    width={8}
                    height={8}
                    className="w-8 h-8"
                  />
                </Link>
                <Link href="#" className="mr-2">
                  <Image
                    src={youtube}
                    width={8}
                    height={8}
                    alt="Youtube"
                    className="w-8 h-8"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={tiktok}
                    alt="TikTok"
                    width={8}
                    height={8}
                    className="w-8 h-8"
                  />
                </Link>
              </div>

              {/* E-Course dan Lainnya */}
            </ul>
          </div>
          <div className=" flex space-x-20 font-poppins py-5 px-5 mt-4">
            <ul>
              <div className="text-gray-800 font-bold text-m pb-3">
                Kursusonline.com
              </div>
              <li className="text-gray-500 text-sm pb-2 font-normal hover:text-black cursor-pointer">
                Tentang Kami
              </li>
              <li className="text-gray-500 text-sm pb-2 font-normal hover:text-black cursor-pointer">
                FAQ
              </li>
              <li className="text-gray-500 text-sm pb-2 font-normal hover:text-black cursor-pointer">
                Mengajar di kursusonline.com
              </li>
              <li className="text-gray-500 text-sm pb-2 font-normal hover:text-black cursor-pointer">
                Contact us
              </li>
            </ul>

            <ul>
              <div className="text-gray-800 font-bold text-m pb-3">Lainnya</div>
              <li className="text-gray-500 text-sm pb-2 font-normal hover:text-black cursor-pointer">
                kebijakan Privasi
              </li>
              <li className="text-gray-500 text-sm pb-2 font-normal hover:text-black cursor-pointer">
                Layanan
              </li>
            </ul>
          </div>
        </div>

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

export default FooterContent;
