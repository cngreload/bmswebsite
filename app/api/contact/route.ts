import { jsonError, jsonOk } from "@/lib/server/http";
import { createContactMessage } from "@/lib/server/contact-service";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await createContactMessage(body);
    return jsonOk(result, 201);
  } catch (err) {
    return jsonError(err);
  }
}
