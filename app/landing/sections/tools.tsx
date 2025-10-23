import React from "react";
import { Link } from "react-router";

export default function Tools() {
  return (
    <div className="w-full bg-secondary-bg-color  overflow-x-hidden transition-colors duration-300">
      <div className="container mx-auto flex justify-center h-full items-center py-4 gap-4 md:gap-8 lg:gap-16 xl:gap-24 px-4 flex-wrap">
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300"
        >
          Trang Chủ
        </Link>

        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300"
        >
          Thị trường
        </Link>
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300"
        >
          Kinh tế vĩ mô
        </Link>
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300"
        >
          Tin ngành
        </Link>
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300 hidden md:inline-block"
        >
          Quốc tế
        </Link>
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hidden md:inline-block hover:text-blue-100 :text-blue-400"
        >
          Chính sách
        </Link>
        <Link
          to={"/"}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hidden lg:inline-block hover:text-blue-100 :text-blue-400"
        >
          Phân tích
        </Link>
      </div>
    </div>
  );
}
