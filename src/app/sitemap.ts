import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://heycora-ai-cora-dashboard.vercel.app';

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const routes = [
    '',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? ('daily' as const) : ('monthly' as const),
    priority: route === '' ? 1.0 : 0.7,
  }));

  return [...routes, ...blogUrls];
}
