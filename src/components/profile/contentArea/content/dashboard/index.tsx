import React from "react";

type Props = {};

const DashBoard = (props: Props) => {
  return (
    <div className="flex gap-3 h-full">
      {/* left side */}
      <div className="w-[642px] h-full flex flex-col justify-between ">
        <div className="h-[829px] w-[606px] p-[18px] bg-[#FFFFFF] rounded-[12px] border-[.5px] border-[#0000000D] border-opacity-10 shadow-custom">
          main
        </div>
        <div className="h-[64px] w-[606px] bg-sky-800">pagination</div>
      </div>
      {/* right side  */}
      <div className="w-[608px] h-[829px] bg-slate-500"></div>
    </div>
  );
};

export default DashBoard;
