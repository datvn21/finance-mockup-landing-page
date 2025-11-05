import { Bell, Search, Moon, Sun } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useLanguage } from "~/i18n/LanguageContext";
import Tools from "./Tools";
import RTFLogo from "../assets/rtf-logo-final.svg?react";
export default function NavBar({
  setDarkMode,
  darkMode,
}: {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const { language, t } = useLanguage();
  const location = useLocation();

  // Get the opposite language path
  const getLanguagePath = () => {
    const currentPath = location.pathname;
    if (language === "vi") {
      // Switch to English
      if (currentPath === "/" || currentPath === "/vi") {
        return "/en";
      }
      return currentPath.replace(/^\/vi/, "/en");
    } else {
      // Switch to Vietnamese
      if (currentPath === "/en") {
        return "/vi";
      }
      return currentPath.replace(/^\/en/, "/vi");
    }
  };

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add shadow when scrolled
      setHasScrolled(currentScrollY > 10);

      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        // setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`w-full bg-main-bg-color fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${hasScrolled ? "shadow-md" : ""}`}
    >
      {/* changed container  sm:px-8  to flex for better responsive control */}
      <div className="container  sm:px-8  mx-auto py-3 px-4 flex items-center justify-between bg-main-bg-color">
        <Link
          to={language === "vi" ? "/" : `/${language}`}
          className="text-start text-nowrap text-secondary-bg-color my-auto font-bold inline-flex flex-col cursor-pointer select-none"
        >
          <RTFLogo className="h-4 md:h-6 w-fit mb-1 fill-secondary-bg-color" />
          <span className="text-[8px] md:text-[10px] font-normal text-gray-500">
            {t("siteDescription")}
          </span>
        </Link>

        {/* full search: visible on md+ */}
        <div className="hidden md:block flex-1 max-w-[480px] mx-6">
          <div className="relative inline-block w-full">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-main-text-color md:text-icon-color" />
            <input
              className="w-full pl-10 pr-3 py-2 border-2 rounded-full border-main-text-color/20 focus:border-main-text-color/30 focus:outline-none placeholder:text-main-text-color/60"
              type="text"
              placeholder={t("search")}
              aria-label={t("search")}
            />
          </div>
        </div>

        {/* right area */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* mobile menu button (shows Sign In / Sign Up on small screens) */}
          <div className="md:hidden" ref={mobileMenuRef}>
            {mobileMenuOpen && (
              <div className="absolute right-4 top-14 mt-2 w-44 bg-main-bg-color border rounded-md shadow-md z-[99]">
                <div className="flex flex-col p-2">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded hover:bg-main-bg-color/80"
                  >
                    {t("signIn")}
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded hover:bg-main-bg-color/80"
                  >
                    {t("signUp")}
                  </Link>
                  <Link
                    to={getLanguagePath()}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-left rounded hover:bg-main-bg-color/80"
                  >
                    {t("language")}: {language.toUpperCase()}
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* mobile search icon: toggles compact search */}
          <div className="md:hidden" ref={searchRef}>
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label={t("search")}
              className="p-2 rounded-md "
            >
              <Search className="md:w-5 md:h-5 text-main-text-color " />
            </button>

            {/* mobile search dropdown */}
            {searchOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[90%] sm:w-80 z-50">
                <div className="bg-main-bg-color p-2 rounded-xl shadow-md">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-icon-color " />
                    <input
                      autoFocus
                      className="w-full pl-10 pr-3 py-2 border rounded-lg border-main-text-color/20 focus:border-main-text-color/30  focus:border-2 focus:outline-none placeholder:text-main-text-color/60"
                      type="text"
                      placeholder={t("search")}
                      aria-label={t("search")}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* language button - first on desktop */}
          <Link
            to={getLanguagePath()}
            className="px-2 py-1 rounded-md  text-sm hidden md:inline-flex cursor-pointer hover:opacity-50"
            aria-label={t("language")}
          >
            VI/EN
          </Link>

          <Link
            to="/register"
            className="hidden md:inline-block hover:opacity-50 cursor-pointer "
          >
            {t("signUp")}
          </Link>

          <Link
            to="/login"
            className="hidden md:inline-block hover:opacity-50 cursor-pointer "
          >
            {t("signIn")}
          </Link>

          <div className="flex items-center gap-3">
            <div className="cursor-pointer hover:opacity-70">
              <Bell className=" w-6 h-6" />
            </div>
          </div>
          {/* Dark/Light mode toggle */}
          <button
            onClick={() => setDarkMode((m) => !m)}
            className="p-2 rounded-md hover:bg-main-bg-color/80 inline-flex cursor-pointer"
            aria-label="Chuyển chế độ hiển thị"
          >
            {!darkMode ? (
              <Sun className=" text-main-text-color" />
            ) : (
              <Moon className=" text-main-text-color" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Mở menu"
            className="p-2 rounded-md md:hidden "
          >
            {/* simple hamburger */}
            <svg
              className="w-6 h-6 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <Tools />
    </nav>
  );
}
