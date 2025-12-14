import { jsonError, jsonOk } from "@/lib/server/http";
import { requireAdmin } from "@/lib/server/auth";
import { adminDeleteCategory, adminUpdateCategory } from "@/lib/server/blog-service";

export const runtime = "nodejs";

type RouteCtx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    const { id } = await ctx.params;
    const body: unknown = await req.json();
    const result = await adminUpdateCategory(id, body);
    return jsonOk(result);
  } catch (err) {
    return jsonError(err);
  }
}

export async function DELETE(_req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    const { id } = await ctx.params;
    const result = await adminDeleteCategory(id);
    return jsonOk(result);
  } catch (err) {
    return jsonError(err);
  }
}
