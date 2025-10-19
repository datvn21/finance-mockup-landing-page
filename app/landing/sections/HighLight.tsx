import React from "react";

const newsItems = Array(10).fill({
  title:
    "FPT, MSN và HPG là tâm điểm mua vào của 5 quỹ ETF quy mô 20.000 tỷ đồng",
  desc: "SSI Research đưa ra dự báo giao dịch của nhóm quỹ ETF với tổng tài sản khoảng 20.000 trong kỳ cơ cấu quý IV/2025.",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6hEJiotIsn5wXASKc1sSCckMFMJZV-PVx-g&s",
});

export default function Highlight() {
  return (
    <div className="container md:mt-8 mt-4 mx-auto flex flex-col px-4 md:px-2 md:grid md:grid-cols-3 gap-6 items-stretch justify-center min-h-[320px] md:min-h-[420px]">
      <div className="md:col-span-2">
        <section className="md:border rounded-xl  md:p-6 h-full flex flex-col cursor-pointer transition-all duration-300 hover:bg-gray-50">
          <p className="text-lg hover:opacity-70 font-semibold text-warning-color mb-2 cursor-pointer">
            TOP STORY • TIN NỔI BẬT
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlAoPVLMcG7Nb3u4WJeUPhh0ndAvMN7-90g&s"
            alt="Top story"
            className="rounded-lg w-full mb-4 object-cover flex-shrink-0 aspect-video"
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2 transition-colors duration-300 hover:text-blue-600">
              Triển vọng thị trường chứng khoán Việt Nam cuối năm qua lăng kính
              chuyên gia
            </h2>
            <p className="text-gray-600 text-sm">
              VN-Index trải qua 3 quý đầu năm 2025 với nhiều cú "bẻ lái". Từ
              những nhịp giảm mạnh bất ngờ sau "cú sốc" thuế quan, chỉ số chính
              đã bật tăng mạnh mẽ trở lại, liên tiếp phá đỉnh lịch sử...
            </p>
            <p className="text-blue-600 text-sm mt-2 font-medium">Xem thêm</p>
          </div>
        </section>
      </div>

      <aside className="md:col-span-1">
        <div className="md:border rounded-xl md:p-6 h-full flex flex-col overflow-hidden">
          <p className="text-sm font-semibold mb-2">SECONDARY • 1–5</p>
          <div className=" overflow-auto h-full">
            {newsItems.slice(0, 6).map((item, i) => (
              <div
                key={i}
                className="flex gap-2 rounded-lg p-2 md:px-2 items-start cursor-pointer transition-all duration-300 hover:bg-gray-100"
              >
                <img
                  src={item.img}
                  alt=""
                  className="h-16 sm:h-20 w-28 sm:w-36 object-cover rounded-md flex-shrink-0"
                />
                <div className="text-xs">
                  <h4 className="font-semibold mb-1 line-clamp-2 transition-colors duration-300 hover:text-blue-600">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 line-clamp-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <aside className="w-full col-span-3">
        <div className="rounded-xl h-full flex w-full flex-col">
          <div className="overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {newsItems.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-col gap-3 rounded-lg p-4 md:p-6 border items-start cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:border-gray-400"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-full min-h-[150px] aspect-video object-cover rounded-md flex-shrink-0"
                />
                <div className="text-sm">
                  <h4 className="font-semibold mb-1 line-clamp-2 transition-colors duration-300 hover:text-blue-600">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs line-clamp-3">
                    {item.desc}
                  </p>
                  <p className="text-blue-600 text-xs mt-2 font-medium">
                    Xem thêm
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
