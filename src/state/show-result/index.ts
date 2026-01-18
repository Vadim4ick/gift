import { GiftIdea } from "@/shared/types/gift-form.type";
import { atom } from "jotai";

const giftResultAtom = atom<GiftIdea[]>([]);
const giftLoadingAtom = atom(false);

export { giftResultAtom, giftLoadingAtom };
