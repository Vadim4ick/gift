import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/Container";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-10 pb-20 px-6">
      <Container className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-8 animate-pulse">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-purple-700">
            Powered by Advanced AI
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-6 max-md:mb-3 leading-tight">
          <span className="bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Идеальный подарок
          </span>
          <br />
          <span className="text-gray-800">за 60 секунд</span>
        </h1>

        <p className="text-sm md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Искусственный интеллект анализирует характер, интересы и повод, чтобы
          предложить подарок, который запомнится навсегда
        </p>

        <Link href="/form">
          <Button size={"lg"} className="text-lg font-semibold">
            Найти подарок мечты
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl max-md:grid-cols-1 mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              1M+
            </div>
            <div className="text-gray-600">Довольных пользователей</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-gray-600">Уникальных идей</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-600">Попадание в цель</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Hero };
