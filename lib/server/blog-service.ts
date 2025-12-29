// lib/server/blog-service.ts
import "server-only";
import { prisma } from "@/lib/prisma";
import { HttpError } from "@/lib/server/http";
import { makeSlug } from "@/lib/server/slug";
import { Prisma } from "@prisma/client";

/* --- Public API --- */

export async function listPublicPosts({ page, pageSize, skip, take, category, tag, q }: any) {
  const where: Prisma.BlogPostWhereInput = {
    status: "PUBLISHED",
    publishedAt: { lte: new Date() },
  };

  if (category) where.category = { slug: category };
  if (tag) where.tags = { some: { slug: tag } };
  if (q) {
    where.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { summary: { contains: q, mode: 'insensitive' } }
    ];
  }

  const [totalItems, items] = await Promise.all([
    prisma.blogPost.count({ where }),
    prisma.blogPost.findMany({
      where,
      skip,
      take,
      orderBy: { publishedAt: 'desc' },
      include: { category: true, tags: true }
    })
  ]);

  return { items, page, pageSize, totalItems, totalPages: Math.ceil(totalItems / pageSize) };
}

/* --- Admin API --- */

export async function adminUpdatePost(id: string, data: any) {
  const { tagIds, categoryId, ...rest } = data;
  
  const updateData: Prisma.BlogPostUpdateInput = {
    ...rest,
    category: categoryId ? { connect: { id: categoryId } } : { disconnect: true },
    tags: tagIds ? { set: tagIds.map((tid: string) => ({ id: tid })) } : undefined
  };

  return prisma.blogPost.update({
    where: { id },
    data: updateData
  });
}

export async function adminCreatePost(data: any) {
  const { tagIds, categoryId, title, slug, ...rest } = data;
  const finalSlug = makeSlug(slug || title);

  return prisma.blogPost.create({
    data: {
      ...rest,
      title,
      slug: finalSlug,
      category: categoryId ? { connect: { id: categoryId } } : undefined,
      tags: tagIds ? { connect: tagIds.map((id: string) => ({ id })) } : undefined
    }
  });
}