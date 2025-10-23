import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="w-screen bg-footer-bg-color text-gray-200">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-6">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold">
              RTF
            </div>
            <div>
              <Link to="/" className="text-lg font-semibold">
                Real Time Finance
              </Link>
              <div className="text-sm text-gray-400">Trang Thông Tin</div>
            </div>
          </div>

          {/* Links */}
          <nav className="flex gap-6">
            <ul className="flex flex-col text-sm text-gray-300 gap-2">
              <li>
                <Link to="/" className="hover:text-white">
                  Thị trường
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Phân tích
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col text-sm text-gray-300 gap-2">
              <li>
                <Link to="/" className="hover:text-white">
                  Quốc tế
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Tin ngành
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-sm text-gray-400 flex flex-col sm:flex-row sm:justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Real Time Finance. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-white">
              Chính sách
            </Link>
            <Link to="/" className="hover:text-white">
              Điều khoản
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
