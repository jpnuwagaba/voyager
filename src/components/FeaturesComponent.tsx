import React from "react";
import Image from "next/image";

const FeaturesComponent = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-earthYellow p-4 gap-4 flex flex-row items-center">
          {/* <div className="text-4xl font-bold text-pakistanGreen mb-4">1.5%</div> */}
          <Image
            src={`/assets/reminder.svg`}
            width={50}
            height={50}
            alt="1.5% Cashback"
          />
          <div className="text-pakistanGreen text-xs uppercase text-left">
            Automatic payment reminders
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesComponent;
