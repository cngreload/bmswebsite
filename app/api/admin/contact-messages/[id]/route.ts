import { jsonError, jsonOk } from "@/lib/server/http";
import { requireAdmin } from "@/lib/server/auth";
import {
  adminGetContactMessage,
  adminUpdateContactMessage,
} from "@/lib/server/contact-service";

export const runtime = "nodejs";

type RouteCtx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    const { id } = await ctx.params;
    return jsonOk(await adminGetContactMessage(id));
  } catch (err) {
    return jsonError(err);
  }
}

export async function PATCH(req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    const { id } = await ctx.params;
    const body: unknown = await req.json();
    return jsonOk(await adminUpdateContactMessage(id, body));
  } catch (err) {
    return jsonError(err);
  }
}
