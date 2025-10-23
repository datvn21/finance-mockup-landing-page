import React from "react";

const industries = [
  { title: "Tin tức ngành", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Tin tức ngành", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Tin tức ngành", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Tin tức ngành", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Tin tức ngành", desc: "Tóm tắt nội dung 1–2 dòng" },
  { title: "Tin tức ngành", desc: "Tóm tắt nội dung 1–2 dòng" },
];

export default function Industrial() {
  return (
    <section className="container mx-auto py-4 space-y-4 px-4 md:px-2">
      <h2 className="text-lg hover:opacity-70 font-semibold text-warning-color dark:text-title-color mb-2 cursor-pointer">
        TIN NGÀNH NỔI BẬT
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((item, i) => (
          <div
            key={i}
            className="border-2 border-main-text-color/20 dark:border-gray-700 rounded-xl flex items-center gap-3 p-3 bg-main-bg-color dark:bg-node-bg-color cursor-pointer transition-all duration-300 hover:bg-main-bg-color/80 dark:hover:bg-gray-700"
          >
            <div className="aspect-video h-16 bg-main-text-color/20 dark:bg-gray-700 rounded-md flex-shrink-0" />
            <div>
              <h3 className="font-medium text-sm transition-colors duration-300 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
                {item.title}
              </h3>
              <p className="text-xs text-main-text-color/60 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
