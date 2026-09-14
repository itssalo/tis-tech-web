import { useTranslations } from "next-intl";

const footerLinks = [
  { key: "about", href: "#about" },
  { key: "solutions", href: "#solutions" },
  { key: "partners", href: "#partners" },
  { key: "products", href: "#products" },
  { key: "countries", href: "#countries" },
  { key: "contact", href: "#contact" },
] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const company = useTranslations("company");

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <a
              href="#inicio"
              className="text-2xl font-bold tracking-wide text-foreground hover:text-primary transition-colors"
            >
              {company("name")}
            </a>

            <p className="mt-4 max-w-md text-foreground/70 leading-relaxed">
              {company("slogan")}
            </p>

            <a
              href={`mailto:${t("email")}`}
              className="inline-block mt-6 text-primary font-medium hover:text-secondary transition-colors"
            >
              {t("email")}
            </a>
          </div>

          <div className="md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">
              {t("navigation")}
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
                  {t(`links.${link.key}`)}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <div className="text-sm text-foreground/50 text-center space-y-1">
            <p>{t("company")}</p>
            <p>{t("address")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}