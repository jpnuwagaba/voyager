"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function Studio() {
  return (
    <>
      <div className="absolute w-full z-50">
        <NextStudio config={config} />
      </div>
    </>
  );
}
