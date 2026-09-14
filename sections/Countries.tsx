"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const countryKeys = [
  "Argentina",
  "Bolivia",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Ecuador",
  "El Salvador",
  "United States",
  "Guatemala",
  "Honduras",
  "Nicaragua",
  "Panama",
  "Paraguay",
  "Peru",
  "Dominican Republic",
  "Uruguay",
] as const;

export default function Countries() {
  const [hoveredCountry, setHoveredCountry] = useState<number | null>(null);

  const t = useTranslations("countries");

  const countries = t.raw("items") as string[];

  return (
    <section
      id="countries"
      className="scroll-mt-20 bg-white px-6 py-24 dark:bg-black"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            {t("title")}
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Countries */}
        <div className="mx-auto mb-14 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {countries.map((country, index) => (
            <article
              key={countryKeys[index]}
              onMouseEnter={() => setHoveredCountry(index)}
              onMouseLeave={() => setHoveredCountry(null)}
              className="flex min-h-[92px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              style={{
                borderColor:
                  hoveredCountry === index
                    ? index % 2 === 0
                      ? "#02A8E2"
                      : "#F36454"
                    : undefined,
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                    index % 2 === 0
                      ? "bg-[#02A8E2]"
                      : "bg-[#F36454]"
                  }`}
                  aria-hidden="true"
                />

                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {country}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 px-6 py-12 text-center dark:border-primary/30 dark:bg-primary/10 sm:px-10 sm:py-14">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-primary">
            {t("ctaEyebrow")}
          </span>

          <h3 className="mb-5 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            {t("ctaTitle")}
          </h3>

          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400">
            {t("ctaDescription")}
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-lg"
          >
            {t("ctaButton")}
            <span className="ml-2 text-lg transition-transform duration-300 hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}