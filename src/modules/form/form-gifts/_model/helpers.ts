import { GiftFormValues } from "@/shared/types/gift-form.type";
import { Category, Occasion, PriceRange, RecipientValue } from "./type";

// Хелпер: достать строку
const getString = (fd: FormData, key: string): string | undefined => {
  const v = fd.get(key);
  return typeof v === "string" && v.trim() ? v : undefined;
};

// Хелпер: достать number
const getNumber = (fd: FormData, key: string): number | undefined => {
  const s = getString(fd, key);
  if (!s) return undefined;
  const n = Number(s);
  return Number.isFinite(n) ? n : undefined;
};

export const parseGiftFormData = (fd: FormData): GiftFormValues => {
  const recipient = getString(fd, "recipient") as RecipientValue | undefined;
  const age = getNumber(fd, "age");

  const priceRange = getString(fd, "priceRange") as PriceRange | undefined;
  const occasion = getString(fd, "occasion") as Occasion | undefined;

  // optional
  const category = getString(fd, "category") as Category | undefined;
  const description = getString(fd, "description");
  const customRecipient = getString(fd, "customRecipient");

  if (!recipient) throw new Error("recipient is required");
  if (!age) throw new Error("age is required");
  if (!priceRange) throw new Error("priceRange is required");
  if (!occasion) throw new Error("occasion is required");

  if (recipient === "other" && !customRecipient) {
    throw new Error("customRecipient is required when recipient is other");
  }

  return {
    recipient,
    age,
    priceRange,
    occasion,
    category,
    description,
    customRecipient,
  };
};
