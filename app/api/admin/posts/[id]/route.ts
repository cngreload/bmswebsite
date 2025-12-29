// app/api/admin/posts/[id]/route.ts
import { jsonError, jsonOk } from "@/lib/server/http";
import { requireAdmin } from "@/lib/server/auth";
import { 
  adminDeletePost, 
  adminGetPost, 
  adminUpdatePost, 
  PostInput 
} from "@/lib/server/blog-service";

type RouteCtx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    const { id } = await ctx.params;
    const result = await adminGetPost(id); // This will now work
    return jsonOk(result);
  } catch (err) {
    return jsonError(err);
  }
}

export async function PATCH(req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    const { id } = await ctx.params;
    const body = (await req.json()) as Partial<PostInput>;
    const result = await adminUpdatePost(id, body);
    return jsonOk(result);
  } catch (err) {
    return jsonError(err);
  }
}

export async function DELETE(_req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    const { id } = await ctx.params;
    const result = await adminDeletePost(id);
    return jsonOk(result);
  } catch (err) {
    return jsonError(err);
  }
}