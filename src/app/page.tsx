import Link from "next/link";
import { MobileStickyCta, ProductWorkspace, SiteFooter, SiteHeader } from "@/components/cora/MarketingChrome";
import { FastScrollExperience } from "@/components/cora/FastScrollExperience";
import { GetStartedLink } from "@/components/cora/GetStartedLink";
import styles from "./cora-site.module.css";

const friction = [
  {
    number: "01",
    title: "One clear starting point",
    copy: "Open one workspace and see what needs your attention. No hunting through a plugin stack before work can begin.",
  },
  {
    number: "02",
    title: "Guided by default",
    copy: "Common actions stay obvious. Setup and daily work are designed for busy owners, not software specialists.",
  },
  {
    number: "03",
    title: "Control when you need it",
    copy: "Advanced roles, verification and business controls remain available without overwhelming the everyday experience.",
  },
];

const journey = [
  ["01", "Show us your current setup", "Start with the WordPress tools and fragmented workflows you already use."],
  ["02", "Activate one useful workflow", "We help you get one real business outcome working before adding more complexity."],
  ["03", "Run the day from one workspace", "Your team gets a shared place to see work, ownership and next actions."],
  ["04", "Unlock deeper controls", "Add permissions, verification and advanced settings as your operation grows."],
];

const freeTools = [
  ["Quotation maker", "Create a clean service quotation in minutes."],
  ["Service pricing calculator", "Price your work with costs and margin in view."],
  ["WhatsApp enquiry link", "Turn a click into a structured customer enquiry."],
  ["Plugin cost calculator", "See what your fragmented WordPress stack really costs."],
];

const faqs = [
  [
    "Is heyCora another WordPress plugin?",
    "heyCora gives your team one managed workspace instead of asking them to piece together the daily experience across several plugin interfaces.",
  ],
  [
    "Who is the beta for?",
    "The initial beta is for India-based service businesses already using WordPress and several disconnected tools or plugins.",
  ],
  [
    "What happens after the 30-day trial?",
    "Your first 30 days include access to every available feature. After that, continue on the Free Forever plan with essential features or upgrade to keep the advanced controls.",
  ],
  [
    "Is every feature finished?",
    "No. heyCora is an active beta. We publish what is available, what is being built and where early users can influence the product.",
  ],
];

