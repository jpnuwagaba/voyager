import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Automatic payment reminders",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.",
    image: "/assets/reminder.svg",
  },
];

const FeaturesComponent = () => {
  return (
    <>
      <div className="container-2 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="border rounded-xl border-pakistanGreen p-8">
              <Image
                src={feature.image}
                width={50}
                height={50}
                alt="Features and Benefits"
              />
              <div className="text-lg md:text-xl font-bold mt-4">
                {feature.title}
                </div>
            </div>
          ))}
          <div className="border border-pakistanGreen p-8 rounded-xl bg-pakistanGreen text-white">
            <div className="text-2xl md:text-3xl font-bold">
              {features[0].title}
            </div>
            <div className="text-gray-100 text-sm mt-4">
              {features[0].description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesComponent;
