"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#about" },
  { label: "Soluciones", href: "#solutions" },
  { label: "Socios", href: "#partners" },
  { label: "Productos", href: "#products" },
  { label: "Países", href: "#countries" },
  { label: "Contacto", href: "#contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean)

      const scrollPosition = window.scrollY + 140
      let currentSection = "inicio"

      sections.forEach((section) => {
        if (section instanceof HTMLElement && section.offsetTop <= scrollPosition) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)

    const target = document.querySelector(href)

    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav
        className="mx-auto flex h-[90px] max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <button
          type="button"
          onClick={() => handleNavClick("#inicio")}
          className="flex items-center"
          aria-label="Ir al inicio"
        >
          <Image
            src="/brand/tistech.svg"
            alt="TIS TECH SOLUTIONS"
            width={135}
            height={74}
            className="h-[62px] w-auto object-contain"
            priority
          />
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "")
            const isActive = activeSection === sectionId

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted hover:text-primary"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-full bg-secondary" />
                )}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-2xl text-foreground lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "")
              const isActive = activeSection === sectionId

              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-soft text-primary"
                      : "text-muted hover:bg-primary-soft hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
