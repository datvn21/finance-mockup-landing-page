import { Bell, Search } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";

export default function NavBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [lang, setLang] = useState<"EN" | "VI">("VI");

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
    <nav className="w-full bg-white relative">
      {/* changed container to flex for better responsive control */}
      <div className="container mx-auto py-3 px-4 flex items-center justify-between bg-white">
        <Link to="/" className="text-start my-auto font-bold inline-block">
          REAL TIME FINANCE
        </Link>

        {/* full search: visible on md+ */}
        <div className="hidden md:block flex-1 max-w-[480px] mx-6">
          <div className="relative inline-block w-full">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-icon-color" />
            <input
              className="w-full pl-10 pr-3 py-2 border rounded-xl border-main-text-color/20 focus:border-main-text-color/30 focus:border-2 focus:outline-none"
              type="text"
              placeholder="Tìm kiếm..."
              aria-label="Tìm kiếm"
            />
          </div>
        </div>

        {/* right area */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* mobile menu button (shows Sign In / Sign Up on small screens) */}
          <div className="md:hidden" ref={mobileMenuRef}>
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Mở menu"
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {/* simple hamburger */}
              <svg
                className="w-6 h-6"
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

            {mobileMenuOpen && (
              <div className="absolute right-4 top-full mt-2 w-44 bg-white border rounded-md shadow-md z-50">
                <div className="flex flex-col p-2">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded hover:bg-gray-50"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded hover:bg-gray-50"
                  >
                    Sign Up
                  </Link>
                  <button
                    onClick={() => {
                      setLang((l) => (l === "VI" ? "EN" : "VI"));
                      setMobileMenuOpen(false);
                    }}
                    className="px-3 py-2 text-left rounded hover:bg-gray-50"
                  >
                    Language: {lang}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* mobile search icon: toggles compact search */}
          <div className="md:hidden" ref={searchRef}>
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Mở tìm kiếm"
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <Search className="w-5 h-5 text-icon-color" />
            </button>

            {/* mobile search dropdown */}
            {searchOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[90%] sm:w-80 z-50">
                <div className="bg-white p-2 rounded-xl shadow-md">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-icon-color" />
                    <input
                      autoFocus
                      className="w-full pl-10 pr-3 py-2 border rounded-lg border-main-text-color/20 focus:border-main-text-color/30 focus:border-2 focus:outline-none"
                      type="text"
                      placeholder="Tìm kiếm..."
                      aria-label="Tìm kiếm"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/login" className="hidden md:inline-block hover:opacity-50">
            Sign In
          </Link>
          <Link
            to="/register"
            className="hidden md:inline-block hover:opacity-50"
          >
            Sign Up
          </Link>

          <div className="flex items-center gap-3">
            <div>
              <Bell />
            </div>
            {/* language button placed next to bell */}
            <button
              onClick={() => setLang((l) => (l === "VI" ? "EN" : "VI"))}
              className="px-2 py-1 rounded-md hover:bg-gray-100 text-sm hidden sm:inline-flex"
              aria-label="Toggle language"
            >
              {lang}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
