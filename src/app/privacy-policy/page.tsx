import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CORA — AI-Powered Financial Intelligence",
  description: "Learn about CORA's privacy policy, data collection, Google AdSense cookies, and security compliance.",
};

export default function PrivacyPolicyPage() {
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
        <h1>Privacy Policy</h1>
        <p className="legal-meta">Last Updated: July 24, 2026</p>

        <section className="legal-section">
          <h2>1. Overview</h2>
          <p>
            At CORA (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), accessible from https://heycora-ai-cora-dashboard.vercel.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information collected and recorded by CORA and how we use it.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Log Files &amp; Technical Telemetry</h2>
          <p>
            CORA follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as a part of hosting services&apos; analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Google DoubleClick DART Cookie &amp; AdSense</h2>
          <p>
            Google is one of our third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.
          </p>
          <p>
            Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL:{" "}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/technologies/ads
            </a>
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Advertising Partners Privacy Policies</h2>
          <p>
            Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on CORA, which are sent directly to users&apos; browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          <p>
            Note that CORA has no access to or control over these cookies that are used by third-party advertisers.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Third Party Privacy Policies</h2>
          <p>
            CORA&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Data Protection Rights (GDPR &amp; CCPA)</h2>
          <p>
            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </p>
          <ul>
            <li>The right to access – You have the right to request copies of your personal data.</li>
            <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
            <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. Contact Information</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us via email at <strong>privacy@cora.com</strong> or visit our <Link href="/contact">Contact Page</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}
