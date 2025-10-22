import React from "react";
import { Link } from "react-router";

export default function Tools() {
  return (
    <div className="w-full bg-secondary-bg-color overflow-x-hidden">
      <div className="container mx-auto flex justify-center h-full items-center py-4 gap-4 md:gap-8 lg:gap-16 xl:gap-24 px-4 flex-wrap">
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap hover:text-blue-100 transition-colors duration-300"
        >
          Thị trường
        </Link>
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap hover:text-blue-100 transition-colors duration-300"
        >
          Kinh tế vĩ mô
        </Link>
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap hover:text-blue-100 transition-colors duration-300"
        >
          Tin ngành
        </Link>
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap hover:text-blue-100 transition-colors duration-300"
        >
          Quốc tế
        </Link>
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap hidden sm:inline-block hover:text-blue-100"
        >
          Chính sách
        </Link>
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap hidden lg:inline-block"
        >
          Phân tích
        </Link>
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color whitespace-nowrap hidden lg:inline-block"
        >
          Công cụ
        </Link>
      </div>
    </div>
  );
}
