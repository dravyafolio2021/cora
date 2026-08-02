import type { Metadata } from "next";
import Link from "next/link";
import { GetStartedLink } from "@/components/cora/GetStartedLink";
import { SiteFooter, SiteHeader } from "@/components/cora/MarketingChrome";
import { TeamAccessSimulator } from "@/components/cora/team-management/TeamAccessSimulator";
import { TeamPageMotion } from "@/components/cora/team-management/TeamPageMotion";
import { TrueCostCalculator } from "@/components/cora/team-management/TrueCostCalculator";
import base from "../../cora-site.module.css";
import styles from "./team-management.module.css";

export const metadata: Metadata = {
  title: "User & Team Management for Service Businesses",
  description: "Understand the real cost of fragmented WordPress access, authentication and team-management tools—and see a simpler workflow inside heyCora.",
  alternates: { canonical: "/features/user-management" },
};

const chapters = [
  ["reality", "Current reality"],
  ["simulation", "Staff simulation"],
  ["stack", "Tool stack"],
  ["cost", "True cost"],
  ["requirements", "Requirements"],
  ["solution", "Cora workflow"],
  ["trial", "Start free"],
] as const;

const toolStack = [
  ["WP", "WordPress users", "Accounts"],
  ["UR", "Role plugin", "Permissions"],
  ["AU", "Authentication plugin", "Login"],
  ["WA", "WhatsApp", "Instructions"],
  ["EM", "Email", "Invitations"],
  ["GS", "Spreadsheet", "Tracking"],
  ["TM", "Task tool", "Daily work"],
  ["DV", "Developer", "Maintenance"],
] as const;

const marketChoices = [
  {
    title: "Free-plugin stack",
    price: "Low cash cost",
    copy: "Several free plugins cover parts of the workflow. The owner connects them manually and works around missing features.",
    cost: "Paid through setup time, repeated checking and maintenance.",
  },
  {
    title: "Paid-plugin stack",
    price: "Recurring renewals",
    copy: "Premium plugins improve individual functions, but responsibilities, authentication and daily work can remain separated.",
    cost: "Paid through licences, developer support and operational handoffs.",
  },
  {
    title: "Unsupported stack",
    price: "₹0 can become expensive",
    copy: "Plugins obtained from unofficial sources may have no trusted updates, reliable support or clear security history.",
    cost: "Paid through uncertainty, compatibility problems and recovery risk.",
  },
] as const;

const lossTimeline = [
  ["01", "Create the WordPress account", "Choose a username, email and base role."],
  ["02", "Configure another role plugin", "Translate a real responsibility into technical permissions."],
  ["03", "Set up authentication", "Check login, verification and password rules in another interface."],
  ["04", "Explain everything manually", "Send access instructions through email or WhatsApp."],
  ["05", "Track status elsewhere", "Use a sheet, inbox or memory to know what is complete."],
  ["06", "Repeat when responsibility changes", "Update every relevant tool and hope nothing was missed."],
  ["07", "Remove access when they leave", "Remember every account, plugin and shared credential."],
] as const;

const requirements = [
  ["One invitation", "The owner should not create and explain the same person in several tools."],
  ["Responsibility first", "Start with what the person will do—not a wall of technical capabilities."],
  ["Modern authentication", "Offer social login, passwordless email, email/password and email-link verification."],
  ["Visible status", "See invited, verified, active and paused states in one place."],
  ["Minimum necessary access", "Recommend a safe starting point and keep advanced control available."],
  ["Clean exit", "Pause access without searching through a fragmented stack."],
] as const;

const coraWorkflow = [
  ["01", "Invite", "Add the person and their email."],
  ["02", "Authenticate", "Let them use the login method that fits the workspace."],
  ["03", "Assign responsibility", "Choose what they own in plain business language."],
  ["04", "Review access", "Confirm the recommended starting access."],
  ["05", "Monitor", "See access and verification state beside the person."],
  ["06", "Change or pause", "Keep control as the team changes."],
] as const;

const gains = [
  ["Fewer handoffs", "One understandable flow replaces repeated configuration and explanations."],
  ["Clearer ownership", "Each person sees what they are responsible for."],
  ["Safer starting access", "People begin with what they need instead of broad administration access."],
  ["Faster changes", "Responsibilities and access state remain visible as the business evolves."],
] as const;

