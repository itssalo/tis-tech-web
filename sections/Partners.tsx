import Image from "next/image";
import Link from "next/link";

import { partners } from "@/data/partners";

const generalSolutions = [
  "Sistemas de Transporte Inteligente",
  "Gestión de Energía",
  "Automatización Industrial",
  "Fábricas Inteligentes",
  "Sistemas de Salud Digital",
  "Logística Inteligente",
  "Servidores Industriales",
  "Infraestructura de Telecomunicaciones",
  "Fabricación de Equipos Industriales",
  "Edge Computing para IoT",
  "Retail Inteligente",
  "Soluciones de Video",
];

export default function Partners() {
  const advantech = partners.find((partner) => partner.name === "Advantech");
  const otherPartners = partners.filter(
    (partner) => partner.name !== "Advantech",
  );

  return (
    <section
      id="partners"
      className="scroll-mt-20 bg-white px-6 py-24 dark:bg-black"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#C41230]/20 bg-[#C41230]/5 px-4 py-2 text-sm font-semibold text-[#C41230] dark:border-[#C41230]/30 dark:bg-[#C41230]/10 dark:text-red-400">
            Alianzas tecnológicas
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Socios Estratégicos
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            Trabajamos junto a fabricantes y líderes tecnológicos reconocidos
            internacionalmente para ofrecer soluciones confiables, seguras y
            escalables para industrias críticas.
          </p>
        </div>

        {/* Advantech featured partner */}
        {advantech && (
          <Link
            href="/partners/advantech"
            className="group mb-14 block overflow-hidden rounded-3xl border border-[#C41230]/30 bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#C41230] hover:shadow-2xl dark:border-[#C41230]/40 dark:bg-zinc-950"
            aria-label="Ver soluciones Advantech ofrecidas por DG TECH"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-[#C41230] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                    Partner estratégico
                  </span>

                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                    
                  </span>
                </div>

                <h3 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Advantech
                </h3>

                <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                  Somos distribuidores autorizados de Advantech. 
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {[
                    "Computación Industrial",
                    "Edge AI",
                    "IoT",
                    "Networking",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center font-semibold text-[#C41230] transition-colors group-hover:text-[#8f1428] dark:text-red-400 dark:group-hover:text-red-300">
                  Explorar soluciones Advantech
                  <span className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              {/* Portfolio image */}
              <div className="relative min-h-[280px] overflow-hidden bg-slate-50 dark:bg-white lg:min-h-[430px]">
                <Image
                  src="/images/partners/advantech/portfolio-advantech.jpeg"
                  alt="Portfolio de productos Advantech"
                  fill
                  priority
                  className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.03] sm:p-8 lg:p-10"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent dark:from-black/5" />
              </div>
            </div>
          </Link>
        )}

        {/* Other partners */}
        <div className="mb-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#D99A00]">
                Nuestra red tecnológica
              </p>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
                Otros socios tecnológicos
              </h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {otherPartners.map((partner, index) => (
              <article
                key={partner.name}
                className={`group rounded-2xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900 ${
                  index % 2 === 0
                    ? "border-slate-200 hover:border-[#C41230] dark:border-zinc-800"
                    : "border-slate-200 hover:border-[#D99A00] dark:border-zinc-800"
                }`}
              >
                <div className="mb-7 flex h-32 items-center justify-center rounded-xl bg-slate-50 px-6 dark:bg-white">
                  <div className="relative h-full w-full">
                    <Image
                      src={partner.logo}
                      alt={`Logo de ${partner.name}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 90vw, 500px"
                    />
                  </div>
                </div>

                <h4 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                  {partner.name}
                </h4>

                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {partner.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* General solutions */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-[#C41230]">
                Capacidades
              </span>

              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                Soluciones que impulsamos junto a nuestros socios
              </h3>

              <p className="text-slate-600 dark:text-slate-400">
                Combinamos tecnología, infraestructura y experiencia para
                desarrollar soluciones adaptadas a las necesidades de cada
                industria.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {generalSolutions.map((item, index) => (
                <div
                  key={item}
                  className={`group flex items-center gap-3 rounded-xl border bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:bg-zinc-900 ${
                    index % 2 === 0
                      ? "border-slate-200 hover:border-[#C41230] dark:border-zinc-800"
                      : "border-slate-200 hover:border-[#D99A00] dark:border-zinc-800"
                  }`}
                >
                  <span
                    className={`flex h-2 w-2 shrink-0 rounded-full ${
                      index % 2 === 0 ? "bg-[#C41230]" : "bg-[#D99A00]"
                    }`}
                  />

                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item}
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