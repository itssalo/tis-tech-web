"use client";

import { useState } from "react";
import Image from "next/image";

import { productAreas, productBrands } from "@/data/products";

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);

  const handleProductClick = (area: string) => {
    sessionStorage.setItem("selectedProduct", area);

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.dispatchEvent(
      new CustomEvent("productSelected", {
        detail: area,
      }),
    );
  };

  return (
    <section
      id="products"
      className="scroll-mt-20 py-24 px-6 bg-slate-50 dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-6">
          Línea de Productos
        </h2>

        <p className="text-center text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-16">
          Nos especializamos en soluciones tecnológicas que abarcan
          infraestructura, conectividad, seguridad y equipamiento para
          empresas e industrias.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {productAreas.map((area, index) => (
            <button
              key={area}
              type="button"
              onClick={() => handleProductClick(area)}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              style={{
                borderColor:
                  hoveredProduct === index
                    ? index % 2 === 0
                      ? "#02A8E2"
                      : "#F36454"
                    : undefined,
              }}
            >
              <span className="font-medium text-slate-800 dark:text-slate-200">
                {area}
              </span>
            </button>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Marcas Asociadas
          </h3>

          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10">
            Trabajamos con fabricantes y referentes tecnológicos para ofrecer
            soluciones confiables y adaptadas a las necesidades de cada
            proyecto.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {productBrands.map((brand, index) => (
              <div
                key={brand.name}
                onMouseEnter={() => setHoveredBrand(index)}
                onMouseLeave={() => setHoveredBrand(null)}
                className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 min-h-36 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor:
                    hoveredBrand === index
                      ? index % 2 === 0
                        ? "#02A8E2"
                        : "#F36454"
                      : undefined,
                }}
              >
                <div className="relative w-full h-28 rounded-xl dark:bg-white dark:px-6 dark:py-4">
                  <Image
                    src={brand.logo}
                    alt={`Logo de ${brand.name}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 40vw, 180px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}