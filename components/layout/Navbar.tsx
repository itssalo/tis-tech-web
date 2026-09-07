"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#about" },
  { label: "Soluciones", href: "#solutions" },
  { label: "Socios", href: "#partners" },
  { label: "Productos", href: "#products" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 80;
      const activationPoint = navbarHeight + 40;

      let currentSection = "inicio";

      for (const item of navItems) {
        const sectionId = item.href.replace("#", "");
        const section = document.getElementById(sectionId);

        if (!section) {
          continue;
        }

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= activationPoint) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <a
            href="#inicio"
            aria-label="DG TECH - Ir al inicio"
            onClick={() => handleNavigation("inicio")}
            className="flex items-center shrink-0"
          >
            <Image
              src="/brand/dg-tech.svg"
              alt="DG TECH"
              width={150}
              height={54}
              priority
              className="w-[110px] sm:w-[125px] md:w-[145px] h-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => handleNavigation(sectionId)}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-secondary"
                    />
                  )}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-xl text-foreground transition-colors hover:bg-foreground/5"
          >
            <span aria-hidden="true">
              {isOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-border py-3 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => handleNavigation(sectionId)}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:bg-foreground/5 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}