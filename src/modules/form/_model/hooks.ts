"use client";

import { useAtom } from "jotai";
import { giftService } from "@/shared/services/gift.service";
import { giftLoadingAtom, giftResultAtom } from "@/state/show-result";

export function useGiftIdeas() {
  const [results, setResults] = useAtom(giftResultAtom);
  const [isLoading, setIsLoading] = useAtom(giftLoadingAtom);

  const submit = async (values: any) => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const res = await giftService.getAllIdeas(values);
      setResults(res.ideas);
      return res.ideas;
    } finally {
      setIsLoading(false);
    }
  };

  const rerun = async () => {
    if (!results) return;
    return submit(results);
  };

  const reset = () => setResults([]);

  return { submit, rerun, reset, isLoading };
}
