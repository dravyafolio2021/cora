"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TRIAL_URL = "#trial";

const trustMarks = ["Seoul", "Hudson", "babylon", "NOME", "phoenix", "Nexter"];

const useCases = [
  {
    title: "Individual investors",
    copy: "Track your portfolio, plan strategies, and make smarter decisions with clear AI insights.",
    metric: "+32% Faster",
    metricCopy: "Decision-making with AI insights",
    className: "use-case-blue",
  },
  {
    title: "Financial teams",
    copy: "Collaborate on financial strategies, monitor investments, and make data-driven decisions.",
    metric: "Real-Time",
    metricCopy: "Collaboration across all investment data",
    className: "use-case-green",
  },
  {
    title: "Wealth managers",
    copy: "Manage multiple client portfolios, identify risk, and personalize tracking.",
    metric: "10K+",
    metricCopy: "Portfolios managed securely",
    className: "use-case-violet",
  },
  {
    title: "Active traders",
    copy: "Stay ahead of market moves with real-time alerts and decision-ready signals.",
    metric: "Up to 2X",
    metricCopy: "Faster analysis and portfolio updates",
    className: "use-case-coral",
  },
];

const testimonials = [
  {
    quote:
      "The platform helped me understand my portfolio in ways I couldn't before. The insights are clear and actually useful.",
    name: "David Miller",
    role: "Individual Investor",
    initials: "DM",
  },
  {
    quote:
      "Managing multiple portfolios is much easier now. The risk analysis tools save us hours every week.",
    name: "Sarah Thompson",
    role: "Wealth Manager",
    initials: "ST",
  },
  {
    quote:
      "The real-time insights and alerts help our team react faster to market changes. It is now part of our daily workflow.",
    name: "Michael Chen",
    role: "Active Trader",
    initials: "MC",
  },
];

const faqs = [
  {
    q: "How secure is my financial data?",
    a: "Your data is protected with industry-standard encryption and secure infrastructure. We follow strict security practices to ensure your financial information remains private and safe.",
  },
  {
    q: "Can I connect multiple investment accounts?",
    a: "Yes. Connect multiple accounts to see holdings, performance, risk, and activity together in one clear dashboard.",
  },
  {
    q: "How do the AI insights work?",
    a: "The platform analyzes portfolio and market data to surface patterns, risks, and timely recommendations you can review before acting.",
  },
  {
    q: "Is a trial available before subscribing?",
    a: "Yes. You can explore the core platform with a free trial before choosing a paid plan.",
  },
  {
    q: "Do you offer plans for financial teams or organizations?",
    a: "Yes. Custom team plans can include more users, advanced controls, priority support, and tailored integrations.",
  },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`logo ${inverse ? "logo-inverse" : ""}`}>
      <span className="logo-mark" aria-hidden="true">
        <i />
        <i />
      </span>
      <span>CORA</span>
    </span>
  );
}

function Arrow({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`button-arrow ${dark ? "button-arrow-dark" : ""}`} aria-hidden="true">
      →
    </span>
  );
}

function PrimaryButton({
  children,
  href = TRIAL_URL,
  dark = false,
}: {
  children: React.ReactNode;
  href?: string;
  dark?: boolean;
}) {
  return (
    <a className={`button button-primary ${dark ? "button-dark" : ""}`} href={href}>
      <span>{children}</span>
      <Arrow dark={dark} />
    </a>
  );
}

