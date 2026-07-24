import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | CORA — Financial Intelligence Platform",
  description: "Learn about CORA's mission to empower investors with machine learning portfolio optimization, real-time risk analytics, and quantitative research.",
};

export default function AboutPage() {
  return (
    <main className="legal-page">
      <header className="nav-shell">
        <Link href="/" className="logo">
          <span className="logo-mark" aria-hidden="true">
            <i /><i />
          </span>
          <span>CORA</span>
        </Link>
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog &amp; Insights</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <div className="about-hero">
        <span className="section-label">Our Mission</span>
        <h1>Democratizing Institutional Financial Intelligence Through AI</h1>
        <p>
          CORA was founded to bridge the gap between wall-street quantitative research labs and modern individual investors, wealth managers, and financial teams.
        </p>
      </div>

      <div className="legal-container">
        <section className="legal-section">
          <h2>Why We Built CORA</h2>
          <p>
            Traditional investment management relies on fragmented dashboards, manual spreadsheet tracking, and outdated linear models that fail during volatility shocks. We engineered CORA to unify real-time portfolio telemetry, natural language sentiment processing, and deep reinforcement learning into one seamless intelligence hub.
          </p>
        </section>

        <section className="legal-section">
          <h2>Core Methodology</h2>
          <div className="about-pillars">
            <div className="about-pillar-card">
              <h3>1. Quantitative Rigor</h3>
              <p>We combine Ledoit-Wolf covariance shrinkage, Random Matrix Theory, and multi-factor regression to filter market noise and isolate true signals.</p>
            </div>
            <div className="about-pillar-card">
              <h3>2. Tail-Risk Defense</h3>
              <p>Our risk engines prioritize Conditional Value at Risk (CVaR) and dynamic volatility regime classification to shield portfolios against black swan drawdowns.</p>
            </div>
            <div className="about-pillar-card">
              <h3>3. Transparent Research</h3>
              <p>Every algorithm, statistical backtest, and market insight we publish undergoes rigorous peer review and walk-forward validation.</p>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Our Leadership &amp; Research Team</h2>
          <div className="author-grid">
            <div className="author-bio-card">
              <div className="avatar-large">ER</div>
              <div>
                <h3>Dr. Elena Rostova</h3>
                <p className="author-role">Lead Quantitative Researcher</p>
                <p>PhD in Computational Finance from MIT. Ex-BlackRock Quantitative Strategist with 12+ years developing asset allocation engines.</p>
              </div>
            </div>
            <div className="author-bio-card">
              <div className="avatar-large">MV</div>
              <div>
                <h3>Marcus Vance</h3>
                <p className="author-role">Chief Risk Officer</p>
                <p>15+ years managing algorithmic risk models across global macro hedge funds. Expert in tail-risk hedging and stress testing.</p>
              </div>
            </div>
            <div className="author-bio-card">
              <div className="avatar-large">SC</div>
              <div>
                <h3>Sophia Chen</h3>
                <p className="author-role">Senior Market Strategist</p>
                <p>Specialist in Natural Language Processing (NLP) for market sentiment analysis and high-frequency alternative data integration.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
