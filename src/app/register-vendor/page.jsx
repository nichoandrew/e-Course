"use client";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Email from "@/assets/icons/email.svg";
import Unlock from "@/assets/icons/unlock.svg";
import LogoAuth from "@/assets/icons/logo_auth.svg";
import google from "@/assets/icons/icon_google.svg";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineUser,
} from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import { useRouter } from "next/navigation";
import SidebarVendor from "@/components/CardSidebar";
import Cloud from "@/assets/images/cornercloud.svg";
import LogoKursus from "@/assets/img/logokursusonline.svg";

const RegisterPage = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [validation, setValidation] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password2: "",
    fileKTP: null,
    fileCV: null,
    fileIjazah: null,
    foto: null,
  });

  // const onchangeHandler = (e) => {
  //   if (e.target.type === "file") {
  //     setUserData((prevData) => ({
  //       ...prevData,
  //       [e.target.name]: e.target.files[0],
  //     }));
  //   } else {
  //     setUserData((prevData) => ({
  //       ...prevData,
  //       [e.target.name]: e.target.value,
  //     }));
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log(e)
  //     const formData = new FormData();
  //     formData.append("name", userData.name);
  //     formData.append("email", userData.email);
  //     formData.append("password2", userData.password2);
  //     formData.append("fileKTP", userData.fileKTP);
  //     formData.append("fileCV", userData.fileCV);
  //     formData.append("fileIjazah", userData.fileIjazah);
  //     formData.append("foto", userData.foto);

  //  const response = await fetch("https://kursusonline.net/api/process/register", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     const res = await response.json();
  //     if (res === 0) throw new Error("server gagal");
  //     if (!response.ok) {
  //       setValidation(JSON.parse(res));
  //       throw new Error("tolong mengisi semua form yang ada");
  //     }

  //     router.push("/login");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div className="flex h-screen">
      <title>Register | KURSUSONLINE.COM</title>
      <SidebarVendor />
      <Image src={Cloud} alt="cloud" className="absolute flex lg:hidden" />

      <div className="h-auto py-10 lg:overflow-y-scroll ">
        <div className="flex flex-1 mt-14 lg:mt-0 flex-col lg:w-[90%] lg:max-w-[630px] justify-center  lg:h-auto w-screen px-4 lg:px-0 py-2 lg:py-0 lg:translate-x-[5%] md:-translate-y">
        <Image
        className=" lg:hidden self-center mb-6"
        src={LogoKursus}
        width={200}
        height={205}
        alt="logo"
      />
          <form>
            <div className="">
              <h1 className="text-[28px] font-semibold text-dark-grey text-main-black">
                Daftar Akun
              </h1>
              <span className="font-normal text-main-black">
                Isi formulir berikut untuk melanjutkan
              </span>
            </div>

            <div className="">
              <h1 className="text-base font-medium text-main-black mt-2">
                Masukkan Nama Lengkap
              </h1>
              <div className="flex flex-row border border-[rgba(5,_94,_168,_0.50)] px-[10px] py-[10px] gap-[10px] rounded-md">
                <AiOutlineUser color="#044E8C" className="w-5 h-5" alt="name" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Masukkan Nama Lengkap"
                  className="focus:outline-none w-full"
                  // onChange={onchangeHandler}
                  // value={userData.name}
                />
              </div>
            </div>

            <div className="">
              <label className="text-base font-medium text-main-black">
                Masukkan E-mail
              </label>
              <div className="flex flex-row border border-[rgba(5,_94,_168,_0.50)] px-[10px] py-[10px] gap-[10px] rounded-md">
                <Image src={Email} alt="email" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Cth. kursusonline123@gmail.com"
                  className="focus:outline-none w-full"
                  // onChange={onchangeHandler}
                  // value={userData.email}
                />
              </div>
              {validation && (
                <span className="text-sm text-red-500">{validation.email}</span>
              )}
            </div>

            <div className="mx-auto grid grid-cols-2 gap-2">
              <div className="">
                <label className="text-base font-medium text-main-black">
                  Upload KTP
                </label>
                <div className="flex flex-row border border-[rgba(5,_94,_168,_0.50)] px-[10px] py-[10px] gap-[10px] rounded-md">
                  <input
                    id="ktp"
                    name="fileKTP"
                    type="file"
                    autoComplete="file-ktp"
                    className="focus:outline-none w-full"
                    // onChange={onchangeHandler}
                  />
                </div>
              </div>
              <div className="">
                <label className="text-base font-medium text-main-black">
                  Upload CV
                </label>
                <div className="flex flex-row border border-[rgba(5,_94,_168,_0.50)] px-[10px] py-[10px] gap-[10px] rounded-md">
                  <input
                    id="cv"
                    name="fileCV"
                    type="file"
                    autoComplete="file-CV"
                    className="focus:outline-none w-full"
                    // onChange={onchangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="">
              <label className="text-base font-medium text-main-black">
                Masukkan Kata Sandi
              </label>
              <div className="flex flex-row border border-[rgba(5,_94,_168,_0.50)] px-[10px] py-[10px] gap-[10px] rounded-md">
                <Image src={Unlock} alt="unlock" />
                <input
                  placeholder="Masukkan kata sandi"
                  type={visible ? "text" : "password"}
                  id="password2"
                  name="password2"
                  autoComplete="off"
                  className="focus:outline-none w-full"
                  // onChange={onchangeHandler}
                  // value={userData.password2}
                />
                <div
                  className="text-2xl text-blue cursor-pointer flex items-center justify-center"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              </div>

              <div className="mx-auto grid grid-cols-2 gap-2">
                <div className="">
                  <label className="text-base font-medium text-main-black">
                    Upload Ijazah
                  </label>
                  <div className="flex flex-row border border-[rgba(5,_94,_168,_0.50)] px-[10px] py-[10px] gap-[10px] rounded-md">
                    <input
                      id="ijazah"
                      name="fileIjazah"
                      type="file"
                      autoComplete="file-ijazah"
                      className="focus:outline-none w-full"
                      // onChange={onchangeHandler}
                    />
                  </div>
                </div>
                <div className="">
                  <label className="text-base font-medium text-main-black">
                    Foto
                  </label>
                  <div className="flex flex-row border border-[rgba(5,_94,_168,_0.50)] px-[10px] py-[10px] gap-[10px] rounded-md">
                    <input
                      id="foto"
                      name="foto"
                      type="file"
                      autoComplete="foto"
                      className="focus:outline-none w-full"
                      // onChange={onchangeHandler}
                    />
                  </div>
                </div>
              </div>

              {validation && (
                <span className="text-sm text-red-500">
                  {validation.password2}
                </span>
              )}
            </div>

            <div className="flex flex-row mt-2 justify-items-start gap-1">
              <input
                id="checkbox-registration-vendor"
                name="checkbox"
                type="checkbox"
                value="checkbox"
              />
              <label htmlFor="checkbox-registration-vendor">
                {" "}
                Saya setuju dengan{" "}
              </label>
              <Link className="text-base font-medium text-blue" href="">
                Syarat dan Ketentuan
              </Link>
              <label htmlFor="checkbox-registration-vendor">
                {" "}
                yang ada di E-Course
              </label>
            </div>
            <button
              className="text-base w-full text-white py-[10px] px-[16px] bg-blue rounded-md mt-3 font-medium"
              type="submit"
            >
              {" "}
              Masuk{" "}
            </button>
          </form>
          <span className="font-normal text-main-black flex flex-row justify-center mt-3">
            Atau Masuk Melalui
          </span>
          <div className="flex flex-row gap-3 justify-center mt-2">
            <Image src={google} alt="google" />
            <Link
              className="text-base font-normal text-main-black mt-2"
              href="/login-vendor"
            >
              Google
            </Link>
          </div>

          <div className="flex flex-row gap-3 justify-center mt-2">
            <p className="text-base font-semibold text-main-black">
              Sudah memiliki akun?
            </p>
            <Link
              className="text-base font-medium text-blue"
              href="/login-vendor"
            >
              Masuk Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
