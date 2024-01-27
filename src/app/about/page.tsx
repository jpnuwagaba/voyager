"use client";

import React from "react";
import AboutUsPageIntro from "@/components/AboutUsPageIntro";
import WhyChooseVoyager from "@/components/WhyChooseVoyager";
import Clients from "@/components/Clients";
import Commitments from "@/components/Commitments";

const page = () => {
  return (
    <>      
      <AboutUsPageIntro />
      <WhyChooseVoyager />
      <Clients />
      <Commitments />
    </>
  );
};

export default page;
