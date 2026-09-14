"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const partnerKeys = ["hpe", "adata"] as const;

const generalSolutionKeys = [
  "intelligentTransportation",
  "energyManagement",
  "industrialAutomation",
  "smartFactories",
  "digitalHealthcare",
  "smartLogistics",
  "industrialServers",
  "telecommunicationsInfrastructure",
  "industrialEquipmentManufacturing",
  "edgeComputing",
  "smartRetail",
  "videoSolutions",
] as const;

const partnerLogos = {
  hpe: "/partners/hpe.svg",
  adata: "/partners/adata.png",
} as const;

export default function Partners() {
  const [hoveredOtherPartner, setHoveredOtherPartner] = useState<number | null>(
    null,
  );

  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);

  const [isAdvantechHovered, setIsAdvantechHovered] = useState(false);

  const t = useTranslations("partners");
  const partnerData = useTranslations("partnerData");

  return (
    <section
      id="partners"
      className="scroll-mt-20 bg-white px-6 py-24 dark:bg-black"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#02A8E2]/20 bg-[#02A8E2]/5 px-4 py-2 text-sm font-semibold text-[#02A8E2] dark:border-[#02A8E2]/30 dark:bg-[#02A8E2]/10 dark:text-sky-400">
            {t("eyebrow")}
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            {t("title")}
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Advantech featured partner */}
        <Link
          href="/partners/advantech"
          onMouseEnter={() => setIsAdvantechHovered(true)}
          onMouseLeave={() => setIsAdvantechHovered(false)}
          className="group mb-14 block overflow-hidden rounded-3xl border border-[#02A8E2]/30 bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl dark:border-[#02A8E2]/40 dark:bg-zinc-950"
          style={{
            borderColor: isAdvantechHovered ? "#02A8E2" : undefined,
          }}
          aria-label={t("advantechAriaLabel")}
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-[#02A8E2] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  {t("partnerLabel")}
                </span>

                <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  
                </span>
              </div>

              <h3 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {partnerData("advantech.name")}
              </h3>

              <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                {t("advantechDescription")}
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {t.raw("advantechTags").map((item: string) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center font-semibold text-[#02A8E2] transition-colors group-hover:text-[#008fc4] dark:text-sky-400 dark:group-hover:text-sky-300">
                {t("advantechCta")}
                <span className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>

            {/* Portfolio image */}
            <div className="relative min-h-[280px] overflow-hidden bg-slate-50 dark:bg-white lg:min-h-[430px]">
              <Image
                src="/images/partners/advantech/portfolio-advantech.jpeg"
                alt={t("advantechImageAlt")}
                fill
                priority
                className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.03] sm:p-8 lg:p-10"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent dark:from-black/5" />
            </div>
          </div>
        </Link>

        {/* Other partners */}
        <div className="mb-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#F36454]">
                {t("networkEyebrow")}
              </p>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
                {t("networkTitle")}
              </h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {partnerKeys.map((key, index) => (
              <article
                key={key}
                onMouseEnter={() => setHoveredOtherPartner(index)}
                onMouseLeave={() => setHoveredOtherPartner(null)}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                style={{
                  borderColor:
                    hoveredOtherPartner === index
                      ? index % 2 === 0
                        ? "#02A8E2"
                        : "#F36454"
                      : undefined,
                }}
              >
                <div className="mb-7 flex h-32 items-center justify-center rounded-xl bg-slate-50 px-6 dark:bg-white">
                  <div className="relative h-full w-full">
                    <Image
                      src={partnerLogos[key]}
                      alt={t("partnerLogoAlt", {
                        name: partnerData(`${key}.name`),
                      })}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 90vw, 500px"
                    />
                  </div>
                </div>

                <h4 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                  {partnerData(`${key}.name`)}
                </h4>

                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {partnerData(`${key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* General solutions */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-[#02A8E2]">
                {t("capabilitiesEyebrow")}
              </span>

              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                {t("capabilitiesTitle")}
              </h3>

              <p className="text-slate-600 dark:text-slate-400">
                {t("capabilitiesDescription")}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {generalSolutionKeys.map((key, index) => (
                <div
                  key={key}
                  onMouseEnter={() => setHoveredSolution(index)}
                  onMouseLeave={() => setHoveredSolution(null)}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                  style={{
                    borderColor:
                      hoveredSolution === index
                        ? index % 2 === 0
                          ? "#02A8E2"
                          : "#F36454"
                        : undefined,
                  }}
                >
                  <span
                    className={`flex h-2 w-2 shrink-0 rounded-full ${
                      index % 2 === 0 ? "bg-[#02A8E2]" : "bg-[#F36454]"
                    }`}
                  />

                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {t(`generalSolutions.${key}`)}
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