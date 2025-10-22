import React from "react";

const macroNews = [
  {
    title: "CPI dự báo 3.2% năm nay; giá lương thực hạ nhiệt",
    desc: "Tóm tắt 1–2 dòng ngắn",
  },
  {
    title: "GDP 2025 mục tiêu 6.5%; đầu tư công tiếp tục đẩy mạnh",
    desc: "Tóm tắt 1–2 dòng ngắn",
  },
  {
    title: "Tín dụng tăng 1.2% m/m; lãi suất huy động ổn định",
    desc: "Tóm tắt 1–2 dòng ngắn",
  },
  {
    title: "Xuất khẩu tăng 7.8% y/y; thặng dư thương mại giữ vững",
    desc: "Tóm tắt 1–2 dòng ngắn",
  },
  {
    title: "Tỷ giá USD/VND dao động hẹp; NHNN hút ròng trên OMO",
    desc: "Tóm tắt 1–2 dòng ngắn",
  },
  {
    title: "Giải ngân đầu tư công đạt 52% kế hoạch sau 8 tháng",
    desc: "Tóm tắt 1–2 dòng ngắn",
  },
];

const eventsVN = [
  { date: "27/09", event: "CPI tháng 9", value: "3.2% y/y (khảo sát)" },
  { date: "05/10", event: "Họp NHNN", value: "Giữ nguyên lãi suất" },
  { date: "12/10", event: "Phát hành TPCP", value: "10Y: 2.35%" },
];

const eventsGlobal = [
  { date: "30/09", event: "PMI China", value: "50.2" },
  { date: "04/10", event: "NFP US", value: "+175k, UR 3.9%" },
  { date: "18/10", event: "CPI US", value: "+0.3% m/m" },
];

export default function Economy() {
  return (
    <section className="container mx-auto py-4 space-y-4 px-4 md:px-2">
      <h2 className="text-lg hover:opacity-70 font-semibold text-warning-color mb-2 cursor-pointer">
        ECONOMY / KINH TẾ VĨ MÔ VIỆT NAM
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* LEFT: Tin tức */}
        <div className="lg:col-span-2 md:border-2 border-gray-200 md:p-4 rounded-xl space-y-3 bg-white">
          {macroNews.map((item, i) => (
            <div
              key={i}
              className="border-2 border-gray-200 rounded-xl flex items-center gap-3 p-3 cursor-pointer transition-all duration-300 hover:bg-gray-50"
            >
              <div className="aspect-video h-16 bg-gray-100 rounded-md flex-shrink-0" />
              <div>
                <h3 className="font-medium text-sm transition-colors duration-300 hover:text-blue-600">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Lịch sự kiện */}
        <div className="border-2 border-gray-200 rounded-xl p-4 space-y-5 bg-white">
          {/* Trong nước */}
          <div>
            <h4 className="font-semibold text-lg hover:opacity-70  mb-2">
              Lịch sự kiện • Trong nước (VN)
            </h4>
            <div className="space-y-1 text-sm">
              {eventsVN.map((ev, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-dashed border-gray-200 pb-1"
                >
                  <span className="w-1/5">{ev.date}</span>
                  <span className="w-2/5">{ev.event}</span>
                  <span className="w-2/5 text-right text-gray-700">
                    {ev.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quốc tế */}
          <div>
            <h4 className="font-semibold text-lg hover:opacity-70  mb-2">
              Lịch sự kiện • Quốc tế (Global)
            </h4>
            <div className="space-y-1 text-sm">
              {eventsGlobal.map((ev, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-dashed border-gray-200 pb-1"
                >
                  <span className="w-1/5">{ev.date}</span>
                  <span className="w-2/5">{ev.event}</span>
                  <span className="w-2/5 text-right text-gray-700">
                    {ev.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
