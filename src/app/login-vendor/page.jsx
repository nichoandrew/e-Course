"use client";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Email from "@/assets/icons/email.svg";
import Unlock from "@/assets/icons/unlock.svg";
import LogoAuth from "@/assets/icons/logo_auth.svg";
import Google from "@/assets/icons/icon_google.svg";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineUser,
} from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import { useRouter } from "next/navigation";
import LoginSidebar from "@/components/CardSidebar";
import Cloud from "@/assets/images/cornercloud.svg";
import LogoKursus from "@/assets/img/logokursusonline.svg";
const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password2: "",
  })
  const onChangeHandler = (e) => {
    setUserData(() => ({
      ...userData,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://kursusonline.net/api/process/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        const res = await response.json();
        const { token } = res;
        setCookie("token", token);
        dispatch(setToken(res));

        const resToken = await fetch(
          "https://kursusonline.net/api/myaccount",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (resToken.ok) {
          const res = await resToken.json();
          const { data } = res;
          console.log(data);
          dispatch(setCredentials(data));
          router.push('/vendor/dashboard');
        }
        if (res === 0) throw new Error("Failed endpoint!");
        if (!response.ok) {
          setValidation(JSON.parse(res));
          throw new Error("All field required!");
        }
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }

  };
  return (
    <div className="flex h-screen">
      <title>Login | KURSUSONLINE.COM</title>
      <LoginSidebar />
      <Image src={Cloud} alt="cloud" className="absolute flex lg:hidden z-0"/>
      <Image src={Cloud} alt="cloud" className="absolute flex lg:hidden z-0"/>
      <div className="h-auto py-4">
        <div className="flex flex-1 mt-20 lg:mt-0 flex-col lg:max-w-[630px] justify-center  lg:h-auto w-screen px-4 lg:px-0 py-2 lg:py-0 md:-translate-y">
        <Image
        className=" lg:hidden self-center"
        src={LogoKursus}
        width={200}
        height={205}
        alt="logo"
      />
          <div className="">
            <h1 className="text-[28px] font-semibold text-dark-grey text-main-black mt-20 lg:mt-[100px]">
              Masuk Akun
            </h1>
            <span className="font-normal text-main-black">
              Masukan informasi akun anda
            </span>
          </div>

          <div className="flex flex-row border border-[rgba(5,_94,_168,_0.50)] px-[10px] py-[10px] gap-[10px] rounded-md mt-8">
            <Image src={Email} alt="email" />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              className="focus:outline-none w-full"
              onChange={onChangeHandler}
              value={userData.email}
            />
          </div>

          <div className="flex flex-row border border-[rgba(5,_94,_168,_0.50)] px-[10px] py-[10px] gap-[10px] rounded-md mt-2">
            <Image src={Unlock} alt="unlock" />
            <input
              placeholder="Password"
              type="password"
              id="password2"
              name="password2"
              autoComplete="off"
              className="focus:outline-none w-full"
              onChange={onChangeHandler}
              value={userData.password2}
            />
          </div>

          <button type="submit" className="text-base w-full text-white py-[10px] px-[16px] bg-blue rounded-md mt-6 font-medium" onClick={handleSubmit}>
           
            Masuk
          </button>

          <span className="font-normal text-main-black flex flex-row justify-center mt-14">
            Atau Masuk Melalui
          </span>
          <div className="flex flex-row gap-3 justify-center mt-6">
            <Image src={Google} alt="google" />
            <Link
              className="text-base font-normal text-main-black"
              href="/register-vendor"
            >
              Google
            </Link>
          </div>

          <div className="flex flex-row gap-3 justify-center mt-6">
          <Link
                className="flex justify-end text-base text-red-500 font-medium"
                href="/forget-password-vendor"
              >
                Lupa Kata Sandi?
              </Link>
            <Link
              className="text-base font-medium text-blue"
              href="/register-vendor"
            >
              Daftar Sekarang
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
