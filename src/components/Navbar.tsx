"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [navbarPadding, setNavbarPadding] = useState("py-8");
  const [navbarBg, setNavbarBg] = useState("bg-[cornSilk]");
  const [menuShow, setMenuShow] = useState(false);

  const handleMenuShow = () => {
    setMenuShow(!menuShow);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarPadding("py-4");
      } else {
        setNavbarPadding("py-8");
      }
      if (window.scrollY > 0) {
        setNavbarBg("bg-white");
      } else {
        setNavbarBg("bg-[cornSilk]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed w-full z-40 ${navbarBg} transition-all duration-300 ease-in-out`}
      >
        <div className="relative">
          <div
            className={`container flex flex-row items-center justify-between ${navbarPadding} transition-all duration-300 ease-in-out`}
          >
            <div className="text-2xl font-bold z-50">voyager</div>
            <div className="flex flex-row items-center gap-4">
              <div className="hidden md:flex flex-row items-center gap-6 text-sm text-gray-600">
                <Link className="hover:text-[#333333]" href={"/"}>
                  Home
                </Link>
                <Link className="hover:text-[#333333]" href={"pricing"}>
                  Pricing
                </Link>
                <Link className="hover:text-[#333333]" href={"about"}>
                  About
                </Link>
                <Link className="hover:text-[#333333]" href={"contact-us"}>
                  Contact
                </Link>
                <div className="flex flex-row items-center space-x-2">
                <Link href={""}>
                  <Button >Sign In</Button>
                </Link>
                <Link href={""}>
                  <Button variant={'outline'}>
                    Sign Up
                  </Button>
                </Link>
                </div>
              </div>
              <div className="cursor-pointer z-50 md:hidden transition-all duration-300 ease-in-out">
                {menuShow ? (
                  <IoCloseOutline size={"1.5rem"} onClick={handleMenuShow} />
                ) : (
                  <CiMenuBurger size={"1.5rem"} onClick={handleMenuShow} />
                )}
              </div>
            </div>
          </div>
          {menuShow ? (
            <div className="absolute top-0 w-full bg-white scale-in-top">
              <div className="flex flex-col items-center gap-4 text-sm text-gray-600 py-20">
                <Link onClick={handleMenuShow} className="hover:text-[#333333]" href={"/"}>
                  Home
                </Link>
                <Link onClick={handleMenuShow} className="hover:text-[#333333]" href={"pricing"}>
                  Pricing
                </Link>
                <Link onClick={handleMenuShow} className="hover:text-[#333333]" href={"about"}>
                  About
                </Link>
                <Link onClick={handleMenuShow} className="hover:text-[#333333]" href={"contact-us"}>
                  Contact
                </Link>
                <Link onClick={handleMenuShow} href={""}>
                  <Button >Sign In</Button>
                </Link>
                <Link onClick={handleMenuShow} href={""}>
                  <Button >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Navbar;
