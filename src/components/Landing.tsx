import React from "react";
import Image from "next/image";
// import { Button } from "flowbite-react";
import { Aleo } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const aleo = Aleo({ subsets: ["latin"] });

const Landing = () => {
  return (
    <>
      <div className="pt-[150px] pb-[100px] bg-[cornSilk] flex flex-col items-center justify-around">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="flex flex-col items-center lg:hidden">
            <Image
              className="width-[70%]"
              src="/assets/shiny-happy.png"
              alt="Landing"
              width={400}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:ml-20">
            <div
              className={`text-3xl lg:text-5xl font-bold font-aleo text-center lg:text-left ${aleo.className}`}
            >
              Get Paid Faster, Work Smarter:{" "}
              <span className="text-pakistanGreen">
                <span className="">Invoicing</span> Simplified
              </span>
            </div>
            <div className="text-lg text-center lg:text-left text-gray-600 mt-4">
              Say goodbye to late payments and manual paperwork. Our intuitive
              invoicing app makes it easy to create, send, and track invoices
              from anywhere.
            </div>
            <div className="flex flex-row items-center gap-4 mt-8">
              <Button variant={"default"} size={"lg"}>
                Get Started <ChevronRightIcon className="h-4 w-4" />
              </Button>
              <Button variant={"outline"} size={"lg"}>
                Learn More <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-center">
            <Image
              className="width-[70%]"
              src="/assets/shiny-happy.png"
              alt="Landing"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
