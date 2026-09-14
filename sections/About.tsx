"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="scroll-mt-20 py-24 px-6 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-6">
          {t("title")}
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto text-center mb-12">
          {t("description")}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
            className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 transition-all duration-300 shadow-sm hover:shadow-lg"
            style={{
              borderColor:
                hoveredCard === 0 ? "#02A8E2" : undefined,
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
              {t("commitmentTitle")}
            </h3>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {t("commitment")}
            </p>
          </div>

          <div
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 transition-all duration-300 shadow-sm hover:shadow-lg"
            style={{
              borderColor:
                hoveredCard === 1 ? "#F36454" : undefined,
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
              {t("visionTitle")}
            </h3>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {t("vision")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}