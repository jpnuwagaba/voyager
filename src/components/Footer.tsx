import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-cornSilk py-8 md:py-16">
        <div className="container flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">Voyager</h3>
            <p className="text-xs text-gray-700">
              2024 Voyager &copy; All Rights Reserved
            </p>
          </div>
          {/* // footer grid here */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 text-sm">
            <div className="flex flex-col space-y-4 items-start">
              <h3 className="font-bold text-gray-700 font-bold">Voyager</h3>
              <Link href={""}>About Us</Link>
              <Link href={""}>Team</Link>
              <Link href={""}>Careers</Link>
              <Link href={""}>Contact Us</Link>
            </div>
            <div className="flex flex-col space-y-4 items-start">
              <h3 className="font-bold text-gray-700 font-bold">Product</h3>
              <Link href={""}>Security</Link>
              <Link href={""}>Features</Link>
              <Link href={""}>Pricing</Link>
              <Link href={""}>Integrations</Link>
              <Link href={""}>API Documentation</Link>
              <Link href={""}>Status & Updates</Link>
            </div>
            <div className="flex flex-col space-y-4 items-start">
              <h3 className="font-bold text-gray-700 font-bold">Resources</h3>
              <Link href={""}>Blog</Link>
              <Link href={""}>Help Center</Link>
              <Link href={""}>Templates & Downloads</Link>
            </div>
            <div className="flex flex-col space-y-4 items-start">
              <h3 className="font-bold text-gray-700 font-bold">
                Social Media
              </h3>
              <Link href={""}>Facebook</Link>
              <Link href={""}>Twitter</Link>
              <Link href={""}>Instagram</Link>
              <Link href={""}>LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
