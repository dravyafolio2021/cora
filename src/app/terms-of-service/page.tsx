import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | CORA — AI-Powered Financial Intelligence",
  description: "Read the Terms of Service governing the use of CORA platform, educational content, and data analytics tools.",
};

export default function TermsOfServicePage() {
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

      <div className="legal-container">
        <h1>Terms of Service</h1>
        <p className="legal-meta">Effective Date: July 24, 2026</p>

        <section className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the CORA platform, content hub, articles, and financial intelligence tools (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Service.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site and Service—including all source code, databases, algorithms, software, website designs, audio, video, text, research articles, and graphics—are owned or controlled by CORA and protected by international copyright and trademark laws.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Permitted &amp; Prohibited Uses</h2>
          <p>
            You are granted a limited license to access and use the Site for personal, non-commercial research and informational purposes. You may not scrape, frame, reverse engineer, or redistribute our analytical models or articles without explicit written permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Educational &amp; Informational Purpose Only</h2>
          <p>
            All organic content, articles, research notes, signals, and metrics published on CORA are for educational, news, and analytical purposes only. They do not constitute personalized investment advice or financial recommendations. Please review our <Link href="/disclaimer">Financial Disclaimer</Link>.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall CORA, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or reliance upon any market analysis or content provided on the Site.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws applicable to financial software and web publishing services.
          </p>
        </section>
      </div>
    </main>
  );
}
