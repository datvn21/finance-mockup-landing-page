import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="w-screen bg-secondary-bg-color">
      <div className=" container mx-auto min-h-[280px] px-4 flex flex-wrap gap-4 sm:gap-8 md:gap-32 justify-around items-center">
        <ul className="flex flex-col gap-4 ">
          <Link
            className="text-secondary-text-color cursor-pointer hover:text-blue-600 transition-colors duration-300"
            to="/"
          >
            About Us
          </Link>
          <Link
            className="text-secondary-text-color cursor-pointer hover:text-blue-600 transition-colors duration-300"
            to="/"
          >
            Contact
          </Link>
          <Link
            className="text-secondary-text-color cursor-pointer hover:text-blue-600 transition-colors duration-300"
            to="/"
          >
            Privacy Policy
          </Link>
        </ul>
        <ul className="flex flex-col gap-4 blocl">
          <Link
            className="text-secondary-text-color cursor-pointer hover:text-blue-600 transition-colors duration-300"
            to="/"
          >
            About Us
          </Link>
          <Link
            className="text-secondary-text-color cursor-pointer hover:text-blue-600 transition-colors duration-300"
            to="/"
          >
            Contact
          </Link>
          <Link
            className="text-secondary-text-color cursor-pointer hover:text-blue-600 transition-colors duration-300"
            to="/"
          >
            Privacy Policy
          </Link>
        </ul>
        <ul className="flex flex-col gap-4 blocl">
          <Link
            className="text-secondary-text-color cursor-pointer hover:text-blue-600 transition-colors duration-300"
            to="/"
          >
            About Us
          </Link>
          <Link
            className="text-secondary-text-color cursor-pointer hover:text-blue-600 transition-colors duration-300"
            to="/"
          >
            Contact
          </Link>
          <Link
            className="text-secondary-text-color cursor-pointer hover:text-blue-600 transition-colors duration-300"
            to="/"
          >
            Privacy Policy
          </Link>
        </ul>
      </div>
    </div>
  );
}
