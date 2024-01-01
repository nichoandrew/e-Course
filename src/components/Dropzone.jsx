"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import upload from "@/assets/icons/upload.svg";
import Image from "next/image";

const Dropzone = ({ className }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps({
        className: className,
      })}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className="flex flex-col items-center justify-center text-[#5894C5] text-center">
          <Image src={upload} alt="Upload" />
          <p className="mt-2">Klik untuk mengunggah atau seret dan lepas</p>
          <p className="mt-2">.JPG, .JPEG, .PNG</p>
        </div>
      )}
    </div>
  );
};

export default Dropzone;
