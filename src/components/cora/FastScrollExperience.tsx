"use client";

import { useEffect } from "react";

export function FastScrollExperience() {
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
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) return;

        gsap.utils.toArray<HTMLElement>("[data-cora-reveal]").forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 22 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.38,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        gsap.fromTo(
          "[data-cora-stack-item]",
          { autoAlpha: 0, x: -18, scale: 0.96 },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.32,
            stagger: 0.045,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "[data-cora-stack]",
              start: "top 82%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          "[data-cora-core]",
          { scale: 0.88, rotate: -2 },
          {
            scale: 1,
            rotate: 0,
            duration: 0.48,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: "[data-cora-stack]",
              start: "top 82%",
              once: true,
            },
          },
        );
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
