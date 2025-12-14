// lib/server-api.ts
import { headers } from "next/headers";

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
};

export type BlogTag = {
  id: string;
  name: string;
  slug: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  content?: string | null;
  coverImage?: string | null;
  publishedAt?: string | null;
  categories?: BlogCategory[];
  tags?: BlogTag[];
};

export type PaginatedBlogResponse = {
  items: BlogPost[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

// Note: headers() is async in your setup → we must await it
async function getBaseUrl() {
  const h = await headers();

  const host =
    h.get("x-forwarded-host") ??
    h.get("host") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "localhost:3000";

  const protocol =
    h.get("x-forwarded-proto") ??
    (process.env.NODE_ENV === "production" ? "https" : "http");

  return `${protocol}://${host}`;
}

export async function fetchBlogPosts(params?: {
  page?: number;
  pageSize?: number;
  q?: string;
  category?: string;
  tag?: string;
}): Promise<PaginatedBlogResponse> {
  const baseUrl = await getBaseUrl();

  const search = new URLSearchParams();
  if (params?.page) search.set("page", String(params.page));
  if (params?.pageSize) search.set("pageSize", String(params.pageSize));
  if (params?.q) search.set("q", params.q);
  if (params?.category) search.set("category", params.category);
  if (params?.tag) search.set("tag", params.tag);

  const url = `${baseUrl}/api/blog${
    search.toString() ? `?${search.toString()}` : ""
  }`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  const data = (await res.json()) as PaginatedBlogResponse;
  return data;
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost> {
  const baseUrl = await getBaseUrl();
  const url = `${baseUrl}/api/blog/${encodeURIComponent(slug)}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (res.status === 404) {
    throw new Error("NOT_FOUND");
  }

  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }

  const data = (await res.json()) as BlogPost;
  return data;
}

export async function fetchBlogCategories(): Promise<BlogCategory[]> {
  const baseUrl = await getBaseUrl();
  const url = `${baseUrl}/api/blog/categories`;

  const res = await fetch(url, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog categories");
  }

  const data = (await res.json()) as BlogCategory[];
  return data;
}

export async function fetchBlogTags(): Promise<BlogTag[]> {
  const baseUrl = await getBaseUrl();
  const url = `${baseUrl}/api/blog/tags`;

  const res = await fetch(url, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog tags");
  }

  const data = (await res.json()) as BlogTag[];
  return data;
}
