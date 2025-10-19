import React from "react";
import { Link } from "react-router";

export default function CostUpdate() {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto flex justify-center h-full items-center py-2 px-2 md:px-2 gap-8 xl:gap-16">
        <div className="flex flex-wrap flex-1 justify-between max-w-[320px] border-r-2 pr-4 ">
          <span className="text-xs md:text-md inline">
            VNINDEX – 1,301.24 –
          </span>
          <span className="up text-xs md:text-md"> +1.02%</span>
        </div>
        <div className="flex flex-wrap flex-1 justify-between max-w-[320px] border-r-2 pr-4">
          <span className="text-xs md:text-md">USD/VND – 24,560 – </span>
          <span className="up text-xs md:text-md"> -0.02%</span>
        </div>
        <div className="xl:flex flex-wrap hidden flex-1 justify-between max-w-[320px] border-r-2 pr-4">
          <span className="text-xs md:text-md">GOLD – 2,365.40 – </span>
          <span className="up text-xs md:text-md"> +0.12%</span>
        </div>
        <div className="xl:flex flex-wrap hidden flex-1 justify-between max-w-[320px] border-r-2 pr-4">
          <span className="text-xs md:text-md">WTI – 78.21 – </span>
          <span className="down text-xs md:text-md">-0.27%</span>
        </div>
      </div>
    </div>
  );
}
