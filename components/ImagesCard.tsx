"use client";

import { CldImage } from "next-cloudinary";
import Heart from "./icons/Heart";

const ImagesCard = (props: any) => {
  return (
    <div className="relative">
      <CldImage {...props} />
      <Heart className="absolute top-2 right-2" />
    </div>
  );
};

export default ImagesCard;
