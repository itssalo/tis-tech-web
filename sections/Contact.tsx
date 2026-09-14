"use client";

import { FormEvent, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const countryKeys = [
  "Argentina",
  "Bolivia",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Ecuador",
  "El Salvador",
  "United States",
  "Guatemala",
  "Honduras",
  "Nicaragua",
  "Panama",
  "Paraguay",
  "Peru",
  "Dominican Republic",
  "Uruguay",
] as const;

const productAreaKeys = [
  "storage",
  "networking",
  "datacenter",
  "ups",
  "structuredCabling",
  "security",
  "wireless",
  "itEquipment",
  "trainingImplementation",
  "telecommunications",
  "ftthGpon",
  "industrialConnectivity",
  "iiot",
  "industrialComputers",
  "cellularConnectivity",
] as const;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeaqdlnn";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const t = useTranslations("contact");

  const countries = t.raw("countries") as string[];
  const productAreas = t.raw("productAreas") as string[];

  useEffect(() => {
    const handleProductSelected = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      if (!customEvent.detail) return;

      const productIndex = productAreas.indexOf(customEvent.detail);

      if (productIndex >= 0 && productAreas[productIndex]) {
        setSelectedProduct(productAreas[productIndex]);
      } else {
        setSelectedProduct(customEvent.detail);
      }
    };

    window.addEventListener("productSelected", handleProductSelected);

    return () => {
      window.removeEventListener("productSelected", handleProductSelected);
    };
  }, [productAreas]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("_subject", t("subject"));

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setSelectedProduct("");
      } else {
        setError(t("error"));
      }
    } catch {
      setError(t("error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="border-t border-border bg-background px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5 12 4 4L19 6"
              />
            </svg>
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("successTitle")}
          </h2>

          <p className="mb-8 text-base leading-relaxed text-muted sm:text-lg">
            {t("successDescription")}
          </p>

          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setError("");
            }}
            className="inline-flex items-center rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-lg"
          >
            {t("sendAnother")}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="border-t border-border bg-background px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Contact information */}
          <div>
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-secondary">
              {t("eyebrow")}
            </span>

            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {t("title")}
            </h2>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t("intro")}
            </p>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Email
              </div>

              <a
                href={`mailto:${t("email")}`}
                className="break-all text-lg font-medium text-foreground transition-colors hover:text-primary"
              >
                {t("email")}
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name / Company */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t("name")}
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={t("namePlaceholder")}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t("company")}
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder={t("companyPlaceholder")}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Email / Phone */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t("emailLabel")}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t("emailPlaceholder")}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t("phone")}
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t("phonePlaceholder")}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Country / Interest */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t("country")}
                  </label>

                  <select
                    id="country"
                    name="country"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="" disabled>
                      {t("countryPlaceholder")}
                    </option>

                    {countries.map((country, index) => (
                      <option key={countryKeys[index]} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t("interest")}
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    required
                    value={selectedProduct}
                    onChange={(event) =>
                      setSelectedProduct(event.target.value)
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="" disabled>
                      {t("interestPlaceholder")}
                    </option>

                    {productAreas.map((area, index) => (
                      <option key={productAreaKeys[index]} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-foreground"
                >
                  {t("message")}
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder={t("messagePlaceholder")}
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-secondary/30 bg-secondary/5 px-4 py-3 text-sm text-secondary"
                >
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? t("sending") : t("submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}