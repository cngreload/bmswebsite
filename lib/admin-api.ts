// lib/admin-api.ts

// ---------- Blog admin types & API ----------

export type AdminBlogPostStatus = "DRAFT" | "PUBLISHED";

export type AdminBlogPost = {
  id: string;
  title: string;
  slug: string;
  status: AdminBlogPostStatus;
  excerpt?: string | null;
  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type AdminBlogPostListResponse = {
  items: AdminBlogPost[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export async function fetchAdminBlogPosts(params?: {
  page?: number;
  pageSize?: number;
  q?: string;
  status?: AdminBlogPostStatus | "ALL";
}): Promise<AdminBlogPostListResponse> {
  const search = new URLSearchParams();

  if (params?.page) search.set("page", String(params.page));
  if (params?.pageSize) search.set("pageSize", String(params.pageSize));
  if (params?.q) search.set("q", params.q);
  if (params?.status && params.status !== "ALL") {
    search.set("status", params.status);
  }

  const qs = search.toString();
  const url = `/api/admin/blog/posts${qs ? `?${qs}` : ""}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch admin blog posts");
  }

  const data = (await res.json()) as AdminBlogPostListResponse;
  return data;
}

// ---------- Contact messages admin types & API ----------

export type AdminContactMessageStatus =
  | "NEW"
  | "IN_PROGRESS"
  | "RESOLVED"
  | "ARCHIVED"
  | string;

export type AdminContactMessage = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message?: string | null;
  status?: AdminContactMessageStatus | null;
  createdAt: string;
  updatedAt?: string | null;
};

export type AdminContactMessageListResponse = {
  items: AdminContactMessage[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export async function fetchAdminContactMessages(params?: {
  page?: number;
  pageSize?: number;
  q?: string;
  status?: string;
}): Promise<AdminContactMessageListResponse> {
  const search = new URLSearchParams();

  if (params?.page) search.set("page", String(params.page));
  if (params?.pageSize) search.set("pageSize", String(params.pageSize));
  if (params?.q) search.set("q", params.q);
  if (params?.status) search.set("status", params.status);

  const qs = search.toString();
  const url = `/api/admin/contact-messages${qs ? `?${qs}` : ""}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch admin contact messages");
  }

  const data = (await res.json()) as AdminContactMessageListResponse;
  return data;
}
