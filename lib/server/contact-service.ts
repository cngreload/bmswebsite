// lib/server/contact-service.ts
import "server-only";
import { prisma } from "@/lib/prisma";
import { HttpError } from "@/lib/server/http";
import { contactMessageSchema } from "@/lib/validations/contact";
import { ContactType } from "@prisma/client";

export async function createContactMessage(body: unknown) {
  // 1. Validate using your existing Zod schema
  const result = contactMessageSchema.safeParse(body);
  
  if (!result.success) {
    throw new HttpError(400, "اطلاعات فرم نامعتبر است", "VALIDATION_ERROR", result.error.format());
  }

  const data = result.data;

  // 2. Map the Zod 'type' to the Prisma Enum safely
  const typeMapping: Record<string, ContactType> = {
    GENERAL: ContactType.GENERAL,
    SALES: ContactType.SALES,
    SUPPORT: ContactType.SUPPORT,
    INVESTMENT: ContactType.INVESTMENT,
  };

  return await prisma.contactMessage.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      contactType: typeMapping[data.type] || ContactType.GENERAL,
    },
  });
}