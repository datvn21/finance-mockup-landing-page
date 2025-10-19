import React from "react";

const industries = [
  { title: "Ngành nổi bật", desc: "Tóm tắt 1–2 dòng" },
  { title: "Ngành nổi bật", desc: "Tóm tắt 1–2 dòng" },
  { title: "Ngành nổi bật", desc: "Tóm tắt 1–2 dòng" },
  { title: "Ngành nổi bật", desc: "Tóm tắt 1–2 dòng" },
  { title: "Ngành nổi bật", desc: "Tóm tắt 1–2 dòng" },
  { title: "Ngành nổi bật", desc: "Tóm tắt 1–2 dòng" },
];

export default function Library() {
  return (
    <section className="container mx-auto py-4 space-y-4 px-4 md:px-0">
      {/* Header */}
      <h2 className="text-red-600 font-bold uppercase text-sm">
        THƯ VIỆN KIẾN THỨC
      </h2>

      {/* Grid of Industry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl flex flex-col items-center gap-3 p-4 md:p-6 bg-white"
          >
            <div className="aspect-video w-full bg-gray-100 rounded-md flex-shrink-0" />
            <div className="w-full text-start">
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
