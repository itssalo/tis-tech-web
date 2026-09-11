"use client";

import { FormEvent, useEffect, useState } from "react";
import { contactInfo } from "@/data/contact";

const countries = [
  "Argentina",
  "Bolivia",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Ecuador",
  "El Salvador",
  "Estados Unidos",
  "Guatemala",
  "Honduras",
  "Nicaragua",
  "Panamá",
  "Paraguay",
  "Perú",
  "República Dominicana",
  "Uruguay",
];

const productAreas = [
  "Storage",
  "Networking",
  "Datacenter",
  "UPS",
  "Cableado estructurado",
  "Seguridad",
  "Wireless",
  "Provisión de equipamiento informático",
  "Capacitaciones e Implementaciones",
  "Telecomunicaciones",
  "FTTH – GPON",
  "Conectividad industrial",
  "IIOT",
  "Computadoras industriales",
  "Conectividad celular",
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeaqdln";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    const handleProductSelected = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      if (customEvent.detail) {
        setSelectedProduct(customEvent.detail);
      }
    };

    window.addEventListener("productSelected", handleProductSelected);

    return () => {
      window.removeEventListener("productSelected", handleProductSelected);
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      form.reset();
      setSelectedProduct("");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-primary-soft border border-primary rounded-2xl p-10">
            <div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl"
              aria-hidden="true"
            >
              ✓
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Consulta enviada correctamente
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Nos pondremos en contacto contigo a la brevedad.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="inline-block px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-secondary hover:text-foreground transition-all duration-300 hover:shadow-lg"
            >
              Enviar otra consulta
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {contactInfo.title}
          </h2>

          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            {contactInfo.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-secondary-soft dark:bg-zinc-900 border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Hablemos
            </h3>

            <p className="text-foreground/70 leading-relaxed mb-8">
              Estamos disponibles para conocer tus necesidades y analizar
              oportunidades de colaboración.
            </p>

            <a
              href={`mailto:${contactInfo.email}`}
              className="text-primary font-medium hover:text-secondary transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>

          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="_subject"
                value="Nueva consulta desde TIS TECH"
              />

              {/* Nombre / Empresa */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Empresa
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              {/* Email / Teléfono */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Teléfono
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Tu teléfono"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              {/* País / Área de interés */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    País
                  </label>

                  <select
                    id="country"
                    name="country"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="" disabled>
                      Seleccioná tu país
                    </option>

                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="product"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Área de interés
                  </label>

                  <select
                    id="product"
                    name="product"
                    value={selectedProduct}
                    onChange={(event) => setSelectedProduct(event.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Seleccioná un área</option>

                    {productAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensaje
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Contanos sobre tu proyecto o consulta..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                />
              </div>

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-primary bg-primary-soft px-4 py-3 text-sm text-foreground"
                >
                  No pudimos enviar tu consulta. Por favor, intentá nuevamente.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-secondary hover:text-foreground transition-all duration-300 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar consulta"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}