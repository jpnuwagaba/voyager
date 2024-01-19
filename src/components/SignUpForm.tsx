"use client";

import React, { useEffect, useRef } from "react";
import { GrStatusGood } from "react-icons/gr";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const Recaptcha = () => {
  const recaptchaRef = useRef(null);
  useEffect(() => {
    if (recaptchaRef.current) {
      console.log(recaptchaRef.current);
    }
  }, []);
  return (
    <>
      <div ref={recaptchaRef}></div>
    </>
  );
};

const SignUpForm = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-10 text-center shadow">
        <div className="text-2xl text-pakistanGreen font-bold mb-3">
          voyager
        </div>
        <div className="text-xl md:text-2xl font-bold mb-3">
          Try Voyger for FREE
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 text-sm">
            <div className="flex flex-row items-center">
              <GrStatusGood className="text-pakistanGreen mr-2" />
              <div className="text-pakistanGreen text-left">No credit card required</div>
            </div>
            <div className="flex flex-row items-center">
              <GrStatusGood className="text-pakistanGreen mr-2" />
              <div className="text-pakistanGreen text-left">Cancel Anytime</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 mt-5">
          <input
            className="border border-gray-300 rounded-md p-2 w-64 md:w-96 "
            type="text"
            placeholder="Name"
          />
          <input
            className="border border-gray-300 rounded-md p-2 w-64 md:w-96 "
            type="text"
            placeholder="Email"
          />
          <input
            className="border border-gray-300 rounded-md p-2 w-64 md:w-96 "
            type="password"
            placeholder="Password"
          />
          <div className="flex flex-row items-center gap-5 ">
            <input className="cursor-pointer" type="checkbox" />
            <div className="text-sm">
              I agree to the{" "}
              <span className="text-pakistanGreen">Terms of Service</span> and{" "}
              <span className="text-pakistanGreen">Privacy Policy</span>
            </div>
          </div>
          <button className="bg-pakistanGreen text-sm font-bold text-white rounded-md p-2 w-64 md:w-96 ">
            Try it FREE
          </button>
        </div>
        <div className="mt-5">
          <div className="text-gray-600 text-sm">or continue with:</div>
          <div className="flex flex-col items-center">
            <div className="mt-5 flex flex-row items-center gap-4">
              <Link href={""}>
                <Image className="bg-gray-50 p-2 rounded-full border border-gray-300"
                  src="/assets/google.svg"
                  alt="Google"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href={""}>
                <Image className="bg-gray-50 p-2 rounded-full border border-gray-400"
                  src="/assets/facebook.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
                </Link>
              <Link href={""}>
                <Image className="bg-gray-50 p-2 rounded-full border border-gray-400"
                  src="/assets/apple.svg"
                  alt="Apple"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5 text-sm">Already have an account! <span className="text-tigerEye underline"><Link href={'/'}>Sign In</Link></span></div>
      </div>
    </>
  );
};

export default SignUpForm;
