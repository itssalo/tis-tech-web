"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#about" },
  { label: "Soluciones", href: "#solutions" },
  { label: "Socios", href: "#partners" },
  { label: "Productos", href: "#products" },
  { label: "Países", href: "#countries" },
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

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const navbarHeight = 80;

    const targetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavigation("inicio")}
            aria-label="TIS TECH - Ir al inicio"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/brand/tistech.svg"
              alt="TIS TECH"
              width={140}
              height={50}
              priority
              className="h-auto w-[115px] sm:w-[135px] md:w-[155px] object-contain"
            />
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavigation(sectionId)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative py-2 text-[15px] font-medium transition-colors ${
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
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-foreground transition-colors hover:bg-foreground/5 md:hidden"
          >
            <span aria-hidden="true">
              {isOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
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
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavigation(sectionId)}
                    aria-current={isActive ? "location" : undefined}
                    className={`rounded-lg px-3 py-2.5 text-left text-[15px] font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:bg-foreground/5 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}