"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Email from "@/assets/icons/email.svg";
import Unlock from "@/assets/icons/unlock.svg";
import LogoAuth from "@/assets/icons/logo_auth.svg";
import google from "@/assets/icons/icon_google.svg";
import LogoKursus from "@/assets/img/logokursusonline.svg";
import BgLogin from "@/assets/images/bg-vendor-login.svg";

const LoginPage = () => {
  return (
    <>
      <title>Login | kursusonline.com</title>
      <div className="w-1/2 h-auto p-14 hidden lg:flex justify-center">
        <div className="flex flex-row w-[380px] shadow-lg rounded-2xl border-2">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className="items-center rounded-2xl"
              src={BgLogin}
              width={400}
              height={200}
              alt="bglogin"
            />

            <div className="mt-[12px] ms-10 text-xl font-semibold text-main-black">
              <p>Halo! Selamat Datang</p>
              <p>
                di Vendor{" "}
                <Link className="text-blue" href="/login">
                  kursusonline.com
                </Link>
              </p>

                <Image
                  className="lg:ml-0 mt-2 "
                  src={LogoKursus}
                  width={125}
                  height={120}
                  alt="logo"
                />

            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
