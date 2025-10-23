import React from "react";

const industries = [
  { title: "Chính sách mới", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Chính sách mới", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Chính sách mới", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Chính sách mới", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Chính sách mới", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Chính sách mới", desc: "Tóm tắt nội dung 1–2 dòng" },
];

export default function PolicyRegulation() {
  return (
    <section className="container mx-auto py-4 space-y-4 px-4 md:px-2">
      <h2 className="text-lg hover:opacity-70 font-semibold text-title-color  mb-2 cursor-pointer">
        CHÍNH SÁCH & QUY ĐỊNH
      </h2>

      <div className="grid grid-cols-1  gap-4">
        {industries.map((item, i) => (
          <div
            key={i}
            className="border-2 border-main-text-color/20  rounded-xl flex items-center gap-3 p-3 bg-node-bg-color  cursor-pointer transition-all duration-300 hover:bg-main-bg-color/80 :bg-gray-700"
          >
            <div className="aspect-video h-16 bg-main-text-color/20  rounded-md flex-shrink-0" />
            <div>
              <h3 className="font-medium text-sm transition-colors duration-300 hover:text-title-color/80  text-title-color">
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
