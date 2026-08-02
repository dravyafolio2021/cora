"use client";

import { useEffect } from "react";

export function TeamPageMotion() {
  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    async function start() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        gsap.to("[data-team-progress]", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-team-page]",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2,
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-team-reveal]").forEach((element) => {
          gsap.fromTo(element, { autoAlpha: 0, y: 26 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.42,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          });
        });

        gsap.fromTo("[data-stack-tool]", { autoAlpha: 0, y: 30, rotate: -2 }, {
          autoAlpha: 1,
          y: 0,
          rotate: 0,
          duration: 0.34,
          stagger: 0.055,
          ease: "power2.out",
          scrollTrigger: { trigger: "[data-stack-stage]", start: "top 78%", once: true },
        });

        gsap.fromTo("[data-timeline-step]", { autoAlpha: 0, x: -22 }, {
          autoAlpha: 1,
          x: 0,
          duration: 0.34,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: { trigger: "[data-loss-timeline]", start: "top 80%", once: true },
        });

        gsap.fromTo("[data-cora-solution]", { scale: 0.93, autoAlpha: 0 }, {
          scale: 1,
          autoAlpha: 1,
          duration: 0.55,
          ease: "back.out(1.35)",
          scrollTrigger: { trigger: "[data-cora-solution]", start: "top 80%", once: true },
        });
      });

      cleanup = () => context.revert();
    }

    void start();
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}
