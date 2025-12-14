import "server-only";

import { prisma } from "@/lib/prisma";
import { HttpError, toIso } from "@/lib/server/http";
import { makeSlug } from "@/lib/server/slug";

type JsonRecord = Record<string, unknown>;

function isRecord(v: unknown): v is JsonRecord {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}
function asRecord(v: unknown, msg = "Invalid object"): JsonRecord {
  if (!isRecord(v)) throw new HttpError(400, msg, "VALIDATION_ERROR");
  return v;
}
function asString(v: unknown, field: string, required: boolean) {
  if (v === undefined || v === null) {
    if (required) throw new HttpError(400, `${field} is required`, "VALIDATION_ERROR");
    return undefined;
  }
  const s = String(v).trim();
  if (!s && required) throw new HttpError(400, `${field} is required`, "VALIDATION_ERROR");
  return s || undefined;
}
function asNullableString(v: unknown): string | null | undefined {
  if (v === undefined) return undefined;
  if (v === null) return null;
  const s = String(v).trim();
  return s ? s : null;
}
function ensureArray(v: unknown, msg = "Expected array"): unknown[] {
  if (!Array.isArray(v)) throw new HttpError(500, msg, "INTERNAL_ERROR");
  return v;
}
function ensureNumber(v: unknown, msg = "Expected number"): number {
  if (typeof v !== "number" || Number.isNaN(v)) throw new HttpError(500, msg, "INTERNAL_ERROR");
  return v;
}
function parseDateOrNull(v: unknown): Date | null | undefined {
  if (v === undefined) return undefined;
  if (v === null || v === "") return null;
  const d = new Date(String(v));
  if (Number.isNaN(d.getTime())) throw new HttpError(400, "Invalid publishedAt", "VALIDATION_ERROR");
  return d;
}

const POST_STATUSES = ["DRAFT", "PUBLISHED", "ARCHIVED"] as const;
type PostStatus = (typeof POST_STATUSES)[number];

function parseStatus(v: unknown): PostStatus | undefined {
  if (v === undefined) return undefined;
  const s = String(v).trim().toUpperCase();
  if (!POST_STATUSES.includes(s as PostStatus)) throw new HttpError(400, "Invalid status", "VALIDATION_ERROR");
  return s as PostStatus;
}

function publishedWhere(): Record<string, unknown> {
  return {
    status: "PUBLISHED",
    publishedAt: { lte: new Date() },
  };
}

// typed wrapper (no `any`) so TS doesn't require Prisma namespace types
const db = prisma as unknown as {
  blogPost: {
    count(args: unknown): Promise<number>;
    findMany(args: unknown): Promise<unknown>;
    findUnique(args: unknown): Promise<unknown | null>;
    create(args: unknown): Promise<unknown>;
    update(args: unknown): Promise<unknown>;
    delete(args: unknown): Promise<unknown>;
  };
  category: {
    findMany(args: unknown): Promise<unknown>;
    findUnique(args: unknown): Promise<unknown | null>;
    create(args: unknown): Promise<unknown>;
    update(args: unknown): Promise<unknown>;
    delete(args: unknown): Promise<unknown>;
  };
  tag: {
    findMany(args: unknown): Promise<unknown>;
    findUnique(args: unknown): Promise<unknown | null>;
    create(args: unknown): Promise<unknown>;
    update(args: unknown): Promise<unknown>;
    delete(args: unknown): Promise<unknown>;
  };
};

/* -------------------- Public -------------------- */

type ListArgs = {
  page: number;
  pageSize: number;
  skip: number;
  take: number;
  category?: string | null;
  tag?: string | null;
  q?: string | null;
};

