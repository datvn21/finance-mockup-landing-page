import React from "react";
import { useLanguage } from "~/i18n/LanguageContext";

export default function Economy() {
  const { t } = useLanguage();

  const macroNews = [
    {
      title: t("newsTitle"),
      desc: t("newsDesc"),
    },
    {
      title: t("newsTitle"),
      desc: t("newsDesc"),
    },
    {
      title: t("newsTitle"),
      desc: t("newsDesc"),
    },
    {
      title: t("newsTitle"),
      desc: t("newsDesc"),
    },
    {
      title: t("newsTitle"),
      desc: t("newsDesc"),
    },
    {
      title: t("newsTitle"),
      desc: t("newsDesc"),
    },
  ];

  const eventsVN = [
    { date: "27/09", event: "Lorem ipsum event", value: t("updating") },
    { date: "05/10", event: "Consectetur meeting", value: t("updating") },
    { date: "12/10", event: "Sed do issuance", value: t("updating") },
  ];

  const eventsGlobal = [
    { date: "30/09", event: "Ut enim PMI", value: t("updating") },
    { date: "04/10", event: "Minim laboris report", value: t("updating") },
    { date: "18/10", event: "CPI dolor sit", value: t("updating") },
  ];
  return (
    <section className="container  sm:px-8  mx-auto py-4 space-y-4 px-4 8 bg-bg-bg-color">
      <h2 className="text-lg hover:opacity-70 font-semibold text-secondary-bg-color mb-2 cursor-pointer">
        {t("economyTitle")}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* LEFT: Tin tức */}
        <div className="lg:col-span-2  rounded-xl space-y-3 ">
          {macroNews.map((item, i) => (
            <div
              key={i}
              className="border-2 border-main-text-color/20 bg-node-bg-color rounded-xl flex items-center gap-3 p-3 cursor-pointer transition-all duration-300 hover:bg-main-bg-color/80 "
            >
              <div className="aspect-video h-16 bg-main-text-color/20  rounded-md flex-shrink-0" />
              <div>
                <h3 className="font-medium text-sm transition-colors duration-300 text-title-color">
                  {item.title}
                </h3>
                <p className="text-xs text-main-text-color/60 ">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Lịch sự kiện */}
        <div className="border-2 border-main-text-color/20  rounded-xl p-4 space-y-5 bg-node-bg-color ">
          {/* Trong nước */}
          <div>
            <h4 className="font-semibold text-md hover:opacity-70 mb-2 ">
              {t("eventCalendar")} • {t("domestic")}
            </h4>
            <div className="space-y-1 text-sm">
              {eventsVN.map((ev, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-dashed border-main-text-color/20  pb-1"
                >
                  <span className="w-1/5 ">{ev.date}</span>
                  <span className="w-2/5 ">{ev.event}</span>
                  <span className="w-2/5 text-right text-main-text-color/70 ">
                    {ev.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quốc tế */}
          <div>
            <h4 className="font-semibold text-md hover:opacity-70 mb-2 ">
              {t("eventCalendar")} • {t("global")}
            </h4>
            <div className="space-y-1 text-sm">
              {eventsGlobal.map((ev, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-dashed border-main-text-color/20  pb-1"
                >
                  <span className="w-1/5 ">{ev.date}</span>
                  <span className="w-2/5 ">{ev.event}</span>
                  <span className="w-2/5 text-right text-main-text-color/70 ">
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
