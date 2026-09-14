"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const solutionKeys = [
  "industrialServers",
  "security",
  "industrialConnectivity",
  "wirelessConnectivity",
  "iiot",
  "cellularConnectivity",
] as const;

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const t = useTranslations("solutions");

  return (
    <section
      id="solutions"
      className="scroll-mt-20 py-24 px-6 bg-slate-50 dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-6">
          {t("title")}
        </h2>

        <p className="text-center text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-16">
          {t("description")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionKeys.map((key, index) => (
            <div
              key={key}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                borderColor:
                  hoveredCard === index
                    ? index % 2 === 0
                      ? "#02A8E2"
                      : "#F36454"
                    : undefined,
              }}
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                {t(`items.${key}.title`)}
              </h3>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}