function mapPublicPostRow(row: unknown) {
  const r = asRecord(row);

  const id = asString(r.id, "id", true)!;
  const slug = asString(r.slug, "slug", true)!;
  const title = asString(r.title, "title", true)!;

  const summary = r.summary === undefined ? null : asNullableString(r.summary) ?? null;
  const coverImageUrl = r.coverImageUrl === undefined ? null : asNullableString(r.coverImageUrl) ?? null;

  const category =
    r.category && isRecord(r.category)
      ? {
          slug: asString(r.category.slug, "category.slug", true)!,
          name: asString(r.category.name, "category.name", true)!,
        }
      : null;

  const tags = Array.isArray(r.tags)
    ? r.tags
        .map((t) => (isRecord(t) ? t : null))
        .filter((t): t is JsonRecord => !!t)
        .map((t) => ({
          slug: asString(t.slug, "tag.slug", true)!,
          name: asString(t.name, "tag.name", true)!,
        }))
    : [];

  // publishedAt should exist for public posts
  const publishedAt = r.publishedAt instanceof Date ? r.publishedAt : new Date(String(r.publishedAt));
  if (Number.isNaN(publishedAt.getTime())) throw new HttpError(500, "Invalid publishedAt in DB", "INTERNAL_ERROR");

  return {
    id,
    slug,
    title,
    summary,
    coverImageUrl,
    category,
    tags,
    publishedAt: toIso(publishedAt)!,
  };
}

export async function listPublicPosts(args: ListArgs) {
  const where: Record<string, unknown> = { ...publishedWhere() };

  if (args.category) {
    // correct Prisma relation filter for optional single relation
    where.category = { is: { slug: args.category } };
  }

  if (args.tag) {
    where.tags = { some: { slug: args.tag } };
  }

  if (args.q) {
    const q = args.q.trim();
    if (q) {
      where.OR = [
        { title: { contains: q, mode: "insensitive" } },
        { summary: { contains: q, mode: "insensitive" } },
      ];
    }
  }

  const [totalItemsRaw, rowsRaw] = await Promise.all([
    db.blogPost.count({ where }),
    db.blogPost.findMany({
      where,
      orderBy: { publishedAt: "desc" },
      skip: args.skip,
      take: args.take,
      include: {
        category: { select: { slug: true, name: true } },
        tags: { select: { slug: true, name: true } },
      },
    }),
  ]);

  const totalItems = ensureNumber(totalItemsRaw);
  const rows = ensureArray(rowsRaw);

  return {
    items: rows.map(mapPublicPostRow),
    page: args.page,
    pageSize: args.pageSize,
    totalItems,
    totalPages: Math.ceil(totalItems / args.pageSize),
  };
}

export async function getPublicPostBySlug(slug: string) {
  const postRaw = await db.blogPost.findUnique({
    where: { slug },
    include: {
      category: { select: { slug: true, name: true } },
      tags: { select: { slug: true, name: true } },
    },
  });

  if (!postRaw) throw new HttpError(404, "Not found", "NOT_FOUND");
  const p = asRecord(postRaw);

  const status = String(p.status ?? "");
  const publishedAt = p.publishedAt instanceof Date ? p.publishedAt : new Date(String(p.publishedAt));

  if (status !== "PUBLISHED" || !p.publishedAt || Number.isNaN(publishedAt.getTime()) || publishedAt > new Date()) {
    throw new HttpError(404, "Not found", "NOT_FOUND");
  }

  const category =
    p.category && isRecord(p.category)
      ? {
          slug: asString(p.category.slug, "category.slug", true)!,
          name: asString(p.category.name, "category.name", true)!,
        }
      : null;

  const tags = Array.isArray(p.tags)
    ? p.tags
        .map((t) => (isRecord(t) ? t : null))
        .filter((t): t is JsonRecord => !!t)
        .map((t) => ({
          slug: asString(t.slug, "tag.slug", true)!,
          name: asString(t.name, "tag.name", true)!,
        }))
    : [];

  return {
    id: asString(p.id, "id", true)!,
    slug: asString(p.slug, "slug", true)!,
    title: asString(p.title, "title", true)!,
    summary: asNullableString(p.summary) ?? null,
    content: String(p.content ?? ""),
    coverImageUrl: asNullableString(p.coverImageUrl) ?? null,
    category,
    tags,
    publishedAt: toIso(publishedAt)!,
    readingTime: typeof p.readingTime === "number" ? p.readingTime : null,
    seo: null,
  };
}

