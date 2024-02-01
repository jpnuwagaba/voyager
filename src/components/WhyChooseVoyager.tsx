"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import client from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";
export type AppFeatureType = {
  name: string;
  description: any;
  imageUrl: string;
};
import { Aleo } from "next/font/google";

const aleo = Aleo({ subsets: ["latin"] });

const FeaturesComponent = () => {
  const [features, setFeatures] = useState<AppFeatureType[]>([]);

  const query = `*[_type == "appFeature"]{
    name,
    description,
    "imageUrl": image.asset->url,
  }`;

  React.useEffect(() => {
    client.fetch(query).then((res) => {
      setFeatures(res);
    });
  }, []);

  return (
    <>
      <div className="py-8 md:py-24">
        <div className="container">
          <div
            className={`text-2xl lg:text-4xl font-bold text-center mb-8 ${aleo.className}`}
          >
            Why choose Voyager
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start space-y-2">
                <div className="flex flex-col items-start gap-4">
                  <Image
                    src={feature.imageUrl}
                    width={40}
                    height={40}
                    alt={feature.name}
                  />
                  <h3 className="text-lg font-bold">{feature.name}</h3>
                </div>
                <div className="text-sm">
                  <PortableText value={feature.description} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesComponent;
