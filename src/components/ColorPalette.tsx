import React from "react";
import Image from "next/image";

const ColorPalette = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/assets/color-palette.png"
        alt="Vercel Logo"
        width={500}
        height={16}
      />
    </div>
  );
};

export default ColorPalette;
