import React, { FC } from "react";
interface Props {
  component1: React.ReactNode;
  component2: React.ReactNode;
  itemsAlign?: "start" | "center" | "end";
}

const GridCols: FC<Props> = ({ component1, component2, itemsAlign }) => {
  return (
    <>
      <div className={`container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ${itemsAlign}`}>
        <div>{component1}</div>
        <div>{component2}</div>
      </div>
    </>
  );
};

export default GridCols;
