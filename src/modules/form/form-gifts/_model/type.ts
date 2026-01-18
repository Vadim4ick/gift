import { categories, occasions, priceRanges, recipients } from "./const";

export type RecipientValue = (typeof recipients)[number]["value"];
export type Category = (typeof categories)[number];
export type PriceRange = (typeof priceRanges)[number]["value"];
export type Occasion = (typeof occasions)[number];
