import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, BlogPost } from "@/data/blogData";
import { SITE_URL } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found | CORA" };

  return {
    title: `${post.title} | CORA Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Structured Data (JSON-LD) for SEO & AdSense crawlers
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.excerpt,
    "image": `${SITE_URL}${post.image}`,
    "datePublished": post.publishDate,
    "dateModified": post.updatedDate,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "CORA AI Financial Intelligence",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/assets/dashboard.webp`,
      },
    },
  };

  return (
    <main className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

      <article className="article-detail-wrap">
        <header className="article-header">
          <div className="category-row">
            <span className="category-pill">{post.category}</span>
            <span className="read-time">{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="article-lead">{post.excerpt}</p>

          <div className="article-author-bar">
            <div className="author-info">
              <span className="author-avatar">{post.author.avatar}</span>
              <div>
                <strong>{post.author.name}</strong>
                <p>{post.author.role} • Published {post.publishDate}</p>
              </div>
            </div>
            <div className="share-buttons">
              <span>Share:</span>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${SITE_URL}/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${SITE_URL}/blog/${post.slug}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </header>

        <div className="article-hero-image">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        <div className="article-content-layout">
          <aside className="article-sidebar">
            <div className="toc-card">
              <h3>Table of Contents</h3>
              <nav>
                {post.tableOfContents.map((item) => (
                  <a key={item.id} href={`#${item.id}`}>
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Sidebar AdSense Placement Slot */}
            <div className="adsense-slot-sidebar">
              <span className="adsense-label">SPONSORED</span>
              <div className="adsense-box">
                <p>AdSense Display Slot</p>
              </div>
            </div>
          </aside>

          <div className="article-body">
            {post.sections.map((section, idx) => (
              <section key={section.id} id={section.id} className="article-section">
                <h2>{section.heading}</h2>

                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}

                {section.callout && (
                  <div className="article-callout">
                    <h4>💡 {section.callout.title}</h4>
                    <p>{section.callout.text}</p>
                  </div>
                )}

                {section.table && (
                  <div className="article-table-wrap">
                    <table>
                      <thead>
                        <tr>
                          {section.table.headers.map((h) => (
                            <th key={h}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Inline In-Feed AdSense Placement Slot after middle section */}
                {idx === 2 && (
                  <div className="adsense-slot-infeed">
                    <span className="adsense-label">ADVERTISEMENT</span>
                    <div className="adsense-infeed-box">
                      <p>Google AdSense In-Article Content Unit</p>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* FAQs Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="article-faq-section" id="faqs">
                <h2>Frequently Asked Questions</h2>
                {post.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="faq-item">
                    <h4>Q: {faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </section>
            )}

            {/* Author Bio Footer Box */}
            <div className="author-bio-footer">
              <span className="avatar-large">{post.author.avatar}</span>
              <div>
                <h4>Written by {post.author.name}</h4>
                <p className="author-role">{post.author.role}</p>
                <p>{post.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="related-articles-section">
        <div className="related-container">
          <h2>More Organic Content &amp; Quantitative Analysis</h2>
          <div className="articles-grid">
            {relatedPosts.map((rPost) => (
              <article className="article-card" key={rPost.slug}>
                <div className="card-image">
                  <Image
                    src={rPost.image}
                    alt={rPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="category-pill-overlay">{rPost.category}</span>
                </div>
                <div className="card-body">
                  <h3>
                    <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                  </h3>
                  <p>{rPost.excerpt}</p>
                  <div className="card-footer">
                    <span className="read-time">{rPost.readTime}</span>
                    <Link href={`/blog/${rPost.slug}`} className="read-link">
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
