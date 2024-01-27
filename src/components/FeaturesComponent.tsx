"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import client from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
export type AppFeatureType = {
  name: string;
  description: any;
  imageUrl: string; // Add the 'imageUrl' property to the type definition
};
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";

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
      <div className="container">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-row items-center gap-4 mt-6">
              <Image
                className="bg-gray-100 p-[15px] border rounded-lg"
                src={feature.imageUrl}
                width={60}
                height={60}
                alt={feature.name}
              />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
          ))}
          <Link href={""}></Link>
        </div>
      </div>
    </>
  );
};

export default FeaturesComponent;
