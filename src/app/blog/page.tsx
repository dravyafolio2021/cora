"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogData";

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "AI & Financial Intelligence",
    "Risk Analysis",
    "Algorithmic Trading",
    "Portfolio Management",
    "Wealth Management",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];

  return (
    <main className="blog-hub">
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
        <Link className="nav-cta" href="/#trial">
          Try it free →
        </Link>
      </header>

      <section className="blog-hero">
        <span className="section-label">Financial Intelligence Hub</span>
        <h1>Organic Research, Market Analysis &amp; Quantitative Insights</h1>
        <p>
          In-depth articles written by quantitative strategists and risk architects to help you navigate modern markets.
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search articles on AI, risk analysis, portfolio optimization..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      <div className="blog-container">
        {/* Featured Article Card */}
        {selectedCategory === "All" && !searchQuery && (
          <section className="featured-section">
            <span className="featured-badge">⭐ Featured Research Article</span>
            <article className="featured-card">
              <div className="featured-image">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="featured-content">
                <span className="category-pill">{featuredPost.category}</span>
                <h2>
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p>{featuredPost.excerpt}</p>
                <div className="article-meta">
                  <div className="author-info">
                    <span className="author-avatar">{featuredPost.author.avatar}</span>
                    <span>
                      <strong>{featuredPost.author.name}</strong>
                      <small>{featuredPost.publishDate} • {featuredPost.readTime}</small>
                    </span>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="read-more-link">
                    Read Article →
                  </Link>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* AdSense Unit Placeholder Slot 1 */}
        <div className="adsense-slot-banner" aria-label="Advertisement">
          <span className="adsense-label">ADVERTISEMENT</span>
          <div className="adsense-placeholder">
            {/* Google AdSense unit will automatically render here upon site approval */}
            <p>Google AdSense Banner Slot — Ready for Approval</p>
          </div>
        </div>

        {/* Article Grid */}
        <section className="articles-grid">
          {filteredPosts.map((post) => (
            <article className="article-card" key={post.slug}>
              <div className="card-image">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="category-pill-overlay">{post.category}</span>
              </div>
              <div className="card-body">
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <div className="card-footer">
                  <div className="author-info">
                    <span className="author-avatar">{post.author.avatar}</span>
                    <span>
                      <strong>{post.author.name}</strong>
                      <small>{post.publishDate} • {post.readTime}</small>
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="arrow-link">
                    →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {filteredPosts.length === 0 && (
          <div className="no-results">
            <h3>No articles found matching &quot;{searchQuery}&quot;</h3>
            <p>Try searching for a different keyword or select another category tab.</p>
          </div>
        )}

        {/* Newsletter Signup Banner */}
        <section className="newsletter-card">
          <div>
            <h3>Subscribe to Quantitative Market Insights</h3>
            <p>Get weekly research briefs on AI investing, risk management, and market regime shifts sent to your inbox.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your work email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </main>
  );
}
