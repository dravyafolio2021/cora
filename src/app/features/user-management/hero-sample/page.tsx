import type { Metadata } from "next";
import Link from "next/link";
import { GetStartedLink } from "@/components/cora/GetStartedLink";
import { SiteHeader } from "@/components/cora/MarketingChrome";
import { HeroAccessAnimation } from "@/components/cora/team-management/HeroAccessAnimation";
import base from "../../../cora-site.module.css";
import styles from "./hero-sample.module.css";

export const metadata: Metadata = {
  title: "Hero Concept: Team Access",
  robots: { index: false, follow: false },
};

const painSignals = [
  ["Everyone becomes an admin", "Broad access is easier than configuring disconnected systems."],
  ["One person. Multiple tools.", "Accounts, authentication and permissions live in different places."],
  ["Offboarding runs on memory", "Removing access depends on remembering every account and instruction."],
] as const;

export default function HeroSamplePage() {
  return (
    <main className={`${base.site} ${styles.sample}`}>
      <SiteHeader />
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={base.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.copy}>
              <span className={styles.eyebrow}><i /> Team access · One guided flow</span>
              <h1>
                Other tools add users.
                <span>Cora gives people the right access.</span>
              </h1>
              <p>Invite, authenticate, assign responsibility and see access status in one guided workflow—without stitching together accounts, permission tools, chat instructions and spreadsheets.</p>
              <div className={styles.actions}>
                <Link href="#pain">See the simpler workflow <span aria-hidden="true">↓</span></Link>
                <GetStartedLink placement="hero_concept">Start 30-day full access</GetStartedLink>
              </div>
              <div className={styles.proof}>
                <span>Built for service businesses</span>
                <span>All features for 30 days</span>
                <span>Free Forever after</span>
              </div>
            </div>
            <HeroAccessAnimation />
          </div>
        </div>
      </section>

      <section className={styles.painStrip} id="pain">
        <div className={base.shell}>
          {painSignals.map(([title, copy], index) => (
            <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{copy}</p></article>
          ))}
        </div>
      </section>
    </main>
  );
}
