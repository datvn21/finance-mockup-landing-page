import React from "react";
import { useLanguage } from "~/i18n/LanguageContext";

export default function Promise() {
  const { t } = useLanguage();

  return (
    <section className="container  sm:px-8  mx-auto py-4 space-y-4 px-4 md:px-8">
      <h2 className="text-lg hover:opacity-70 font-semibold text-secondary-bg-color  mb-2 cursor-pointer">
        {t("promiseTitle")}
      </h2>
      <div className="w-full min-h-[200px] rounded-xl bg-node-bg-color  border-2 border-main-text-color/20  p-4">
        <span className="text-sm ">{t("promiseContent")}</span>
      </div>
    </section>
  );
}