export async function listPublicCategories() {
  const catsRaw = await db.category.findMany({
    select: { slug: true, name: true },
    orderBy: { name: "asc" },
  });

  const cats = ensureArray(catsRaw).map((c) => asRecord(c));

  const items = await Promise.all(
    cats.map(async (c) => {
      const slug = asString(c.slug, "slug", true)!;
      const name = asString(c.name, "name", true)!;

      const postCountRaw = await db.blogPost.count({
        where: { ...publishedWhere(), category: { is: { slug } } },
      });

      return { slug, name, postCount: ensureNumber(postCountRaw) };
    })
  );

  return items;
}

export async function listPublicTags() {
  const tagsRaw = await db.tag.findMany({
    select: { slug: true, name: true },
    orderBy: { name: "asc" },
  });

  const tags = ensureArray(tagsRaw).map((t) => asRecord(t));

  const items = await Promise.all(
    tags.map(async (t) => {
      const slug = asString(t.slug, "slug", true)!;
      const name = asString(t.name, "name", true)!;

      const postCountRaw = await db.blogPost.count({
        where: { ...publishedWhere(), tags: { some: { slug } } },
      });

      return { slug, name, postCount: ensureNumber(postCountRaw) };
    })
  );

  return items;
}

/* -------------------- Admin -------------------- */

type AdminListArgs = ListArgs & {
  status?: string | null;
  categoryId?: string | null;
  tagId?: string | null;
};

function mapAdminListRow(row: unknown) {
  const r = asRecord(row);

  const category =
    r.category && isRecord(r.category)
      ? {
          id: asString(r.category.id, "category.id", true)!,
          name: asString(r.category.name, "category.name", true)!,
        }
      : null;

  return {
    id: asString(r.id, "id", true)!,
    slug: asString(r.slug, "slug", true)!,
    title: asString(r.title, "title", true)!,
    status: String(r.status ?? "DRAFT"),
    publishedAt: r.publishedAt ? toIso(r.publishedAt instanceof Date ? r.publishedAt : new Date(String(r.publishedAt))) : null,
    createdAt: r.createdAt ? toIso(r.createdAt instanceof Date ? r.createdAt : new Date(String(r.createdAt))) : null,
    updatedAt: r.updatedAt ? toIso(r.updatedAt instanceof Date ? r.updatedAt : new Date(String(r.updatedAt))) : null,
    category,
  };
}

export async function adminListPosts(args: AdminListArgs) {
  const where: Record<string, unknown> = {};

  if (args.status) where.status = parseStatus(args.status) ?? args.status;
  if (args.categoryId) where.categoryId = args.categoryId;
  if (args.tagId) where.tags = { some: { id: args.tagId } };

  if (args.q) {
    const q = args.q.trim();
    if (q) {
      where.OR = [
        { title: { contains: q, mode: "insensitive" } },
        { summary: { contains: q, mode: "insensitive" } },
      ];
    }
  }

  const [totalItemsRaw, rowsRaw] = await Promise.all([
    db.blogPost.count({ where }),
    db.blogPost.findMany({
      where,
      orderBy: [{ updatedAt: "desc" }],
      skip: args.skip,
      take: args.take,
      include: { category: { select: { id: true, name: true } } },
    }),
  ]);

  const totalItems = ensureNumber(totalItemsRaw);
  const rows = ensureArray(rowsRaw);

  return {
    items: rows.map(mapAdminListRow),
    page: args.page,
    pageSize: args.pageSize,
    totalItems,
    totalPages: Math.ceil(totalItems / args.pageSize),
  };
}

