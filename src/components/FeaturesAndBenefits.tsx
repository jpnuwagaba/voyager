import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import InfoSection from "./InfoSection";
import FeaturesComponent from "./FeaturesComponent";

const FeaturesAndBenefits = () => {
  return (
    <>
      <div className="bg-[cornSilk] py-8 md:py-24">
        <InfoSection
          title="Features and Benefits"
          tagline="The best of both worlds"
          description="We offer the best of both worlds: the convenience of a digital bank and the personal service of a traditional bank."
          direction="left"
          component={
            <Image
              className="rounded-xl"
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
        <div className="mt-8 md:mt-16">
        <FeaturesComponent />
        </div>
      </div>
    </>
  );
};

export default FeaturesAndBenefits;
