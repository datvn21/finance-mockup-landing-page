import React, { useEffect, useRef } from "react";

const items = [
  { label: "VNINDEX", value: "1,301.24", change: "+1.02%", up: true },
  { label: "USD/VND", value: "24,560", change: "-0.02%", up: true },
  { label: "GOLD", value: "2,365.40", change: "+0.12%", up: true },
  { label: "WTI", value: "78.21", change: "-0.27%", up: false },
  { label: "BTC/USD", value: "43,250", change: "+2.15%", up: true },
  { label: "S&P 500", value: "4,568.20", change: "+0.45%", up: true },
  { label: "ETH", value: "4,568.20", change: "+0.65%", up: true },
];

export default function CostUpdate() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full bg-main-bg-color overflow-hidden transition-colors duration-300">
      <div
        ref={scrollRef}
        className="container mx-auto flex items-center py-2 px-2 md:px-2 gap-8 overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between min-w-[280px] border-r-2 border-gray-200 dark:border-gray-700 pr-4 flex-shrink-0"
          >
            <span className="text-sm md:text-md dark:text-gray-300">
              {item.label} – {item.value} –{" "}
            </span>
            <span className={`text-sm md:text-md ${item.up ? "up" : "down"}`}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
