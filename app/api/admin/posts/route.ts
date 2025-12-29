// app/api/admin/posts/route.ts
import { requireAdmin } from "@/lib/server/auth";
import { jsonError, jsonOk } from "@/lib/server/http";
import { adminCreatePost } from "@/lib/server/blog-service";

export async function POST(req: Request) {
  try {
    await requireAdmin();
    const body = await req.json();

    // Fix: In your form, you use 'categoryIds' (plural), 
    // but the DB uses 'categoryId' (singular). 
    // This logic ensures the backend understands both.
    const sanitizedData = {
      ...body,
      categoryId: body.categoryId || body.categoryIds?.[0] || null
    };

    const created = await adminCreatePost(sanitizedData);
    return jsonOk(created, 201);
  } catch (err) {
    return jsonError(err);
  }
}