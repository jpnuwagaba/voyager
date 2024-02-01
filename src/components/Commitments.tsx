import React from "react";
import client from "@/sanity/sanity.client";
export type CommitmentsTypes = {
  title: string;
  description: any;
};
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Aleo } from "next/font/google";

const aleo = Aleo({ subsets: ["latin"] });

const Commitments = () => {
  const [commitments, setCommitments] = React.useState<CommitmentsTypes[]>([]);

  React.useEffect(() => {
    client.fetch(`*[_type == "commitments"]`).then((res) => {
      setCommitments(res);
    });
  }, []);

  return (
    <>
      <div className="py-8 md:py-24">
        <div className={`container text-center text-2xl md:text-4xl font-bold mb-5 md:mb-10 ${aleo.className}`}>
          Our Commitments to you
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start container">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-cornSilk rounded-xl p-8"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                <Image
                  className="-rotate-12"
                  src="/assets/quality.svg"
                  alt="Quality"
                  width={50}
                  height={50}
                />
                <h3 className="text-lg font-bold">{commitment.title}</h3>
              </div>
              <div className="text-gray-600 text-sm mt-4">
                <PortableText value={commitment.description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Commitments;
