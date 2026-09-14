"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const sectionKeys = [
  { key: "home", id: "inicio" },
  { key: "about", id: "about" },
  { key: "solutions", id: "solutions" },
  { key: "partners", id: "partners" },
  { key: "products", id: "products" },
  { key: "countries", id: "countries" },
  { key: "contact", id: "contact" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 80;
      const activationPoint = navbarHeight + 40;

      let currentSection = "inicio";

      for (const item of sectionKeys) {
        const section = document.getElementById(item.id);

        if (!section) {
          continue;
        }

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= activationPoint) {
          currentSection = item.id;
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

  const handleLanguageChange = (nextLocale: "es" | "en") => {
    if (nextLocale === locale) {
      return;
    }

    const currentHash = window.location.hash;

    let targetPath = nextLocale === "es" ? "/" : "/en";

    if (pathname !== "/" && pathname !== "/en") {
      targetPath = nextLocale === "es" ? "/" : "/en";
    }

    setIsOpen(false);

    router.push(`${targetPath}${currentHash}`);
  };

  return (
    <nav
      aria-label={t("language") === "Language" ? "Main navigation" : "Navegación principal"}
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
              className="h-[50px] w-auto object-contain sm:h-[55px] md:h-[60px]"
            />
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {sectionKeys.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigation(item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative py-2 text-[15px] font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {t(item.key)}

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-secondary"
                    />
                  )}
                </button>
              );
            })}

            {/* Language selector */}
            <div
              className="ml-1 flex items-center gap-1 border-l border-border pl-5"
              aria-label={t("language")}
            >
              <button
                type="button"
                onClick={() => handleLanguageChange("es")}
                aria-current={locale === "es" ? "true" : undefined}
                className={`rounded-md px-2 py-1 text-sm font-medium transition-colors ${
                  locale === "es"
                    ? "text-primary"
                    : "text-foreground/60 hover:text-primary"
                }`}
              >
                ES
              </button>

              <span
                aria-hidden="true"
                className="text-foreground/30"
              >
                /
              </span>

              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                aria-current={locale === "en" ? "true" : undefined}
                className={`rounded-md px-2 py-1 text-sm font-medium transition-colors ${
                  locale === "en"
                    ? "text-primary"
                    : "text-foreground/60 hover:text-primary"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile language selector */}
            <div
              className="flex items-center gap-0.5"
              aria-label={t("language")}
            >
              <button
                type="button"
                onClick={() => handleLanguageChange("es")}
                aria-current={locale === "es" ? "true" : undefined}
                className={`rounded-md px-2 py-1 text-xs font-semibold transition-colors ${
                  locale === "es"
                    ? "text-primary"
                    : "text-foreground/60 hover:text-primary"
                }`}
              >
                ES
              </button>

              <span
                aria-hidden="true"
                className="text-foreground/30"
              >
                /
              </span>

              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                aria-current={locale === "en" ? "true" : undefined}
                className={`rounded-md px-2 py-1 text-xs font-semibold transition-colors ${
                  locale === "en"
                    ? "text-primary"
                    : "text-foreground/60 hover:text-primary"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              aria-label={
                isOpen
                  ? locale === "en"
                    ? "Close menu"
                    : "Cerrar menú"
                  : locale === "en"
                    ? "Open menu"
                    : "Abrir menú"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-foreground transition-colors hover:bg-foreground/5"
            >
              <span aria-hidden="true">
                {isOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-border py-3 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {sectionKeys.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigation(item.id)}
                    aria-current={isActive ? "location" : undefined}
                    className={`rounded-lg px-3 py-2.5 text-left text-[15px] font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:bg-foreground/5 hover:text-primary"
                    }`}
                  >
                    {t(item.key)}
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