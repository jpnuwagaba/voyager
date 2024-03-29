"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import client from "@/sanity/sanity.client";
export type TargetMarketType = {
  name: string;
  description: any;
  image: string;
  slug: string;
  callToAction: string;
  imageUrl: string; 
};
import { Aleo } from "next/font/google";
import { PortableText } from '@portabletext/react';

const aleo = Aleo({ subsets: ["latin"] });

const TargetMarket = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [targetMarket, setTargetMarket] = React.useState<TargetMarketType[]>(
    []
  );

  const query = `*[_type == "targetMarket"]{
    name,
    description,
    "imageUrl": image.asset->url,
    slug,
    callToAction
  }`;

  React.useEffect(() => {
    client.fetch(query).then((res) => {
      setTargetMarket(res);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % targetMarket.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [targetMarket.length]);

  return (
    <>
      <div className="container py-8 md:py-16">
        <div className="text-left md:text-center">
          <div className={`text-2xl md:text-4xl font-bold ${aleo.className}`}>
            Empowering businesses of all sizes worldwide
          </div>
          <div className="text-gray-600 mt-4">
            No matter what type of business you have, we are here to empower and
            energize your operations.
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center lg:justify-center gap-4 my-4 md:my-12">
          {targetMarket.map((item, index) => (
            <div
              key={index}
              className={`text-xs uppercase font-bold py-2 px-3 rounded transition-all duration-300 ease-in-out scale- ${
                activeTab === index
                  ? "text-white bg-tigerEye"
                  : "text-gray-600 bg-gray-100"
              } cursor-pointer`}
              onClick={() => setActiveTab(index)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="grid grid-col-1 lg:grid-cols-2 items-center gap-6 md:gap-16 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center ">
            <Image
              className="rounded-xl"
              width={500}
              height={500}
              alt="Target Market"
              src={targetMarket[activeTab]?.imageUrl} // Fix the property name
            />
          </div>
          <div className={`text-lg md:text-xl lg:text-3xl font- text-pakistanGreen ${aleo.className}`}>
            <PortableText value={targetMarket[activeTab]?.description} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TargetMarket;
