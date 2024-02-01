import React from "react";
import PricingCards from "./PricingCards";
import { Aleo } from "next/font/google";

const aleo = Aleo({subsets: ['latin']})

const Plans = () => {
  return (
    <>
      <div className="py-8 md:py-24">
        <div className={`container text-center text-2xl md:text-4xl font-bold mb-4 ${aleo.className}`}>
          Clear and Easy-to-Understand Pricing
        </div>
        <div className="text-center text-gray-500 mb-8 md:mb-16">
          Discover the perfect plan for your invoicing needs, or get assistance
          from our team of professionals.
        </div>
          <PricingCards />
      </div>
    </>
  );
};

export default Plans;
