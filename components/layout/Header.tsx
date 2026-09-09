"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HomeSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
};

function detectIOS() {
  if (typeof navigator === "undefined") {
    return false;
  }

  const userAgent = navigator.userAgent || navigator.vendor || "";

  return (
    /iPad|iPhone|iPod/.test(userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

export default function HomeSection({
  title,
  subtitle,
  description,
  cta,
}: HomeSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isIOS] = useState(() => detectIOS());
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const handlePlaying = () => {
      setIsVideoPlaying(true);
    };

    const handlePause = () => {
      setIsVideoPlaying(false);
    };

    const attemptPlay = async () => {
      try {
        await video.play();
      } catch {
        setIsVideoPlaying(false);
      }
    };

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("pause", handlePause);

    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener("loadeddata", attemptPlay, {
        once: true,
      });
    }

    return () => {
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("loadeddata", attemptPlay);
    };
  }, []);

  const handleVideoInteraction = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    try {
      video.muted = true;
      await video.play();
      setIsVideoPlaying(true);
    } catch {
      setIsVideoPlaying(false);
    }
  };

  return (
    <section
      id="inicio"
      className="scroll-mt-20 overflow-hidden bg-background px-6 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Hero content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary dark:border-primary/30 dark:bg-primary/10">
              Soluciones tecnológicas para industrias
            </div>

            <h1 className="mb-5 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              {title}
            </h1>

            <h2 className="mb-6 max-w-2xl text-2xl font-semibold leading-tight text-primary sm:text-3xl md:text-4xl">
              {subtitle}
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg md:text-xl lg:mx-0">
              {description}
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-lg sm:w-auto"
              >
                {cta}
              </a>

              <a
                href="#solutions"
                className="group inline-flex w-full items-center justify-center rounded-xl border border-border bg-background px-8 py-4 font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-md sm:w-auto"
              >
                Conocer soluciones
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div
              className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-3xl border border-border bg-slate-100 shadow-xl dark:bg-zinc-900 sm:aspect-[16/10] lg:aspect-[4/3]"
              onClick={handleVideoInteraction}
              onTouchStart={handleVideoInteraction}
            >
              {/* iOS fallback image */}
              {isIOS && !isVideoPlaying && (
                <Image
                  src="/images/hero-ios.png"
                  alt="Automatización industrial y tecnología aplicada"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="absolute inset-0 z-10 object-cover object-center"
                />
              )}

              {/* Hero video */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Tecnología y automatización industrial"
                className="absolute inset-0 z-0 block h-full w-full object-cover object-center"
              >
                <source
                  src="/videos/videohero.mp4"
                  type="video/mp4"
                />
              </video>

              {/* iOS play prompt */}
              {isIOS && !isVideoPlaying && (
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105">
                    <span className="ml-1 text-2xl">▶</span>
                  </div>
                </div>
              )}

              {/* Dark overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-30 bg-transparent dark:bg-black/20"
              />

              {/* Bottom gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-24 bg-gradient-to-t from-black/30 to-transparent"
              />

              {/* Hero label */}
              <div className="pointer-events-none absolute bottom-4 left-4 z-40 rounded-xl border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-md sm:bottom-6 sm:left-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
                  Tecnología · Conectividad · Industria
                </span>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-16 w-16 rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/10 sm:-right-5 sm:-top-5 sm:h-20 sm:w-20"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 h-12 w-12 rounded-xl border border-secondary/30 bg-secondary/10 sm:-bottom-5 sm:-left-5 sm:h-16 sm:w-16"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center lg:mt-16">
          <a
            href="#about"
            aria-label="Desplazarse a la sección Sobre TIS TECH"
            className="group flex flex-col items-center gap-2 text-foreground/50 transition-colors hover:text-primary"
          >
            <span className="text-xs font-medium uppercase tracking-wider">
              Conocé TIS TECH
            </span>

            <span className="flex h-9 w-6 items-start justify-center rounded-full border border-current p-1.5">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}