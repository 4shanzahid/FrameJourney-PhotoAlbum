"use client";

import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";

const Gallery = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <button className="btn">
          <CldUploadButton />
        </button>
      </div>
    </>
  );
};

export default Gallery;
