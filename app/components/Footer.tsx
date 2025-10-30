import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { useLanguage } from "~/i18n/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const basePath = language === "vi" ? "/" : `/${language}`;

  return (
    <footer className="w-full bg-footer-bg-color text-gray-200">
      <div className="container mx-auto sm:px-8">
        <div className="w-full sm:px-0 px-4 flex md:flex-row flex-col gap-4 md:gap-0 flex-wrap justify-between py-4">
          <div>
            <Link
              to={basePath}
              className="text-start text-nowrap text-xl md:text-2xl my-auto font-bold inline-flex flex-col cursor-pointer select-none"
            >
              {t("siteName")}
              <span className="text-xs text-gray-400">
                {t("siteDescriptionFull")}
              </span>
            </Link>
          </div>
          <div className="flex flex-col md:items-end gap-1">
            <span className="text-sm">{t("followUs")}</span>
            <ul className="flex gap-4 items-center">
              <li className="cursor-pointer">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10.5607C20 5.004 15.5233 0.5 10 0.5C4.47667 0.5 0 5.004 0 10.5607C0 15.5833 3.656 19.7453 8.43733 20.5V13.4693H5.89867V10.56H8.43733V8.344C8.43733 5.82267 9.93 4.42933 12.2147 4.42933C13.308 4.42933 14.4533 4.626 14.4533 4.626V7.102H13.1913C11.9493 7.102 11.5627 7.878 11.5627 8.674V10.5607H14.336L13.8927 13.4687H11.5627V20.5C16.344 19.7453 20 15.5833 20 10.5607Z"
                    fill="white"
                  ></path>
                </svg>
              </li>
              <li className="cursor-pointer">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.792 0.914829C18.6521 1.14589 19.3325 1.82626 19.5635 2.68633C19.9872 4.25244 20 7.50019 20 7.50019C20 7.50019 20 10.7608 19.5764 12.3141C19.3453 13.1741 18.665 13.8545 17.8049 14.0856C16.2516 14.5092 10 14.5092 10 14.5092C10 14.5092 3.74839 14.5092 2.19512 14.0856C1.33504 13.8545 0.654686 13.1741 0.42362 12.3141C0 10.748 0 7.50019 0 7.50019C0 7.50019 0 4.25244 0.410783 2.69917C0.641849 1.83909 1.32221 1.15873 2.18229 0.927671C3.73556 0.504045 9.98716 0.491211 9.98716 0.491211C9.98716 0.491211 16.2388 0.491211 17.792 0.914829ZM13.1836 7.5002L7.99743 10.504V4.49635L13.1836 7.5002Z"
                    fill="white"
                  ></path>
                </svg>
              </li>
              <li className="cursor-pointer">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 20.0723C15.5228 20.0723 20 15.5951 20 10.0723C20 4.54942 15.5228 0.0722656 10 0.0722656C4.47715 0.0722656 0 4.54942 0 10.0723C0 15.5951 4.47715 20.0723 10 20.0723ZM13.7259 14.273C14.0106 14.4357 14.3751 14.3597 14.546 14.0887C14.7168 13.8176 14.6257 13.4706 14.3409 13.3079C11.8352 11.8441 8.7144 11.5079 5.08106 12.2995C4.76215 12.3646 4.56852 12.6682 4.63686 12.9718C4.7052 13.2754 5.02411 13.4597 5.34302 13.3947C8.66884 12.679 11.4821 12.9718 13.7259 14.273ZM14.6826 11.8549C15.0357 12.0501 15.4913 11.9525 15.7077 11.6164C15.9241 11.2802 15.8102 10.8465 15.4799 10.6513C12.53 8.92718 8.22464 8.45006 4.76215 9.44766C4.3635 9.5561 4.1471 9.94646 4.261 10.326C4.37489 10.6947 4.78493 10.9007 5.18357 10.7923C8.21325 9.91393 12.1199 10.3477 14.6826 11.8549ZM4.72798 7.98379C7.66654 7.138 12.735 7.30066 15.8102 9.03561C16.2316 9.28501 16.7784 9.14404 17.0175 8.73199C17.2681 8.33079 17.1314 7.8103 16.71 7.57174C13.1792 5.57655 7.57542 5.38136 4.20405 6.35728C3.73707 6.49824 3.46371 6.97535 3.61178 7.41993C3.75985 7.87536 4.261 8.12476 4.72798 7.98379Z"
                    fill="white"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-x pb-8 border-gray-400/50">
          <div className=" px-4 flex flex-col flex-wrap md:flex-row justify-between md:space-y-4">
            <div className="py-4">
              <span className="font-bold">{t("categories")}</span>
              <div>
                <ul className="grid grid-cols-3 gap-4 mt-4 space-x-4">
                  <li className="cursor-pointer hover:underline text-white/80">
                    {t("economy")}
                  </li>
                  <li className="cursor-pointer hover:underline text-white/80">
                    {t("industry")}
                  </li>
                  <li className="cursor-pointer hover:underline text-white/80">
                    {t("world")}
                  </li>
                  <li className="cursor-pointer hover:underline text-white/80">
                    {t("policy")}
                  </li>
                  <li className="cursor-pointer hover:underline text-white/80">
                    {t("perspective")}
                  </li>
                  <li className="cursor-pointer hover:underline text-white/80">
                    {t("libraryShort")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 hidden h-full border-l-gray-400/50 py-4 pl-4">
              <span className="font-bold">{t("quickAccess")}</span>
              <div>
                <ul className="grid grid-cols-2 w-fit gap-4 mt-4 space-x-4">
                  <li className="cursor-pointer hover:underline text-white/80">
                    {t("support")}
                  </li>
                  <li className="cursor-pointer hover:underline text-white/80">
                    {t("aboutUs")}
                  </li>
                  <li className="cursor-pointer hover:underline text-white/80">
                    {t("careers")}
                  </li>
                  <li className="cursor-pointer hover:underline text-white/80">
                    {t("policies")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:items-end py-4">
              <span className="font-bold">{t("contact")}</span>
              <button className="px-4 py-2 cursor-pointer text-xs border-white rounded-md border">
                {t("adPartnership")}
              </button>
              <p className="text-xs md:text-right">
                {t("customerCare")}: 0xxxxxxxxx
                <br />
                {t("email")}: xxx@rtf.vn
              </p>
            </div>
          </div>
          <div className="px-4 border-t py-4 grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 border-gray-400/50">
            <div className="text-sm text-white/80 space-y-1">
              <p>{t("licenseInfo")}</p>
              <p>{t("responsiblePerson")}</p>
              <p>{t("address")}</p>
              <p> {t("phone")}: 0388.681001</p>
            </div>
            <div className="flex md:items-end flex-col gap-2 text-white/80">
              <div className="flex flex-wrap gap-4 text-sm underline">
                <p className="hover:underline-offset-2 cursor-pointer">
                  {t("termsConditions")}
                </p>
                <p className="hover:underline-offset-2 cursor-pointer">
                  {t("privacyPolicy")}
                </p>
              </div>
              <p className="text-sm">{t("copyright")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
