import PageHeader from "@/components/PageHeader";
import React from "react";
import Plans from "@/components/Plans";
import Clients from "@/components/Clients";

const page = () => {
  return (
    <>
      <PageHeader
        pageName="Pricing"
        pageHeading="Simple and affordable pricing for all your invoicing needs. Get started for a low monthly fee"
        pageHeadingMini="We have a plan for everyone"
      />
      <Plans />
      <Clients />
    </>
  );
};

export default page;
