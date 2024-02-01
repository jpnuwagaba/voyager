"use client";

import React from "react";
import { Aleo } from "next/font/google";
import GridCols from "./GridCols";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Widget } from "@typeform/embed-react";
import { IoCloseOutline } from "react-icons/io5";

const aleo = Aleo({ subsets: ["latin"] });

const ContactArea = () => {
  const [showWidget, setShowWidget] = React.useState(false);

  const handleShowWidget = () => {
    setShowWidget(true);
  };

  return (
    <>
      <div className="pt-40 pb-20 bg-cornSilk">
        {
          showWidget && (
            <div className="fixed top-0 left-0 z-50 w-full h-full">
              <div className="relative">
                <Widget
                  id="q7CCXZck"
                  // height={500}
                  className="h-screen"
                  style={{ 
                    border: "1px solid #ddd",
                    // opacity: 0.95,
                  }}
                />
                {
                  showWidget && (
                    <div className="absolute top-6 right-6 z-50 cursor-pointer">
                      <IoCloseOutline size={'2rem'} onClick={() => setShowWidget(false)} />
                    </div>
                  )
                }
              </div>
            </div>
          )
        }
        <GridCols
          component1={
            <>
              <div
                className={`text-xl md:text-3xl lg:text-4xl ${aleo.className}`}
              >
                Have questions or need support? Or ready to create an invoice?
                Get in touch with our friendly team for assistance
              </div>
              {/* <div className="text-sm uppercase mt-5">contact us</div> */}
              <div className="mt-5">
                <Button onClick={handleShowWidget} className="uppercase">talk to us</Button>
              </div>
            </>
          }
          component2={
            <>
              <Image
                src="/assets/get-started.png"
                alt="Ready to get started?"
                width={500}
                height={500}
              />
            </>
          }
        />
      </div>
    </>
  );
};

export default ContactArea;
