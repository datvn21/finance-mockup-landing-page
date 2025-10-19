import React from "react";
import { Link } from "react-router";

export default function Tools() {
  return (
    <div className="w-full bg-secondary-bg-color overflow-x-hidden">
      <div className="container mx-auto flex justify-center h-full items-center py-4 gap-4 md:gap-8 lg:gap-16 xl:gap-24 px-4 flex-wrap">
        <Link
          to={"/"}
          className="font-normal cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap"
        >
          Market
        </Link>
        <Link
          to={"/"}
          className="font-normal cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap"
        >
          Economy
        </Link>
        <Link
          to={"/"}
          className="font-normal cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap"
        >
          Industrial
        </Link>
        <Link
          to={"/"}
          className="font-normal cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap"
        >
          International
        </Link>
        <Link
          to={"/"}
          className="font-normal cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap hidden sm:inline-block"
        >
          Policy
        </Link>
        <Link
          to={"/"}
          className="font-normal cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap hidden lg:inline-block"
        >
          Opinion
        </Link>
        <Link
          to={"/"}
          className="font-normal cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap hidden lg:inline-block"
        >
          Tools
        </Link>
      </div>
    </div>
  );
}
