import { GiftIdea } from "@/shared/types/gift-form.type";
import { atom } from "jotai";

const giftResultAtom = atom<GiftIdea[]>([]);

export { giftResultAtom };