function SecondaryButton({
  children,
  href = "#platform",
  dark = false,
}: {
  children: React.ReactNode;
  href?: string;
  dark?: boolean;
}) {
  return (
    <a className={`button button-secondary ${dark ? "button-dark" : ""}`} href={href}>
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [comparison, setComparison] = useState<"before" | "after">("after");
  const [step, setStep] = useState(1);
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [signal, setSignal] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setSignal((value) => (value + 1) % 3), 2200);
    return () => window.clearInterval(id);
  }, []);

  const signals = [
    { label: "BUY", className: "signal-buy" },
    { label: "HOLD", className: "signal-hold" },
    { label: "SELL", className: "signal-sell" },
  ];

  const stepContent = [
    {
      title: "Connect your accounts",
      copy: "Securely bring your investment accounts and financial data into one place.",
      accuracy: "100% secure",
    },
    {
      title: "Analyze your data",
      copy: "AI processes your data to generate clear insights.",
      accuracy: "95% accuracy",
    },
    {
      title: "Act with confidence",
      copy: "Review recommendations, risks, and opportunities before making decisions.",
      accuracy: "24/7 insights",
    },
  ][step];

  return (
    <main>
      <section className="hero" id="home">
        <div className="cloud cloud-one" />
        <div className="cloud cloud-two" />

        <header className="nav-shell">
          <a href="#home" aria-label="CORA home">
            <Logo />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#platform">Products</a>
            <a href="/blog">Blog &amp; Insights</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <a className="nav-cta" href={TRIAL_URL}>
            Try it free <Arrow dark />
          </a>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
          {menuOpen && (
            <nav className="mobile-nav" aria-label="Mobile navigation">
              <a href="#platform" onClick={() => setMenuOpen(false)}>
                Products
              </a>
              <a href="/blog" onClick={() => setMenuOpen(false)}>
                Blog &amp; Insights
              </a>
              <a href="/about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </a>
              <a href={TRIAL_URL} onClick={() => setMenuOpen(false)}>
                Try it free
              </a>
            </nav>
          )}
        </header>

        <div className="hero-content">
          <h1>
            Finance{" "}
            <span className="ai-tile" aria-label="AI">
              AI
            </span>{" "}
            Platform
          </h1>
          <p>
            Optimize your investments with AI-driven analysis,
            <br className="desktop-break" /> real-time tracking, and intelligent recommendations.
          </p>
          <div className="button-row">
            <PrimaryButton>Get started now</PrimaryButton>
            <SecondaryButton>View demo</SecondaryButton>
          </div>
          <div className="trust-row">
            <span>⭐ 4.9/5 Rating</span>
            <span>🛡️ Bank-level security</span>
            <span>⚡ Real-time AI insights</span>
          </div>
        </div>

        <div className="hero-dashboard-wrap">
          <div className="dashboard-brand-fix">
            <Logo inverse />
          </div>
          <Image
            src="/assets/dashboard.webp"
            alt="Financial intelligence dashboard"
            width={942}
            height={550}
            priority
          />
        </div>
        <div className="hero-meadow" />
      </section>

      <section className="trusted">
        <span className="trusted-label">Trusted by investors and financial teams</span>
        <div className="logo-rail" aria-label="Trusted companies">
          {trustMarks.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>
      </section>

      <section className="comparison section-pad">
        <div className="section-heading centered">
          <h2>Smarter decisions start with clear data</h2>
        </div>
        <div className="comparison-switcher">
          <button
            className={comparison === "before" ? "active" : ""}
            onClick={() => setComparison("before")}
          >
            Before CORA
          </button>
          <div className={`comparison-orb ${comparison}`} aria-hidden="true">
            <span className="logo-mark">
              <i />
              <i />
            </span>
          </div>
          <button
            className={comparison === "after" ? "active" : ""}
            onClick={() => setComparison("after")}
          >
            After CORA
          </button>
        </div>
        <div className={`comparison-card ${comparison}`}>
          <div>
            <span className="comparison-kicker">
              {comparison === "before" ? "Challenges of managing investments today" : "Smarter way to manage your investments"}
            </span>
            <ul>
              {(comparison === "before"
                ? [
                    "Fragmented data across multiple platforms",
                    "Lack of clear direction for long-term decisions",
                    "Tracking investments manually takes time",
                    "Difficult to understand portfolio risks",
                  ]
                : [
                    "Get clear recommendations based on real-time data",
                    "Understand risks before making investment decisions",
                    "Monitor your portfolio in real time",
                    "Make confident and informed investment choices",
                  ]
              ).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="comparison-metrics">
            <div>
              <strong>{comparison === "before" ? "60%" : "3X Faster"}</strong>
              <span>{comparison === "before" ? "Financial confusion" : "Smart decisions"}</span>
            </div>
            <div>
              <strong>{comparison === "before" ? "55%" : "24/7"}</strong>
              <span>{comparison === "before" ? "Poor data understanding" : "Real-time tracking"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features section-pad" id="features">
        <div className="section-heading split">
          <div>
            <SectionLabel>Core features</SectionLabel>
            <h2>Everything you need to invest confidently</h2>
          </div>
          <div className="heading-side">
            <p>Professional tools designed for active traders and long-term investors managing complex portfolios.</p>
            <a href="#platform" className="text-link">
              View all features <Arrow dark />
            </a>
          </div>
        </div>

        <div className="feature-grid">
          <article className="feature-card feature-risk">
            <h3>Advanced risk analysis</h3>
            <Image src="/assets/risk-shield.webp" alt="" width={201} height={173} />
            <div className="pill-marquee">
              <span>Portfolio volatility tracking</span>
              <span>Predictive risk alerts</span>
              <span>Real-time risk scoring</span>
            </div>
          </article>

          <article className="feature-card feature-market">
            <Image src="/assets/market-insights.webp" alt="Live market insights chart" fill sizes="(max-width: 760px) 100vw, 40vw" />
          </article>

          <article className="feature-card feature-signal">
            <h3>AI-powered insights</h3>
            <div className={`signal-word ${signals[signal].className}`}>{signals[signal].label}</div>
            <p>Real-time market data and predictive analysis.</p>
          </article>

          <article className="feature-card feature-portfolio">
            <div className="feature-copy">
              <h3>Portfolio tracking</h3>
              <p>See your entire financial picture in one place with performance attribution and gain/loss analysis.</p>
            </div>
            <div className="mini-portfolio">
              <div className="mini-card">
                <span>Total portfolio</span>
                <strong>$124,500</strong>
                <small>+12.4%</small>
              </div>
              <div className="mini-card tilted">
                <span>Best performer</span>
                <strong>$12,018</strong>
                <small>+8.4%</small>
              </div>
              <div className="mini-card">
                <span>Risk score</span>
                <strong>92%</strong>
                <small>Healthy</small>
              </div>
            </div>
          </article>

          <article className="feature-card feature-alerts">
            <h3>Smart alerts</h3>
            <Image src="/assets/smart-alerts.webp" alt="Investment alert stack" width={285} height={109} />
          </article>
        </div>
      </section>

      <section className="platform section-pad" id="platform">
        <div className="section-heading centered">
          <SectionLabel>Platform overview</SectionLabel>
          <h2>See your financial intelligence in action</h2>
          <p>Explore a real-time dashboard that brings your portfolio, insights, and risk analysis together in one clear view.</p>
          <div className="button-row">
            <PrimaryButton href="#features">Explore features</PrimaryButton>
            <SecondaryButton>Try the live demo</SecondaryButton>
          </div>
        </div>
        <div className="platform-preview">
          <div className="preview-dashboard">
            <div className="dashboard-brand-fix">
              <Logo inverse />
            </div>
            <Image src="/assets/dashboard.webp" alt="CORA platform dashboard" width={942} height={550} />
          </div>
          <div className="preview-notes">
            <article>
              <span>↗</span>
              <p>All your data in one place. Bring accounts together, organize goals, and track performance.</p>
            </article>
            <article>
              <span>↗</span>
              <p>Make progress faster. Access key insights instantly and know where to focus your attention.</p>
            </article>
            <article>
              <span>↗</span>
              <p>Built for better focus. A clean interface that helps you stay focused and keep everything simple.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="how-it-works section-pad" id="how-it-works">
        <div className="section-heading">
          <SectionLabel>How it works</SectionLabel>
          <h2>Start investing in minutes</h2>
          <p>Connect your accounts, let AI analyze your data, and get clear insights to invest with confidence.</p>
        </div>
        <div className="metrics-inline">
          <div>
            <strong>100%</strong>
            <span>Secure, encrypted data protection</span>
          </div>
          <div>
            <strong>2 Minutes</strong>
            <span>Set up to connect and begin instantly</span>
          </div>
        </div>
        <div className="steps">
          <div className="step-tabs">
            {[0, 1, 2].map((item) => (
              <button className={step === item ? "active" : ""} onClick={() => setStep(item)} key={item}>
                Step 0{item + 1}
              </button>
            ))}
          </div>
          <div className="process-image">
            <Image src="/assets/process.webp" alt="AI investment analysis process" width={872} height={510} />
            <div className="process-overlay">
              <strong>{stepContent.accuracy}</strong>
              <h3>{stepContent.title}</h3>
              <p>{stepContent.copy}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="security section-pad">
        <div className="security-copy">
          <SectionLabel>Security &amp; compliance</SectionLabel>
          <h2>Your data is protected at every level</h2>
          <ul>
            <li>End-to-end encryption</li>
            <li>Secure data infrastructure</li>
            <li>Privacy-first approach</li>
            <li>Compliance standards</li>
          </ul>
          <PrimaryButton dark>Get started</PrimaryButton>
        </div>
        <div className="security-visual">
          <Image src="/assets/security.webp" alt="Security and compliance certifications" width={875} height={695} />
        </div>
      </section>

      <section className="use-cases section-pad" id="use-cases">
        <div className="section-heading centered">
          <SectionLabel>Use cases</SectionLabel>
          <h2>Who this platform is built for</h2>
        </div>
        <div className="use-case-track">
          {useCases.map((item) => (
            <article className={`use-case-card ${item.className}`} key={item.title}>
              <div className="use-case-icon">↗</div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="use-case-metric">
                <strong>{item.metric}</strong>
                <span>{item.metricCopy}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="use-case-badges">
          <span>10,000+ Users</span>
          <span>4.9 Rating</span>
          <span>Real-time insights</span>
          <span>Secure &amp; compliant</span>
        </div>
        <blockquote>
          “We built this platform to remove the guesswork from investing and give people clear, data-driven insights.”
          <footer>
            <span className="avatar">FC</span> Founder &amp; CEO
          </footer>
        </blockquote>
      </section>

      <section className="integrations section-pad" id="integrations">
        <div className="integration-card">
          <SectionLabel>Integrations</SectionLabel>
          <h2>Connect with the<br />tools you already use</h2>
          <p>Seamlessly integrate with your financial platforms, data sources, and tools to keep everything connected and up to date.</p>
          <PrimaryButton>Explore all integrations</PrimaryButton>
          <div className="integration-hills">
            <Image src="/assets/integration-hills.webp" alt="" fill sizes="100vw" />
          </div>
        </div>
      </section>

      <section className="stats section-pad">
        <div className="section-heading centered">
          <SectionLabel>Platform stats</SectionLabel>
          <h2>Powering smarter investment decisions</h2>
          <p>Real-time insights, advanced analytics, and secure infrastructure working together.</p>
        </div>
        <div className="stats-grid">
          {[
            ["Active investors", "10,000+", "Users managing portfolios with AI insights."],
            ["Assets tracked", "$250M+", "In investments monitored across the platform."],
            ["Platform uptime", "99.9%", "Reliable access to your financial intelligence."],
            ["AI insights generated", "1M+", "Data-driven signals delivered every month."],
          ].map(([label, value, copy], index) => (
            <article className={index % 2 ? "dark" : ""} key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <p>{copy}</p>
              <i>{index === 0 ? "♟" : index === 1 ? "◉" : index === 2 ? "◷" : "●"}</i>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials section-pad">
        <div className="section-heading">
          <h2>What investors say about the platform</h2>
          <div className="testimonial-meta">
            <span>⭐ 4.9/5 Rating</span>
            <span>♥ 75+ Testimonials</span>
            <span>♟ 10K+ Growth community</span>
          </div>
          <PrimaryButton dark>Get started today</PrimaryButton>
        </div>
        <div className="testimonial-marquee">
          <div className="testimonial-track">
            {[...testimonials, ...testimonials].map((item, index) => (
              <article key={`${item.name}-${index}`}>
                <div className="stars">★★★★★</div>
                <p>{item.quote}</p>
                <footer>
                  <span className={`avatar avatar-${(index % 3) + 1}`}>{item.initials}</span>
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.role}</small>
                  </span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing section-pad" id="pricing">
        <div className="section-heading centered">
          <SectionLabel>Subscription plans</SectionLabel>
          <h2>Transparent pricing without hidden fees</h2>
        </div>
        <div className="billing-toggle">
          <span className={!yearly ? "active" : ""}>Monthly</span>
          <button aria-label="Toggle yearly billing" onClick={() => setYearly((value) => !value)}>
            <i className={yearly ? "yearly" : ""} />
          </button>
          <span className={yearly ? "active" : ""}>Yearly</span>
          <em>20% off</em>
        </div>
        <div className="pricing-wrap">
          <article className="price-card">
            <h3>Starter plan</h3>
            <p>Best for individual investors</p>
            <div className="price">
              <strong>${yearly ? "15" : "19"}</strong>
              <span>/month</span>
            </div>
            <a href={TRIAL_URL}>Get started</a>
            <ul>
              <li>Connect up to 5 investment accounts</li>
              <li>Portfolio performance tracking</li>
              <li>Basic AI insights</li>
              <li>Market updates &amp; alerts</li>
              <li>Real-time price alerts</li>
              <li>Email support</li>
            </ul>
          </article>
          <article className="price-card price-card-dark">
            <span className="popular">Popular</span>
            <h3>Pro plan</h3>
            <p>Best for active investors</p>
            <div className="price">
              <strong>${yearly ? "31" : "39"}</strong>
              <span>/month</span>
            </div>
            <a href={TRIAL_URL}>Get started</a>
            <ul>
              <li>Unlimited account connections</li>
              <li>Advanced AI investment insights</li>
              <li>Portfolio risk analysis</li>
              <li>Smart alerts &amp; automation</li>
              <li>Historical performance analytics</li>
              <li>Priority support</li>
            </ul>
          </article>
          <div className="trial-notes">
            <span>7-day free trial available</span>
            <span>No credit card required</span>
            <span>Cancel anytime</span>
          </div>
        </div>
        <div className="enterprise">
          <div>
            <h3>Enterprise plan</h3>
            <p>Need a custom solution for your organization?<br />Talk with our team to design a plan for your needs.</p>
          </div>
          <a href="#footer">Contact sales</a>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="faq-side">
          <h2>Frequently asked questions</h2>
          <p>Find quick answers to common questions about the platform, pricing, and security.</p>
          <div className="question-card">
            <div className="avatar-stack">
              <span>DM</span><span>ST</span><span>MC</span><span>+</span><span>You</span>
            </div>
            <strong>Still have questions?</strong>
            <p>Reach out, and our team will guide you.</p>
            <a href="#footer">Talk to our team <Arrow dark /></a>
          </div>
        </div>
        <div className="accordion">
          {faqs.map((item, index) => (
            <article className={openFaq === index ? "open" : ""} key={item.q}>
              <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                <span>{item.q}</span>
                <i>{openFaq === index ? "−" : "+"}</i>
              </button>
              <div className="answer">
                <p>{item.a}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta" id="trial">
        <div className="cloud cloud-three" />
        <div className="section-heading centered">
          <h2>Ready to invest smarter?</h2>
          <p>Join investors using AI insights and real-time data to track portfolios and make better financial decisions.</p>
          <div className="button-row">
            <PrimaryButton>Start free trial</PrimaryButton>
            <SecondaryButton>Try the live demo</SecondaryButton>
          </div>
        </div>
        <div className="cta-meadow" />
      </section>

      <footer className="footer" id="footer">
        <div className="footer-brand">
          <Logo />
          <p>A modern platform for smarter portfolio tracking, quantitative analytics, and AI financial insights.</p>
          <a href="mailto:support@cora.com">support@cora.com</a>
        </div>
        <div>
          <h3>Research &amp; Content</h3>
          <a href="/blog">Blog &amp; Insights</a>
          <a href="/blog/ai-portfolio-optimization-2026">AI Portfolio Strategy</a>
          <a href="/blog/algorithmic-risk-management-strategies">Algorithmic Risk</a>
          <a href="/blog/retail-investor-guide-ai-trading-tools">AI Trading Tools</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Support</a>
          <a href="#pricing">Pricing Plans</a>
          <a href="#platform">Platform Demo</a>
        </div>
        <div>
          <h3>Legal &amp; Compliance</h3>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/disclaimer">Financial Disclaimer</a>
          <a href="/sitemap.xml">XML Sitemap</a>
        </div>
      </footer>
      <div className="footer-bottom">© 2026 CORA Financial Technologies Inc. All rights reserved. Google AdSense compliant.</div>
    </main>
  );
}
