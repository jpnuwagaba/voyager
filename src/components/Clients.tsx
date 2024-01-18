import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

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
          <div className="flex flex-row items-center gap-4 md:gap-12">
            <Image
              src="/assets/adidas-logo.svg"
              alt="Airbnb"
              width={50}
              height={50}
            />
            <Image
              src="/assets/adidas-logo.svg"
              alt="Airbnb"
              width={50}
              height={50}
            />
            <Image
              src="/assets/adidas-logo.svg"
              alt="Airbnb"
              width={50}
              height={50}
            />
            <Image
              src="/assets/adidas-logo.svg"
              alt="Airbnb"
              width={50}
              height={50}
            />
            <Image
              src="/assets/adidas-logo.svg"
              alt="Airbnb"
              width={50}
              height={50}
            />
          </div>
          <Button
            className="mt-8 uppercase"
            color="dark"
            // size="lg"
            outline
          >
            customer stories
            <HiOutlineArrowNarrowRight className="ml-2" />
          </Button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Clients;