export async function adminGetPost(id: string) {
  const postRaw = await db.blogPost.findUnique({
    where: { id },
    include: {
      category: true,
      tags: { select: { id: true, slug: true, name: true } },
    },
  });
  if (!postRaw) throw new HttpError(404, "Not found", "NOT_FOUND");

  const p = asRecord(postRaw);

  const tags = Array.isArray(p.tags)
    ? p.tags
        .map((t) => (isRecord(t) ? t : null))
        .filter((t): t is JsonRecord => !!t)
        .map((t) => ({
          id: asString(t.id, "tag.id", true)!,
          slug: asString(t.slug, "tag.slug", true)!,
          name: asString(t.name, "tag.name", true)!,
        }))
    : [];

  return {
    id: asString(p.id, "id", true)!,
    title: asString(p.title, "title", true)!,
    slug: asString(p.slug, "slug", true)!,
    summary: asNullableString(p.summary) ?? null,
    content: String(p.content ?? ""),
    coverImageUrl: asNullableString(p.coverImageUrl) ?? null,
    status: String(p.status ?? "DRAFT"),
    publishedAt: p.publishedAt ? toIso(p.publishedAt instanceof Date ? p.publishedAt : new Date(String(p.publishedAt))) : null,
    categoryId: p.categoryId ? String(p.categoryId) : null,
    tags,
  };
}

export async function adminCreatePost(body: unknown) {
  const b = asRecord(body);

  const title = asString(b.title, "title", true)!;
  const slug = makeSlug(asString(b.slug ?? title, "slug", true)!);

  const exists = await db.blogPost.findUnique({ where: { slug } });
  if (exists) throw new HttpError(409, "Slug already exists", "CONFLICT");

  const status = parseStatus(b.status) ?? "DRAFT";

  const publishedAt =
    status === "PUBLISHED" ? (parseDateOrNull(b.publishedAt) ?? new Date()) : (parseDateOrNull(b.publishedAt) ?? null);

  const categoryId = b.categoryId === undefined ? undefined : asNullableString(b.categoryId);

  const tagIds =
    b.tagIds === undefined
      ? []
      : Array.isArray(b.tagIds)
        ? b.tagIds.map((x) => String(x))
        : (() => {
            throw new HttpError(400, "Invalid tagIds", "VALIDATION_ERROR");
          })();

  const data: Record<string, unknown> = {
    title,
    slug,
    summary: asNullableString(b.summary) ?? null,
    content: String(b.content ?? ""),
    coverImageUrl: asNullableString(b.coverImageUrl) ?? null,
    status,
    publishedAt,
  };

  if (categoryId !== undefined) data.categoryId = categoryId;
  if (tagIds.length) data.tags = { connect: tagIds.map((id) => ({ id })) };

  return db.blogPost.create({ data });
}

export async function adminUpdatePost(id: string, body: unknown) {
  const b = asRecord(body);
  const data: Record<string, unknown> = {};

  if (b.title !== undefined) data.title = asString(b.title, "title", true)!;

  if (b.slug !== undefined) {
    const s = makeSlug(asString(b.slug, "slug", true)!);
    const exists = await db.blogPost.findUnique({ where: { slug: s } });
    if (exists) {
      const ex = asRecord(exists);
      if (String(ex.id) !== id) throw new HttpError(409, "Slug already exists", "CONFLICT");
    }
    data.slug = s;
  }

  if (b.summary !== undefined) data.summary = asNullableString(b.summary) ?? null;
  if (b.content !== undefined) data.content = String(b.content ?? "");
  if (b.coverImageUrl !== undefined) data.coverImageUrl = asNullableString(b.coverImageUrl) ?? null;

  if (b.status !== undefined) data.status = parseStatus(b.status) ?? String(b.status);
  if (b.publishedAt !== undefined) data.publishedAt = parseDateOrNull(b.publishedAt);

  if (b.status === "PUBLISHED" && (b.publishedAt === undefined || b.publishedAt === null || b.publishedAt === "")) {
    data.publishedAt = new Date();
  }

  if (b.categoryId !== undefined) data.categoryId = asNullableString(b.categoryId);

  if (b.tagIds !== undefined) {
    if (!Array.isArray(b.tagIds)) throw new HttpError(400, "Invalid tagIds", "VALIDATION_ERROR");
    const tagIds = b.tagIds.map((x) => String(x));
    data.tags = { set: [], connect: tagIds.map((tid) => ({ id: tid })) };
  }

  return db.blogPost.update({ where: { id }, data });
}

