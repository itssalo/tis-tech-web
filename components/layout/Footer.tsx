import { companyInfo } from "@/data/company";
import { contactInfo } from "@/data/contact";

const footerLinks = [
  { label: "Quiénes Somos", href: "#about" },
  { label: "Soluciones", href: "#solutions" },
  { label: "Socios", href: "#partners" },
  { label: "Productos", href: "#products" },
  { label: "Contacto", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <a
              href="#inicio"
              className="text-2xl font-bold tracking-wide text-foreground hover:text-primary transition-colors"
            >
              {companyInfo.name}
            </a>

            <p className="mt-4 max-w-md text-foreground/70 leading-relaxed">
              {companyInfo.slogan}
            </p>

            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-block mt-6 text-primary font-medium hover:text-secondary transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>

          <div className="md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">
              Navegación
            </h3>

            <nav className="flex flex-col md:items-end gap-3">
              {footerLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    index % 2 === 0
                      ? "text-foreground/70 hover:text-primary"
                      : "text-foreground/70 hover:text-secondary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-sm text-foreground/50 text-center">
            DG TECH SRL | CUIT 30-71633398-8
          </p>
        </div>
      </div>
    </footer>
  );
}