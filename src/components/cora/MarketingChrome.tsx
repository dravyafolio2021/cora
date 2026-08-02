import Link from "next/link";
import styles from "@/app/cora-site.module.css";
import { GetStartedLink } from "@/components/cora/GetStartedLink";

export function CoraLogo() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandMark} aria-hidden="true">C</span>
      <span>heyCora</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <Link href="/" aria-label="heyCora home"><CoraLogo /></Link>
        <nav aria-label="Primary navigation">
          <Link href="/#why-cora">Why Cora</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#free-tools">Free tools</Link>
          <Link href="/#pricing">Pricing</Link>
        </nav>
        <GetStartedLink className={styles.headerCta} placement="header">
          Start full access <span aria-hidden="true">↗</span>
        </GetStartedLink>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        <div>
          <CoraLogo />
          <p>The all-in-one workspace being built for busy service businesses.</p>
        </div>
        <div className={styles.footerLinks}>
          <Link href="/features/user-management">Current feature</Link>
          <Link href="/#pricing">Pricing</Link>
          <GetStartedLink placement="footer">30-day full access</GetStartedLink>
        </div>
        <small>Beta product · India · Built in public</small>
      </div>
    </footer>
  );
}

export function ProductWorkspace() {
  return (
    <div className={styles.workspace}>
      <aside className={styles.workspaceSidebar}>
        <div className={styles.workspaceBrand}><span>C</span><strong>Cora</strong></div>
        <div className={styles.workspaceNav}>
          <span className={styles.workspaceActive}>⌂ <b>Today</b></span>
          <span>◇ <b>Customers</b></span>
          <span>□ <b>Work</b></span>
          <span>♙ <b>People</b></span>
          <span>◫ <b>Documents</b></span>
        </div>
        <div className={styles.workspaceAccount}>
          <span>AS</span><p><strong>Aarav</strong><small>Workspace owner</small></p>
        </div>
      </aside>
      <div className={styles.workspaceMain}>
        <div className={styles.workspaceTopbar}>
          <div><small>MONDAY, 1 AUGUST</small><strong>Good morning, Aarav</strong></div>
          <button type="button">+ Quick action</button>
        </div>
        <div className={styles.workspaceStats}>
          <article><span>Needs attention</span><strong>04</strong><small>2 verification requests</small></article>
          <article><span>Open work</span><strong>18</strong><small>5 due this week</small></article>
          <article><span>Team status</span><strong>06</strong><small>5 active · 1 invited</small></article>
        </div>
        <div className={styles.workspaceGrid}>
          <article className={styles.focusPanel}>
            <header><div><small>TODAY</small><strong>Your focus</strong></div><span>View all</span></header>
            <div><i className={styles.dotWarning} /><p><strong>Verify Rohan&apos;s access</strong><small>Team · Waiting for action</small></p><b>Review</b></div>
            <div><i className={styles.dotActive} /><p><strong>Confirm Neha&apos;s role</strong><small>People · Invite accepted</small></p><b>Open</b></div>
            <div><i /><p><strong>Check this week&apos;s workload</strong><small>Work · 5 items due</small></p><b>View</b></div>
          </article>
          <article className={styles.controlPanel}>
            <small>WORKSPACE HEALTH</small>
            <div className={styles.healthScore}>82<span>%</span></div>
            <strong>Nearly ready</strong>
            <p>Complete two people checks to finish setup.</p>
            <span className={styles.progress}><i /></span>
          </article>
        </div>
      </div>
    </div>
  );
}

export function MobileStickyCta() {
  return (
    <div className={styles.mobileStickyCta}>
      <div><strong>30 days · all features</strong><span>Free forever after</span></div>
      <GetStartedLink placement="mobile_sticky">Start free <span aria-hidden="true">↗</span></GetStartedLink>
    </div>
  );
}
