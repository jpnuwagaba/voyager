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
import { Button } from "flowbite-react";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const FeaturesComponent = () => {
  const [features, setFeatures] = React.useState<FeaturesType[]>([]);

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
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start space-y-2 bg-white shadow rounded-xl p-6"
          >
            <div className="flex flex-row items-center gap-4">
              <Image
                className="bg-gray-100 bg-earthYellow p-[6px] rounded-lg"
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
        <Link href={""}>
          <Button color="dark" size={'3xl'} className="col-span-full w-full h-full bg-pakistanGreen text-white hover:bg-tigerEye hover:text-white">
            <div>Get Started Today</div>
            <HiOutlineArrowNarrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default FeaturesComponent;
