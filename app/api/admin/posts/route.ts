import { requireAdmin  } from "@/lib/server/auth";
import { jsonError, jsonOk, parsePagination } from "@/lib/server/http";
import { adminCreatePost, adminListPosts } from "@/lib/server/blog-service";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    await requireAdmin();

    const url = new URL(req.url);
    const sp = url.searchParams;
    const { page, pageSize, skip, take } = parsePagination(sp);

    const data = await adminListPosts({
      page,
      pageSize,
      skip,
      take,
      q: sp.get("q"),
      status: sp.get("status"),
      categoryId: sp.get("categoryId"),
      tagId: sp.get("tagId"),
      category: null,
      tag: null,
    });

    return jsonOk(data);
  } catch (err) {
    return jsonError(err);
  }
}

export async function POST(req: Request) {
  try {
    await requireAdmin();

    const body = await req.json();
    const created = await adminCreatePost(body);
    return jsonOk(created, 201);
  } catch (err) {
    return jsonError(err);
  }
}
