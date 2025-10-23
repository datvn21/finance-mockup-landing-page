import React from "react";

const newsItems = Array(10).fill({
  title:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZXmghOOesxzSaFMXaLH0J6ZltDmafBAIQw&s",
});

export default function Highlight() {
  return (
    <div className="container mx-auto pt-12 px-4 md:px-0">
      {/* Top Story & Secondary News - Side by Side */}
      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Top Story Section - Takes 2 columns */}
        <div className="lg:col-span-2 ">
          <section className="bg-node-bg-color rounded-xl border-2 border-main-text-color/20 overflow-hidden transition-colors h-full cursor-pointer hover:bg-main-bg-color/80 group">
            <div className="px-6 pt-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZXmghOOesxzSaFMXaLH0J6ZltDmafBAIQw&s"
                alt="Top story"
                className="w-full h-64 md:h-96 object-cover rounded-xl"
              />
            </div>
            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-title-color mb-4 group-hover:text-blue-600  transition-colors">
                Lorem ipsum dolor sit amet consectetur adipiscing elit
              </h2>
              <p className="text-main-text-color/60 mb-6 text-base md:text-lg leading-relaxed line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-blue-600  text-sm font-semibold cursor-pointer transition-colors">
                Xem thêm →
              </p>
            </div>
          </section>
        </div>

        {/* Secondary News Section - Takes 1 column */}
        <aside className="lg:col-span-1">
          <div className="bg-node-bg-color rounded-xl border-2 border-main-text-color/20 p-4 md:p-6 h-full">
            <p className="text-sm font-bold text-main-text-color/70  pb-3">
              SECONDARY • 1–5
            </p>
            <div className="space-y-4">
              {newsItems.slice(0, 5).map((item, i) => (
                <div
                  key={i}
                  className="py-2 pr-2 rounded-lg transition-colors cursor-pointer hover:bg-main-bg-color/80  group"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.img}
                      alt=""
                      className="h-20 aspect-video object-cover rounded-lg flex-shrink-0 border border-main-text-color/20 /60"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-title-color mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-main-text-color/60 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Grid News Section */}
      <aside>
        <div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {newsItems.slice(0, 6).map((item, i) => (
              <div
                key={i}
                className="bg-node-bg-color rounded-xl border-2 border-main-text-color/20 overflow-hidden transition-colors cursor-pointer hover:bg-main-bg-color/80  group"
              >
                <div className="p-4 flex gap-4">
                  <img
                    src={item.img}
                    alt=""
                    className="aspect-video h-20 md:h-28 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-semibold text-md text-title-color mb-2 line-clamp-2 md:line-clamp-4 group-hover:text-blue-600  transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-main-text-color/60 mb-2 line-clamp-2 md:line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
