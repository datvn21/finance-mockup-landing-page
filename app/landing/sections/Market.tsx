import React from "react";
import { Link } from "react-router";
const SectionBox = ({ title }: { title: string }) => (
  <div className="border-2 border-main-text-color/30  rounded-xl p-4 space-y-3 bg-node-bg-color ">
    {/* Tiêu đề nhóm */}
    <div className="inline-block  bg-main-text-color/5 border-main-text-color/30  text-title-color text-sm font-medium px-3 py-1 rounded-md">
      {title}
    </div>

    {/* Nội dung chính */}
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Tin chính */}
      <div className="flex-1 border-2 border-main-text-color/30 rounded-xl bg-node-bg-color  p-4 cursor-pointer transition-all duration-300 ">
        <div className="h-32 bg-main-text-color/20 rounded-lg mb-2" />
        <h3 className="font-semibold text-sm transition-colors duration-300 text-title-color hover:text-title-color/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h3>
        <p className="text-main-text-color/60  text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      {/* Tin phụ */}
      <div className="flex flex-col justify-start flex-shrink-0 w-full lg:w-1/3 space-y-3">
        {[
          {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border-2 border-main-text-color/30  rounded-xl flex items-center gap-2 p-2 cursor-pointer transition-all duration-300 hover:bg-main-bg-color/80 "
          >
            <div className="w-12 h-12 rounded-md bg-main-text-color/20  flex-shrink-0" />
            <div className="text-xs">
              <p className="font-medium transition-colors duration-300 hover:text-blue-600 ">
                {item.title}
              </p>
              <p className="text-main-text-color/60 ">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Market() {
  return (
    <div className="container  sm:px-8  mx-auto mt-8 flex flex-col gap-4 px-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-lg cursor-pointer hover:opacity-70 font-semibold text-secondary-bg-color  mb-2">
          Thị trường
        </h2>
      </div>

      {/* Nổi bật hôm nay */}
      <div className="border-2 border-main-text-color/30  bg-node-bg-color  rounded-xl flex justify-between items-center px-4 py-3">
        <span className="font-medium text-title-color">Nổi bật hôm nay</span>
        <Link
          to={"/"}
          className="text-sm text-main-text-color/60  cursor-pointer hover:text-blue-600 :text-blue-400 transition-colors duration-300 flex items-center gap-1"
        >
          Xem thêm thị trường →
        </Link>
      </div>

      {/* Box: Stocks */}
      <SectionBox title="Cổ phiếu" />

      {/* Box: Crypto */}
      <SectionBox title="Tiền mã hóa" />
    </div>
  );
}