export default function Home() {
  return (
    <main className={styles.site}>
      <FastScrollExperience />
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <i aria-hidden="true" /> 30-day full access · Free forever after
            </span>
            <h1>
              Your service business.
              <span>One simple workspace.</span>
            </h1>
            <p>
              Replace the daily chaos of WordPress and 10+ fragmented plugins with one clear place to run your work, people and customer operations.
            </p>
            <div className={styles.heroActions}>
              <GetStartedLink className={styles.primaryButton} placement="hero">
                Start 30-day full access <span aria-hidden="true">↗</span>
              </GetStartedLink>
            </div>
            <div className={styles.heroMeta}>
              <span>For Indian service businesses</span>
              <span>All features for 30 days</span>
              <span>Then stay free or upgrade</span>
            </div>
          </div>

          <div className={styles.heroProduct}>
            <div className={styles.demoLabel}>
              <span>Workspace preview</span>
              <span className={styles.liveBadge}>Beta</span>
            </div>
            <ProductWorkspace />
          </div>
        </div>
      </section>

      <section className={styles.promiseSection} id="why-cora">
        <div className={styles.shell}>
          <div className={styles.sectionIntro} data-cora-reveal>
            <span className={styles.kicker}>The product principle</span>
            <h2>Simple on the surface. Powerful underneath.</h2>
            <p>
              Your customers should not need to understand your software stack. Your team should not need technical training to complete everyday work.
            </p>
          </div>
          <div className={styles.principleGrid}>
            {friction.map((item) => (
              <article className={styles.principleCard} data-cora-reveal key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stackSection} aria-labelledby="stack-title">
        <div className={styles.shell}>
          <div className={styles.stackStory} data-cora-stack>
            <div className={styles.stackCopy} data-cora-reveal>
              <span className={styles.kicker}>From plugin chaos to one workspace</span>
              <h2 id="stack-title">Not ten different tools. One Cora.</h2>
              <p>Enquiries, bookings, customers, your team and daily work—without opening a different plugin for every task.</p>
            </div>
            <div className={styles.stackVisual}>
              <div className={styles.pluginCloud} aria-label="Fragmented business tools">
                {["Forms", "Bookings", "CRM", "Invoices", "Team", "WhatsApp", "Reviews", "Tasks", "Reports", "Customers"].map((tool) => (
                  <span data-cora-stack-item key={tool}>{tool}</span>
                ))}
              </div>
              <span className={styles.stackArrow} aria-hidden="true">→</span>
              <div className={styles.coraCore} data-cora-core>
                <span>C</span>
                <strong>One Cora workspace</strong>
                <small>Simple daily view. Advanced control inside.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featureSpotlight} id="features">
        <div className={styles.shell}>
          <div className={styles.spotlightGrid} data-cora-reveal>
            <div className={styles.spotlightCopy}>
              <span className={styles.kicker}>Shipping this week</span>
              <h2>User management without the admin maze.</h2>
              <p>
                We are shaping a workflow that helps an owner invite people, choose responsibilities and keep verification visible—without exposing every advanced setting at once.
              </p>
              <ul className={styles.checkList}>
                <li><span>✓</span> Clear responsibilities before complex permissions</li>
                <li><span>✓</span> Verification status visible in one place</li>
                <li><span>✓</span> Advanced controls available only when needed</li>
              </ul>
              <Link className={styles.textLink} href="/features/user-management">
                Open the complete workflow <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className={styles.teamPanel}>
              <div className={styles.panelHeader}>
                <div>
                  <small>People &amp; access</small>
                  <strong>Workspace team</strong>
                </div>
                <button type="button">+ Invite person</button>
              </div>
              {[
                ["AS", "Aarav Sharma", "Owner", "Verified", "active"],
                ["NP", "Neha Patel", "Operations", "Invite sent", "pending"],
                ["RK", "Rohan Kumar", "Team member", "Verification needed", "warning"],
              ].map(([initials, name, role, status, tone]) => (
                <div className={styles.personRow} key={name}>
                  <span className={styles.avatar}>{initials}</span>
                  <span className={styles.personName}><strong>{name}</strong><small>{role}</small></span>
                  <span className={`${styles.status} ${styles[tone]}`}>{status}</span>
                  <span className={styles.more} aria-hidden="true">•••</span>
                </div>
              ))}
              <div className={styles.panelNote}>
                <span>Advanced access controls</span>
                <strong>Available when your team needs them →</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.journeySection} id="how-it-works">
        <div className={styles.shell}>
          <div className={styles.sectionIntro} data-cora-reveal>
            <span className={styles.kicker}>An effortless path</span>
            <h2>Start with one outcome. Grow into the platform.</h2>
          </div>
          <div className={styles.journeyList}>
            {journey.map(([number, title, copy]) => (
              <article className={styles.journeyRow} data-cora-reveal key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.toolsSection} id="free-tools">
        <div className={styles.shell}>
          <div className={styles.toolsIntro} data-cora-reveal>
            <div>
              <span className={styles.kicker}>Useful before you sign up</span>
              <h2>Free tools for busy Indian service businesses.</h2>
            </div>
            <p>Get a useful result first. Save it, reuse it and manage the next step inside your free Cora workspace.</p>
          </div>
          <div className={styles.toolsGrid}>
            {freeTools.map(([name, copy], index) => (
              <article className={styles.toolCard} data-cora-reveal key={name}>
                <span>0{index + 1}</span>
                <h3>{name}</h3>
                <p>{copy}</p>
                <small>Free tool · Coming soon</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.publicBuild} id="build-in-public">
        <div className={styles.shell}>
          <div className={styles.publicCard} data-cora-reveal>
            <div>
              <span className={styles.eyebrow}><i aria-hidden="true" /> Building with our first users</span>
              <h2>Watch the product become useful, one business problem at a time.</h2>
              <p>
                Our build-in-public sessions show the problem, the product decision and the working beta flow—without turning the series into a developer tutorial.
              </p>
            </div>
            <div className={styles.sessionCard}>
              <span>Next workflow</span>
              <strong>User management &amp; verification</strong>
              <p>Problem → workflow → beta decisions → live questions</p>
              <Link href="/features/user-management">Open the interactive feature story ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pricingSection} id="pricing">
        <div className={styles.shell}>
          <div className={styles.pricingCard} data-cora-reveal>
            <div>
              <span className={styles.kicker}>Start without risk</span>
              <h2>Everything for 30 days. Essential Cora forever.</h2>
              <p>After the trial, continue free with limited essentials—or upgrade to keep every advanced feature unlocked.</p>
            </div>
            <div className={styles.priceRail} aria-label="Planned annual price options">
              <span><strong>₹0</strong><small>free forever</small></span>
              <span><strong>₹1,999</strong><small>/ year</small></span>
              <span><strong>₹2,999</strong><small>/ year</small></span>
              <span><strong>₹4,999</strong><small>/ year</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection} id="faq">
        <div className={styles.shell}>
          <div className={styles.faqGrid} data-cora-reveal>
            <div className={styles.sectionIntro}>
              <span className={styles.kicker}>Straight answers</span>
              <h2>Before you join the beta.</h2>
            </div>
            <div className={styles.faqList}>
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.trialSection} id="trial">
        <div className={styles.shell}>
          <div className={styles.trialCard} data-cora-reveal>
            <span className={styles.kicker}>30-day full-access beta</span>
            <h2>Use every feature for 30 days. Then continue free—or upgrade.</h2>
            <p>
              Start inside Cora, tell us about your current setup and activate the first workflow that removes real work from your day.
            </p>
            <div className={styles.trialActions}>
              <GetStartedLink className={styles.primaryButton} placement="bottom_trial">
                Start full access free <span aria-hidden="true">→</span>
              </GetStartedLink>
              <span>No feature limits for 30 days · Free plan after trial</span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileStickyCta />
    </main>
  );
}
