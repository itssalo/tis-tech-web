"use client";

import { useState } from "react";

import { solutions } from "@/data/solutions";

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="solutions"
      className="scroll-mt-20 py-24 px-6 bg-slate-50 dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-6">
          Soluciones
        </h2>

        <p className="text-center text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-16">
          Integramos tecnologías de conectividad, infraestructura y
          automatización industrial para acompañar la transformación digital
          de nuestros clientes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
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
                {solution.title}
              </h3>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}