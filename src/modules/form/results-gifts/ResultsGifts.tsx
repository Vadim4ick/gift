import { mockGifts } from "@/shared/const/index.const";
import { Button } from "@/shared/ui/button";
import { ExternalLink, Heart, TrendingUp } from "lucide-react";
import { Dispatch, memo, SetStateAction } from "react";

const ResultsGifts = memo(
  ({
    setShowResults,
  }: {
    setShowResults: Dispatch<SetStateAction<boolean>>;
  }) => {
    return (
      <div id="results" className="mt-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Подобрали для вас
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            {mockGifts.length} идеальных варианта подарков
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mockGifts.map((gift) => (
            <article
              key={gift.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={gift.image}
                  alt={gift.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {gift.popular && (
                  <div className="absolute top-3 right-3 bg-linear-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <TrendingUp className="w-4 h-4" />
                    Популярно
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {gift.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {gift.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Heart
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(gift.rating)
                            ? "fill-pink-500 text-pink-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    {gift.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {gift.price}
                    </div>
                    <div className="text-xs text-gray-500">
                      {gift.marketplace}
                    </div>
                  </div>

                  <a
                    href={gift.marketplaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    Купить
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            onClick={() => {
              setShowResults(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            // variant="outline"
            size="lg"
            className="border-2 border-purple-300 hover:bg-purple-50"
          >
            Подобрать другой подарок
          </Button>
        </div>
      </div>
    );
  }
);

export { ResultsGifts };
