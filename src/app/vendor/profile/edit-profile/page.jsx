"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProfileVendor } from "@/assets/data/data";
import BreadcrumbsVendor from "@/components/BreadcrumbsVendor";

export default function EditProfile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    gender: "",
    occupation: "",
  });

  // Ambil data dummy dari file data
  const dummyData = ProfileVendor[0];

  useEffect(() => {
    // Set nilai awal formulir dengan data dummy
    setFormData(dummyData);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfileData(formData);
    router.push("/vendor/profile");
  };

  const updateProfileData = (updatedData) => {
    ProfileVendor[0] = updatedData;
  };

  return (
    <div className="lg:pt-10 lg:pb-8 md:pt-10 p-4">
      <BreadcrumbsVendor link="/vendor/profile/edit-profile" title={"Edit Profile"} nav={"/ Edit-Profile"} />
      <div className="flex flex-col md:flex-row gap-2 md:gap-10 md:mx-7 mb-0 md:mb-5 mt-4 ">
        {/* Bagian Konten Edit Profil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" md:w-3/4 flex flex-col mx-3 md:mx-0 mb-6"
        >

          <form
            onSubmit={handleSubmit}
            className="w-full h-[750px] border flex flex-col gap-8 bg-[rgba(255,_255,_255,_0.60)] lg:backdrop-blur-[2px] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-[18px] py-11 px-10"
          >
            {/* Form fields */}
            {/* Nama Lengkap */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-normal text-[#055EA8]">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-normal text-[#055EA8]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal"
              />
            </div>

            {/* Alamat */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-normal text-[#055EA8]">
                Alamat
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal"
              />
            </div>

            {/* Jenis Kelamin */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-normal text-[#055EA8]">
                Jenis Kelamin
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal"
              >
                <option value="Cewek">Perempuan</option>
                <option value="Cowok">Laki-laki</option>
              </select>
            </div>

            {/* Pekerjaan */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-normal text-[#055EA8]">
                Pekerjaan
              </label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full h-auto px-[10px] py-4 border-b-2 border-[#055EA8] text-base font-normal"
              />
            </div>

            {/* Tombol Submit */}
            <button type="submit" className="border-none text-base flex justify-end text-[#055EA8] font-medium">
              Simpan Perubahan
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