export async function adminDeletePost(id: string) {
  return db.blogPost.delete({ where: { id } });
}

/* -------- Category Admin -------- */

export async function adminListCategories() {
  return db.category.findMany({ orderBy: { name: "asc" } });
}

export async function adminCreateCategory(body: unknown) {
  const b = asRecord(body);
  const name = asString(b.name, "name", true)!;
  const slug = makeSlug(asString(b.slug ?? name, "slug", true)!);

  const exists = await db.category.findUnique({ where: { slug } });
  if (exists) throw new HttpError(409, "Slug already exists", "CONFLICT");

  return db.category.create({ data: { name, slug, description: asNullableString(b.description) ?? null } });
}

export async function adminUpdateCategory(id: string, body: unknown) {
  const b = asRecord(body);
  const data: Record<string, unknown> = {};

  if (b.name !== undefined) data.name = asString(b.name, "name", true)!;

  if (b.slug !== undefined) {
    const slug = makeSlug(asString(b.slug, "slug", true)!);
    const exists = await db.category.findUnique({ where: { slug } });
    if (exists) {
      const ex = asRecord(exists);
      if (String(ex.id) !== id) throw new HttpError(409, "Slug already exists", "CONFLICT");
    }
    data.slug = slug;
  }

  if (b.description !== undefined) data.description = asNullableString(b.description) ?? null;

  return db.category.update({ where: { id }, data });
}

export async function adminDeleteCategory(id: string) {
  const inUseRaw = await db.blogPost.count({ where: { categoryId: id } });
  const inUse = ensureNumber(inUseRaw);
  if (inUse > 0) throw new HttpError(409, "Category has posts", "CONFLICT");
  return db.category.delete({ where: { id } });
}

/* -------- Tag Admin -------- */

export async function adminListTags() {
  return db.tag.findMany({ orderBy: { name: "asc" } });
}

export async function adminCreateTag(body: unknown) {
  const b = asRecord(body);
  const name = asString(b.name, "name", true)!;
  const slug = makeSlug(asString(b.slug ?? name, "slug", true)!);

  const exists = await db.tag.findUnique({ where: { slug } });
  if (exists) throw new HttpError(409, "Slug already exists", "CONFLICT");

  return db.tag.create({ data: { name, slug } });
}

export async function adminUpdateTag(id: string, body: unknown) {
  const b = asRecord(body);
  const data: Record<string, unknown> = {};

  if (b.name !== undefined) data.name = asString(b.name, "name", true)!;

  if (b.slug !== undefined) {
    const slug = makeSlug(asString(b.slug, "slug", true)!);
    const exists = await db.tag.findUnique({ where: { slug } });
    if (exists) {
      const ex = asRecord(exists);
      if (String(ex.id) !== id) throw new HttpError(409, "Slug already exists", "CONFLICT");
    }
    data.slug = slug;
  }

  return db.tag.update({ where: { id }, data });
}

export async function adminDeleteTag(id: string) {
  const inUseRaw = await db.blogPost.count({ where: { tags: { some: { id } } } });
  const inUse = ensureNumber(inUseRaw);
  if (inUse > 0) throw new HttpError(409, "Tag is in use", "CONFLICT");
  return db.tag.delete({ where: { id } });
}
