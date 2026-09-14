"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function AdvantechPage() {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);
  const [hoveredTechnology, setHoveredTechnology] = useState<number | null>(
    null,
  );

  const t = useTranslations("advantech");
  const locale = useLocale();

  const solutions = [
    {
      number: "01",
      title: t("solutions.items.edgeAI.title"),
      description: t("solutions.items.edgeAI.description"),
    },
    {
      number: "02",
      title: t("solutions.items.industrialEquipment.title"),
      description: t("solutions.items.industrialEquipment.description"),
    },
    {
      number: "03",
      title: t("solutions.items.iRetail.title"),
      description: t("solutions.items.iRetail.description"),
    },
    {
      number: "04",
      title: t("solutions.items.intelligentTransportation.title"),
      description: t("solutions.items.intelligentTransportation.description"),
    },
    {
      number: "05",
      title: t("solutions.items.embedded.title"),
      description: t("solutions.items.embedded.description"),
    },
  ];

  const technologies = [
    {
      title: t("technologies.items.panelPC.title"),
      description: t("technologies.items.panelPC.description"),
      image: "/images/partners/advantech/panel-pc.png",
    },
    {
      title: t("technologies.items.industrialEthernet.title"),
      description: t("technologies.items.industrialEthernet.description"),
      image: "/images/partners/advantech/industrial-ethernet-switch.png",
    },
    {
      title: t("technologies.items.protocolGateway.title"),
      description: t("technologies.items.protocolGateway.description"),
      image: "/images/partners/advantech/industrial-protocol-gateway.png",
    },
    {
      title: t("technologies.items.energyPower.title"),
      description: t("technologies.items.energyPower.description"),
      image: "/images/partners/advantech/energy-power.png",
    },
    {
      title: t("technologies.items.wirelessSensors.title"),
      description: t("technologies.items.wirelessSensors.description"),
      image: "/images/partners/advantech/wireless-io-sensors.png",
    },
    {
      title: t("technologies.items.gatewayRTU.title"),
      description: t("technologies.items.gatewayRTU.description"),
      image: "/images/partners/advantech/gateway-rtu.jpg",
    },
  ];

  const homePath = locale === "es" ? "/" : "/en";

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-white">
      {/* Hero */}
      <section className="px-6 pb-10 pt-16 sm:pb-12 sm:pt-20 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-7xl">
          {/* Intro */}
          <div className="mb-10 text-center sm:mb-12">
            <span className="mb-5 inline-flex items-center rounded-full bg-[#02A8E2]/10 px-4 py-2 text-sm font-semibold text-[#02A8E2] dark:bg-[#02A8E2]/20 dark:text-[#02A8E2]">
              {t("hero.badge")}
            </span>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              ADVANTECH
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg md:text-xl">
              {t("hero.description")}
            </p>
          </div>

          {/* Portfolio */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl dark:border-zinc-800 dark:bg-white">
            <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[16/7]">
              <Image
                src="/images/partners/advantech/portfolio-advantech.jpeg"
                alt={t("hero.portfolioAlt")}
                fill
                priority
                className="object-cover object-center sm:object-contain sm:p-8 md:p-12"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/75 px-3 py-2 backdrop-blur-sm sm:px-8 sm:py-4">
              <span className="text-xs font-semibold text-white sm:text-sm sm:text-base">
                {t("hero.portfolioCaption")}
              </span>

              <span className="hidden text-xs font-medium uppercase tracking-wider text-white/70 sm:block">
                Advantech × TIS TECH
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-14 dark:border-zinc-800 dark:bg-zinc-950 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Solutions intro */}
          <div className="mb-10 max-w-3xl sm:mb-12">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-[#02A8E2]">
              {t("solutions.eyebrow")}
            </span>

            <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("solutions.title")}
            </h2>

            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              {t("solutions.description")}
            </p>
          </div>

          {/* Industries visual */}
          <div className="mb-10 overflow-hidden sm:mb-12">
            <div className="mx-auto max-w-[950px]">
              <Image
                src="/images/partners/advantech/soluciones.png"
                alt={t("solutions.visualAlt")}
                width={1640}
                height={896}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 950px"
              />
            </div>
          </div>

          {/* Solution cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <article
                key={solution.number}
                onMouseEnter={() => setHoveredSolution(index)}
                onMouseLeave={() => setHoveredSolution(null)}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                style={{
                  borderColor:
                    hoveredSolution === index
                      ? index % 2 === 0
                        ? "#02A8E2"
                        : "#F36454"
                      : undefined,
                }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className={`text-sm font-bold ${
                      index % 2 === 0
                        ? "text-[#02A8E2]"
                        : "text-[#F36454]"
                    }`}
                  >
                    {solution.number}
                  </span>

                  <span className="ml-4 h-px flex-1 bg-slate-200 dark:bg-zinc-800" />
                </div>

                <h3 className="mb-3 text-xl font-bold">{solution.title}</h3>

                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-[#F36454]">
              {t("technologies.eyebrow")}
            </span>

            <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl">
              {t("technologies.title")}
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              {t("technologies.description")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology, index) => (
              <article
                key={technology.title}
                onMouseEnter={() => setHoveredTechnology(index)}
                onMouseLeave={() => setHoveredTechnology(null)}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                style={{
                  borderColor:
                    hoveredTechnology === index
                      ? index % 2 === 0
                        ? "#02A8E2"
                        : "#F36454"
                      : undefined,
                }}
              >
                {/* Product image */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-slate-50 dark:bg-white">
                  <Image
                    src={technology.image}
                    alt={technology.title}
                    fill
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Product information */}
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        index % 2 === 0
                          ? "bg-[#02A8E2]"
                          : "bg-[#F36454]"
                      }`}
                    />

                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                      {t("technologies.label")}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold">
                    {technology.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {technology.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 pt-4">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 px-6 py-12 text-center dark:border-primary/30 dark:bg-primary/10 sm:px-10">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            {t("cta.eyebrow")}
          </span>

          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            {t("cta.title")}
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400">
            {t("cta.description")}
          </p>

          <Link
            href={`${homePath}#contact`}
            className="inline-flex items-center rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-lg"
          >
            {t("cta.button")}
            <span className="ml-2 transition-transform duration-300 hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Back */}
      <div className="px-6 pb-16 text-center">
        <Link
          href={`${homePath}#partners`}
          className="inline-flex items-center font-medium text-primary transition-colors hover:text-primary-hover"
        >
          ← {t("back")}
        </Link>
      </div>
    </main>
  );
}