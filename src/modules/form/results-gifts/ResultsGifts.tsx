"use client";

import { Button } from "@/shared/ui/button";
import { giftResultAtom } from "@/state/show-result";
import { useAtom } from "jotai";
import { ExternalLink } from "lucide-react";
import { memo } from "react";
import { useGiftIdeas } from "../_model/hooks";

const ResultsGifts = memo(() => {
  const [giftResults] = useAtom(giftResultAtom);
  const { rerun, isLoading } = useGiftIdeas();

  if (giftResults.length === 0) return null;

  return (
    <div id="results" className="mt-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-3">
          <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Подобрали для вас
          </span>
        </h2>
        <p className="text-lg text-gray-600">
          {giftResults.length} идеальных варианта подарков
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {giftResults.map((gift, idx) => (
          <article
            key={`${idx}-${gift.title}-${gift.estimatedPriceRub}`}
            className="
    group relative
    bg-white rounded-3xl
    border border-gray-100
    shadow-sm
    hover:shadow-xl hover:-translate-y-1
    transition-all duration-300
    overflow-hidden
  "
          >
            {/* декоративный градиент при hover */}
            <div
              className="
      absolute inset-0
      bg-linear-to-br from-purple-500/10 via-pink-500/10 to-transparent
      opacity-0 group-hover:opacity-100
      transition-opacity
      pointer-events-none
    "
            />

            <div className="relative p-6 flex flex-col h-full">
              {/* title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {gift.title}
              </h3>

              {/* description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                {gift.why}
              </p>

              {/* footer */}
              <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-4">
                {/* price */}
                <div className="flex items-center justify-between">
                  <div className="text-purple-600 font-bold text-xl">
                    {gift.estimatedPriceRub}
                  </div>

                  <span className="text-xs text-gray-400">ориентировочно</span>
                </div>

                {/* actions */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={gift.ozonSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            flex items-center justify-center gap-2
            rounded-xl px-4 py-2.5 text-sm font-semibold
            text-white
            bg-linear-to-r from-purple-600 to-pink-600
            hover:scale-[1.03] hover:shadow-md
            transition-all
          "
                  >
                    Ozon
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={gift.wbSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            flex items-center justify-center gap-2
            rounded-xl px-4 py-2.5 text-sm font-semibold
            text-purple-600
            border border-purple-200
            hover:bg-purple-50
            hover:scale-[1.03]
            transition-all
          "
                  >
                    Wildberries
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          onClick={async () => {
            await rerun();
            // по желанию: оставить скролл на results
            document
              .getElementById("results")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          disabled={isLoading}
          size="lg"
          className="border-2 border-purple-300 hover:bg-purple-50"
        >
          Подобрать другой подарок
        </Button>

        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          size="lg"
          disabled={isLoading}
          className="border-2 border-purple-300 hover:bg-purple-50"
        >
          Изменить параметры
        </Button>
      </div>
    </div>
  );
});

export { ResultsGifts };
