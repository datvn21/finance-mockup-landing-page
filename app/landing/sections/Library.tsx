import React from "react";

const industries = [
  { title: "Chủ đề nổi bật", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Chủ đề nổi bật", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Chủ đề nổi bật", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Chủ đề nổi bật", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Chủ đề nổi bật", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Chủ đề nổi bật", desc: "Tóm tắt nội dung 1–2 dòng" },
];

export default function Library() {
  return (
    <section className="container mx-auto py-4 space-y-4 px-4 md:px-2">
      <h2 className="text-lg hover:opacity-70 font-semibold text-secondary-bg-color mb-2 cursor-pointer ">
        THƯ VIỆN KIẾN THỨC
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((item, i) => (
          <div
            key={i}
            className="border-2 border-main-text-color/20  cursor-pointer rounded-xl flex flex-col items-center gap-3 p-4 md:p-6 bg-node-bg-color  hover:bg-main-bg-color/80 :bg-gray-700 transition-all duration-300"
          >
            <div className="h-[120px] w-full bg-main-text-color/20  rounded-md flex-shrink-0" />
            <div className="w-full text-start">
              <h3 className="font-medium text-sm text-title-color">
                {item.title}
              </h3>
              <p className="text-xs text-main-text-color/60 ">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
