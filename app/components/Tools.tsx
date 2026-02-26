import { Home } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { useLanguage } from "~/i18n/LanguageContext";

export default function Tools() {
  const { language, t } = useLanguage();
  const basePath = language === "vi" ? "/" : `/${language}`;

  return (
    <div className="w-full sm:px-8 bg-secondary-bg-color  overflow-x-hidden transition-colors duration-300">
      <div className="container sm:px-8  mx-auto flex justify-center h-full items-center py-3 gap-4 md:gap-8 lg:gap-16 xl:gap-24 px-4 flex-wrap">
        <Link
          to={basePath}
          className="font-bold cursor-pointer text-xs md:text-sm text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            aria-label="Trang chủ"
            role="img"
          >
            <path
              d="M17.9688 8C17.9688 8.5625 17.5 9 16.9688 9H15.9688L16 14C16 14.0938 16 14.1875 16 14.25V14.75C16 15.4688 15.4375 16 14.75 16H14.25C14.1875 16 14.1562 16 14.125 16C14.0938 16 14.0312 16 14 16H13H12.25C11.5312 16 11 15.4688 11 14.75V14V12C11 11.4688 10.5312 11 10 11H8C7.4375 11 7 11.4688 7 12V14V14.75C7 15.4688 6.4375 16 5.75 16H5H4C3.9375 16 3.90625 16 3.84375 16C3.8125 16 3.78125 16 3.75 16H3.25C2.53125 16 2 15.4688 2 14.75V11.25C2 11.25 2 11.2188 2 11.1875V9H1C0.4375 9 0 8.5625 0 8C0 7.71875 0.09375 7.46875 0.3125 7.25L8.3125 0.25C8.53125 0.03125 8.78125 0 9 0C9.21875 0 9.46875 0.0625 9.65625 0.21875L17.625 7.25C17.875 7.46875 18 7.71875 17.9688 8Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
        <Link
          to={basePath}
          className="font-bold cursor-pointer text-xs md:text-sm text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300"
        >
          {t("market")}
        </Link>
        <Link
          to={basePath}
          className="font-bold cursor-pointer text-xs md:text-sm text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300"
        >
          {t("economy")}
        </Link>
        <Link
          to={basePath}
          className="font-bold cursor-pointer text-xs md:text-sm text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300 inline-block"
        >
          {t("industry")}
        </Link>
        <Link
          to={basePath}
          className="font-bold cursor-pointer text-xs md:text-sm text-secondary-text-color  whitespace-nowrap hover:text-blue-100  :text-blue-400 transition-colors duration-300 "
        >
          {t("world")}
        </Link>
        <Link
          to={basePath}
          className="font-bold cursor-pointer text-xs md:text-sm text-secondary-text-color  whitespace-nowrap hidden md:inline-block hover:text-blue-100 :text-blue-400"
        >
          {t("policy")}
        </Link>
        <Link
          to={basePath}
          className="font-bold cursor-pointer text-xs md:text-sm text-secondary-text-color  whitespace-nowrap hidden lg:inline-block hover:text-blue-100 :text-blue-400"
        >
          {t("opinion")}
        </Link>
        <Link
          to={basePath}
          className="font-bold cursor-pointer text-xs md:text-sm hidden xl:inline-block  text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300"
        >
          {t("toolsMenu")}
        </Link>
        <Link
          to={basePath}
          className="font-bold cursor-pointer text-xs md:text-sm text-secondary-text-color  whitespace-nowrap inline-block hover:text-blue-100 :text-blue-400"
        >
          {t("more")}
        </Link>
      </div>
    </div>
  );
}
