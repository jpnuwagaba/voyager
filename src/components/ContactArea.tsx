import React from "react";
import { Aleo } from "next/font/google";
import GridCols from "./GridCols";
import Image from "next/image";

const aleo = Aleo({ subsets: ["latin"] });

const ContactArea = () => {
  return (
    <>
      <div className="py-8 md:py-24">        
        <div
          className={`container text-xl font-bold md:text-2xl text-pakistanGreen mb-6 md:mb-12 ${aleo.className}`}
        >
          Are you a Voyager Customer looking for Support & Accounts Enquiries?
        </div>
        <GridCols
          component1={
            <>
              <div className="flex flex-row items-center space-x-4 mb-4">
                <Image
                  src="/assets/support.svg"
                  alt="phone"
                  width={40}
                  height={40}
                />
                <div className="font-bold text-lg">Support</div>
              </div>
              <div className="">
                For password resets, please use the{" "}
                <span className="font-bold">Password Reset</span> function on
                the Voyager Login page or click here. If you are unable to lodge
                a request through the{" "}
                <span className="font-bold">Help Tab</span> in
              </div>
            </>
          }
          component2={
            <>
              <div className="flex flex-row items-center space-x-4 mb-4">
                <Image
                  src="/assets/accounts.svg"
                  alt="phone"
                  width={40}
                  height={40}
                />
                <div className="font-bold text-lg">Accounts</div>
              </div>
              <div className="">
                For password resets, please use the{" "}
                <span className="font-bold">Password Reset</span> function on
                the Voyager Login page or click here. If you are unable to lodge
                a request through the{" "}
                <span className="font-bold">Help Tab</span> in
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default ContactArea;
