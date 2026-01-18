import {
  Category,
  Occasion,
  PriceRange,
  RecipientValue,
} from "@/modules/form/form-gifts";

export type GiftFormValues = {
  recipient: RecipientValue;
  customRecipient?: string;
  age: number;
  category?: Category;
  priceRange: PriceRange;
  occasion: Occasion;
  description?: string;
};

export interface GiftIdea {
  estimatedPriceRub: string;
  ozonSearchUrl: string;
  queryRu: string;
  rank: number;
  title: string;
  wbSearchUrl: string;
  why: string;
}

export interface GiftIdeasResponse {
  ideas: GiftIdea[];
  status: string;
}
