"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
        <span className="section-label">Get in Touch</span>
        <h1>Contact CORA Financial Intelligence</h1>
        <p>Have questions about our platform, quantitative research, enterprise partnerships, or press inquiries?</p>
      </div>

      <div className="legal-container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Details</h2>
            <p>Our quantitative support and editorial team is available to assist you.</p>
            
            <div className="contact-item">
              <strong>Support Email:</strong>
              <p>support@cora.com</p>
            </div>
            
            <div className="contact-item">
              <strong>Research &amp; Press:</strong>
              <p>research@cora.com</p>
            </div>

            <div className="contact-item">
              <strong>Enterprise Solutions:</strong>
              <p>enterprise@cora.com</p>
            </div>

            <div className="contact-item">
              <strong>Headquarters:</strong>
              <p>CORA Financial Technologies Inc.<br />Financial District, New York, NY 10005</p>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-box">
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out to CORA. A quantitative specialist will respond within 24 business hours.</p>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <h2>Send Us a Message</h2>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input id="email" type="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" required placeholder="Question about AI models" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} required placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="button button-primary button-dark">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
