import React from "react";
import { Link } from "react-router";
import { useLanguage } from "~/i18n/LanguageContext";

export default function Tools() {
  const { language, t } = useLanguage();
  const basePath = language === "vi" ? "/" : `/${language}`;

  return (
    <div className="w-full sm:px-8 bg-secondary-bg-color  overflow-x-hidden transition-colors duration-300">
      <div className="container  sm:px-8  mx-auto flex justify-center h-full items-center py-4 gap-4 md:gap-8 lg:gap-16 xl:gap-24 px-4 flex-wrap">
        <Link
          to={basePath}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300"
        >
          {t("home")}
        </Link>

        <Link
          to={basePath}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300"
        >
          {t("market")}
        </Link>
        <Link
          to={basePath}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300"
        >
          {t("economy")}
        </Link>
        <Link
          to={basePath}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hover:text-blue-100 :text-blue-400 transition-colors duration-300 hidden md:inline-block"
        >
          {t("industry")}
        </Link>
        <Link
          to={basePath}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hover:text-blue-100  :text-blue-400 transition-colors duration-300 hidden lg:inline-block"
        >
          {t("world")}
        </Link>
        <Link
          to={basePath}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hidden md:inline-block hover:text-blue-100 :text-blue-400"
        >
          {t("policy")}
        </Link>
        <Link
          to={basePath}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap hidden lg:inline-block hover:text-blue-100 :text-blue-400"
        >
          {t("opinion")}
        </Link>
        <Link
          to={basePath}
          className="font-semibold cursor-pointer text-sm md:text-base text-secondary-text-color  whitespace-nowrap inline-block hover:text-blue-100 :text-blue-400"
        >
          {t("more")}
        </Link>
      </div>
    </div>
  );
}
