import React from "react";
import GridCols from "./GridCols";
import { Aleo } from "next/font/google";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const aleo = Aleo({ subsets: ["latin"] });

const Testimonial = () => {
  return (
    <>
      <div className="bg-pakistanGreen py-8 md:py-24">
        <div className="container">
          <GridCols
            component1={
              <>
                <div className="flex flex-col space-y-8">
                  <div className="bg-white px-4 py-2 text-pakistanGreen rounded w-max text-sm uppercase">
                    E-Commerce
                  </div>
                  <div className={`text-white text-3xl ${aleo.className}`}>
                    {`"`}Voyager has completely transformed the way we handle
                    invoicing. What used to take us hours to manually input and
                    process can now be done in a fraction of the time. We are
                    able to get a real-time view of our financials and track our
                    cash flow with ease. It is a game-changer for our business.{`"`}
                  </div>
                  <div className="flex flex-row space-x-6 items-center">
                    <Image
                      className="rounded-xl"
                      src="/assets/adidas-logo-white.svg"
                      alt="quote"
                      width={60}
                      height={60}
                    />
                    <div className="flex flex-col">
                      <div className="text-white font-bold">John Doe</div>
                      <div className="text-white text-sm">CEO, Adidas Corp</div>
                    </div>
                  </div>
                </div>
              </>
            }
            component2={
              <>
                <div className="relative z-0 lg:translate-y-8 lg:scale-90">
                  <Image
                    className="rounded-xl"
                    src="/assets/tech-consultancy.jpg"
                    alt="quote"
                    width={500}
                    height={500}
                  />
                  <Image
                    className="absolute top-0 left-0 w-full h-full rounded-xl -translate-x-1 translate-y-4 -z-10 rotate-3"
                    src="/assets/green-pattern.jpg"
                    alt="quote"
                    width={100}
                    height={100}
                  />
                </div>
              </>
            }
          />
          <div className="container pt-8 flex flex-col space-y-8">
            <div className="flex flex-row items-center gap-5">
              <div className="h-1 bg-white w-20 rounded-full cursor-pointer" />
              <div className="h-1 bg-white w-20 rounded-full cursor-pointer" />
              <div className="h-1 bg-white w-20 rounded-full cursor-pointer" />
              <div className="h-1 bg-white w-20 rounded-full cursor-pointer" />
            </div>
            <div className="flex flex-row items-center gap-5">
              <FaArrowLeft size={'2.2rem'} className="text-pakistanGreen bg-white p-[8px] cursor-pointer rounded-full" />
              <FaArrowRight size={'2.2rem'} className="text-pakistanGreen bg-white p-[8px] cursor-pointer rounded-full" />              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
