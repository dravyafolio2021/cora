"use client";

import { useEffect } from "react";
import styles from "@/app/features/user-management/hero-sample/hero-sample.module.css";

const fragments = [
  ["AC", "User account"],
  ["PR", "Permissions"],
  ["AU", "Authentication"],
  ["IN", "Instructions"],
  ["TR", "Access tracking"],
] as const;

const workflow = [
  ["Invite person", "Complete"],
  ["Email-link verification", "Complete"],
  ["Assign responsibility", "Operations"],
  ["Activate access", "Ready"],
] as const;

export function HeroAccessAnimation() {
  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    async function start() {
      const { gsap } = await import("gsap");
      if (cancelled || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const context = gsap.context(() => {
        gsap.fromTo("[data-hero-fragment]", { autoAlpha: 0, scale: .82, y: 18 }, {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: .45,
          stagger: .08,
          ease: "back.out(1.5)",
        });
        gsap.fromTo("[data-hero-core]", { autoAlpha: 0, scale: .72 }, {
          autoAlpha: 1,
          scale: 1,
          duration: .7,
          delay: .18,
          ease: "back.out(1.7)",
        });
        gsap.fromTo("[data-hero-workflow]", { autoAlpha: 0, x: 45, y: 20 }, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: .65,
          delay: .42,
          ease: "power3.out",
        });
        gsap.fromTo("[data-workflow-row]", { autoAlpha: 0, x: 16 }, {
          autoAlpha: 1,
          x: 0,
          duration: .32,
          delay: .75,
          stagger: .11,
          ease: "power2.out",
        });
        gsap.to("[data-hero-ring]", { rotate: 360, duration: 28, repeat: -1, ease: "none" });
        gsap.to("[data-hero-fragment]", {
          y: (index) => index % 2 === 0 ? -6 : 6,
          duration: 2.2,
          stagger: .18,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
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

  return (
    <div className={styles.visual} aria-label="Fragmented access tools becoming one guided Cora workflow">
      <div className={styles.visualGrid} aria-hidden="true" />
      <div className={styles.fragmentCloud}>
        {fragments.map(([mark, label]) => (
          <span data-hero-fragment key={label}><i>{mark}</i>{label}</span>
        ))}
      </div>

      <div className={styles.core} data-hero-core>
        <span className={styles.coreRing} data-hero-ring aria-hidden="true"><i /><i /><i /></span>
        <span className={styles.coreMark}>C</span>
        <strong>One access journey</strong>
        <small>5 disconnected steps → 1 guided flow</small>
      </div>

      <div className={styles.workflowCard} data-hero-workflow>
        <header>
          <span>NP</span>
          <div><small>NEW TEAM MEMBER</small><strong>Neha Patel</strong></div>
          <b>3 of 4</b>
        </header>
        <div className={styles.workflowRows}>
          {workflow.map(([label, status], index) => (
            <div data-workflow-row key={label}>
              <span className={index < 3 ? styles.done : undefined}>{index < 3 ? "✓" : "4"}</span>
              <p><strong>{label}</strong><small>{status}</small></p>
            </div>
          ))}
        </div>
        <footer><span>Recommended access is ready</span><button type="button">Activate access</button></footer>
      </div>
    </div>
  );
}
