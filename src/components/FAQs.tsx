"use client";

import React from "react";
import GridCols from "./GridCols";
import { Aleo } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import client from "@/sanity/sanity.client";
export type FAQSTypes = {
  question: string;
  answer: string;
};
import Skeleton from "react-loading-skeleton";

const aleo = Aleo({ subsets: ["latin"] });

const FAQs = () => {
  const [faqs, setFaqs] = React.useState<FAQSTypes[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    client
      .fetch(
        `*[_type == "faqs"]{
        question,
        answer
      }`
      )
      .then((res) => {
        setFaqs(res);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="py-8 md:py-24">
        <div className="container">
          <GridCols
            component1={
              <>
                <>
                  <div className="text-sm uppercase text-gray-600 mb-4">
                    faqs
                  </div>
                  <div className={`text-4xl font-bold mb-4 ${aleo.className}`}>
                    Everything you need to know
                  </div>
                  <div className="text-lg text-gray-600 mb-8">
                    Discover important details about our product.
                  </div>
                </>
              </>
            }
            component2={
              <>
                <Accordion type="single" collapsible>
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default FAQs;
