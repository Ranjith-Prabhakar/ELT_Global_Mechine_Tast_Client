import React from "react";
import LeftPortion from "./left";
import RightPortion from "./right";

type Props = {};

const DashBoard = (props: Props) => {
  return (
    <div className="flex h-full">
      <LeftPortion />
      <RightPortion />
    </div>
  );
};

export default DashBoard;
