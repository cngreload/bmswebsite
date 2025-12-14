import { NextResponse } from "next/server";

export class HttpError extends Error {
  status: number;
  code?: string;
  details?: unknown;

  constructor(status: number, message: string, code?: string, details?: unknown) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export function jsonOk(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

export function jsonError(err: unknown) {
  if (err instanceof HttpError) {
    return NextResponse.json(
      {
        error: err.code ?? "ERROR",
        message: err.message,
        details: err.details ?? null,
      },
      { status: err.status }
    );
  }

  console.error(err);
  return NextResponse.json(
    { error: "INTERNAL_SERVER_ERROR", message: "Unexpected server error" },
    { status: 500 }
  );
}

export function parsePagination(sp: URLSearchParams) {
  const page = Math.max(1, Number(sp.get("page") ?? "1") || 1);
  const pageSizeRaw = Number(sp.get("pageSize") ?? "10") || 10;
  const pageSize = Math.min(50, Math.max(1, pageSizeRaw));
  return { page, pageSize, skip: (page - 1) * pageSize, take: pageSize };
}

export function toIso(d: Date | null | undefined): string | null {
  return d ? d.toISOString() : null;
}

export function coerceId(id: string): string | number {
  if (/^\d+$/.test(id)) return Number(id);
  return id;
}
