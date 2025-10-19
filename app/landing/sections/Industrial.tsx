import React from "react";

const industries = [
  { title: "Ngành nổi bật", desc: "Tóm tắt 1–2 dòng" },
  { title: "Ngành nổi bật", desc: "Tóm tắt 1–2 dòng" },
  { title: "Ngành nổi bật", desc: "Tóm tắt 1–2 dòng" },
  { title: "Ngành nổi bật", desc: "Tóm tắt 1–2 dòng" },
  { title: "Ngành nổi bật", desc: "Tóm tắt 1–2 dòng" },
  { title: "Ngành nổi bật", desc: "Tóm tắt 1–2 dòng" },
];

export default function Industrial() {
  return (
    <section className="container mx-auto py-4 space-y-4 px-4 md:px-2">
      {/* Header */}
      <h2 className="text-lg hover:opacity-70 font-semibold text-warning-color mb-2">
        INDUSTRIAL / TIN NGÀNH NỔI BẬT
      </h2>

      {/* Grid of Industry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl flex items-center gap-3 p-3 bg-white"
          >
            <div className="aspect-video h-16 bg-gray-100 rounded-md flex-shrink-0" />
            <div>
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
