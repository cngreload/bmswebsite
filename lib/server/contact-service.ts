import "server-only";

import { prisma } from "@/lib/prisma";
import { HttpError, toIso } from "@/lib/server/http";

type JsonRecord = Record<string, unknown>;

function isRecord(v: unknown): v is JsonRecord {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function asRecord(v: unknown, msg = "Invalid object"): JsonRecord {
  if (!isRecord(v)) throw new HttpError(400, msg, "VALIDATION_ERROR");
  return v;
}

function ensureArray(v: unknown, msg = "Expected array"): unknown[] {
  if (!Array.isArray(v)) throw new HttpError(500, msg, "INTERNAL_ERROR");
  return v;
}

function ensureNumber(v: unknown, msg = "Expected number"): number {
  if (typeof v !== "number" || Number.isNaN(v)) throw new HttpError(500, msg, "INTERNAL_ERROR");
  return v;
}

const db = prisma as unknown as {
  contactMessage: {
    count(args: unknown): Promise<number>;
    findMany(args: unknown): Promise<unknown>;
    findUnique(args: unknown): Promise<unknown | null>;
    create(args: unknown): Promise<unknown>;
    update(args: unknown): Promise<unknown>;
  };
};

type ListArgs = {
  page: number;
  pageSize: number;
  skip: number;
  take: number;
  status?: string | null;
};

function mapRow(row: unknown) {
  const m = asRecord(row);

  const createdAt =
    m.createdAt instanceof Date ? m.createdAt : m.createdAt ? new Date(String(m.createdAt)) : null;

  const updatedAt =
    m.updatedAt instanceof Date ? m.updatedAt : m.updatedAt ? new Date(String(m.updatedAt)) : null;

  return {
    id: String(m.id),
    fullName: String(m.fullName ?? ""),
    email: String(m.email ?? ""),
    phone: m.phone ? String(m.phone) : null,
    subject: String(m.subject ?? ""),
    message: String(m.message ?? ""),
    contactType: m.contactType ? String(m.contactType) : null,
    status: String(m.status ?? ""),
    createdAt: createdAt ? toIso(createdAt)! : null,
    updatedAt: updatedAt ? toIso(updatedAt)! : null,
  };
}

/* -------------------- Public -------------------- */

export async function createContactMessage(body: unknown) {
  const b = asRecord(body);

  const fullName = String(b.fullName ?? "").trim();
  const email = String(b.email ?? "").trim();
  const subject = String(b.subject ?? "").trim();
  const message = String(b.message ?? "").trim();

  const phone =
    b.phone === undefined || b.phone === null ? null : String(b.phone).trim() || null;

  const contactType =
    b.contactType === undefined || b.contactType === null
      ? null
      : String(b.contactType).trim() || null;

  if (!fullName) throw new HttpError(400, "fullName is required", "VALIDATION_ERROR");
  if (!email) throw new HttpError(400, "email is required", "VALIDATION_ERROR");
  if (!subject) throw new HttpError(400, "subject is required", "VALIDATION_ERROR");
  if (!message) throw new HttpError(400, "message is required", "VALIDATION_ERROR");

  const created = await db.contactMessage.create({
    data: {
      fullName,
      email,
      phone,
      subject,
      message,
      ...(contactType ? { contactType } : {}),
      // status should be defaulted in DB (recommended). If not, you can set it here:
      // status: "NEW",
    },
  });

  return mapRow(created);
}

/* -------------------- Admin -------------------- */

export async function adminListContactMessages(args: ListArgs) {
  const where: Record<string, unknown> = {};
  if (args.status) where.status = args.status;

  const [totalItemsRaw, rowsRaw] = await Promise.all([
    db.contactMessage.count({ where }),
    db.contactMessage.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: args.skip,
      take: args.take,
    }),
  ]);

  const totalItems = ensureNumber(totalItemsRaw);
  const rows = ensureArray(rowsRaw);

  return {
    items: rows.map(mapRow),
    page: args.page,
    pageSize: args.pageSize,
    totalItems,
    totalPages: Math.ceil(totalItems / args.pageSize),
  };
}

export async function adminGetContactMessage(id: string) {
  const raw = await db.contactMessage.findUnique({ where: { id } });
  if (!raw) throw new HttpError(404, "Not found", "NOT_FOUND");
  return mapRow(raw);
}

export async function adminUpdateContactMessage(id: string, body: unknown) {
  const b = asRecord(body);
  const status = String(b.status ?? "").trim();
  if (!status) throw new HttpError(400, "status is required", "VALIDATION_ERROR");

  const updated = await db.contactMessage.update({
    where: { id },
    data: { status },
  });

  return mapRow(updated);
}
