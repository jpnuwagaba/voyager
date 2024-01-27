import React, { FC } from "react";
import { Aleo } from "next/font/google";
interface Props {
  pageName: string;
  pageHeading: string;
  pageHeadingMini: string;
}

const aleo = Aleo({ subsets: ["latin"] });

const PageHeader: FC<Props> = ({ pageName, pageHeading, pageHeadingMini }) => {
  return (
    <>
      <div className="bg-cornSilk">
        <div className="container">
          <div className="pt-[200px] pb-[100px] lg:w-[60%] text-pakistanGreen">
            <div
              className={`text-xl md:text-3xl lg:text-4xl ${aleo.className}`}
            >
              {pageHeading}
            </div>
            <div className="text-sm uppercase mt-5">
              {pageName}*{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
