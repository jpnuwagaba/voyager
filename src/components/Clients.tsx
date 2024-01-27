"use client"

import React, {useRef, useEffect, useState} from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <>
      <hr />
      <div className=" py-8">
        <div className="flex flex-col items-center gap-4 mb-5">
          <div className="uppercase text-gray-700 text-center text-sm">
            clients that trust us
          </div>
          <hr className="w-[30px] border-gray-700" />
        </div>
        <div className="container flex flex-col items-center">
          <div className="flex flex-row items-center gap-4 md:gap-16">
            <Image
              src="/assets/adidas-logo.svg"
              alt="Airbnb"
              width={40}
              height={40}
            />
            <Image
              src="/assets/adidas-logo.svg"
              alt="Airbnb"
              width={40}
              height={40}
            />
            <Image
              src="/assets/adidas-logo.svg"
              alt="Airbnb"
              width={40}
              height={40}
            />
            <Image
              src="/assets/adidas-logo.svg"
              alt="Airbnb"
              width={40}
              height={40}
            />
            <Image
              src="/assets/adidas-logo.svg"
              alt="Airbnb"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Clients;
