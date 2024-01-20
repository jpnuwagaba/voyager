import React, { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  description: any;
}

const Card1: FC<Props> = ({ title, image, description }) => {
  return (
    <>
      <div className="px-4 py-8 bg-white rounded-lg">
        <div className="flex flex-row items-center justify-between">
          <div className="font-bold uppercase text-gray-700 text-sm">{title}</div>
          <Image src={`/assets/${image}`} width={50} height={50} alt="image" />
        </div>
        <div className="mt-5 text-sm text-gray-600">{description}</div>
      </div>
    </>
  );
};

export default Card1;
