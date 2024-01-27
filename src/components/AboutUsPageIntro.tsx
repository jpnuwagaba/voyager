"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import GridCols from "@/components/GridCols";
import client from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";
export type AboutUsType = {
  title: string;
  description: any;
  imageUrl: string;
  imageAlt: string;
};
import { Aleo } from "next/font/google";
import Image from "next/image";

const aleo = Aleo({ subsets: ["latin"] });

const AboutUsPageIntro = () => {
  const [aboutUs, setAboutUs] = React.useState<AboutUsType[]>([]);

  const query = `*[_type == "aboutUs"]{
    title,
    description,
    "imageUrl": image.asset->url,
    imageAlt,
  }`;

  React.useEffect(() => {
    client.fetch(query).then((res) => {
      setAboutUs(res);
    });
  }, []);

  return (
    <>
      <div className="pt-[150px] pb-[100px] bg-cornSilk">
        <GridCols
          component1={
            <>
              {aboutUs.length > 0 && (
                <div
                  className={`text-lg md:text-2xl lg:text-3xl font-bold ${aleo.className}`}
                >
                  {aboutUs[0].title}
                </div>
              )}
              <div className="text-gray-600 mt-4">
                {aboutUs.length > 0 && (
                  <PortableText value={aboutUs[0].description} />
                )}
              </div>
            </>
          }
          component2={
            <>
              <div className="f">
                {aboutUs.length > 0 && (
                  <Image
                    className="rounded-xl"
                    src={aboutUs[0].imageUrl}
                    alt={aboutUs[0].imageAlt}
                    width={600}
                    height={500}
                  />
                )}
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default AboutUsPageIntro;
