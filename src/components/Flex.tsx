import React, { FC } from "react";
interface Props {
  component1: React.ReactNode;
  component2: React.ReactNode;
  itemsAlign?: "start" | "center" | "end";
}

const Flex: FC<Props> = ({ component1, component2, itemsAlign }) => {
  return (
    <>
      <div className={`container flex flex-col lg:flex-row gap-8 lg:gap-16 ${itemsAlign}`}>
        <div>{component1}</div>
        <div>{component2}</div>
      </div>
    </>
  );
};

export default Flex;