const faqs = [
  ["Does Cora support passwordless login?", "Yes. The workflow includes passwordless email login alongside social login, email/password login and email-link verification."],
  ["Do all team members need the same access?", "No. Cora starts from each person’s responsibility and keeps advanced access controls available when required."],
  ["What happens after the 30-day full-access period?", "You can continue with the essential features on Cora’s Free Forever plan or upgrade to keep advanced controls available."],
  ["Are the calculator results guaranteed savings?", "No. The calculator uses editable assumptions to help you examine your own operating cost. It is not a universal savings claim."],
] as const;

export default function UserManagementPage() {
  return (
    <main className={`${base.site} ${styles.page}`} data-team-page>
      <TeamPageMotion />
      <span className={styles.pageProgress} data-team-progress aria-hidden="true" />
      <SiteHeader />

      <section className={styles.hero}>
        <div className={base.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={base.eyebrow}><i aria-hidden="true" /> User &amp; team management · Authentication</span>
              <h1>How much access does your team have?</h1>
              <p className={styles.heroLead}>And how much should they actually have?</p>
              <p className={styles.heroBody}>See the hidden cost of managing people across WordPress, disconnected plugins, WhatsApp, email and spreadsheets—and the simpler workflow Cora is building for service businesses.</p>
              <div className={styles.heroActions}>
                <Link className={base.primaryButton} href="#cost">Calculate your true cost <span aria-hidden="true">↓</span></Link>
                <GetStartedLink className={base.secondaryButton} placement="team_feature_hero">Start 30-day full access</GetStartedLink>
              </div>
              <div className={styles.heroProof}>
                <span>Built for Indian service businesses</span>
                <span>All features for 30 days</span>
                <span>Free Forever after</span>
              </div>
            </div>

            <div className={styles.heroAccessCard} data-team-reveal>
              <header><small>TEAM ACCESS</small><span>4 need attention</span></header>
              {[
                ["AS", "Aarav Sharma", "Owner", "Active"],
                ["NP", "Neha Patel", "Operations", "Verify email"],
                ["RK", "Rohan Kumar", "Service team", "Active"],
                ["MI", "Meera Iyer", "Accountant", "Invite sent"],
              ].map(([initials, name, role, status]) => (
                <div className={styles.accessPerson} key={name}>
                  <span>{initials}</span><p><strong>{name}</strong><small>{role}</small></p><b>{status}</b>
                </div>
              ))}
              <footer><span>Authentication</span><strong>Social · Passwordless · Email</strong></footer>
            </div>
          </div>
        </div>
      </section>

      <nav className={styles.chapterNav} aria-label="Page chapters">
        <div className={base.shell}>
          {chapters.map(([href, label], index) => <Link href={`#${href}`} key={href}><span>0{index + 1}</span>{label}</Link>)}
        </div>
      </nav>

      <section className={styles.realitySection} id="reality">
        <div className={base.shell}>
          <div className={styles.sectionHeading} data-team-reveal>
            <span className={base.kicker}>The familiar reality</span>
            <h2>Adding one team member should not become a software project.</h2>
            <p>The owner knows the person’s responsibility. The software asks them to understand roles, capabilities, plugin settings and multiple login systems.</p>
          </div>
          <div className={styles.realityGrid}>
            <article data-team-reveal><span>01</span><h3>Shared access</h3><p>A convenient admin login slowly becomes the login used by several people.</p></article>
            <article data-team-reveal><span>02</span><h3>Technical permissions</h3><p>Business responsibilities must be translated into plugin-specific terminology.</p></article>
            <article data-team-reveal><span>03</span><h3>Invisible status</h3><p>The owner cannot see invitation, verification and active-access state together.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.simulationSection} id="simulation">
        <div className={base.shell}>
          <div className={styles.sectionHeading} data-team-reveal>
            <span className={base.kicker}>Try the access decision</span>
            <h2>Different people need different parts of the business.</h2>
            <p>Select a team member. The question is not “Which WordPress role?” It is “What should this person be responsible for?”</p>
          </div>
          <TeamAccessSimulator />
        </div>
      </section>

      <section className={styles.stackSection} id="stack">
        <div className={base.shell}>
          <div className={styles.sectionHeading} data-team-reveal>
            <span className={base.kicker}>One person. Many systems.</span>
            <h2>The fragmented stack grows quietly.</h2>
            <p>Each tool may solve one part. The owner still carries the responsibility of connecting the whole process.</p>
          </div>
          <div className={styles.stackStage} data-stack-stage>
            {toolStack.map(([mark, name, purpose]) => (
              <article data-stack-tool key={name}><span>{mark}</span><div><strong>{name}</strong><small>{purpose}</small></div></article>
            ))}
            <div className={styles.stackOwner} data-team-reveal><span>YOU</span><strong>The business owner becomes the integration.</strong></div>
          </div>
          <div className={styles.marketGrid}>
            {marketChoices.map((choice) => (
              <article data-team-reveal key={choice.title}><span>{choice.price}</span><h3>{choice.title}</h3><p>{choice.copy}</p><strong>{choice.cost}</strong></article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.costSection} id="cost">
        <div className={base.shell}>
          <div className={styles.sectionHeading} data-team-reveal>
            <span className={base.kicker}>The Indian cost reality</span>
            <h2>A free plugin can still have an expensive workflow.</h2>
            <p>Change the assumptions to match your business. The calculator values maintenance and administrative time—not only subscription bills.</p>
          </div>
          <TrueCostCalculator />
        </div>
      </section>

      <section className={styles.lossSection}>
        <div className={base.shell}>
          <div className={styles.lossGrid}>
            <div className={styles.sectionHeading} data-team-reveal>
              <span className={base.kicker}>Where the time goes</span>
              <h2>The cost hides inside seven ordinary steps.</h2>
              <p>None of these steps looks enormous alone. Repeating them across every employee, freelancer and responsibility change creates the loss.</p>
            </div>
            <div className={styles.lossTimeline} data-loss-timeline>
              {lossTimeline.map(([number, title, copy]) => (
                <article data-timeline-step key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.requirementsSection} id="requirements">
        <div className={base.shell}>
          <div className={styles.sectionHeading} data-team-reveal>
            <span className={base.kicker}>Define the requirement first</span>
            <h2>What should a better system actually do?</h2>
            <p>Every requirement below answers a pain demonstrated above. No feature exists merely to make the product look larger.</p>
          </div>
          <div className={styles.requirementsGrid}>
            {requirements.map(([title, copy], index) => (
              <article data-team-reveal key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.solutionSection} id="solution">
        <div className={base.shell}>
          <div className={styles.solutionIntro} data-cora-solution>
            <span className={base.eyebrow}><i aria-hidden="true" /> The Cora approach</span>
            <h2>Start with the person. Then their responsibility. Cora handles the access journey.</h2>
            <p>Simple for the everyday decision. Deeper control remains available when the business genuinely needs it.</p>
          </div>
          <div className={styles.coraWorkflow}>
            {coraWorkflow.map(([number, title, copy]) => (
              <article data-team-reveal key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <div className={styles.authPanel} data-team-reveal>
            <div><span className={base.kicker}>Authentication built into the journey</span><h3>Let each person enter securely without creating another admin task.</h3></div>
            <div className={styles.authMethods}>
              {["Social login", "Passwordless email", "Email and password", "Email-link verification"].map((method) => <span key={method}>✓ {method}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gainSection}>
        <div className={base.shell}>
          <div className={styles.sectionHeading} data-team-reveal>
            <span className={base.kicker}>The practical gain</span>
            <h2>Less administration. More confidence about who can do what.</h2>
          </div>
          <div className={styles.gainGrid}>
            {gains.map(([title, copy], index) => <article data-team-reveal key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={base.shell}>
          <div className={styles.faqLayout}>
            <div className={styles.sectionHeading} data-team-reveal><span className={base.kicker}>Before you try it</span><h2>Straight answers.</h2></div>
            <div className={styles.faqList}>
              {faqs.map(([question, answer], index) => <details data-team-reveal open={index === 0} key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.trialSection} id="trial">
        <div className={base.shell}>
          <div className={styles.trialCard} data-team-reveal>
            <span className={base.kicker}>Start with your real team</span>
            <h2>Use every Cora feature for 30 days.</h2>
            <p>Set up your people, authentication and responsibilities. After 30 days, continue on Free Forever or upgrade to keep the advanced controls.</p>
            <div className={styles.trialActions}>
              <GetStartedLink placement="team_feature_bottom">Start full access free <span aria-hidden="true">↗</span></GetStartedLink>
              <span>30-day full access · Free Forever option after the trial</span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
