import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="w-screen bg-footer-bg-color text-gray-200">
      <div className="container  sm:px-8  mx-auto px-8 md:px-16 py-8 max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-6">
          {/* Links */}
          <nav className="flex gap-6">
            <ul className="flex flex-row text-base text-gray-50 gap-4 flex-wrap">
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
        <div className="pt-4 mt-4 flex gap-8 md:flex-row flex-col flex-wrap border-t border-gray-400">
          <div className="flex-1">
            <span className="text-sm">
              Trang TTĐTTH của CÔNG TY CỔ PHẦN 1001S
              <br />
              Giấy phép số XX
              <br />
              Địa chỉ: AB04.01, Khu AB, Tầng 4, Khu thương mại dịch vụ căn hộ
              cao tầng, số 58B Nguyễn Thị Thập, Phường Bình Thuận, Quận 7, Thành
              phố Hồ Chí Minh, Việt Nam <br />
              Email: XX <br />
              Chịu trách nhiệm nội dung: XX
            </span>
          </div>
          <div className="flex flex-col justify-end">
            <span className="flex flex-col text-sm pb-2">
              Liện hệ quảng cáo: xx
              <br />
              Số điện thoại: xx
            </span>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
