import { jsonError, jsonOk } from "@/lib/server/http";
import { requireAdmin } from "@/lib/server/auth";
import { adminDeleteTag, adminUpdateTag } from "@/lib/server/blog-service";

export const runtime = "nodejs";

type RouteCtx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    const { id } = await ctx.params;
    const body: unknown = await req.json();
    const result = await adminUpdateTag(id, body);
    return jsonOk(result);
  } catch (err) {
    return jsonError(err);
  }
}

export async function DELETE(_req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    const { id } = await ctx.params;
    const result = await adminDeleteTag(id);
    return jsonOk(result);
  } catch (err) {
    return jsonError(err);
  }
}
