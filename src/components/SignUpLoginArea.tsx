import React from "react";
import SignUpForm from "./SignUpForm";
import GridCols from "./GridCols";
import Image from "next/image";
import { Aleo } from "next/font/google";

const aleo = Aleo({ subsets: ["latin"] });

const SignUpLoginArea = () => {
  return (
    <>
      <div className="bg-cornSilk py-8 md:py-16">
        <div className="container">
          <GridCols
            component1={
              <>
                <div className="lg:mt-16 lg:ml-16">
                  <Image
                    src="/assets/get-started.png"
                    alt="Ready to get started?"
                    width={250}
                    height={250}
                  />
                  <div
                    className={`text-xl md:text-3xl text-pakistanGreen font-bold my-3 ${aleo.className}`}
                  >
                    Ready to get started? Welcome to Voyager!
                  </div>
                  <div className="text-sm md:text-base mb-3">
                    We are excited to help you streamline your invoicing and get
                    paid faster. Sign up for your free account today and
                    experience the ease of creating, sending, and tracking
                    invoices online.
                  </div>
                </div>
              </>
            }
            component2={<SignUpForm />}
            itemsAlign="start"
          />
        </div>
      </div>
    </>
  );
};

export default SignUpLoginArea;
