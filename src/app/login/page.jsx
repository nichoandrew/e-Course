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
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCredentials, setToken } from "@/redux/slices/authSlice";
import { setCookie } from "cookies-next";
import LogoKursus from "@/assets/img/logokursusonline.svg";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";



const LoginPage = () => {
  const [visible, setVisible] = useState(false);
  const [validation, setValidation] = useState(null);
  const [userData, setUserData] = useState({
    email: "",
    password2: "",
  })
  const dispatch = useDispatch();
  const router = useRouter();

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
          router.push('/user/dashboard');
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
    <div>
      <title>Login | KursusOnline</title>

      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="background-image"
      >
        <div className="lg:w-[90%] absolute lg:max-w-[450px] md:top-[30%] lg:left-full h-auto w-full px-4 md:px-0 py-2 md:py-0 md:translate-x-1/2 lg:translate-x-[15%] md:-translate-y-[25%] flex flex-col">
          <Image
            className="items-center lg:ml-8"
            src={LogoKursus}
            width={400}
            height={300}
            alt="logo"
          />
          <h3 className="text-[28px] font-bold text-dark-grey mt-3">
            Masuk Akun
          </h3>
          <form onSubmit={handleSubmit} className="mt-2">
            <div className="mb-3">
              <label htmlFor="email" className="text-base font-medium text-dark-grey mt-2">Masukkan Email</label>
              <div className="flex flex-row border border-[rgba(5,_94,_168,_0.50)] px-[10px] py-[10px] gap-[10px] rounded-md mt-2">
                <HiOutlineMail className="text-2xl text-dark-blue" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Cth. kursusonline123@gmail.com"
                  className="focus:outline-none w-full"
                  onChange={onChangeHandler}
                  value={userData.email}
                />
              </div>
              {validation && (
                <span className="text-sm text-red-500">{validation.email}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password2" className="text-base font-medium text-dark-grey mt-2">Masukkan Kata Sandi</label>
              <div className="flex flex-row border border-[rgba(5,_94,_168,_0.50)] px-[10px] py-[10px] gap-[10px] rounded-md mt-2">
                <BiLockAlt className="text-2xl text-dark-blue" />
                <input
                  placeholder="Masukkan kata sandi"
                  type={visible ? "text" : "password"}
                  id="password2"
                  name="password2"
                  autoComplete="current-password"
                  className="focus:outline-none w-full"
                  onChange={onChangeHandler}
                  value={userData.password2}
                ></input>
                <button
                  className="text-2xl text-blue cursor-pointer flex items-center justify-center"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
              {validation && (
                <span className="text-sm text-red-500">
                  {validation.password2}
                </span>
              )}
              <Link
                className="flex justify-end text-base text-red-500 font-medium"
                href="/forget-password"
              >
                Lupa Kata Sandi?
              </Link>
            </div>

            <button className="text-base w-full text-white py-[10px] px-[16px] bg-blue rounded-md mt-1 font-medium">
              {" "}
              Masuk{" "}
            </button>
          </form>

          <div className="flex flex-row gap-3 justify-center mt-2">
            <p className="text-base font-semibold text-dark-grey">
              Belum memiliki akun?
            </p>
            <a className="text-base font-medium text-blue" href="register">
              Daftar Sekarang
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
