import React from "react";
import { Link } from "react-router";
const SectionBox = ({ title }: { title: string }) => (
  <div className="border rounded-xl p-4 space-y-3 bg-white">
    {/* Tiêu đề nhóm */}
    <div className="inline-block bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-md">
      {title}
    </div>

    {/* Nội dung chính */}
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Tin chính */}
      <div className="flex-1 border rounded-xl bg-gray-50 p-4 cursor-pointer transition-all duration-300 hover:bg-gray-100">
        <div className="h-32 bg-gray-100 rounded-lg mb-2" />
        <h3 className="font-semibold text-sm transition-colors duration-300 hover:text-blue-600">
          Headline chính 1 dòng
        </h3>
        <p className="text-gray-600 text-xs">
          Tóm tắt rất ngắn mô tả diễn biến chính
        </p>
      </div>

      {/* Tin phụ */}
      <div className="flex flex-col justify-start flex-shrink-0 w-full lg:w-1/3 space-y-3">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="border rounded-xl flex items-center gap-2 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-50"
          >
            <div className="w-12 h-12 rounded-md bg-gray-100 flex-shrink-0" />
            <div className="text-xs">
              <p className="font-medium transition-colors duration-300 hover:text-blue-600">
                Tin phụ {i}
              </p>
              <p className="text-gray-600">Tóm tắt 1 dòng</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default function Market() {
  return (
    <div className="container mx-auto mt-8 flex flex-col gap-4 px-4 md:px-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg cursor-pointer hover:opacity-70 font-semibold text-warning-color mb-2">
          MARKET / THỊ TRƯỜNG
        </h2>
      </div>

      {/* Nổi bật hôm nay */}
      <div className="border bg-white rounded-xl flex justify-between items-center px-4 py-3">
        <span className="font-medium">Nổi bật hôm nay</span>
        <Link
          to={"/"}
          className="text-sm text-gray-600 cursor-pointer hover:text-blue-600 transition-colors duration-300 flex items-center gap-1"
        >
          Xem thêm thị trường →
        </Link>
      </div>

      {/* Box: Stocks */}
      <SectionBox title="Stocks / Cổ phiếu" />

      {/* Box: Crypto */}
      <SectionBox title="Crypto / Tiền mã hóa" />
    </div>
  );
}
