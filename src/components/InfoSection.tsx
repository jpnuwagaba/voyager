import React, { FC } from "react";
import { Button } from "flowbite-react";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import Link from "next/link";
interface Props {
  title: string;
  tagline: string;
  description: string;
  direction: "left" | "right";
  component: React.ReactNode;
  link: string;
  callToAction: string;
  callToActionBgColor?: string;
};
import {Aleo} from 'next/font/google'

const aleo = Aleo({subsets: ['latin']})

const InfoSection: FC<Props> = ({
  title,
  tagline,
  description,
  direction,
  component,
  link,
  callToAction,
  callToActionBgColor,
}) => {
  return (
    <>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <div className="text-sm uppercase text-gray-600 mb-4">{title}</div>
          <div className={`text-4xl font-bold mb-4 ${aleo.className}`}>{tagline}</div>
          <div className="text-lg text-gray-600 mb-8">{description}</div>
          <Link href={link}>
            <Button className={callToActionBgColor} color="dark" size="lg">
              {callToAction}
              <HiOutlineArrowNarrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
        <div>{component}</div>
      </div>
    </>
  );
};

export default InfoSection;
