"use client";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineWhatsApp } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";
import LogoKursus from "@/assets/img/logokursusonline.svg";

const RegisterPage = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [validation, setValidation] = useState(null);
  const [userData, setUserData] = useState({
    firstname: "firstname",
    lastname: "lastname",
    email: "",
    phonenumber: "",
    password2: "",
  });

  const onchangeHandler = (e) => {
    setUserData(() => ({
      ...userData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://kursusonline.net/api/process/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );
      const res = await response.json();
      if (res === 0) throw new Error("Failed endpoint!");
      if (!response.ok) {
        setValidation(JSON.parse(res));
        throw new Error("All field required!");
      }
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <title>Register | KURSUSONLINE.COM</title>

      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="background-image"
      >
        <div className="lg:w-[90%] absolute lg:max-w-[450px] md:top-[30%] lg:left-full h-auto w-full px-4 md:px-0 py-2 md:py-0 md:translate-x-1/2 lg:translate-x-[15%] md:-translate-y-[25%] flex flex-col">
          <Image
            className="items-center lg:ml-12"
            src={LogoKursus}
            width={350}
            height={300}
            alt="logo"
          />
          <h3 className="text-[28px] font-bold text-dark-grey mt-3">
            Daftar Akun
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
                  onChange={onchangeHandler}
                  value={userData.email}
                />
              </div>
              {validation && (
                <span className="text-sm text-red-500">{validation.email}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="phonenumber" className="text-base font-medium text-dark-grey mt-2">Masukkan No. WhatsApp</label>
              <div className="flex flex-row border border-[rgba(5,_94,_168,_0.50)] px-[10px] py-[10px] gap-[10px] rounded-md mt-2">
                <AiOutlineWhatsApp className="text-2xl text-dark-blue" />
                <input
                  id="phonenumber"
                  name="phonenumber"
                  type="phonenumber"
                  autoComplete="phonenumber"
                  placeholder="081334509700"
                  className="focus:outline-none w-full"
                  onChange={onchangeHandler}
                  value={userData.phonenumber}
                ></input>
              </div>
              {validation && (
                <span className="text-sm text-red-500">
                  {validation.phonenumber}
                </span>
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
                  autoComplete="off"
                  className="focus:outline-none w-full"
                  onChange={onchangeHandler}
                  value={userData.password2}
                />
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
            </div>
            <button className="text-base w-full text-white py-[10px] px-[16px] bg-blue rounded-md mt-3 font-medium">
              {" "}
              Masuk{" "}
            </button>
          </form>
          <div className="flex flex-row gap-3 justify-center mt-2">
            <p className="text-base font-semibold text-dark-grey">
              Sudah memiliki akun?
            </p>
            <Link className="text-base font-medium text-blue" href="/login">
              Masuk Sekarang
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
