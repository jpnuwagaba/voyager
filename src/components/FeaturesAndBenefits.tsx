import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import InfoSection from "./InfoSection";
import FeaturesComponent from "./FeaturesComponent";

const FeaturesAndBenefits = () => {
  return (
    <>
      <div className="bg-[cornSilk]">
        <InfoSection
          title="Features and Benefits"
          tagline="The best of both worlds"
          description="We offer the best of both worlds: the convenience of a digital bank and the personal service of a traditional bank."
          direction="left"
          component={
            <Image
              src={`/assets/woman-smiling.jpg`}
              width={500}
              height={500}
              alt="Features and Benefits"
            />
          }
          link="/"
          callToAction="Get Started Today"
          callToActionBgColor="bg-pakistanGreen"
        />
        {/* <FeaturesComponent /> */}
      </div>
    </>
  );
};

export default FeaturesAndBenefits;
