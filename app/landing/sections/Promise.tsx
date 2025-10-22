import React from "react";

export default function Promise() {
  return (
    <section className="container mx-auto py-4 space-y-4 px-4 md:px-2">
      <h2 className="text-lg hover:opacity-70 font-semibold text-warning-color dark:text-red-400 mb-2 cursor-pointer">
        DANH MỤC TRIỂN VỌNG
      </h2>
      <div className="w-full min-h-[200px] rounded-xl bg-main-bg-color dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-4">
        <span className="text-xs dark:text-gray-300">
          Mã Công ty Tỷ trọng YTD 1M Beta
        </span>
      </div>
    </section>
  );
}
