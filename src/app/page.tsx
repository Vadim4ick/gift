import { Sparkles, ArrowRight } from "lucide-react";
import { Categories } from "@/components/Categories";
import { Button } from "@/shared/ui/button";
import { Container } from "@/components/Container";
import Link from "next/link";

export default function GiftGenius() {
  return (
    <div className="mt-[var(--header-height)] grow">
      {/* Hero Section */}
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
            Искусственный интеллект анализирует характер, интересы и повод,
            чтобы предложить подарок, который запомнится навсегда
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

      {/* How It Works */}
      <section id="how" className="py-20 px-6 bg-white/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-5xl max-md:text-3xl font-bold mb-4 text-gray-800">
              Магия в{" "}
              <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                3 шага
              </span>
            </h2>
            <p className="text-xl max-md:text-lg text-gray-600">
              Простота, которая удивляет
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="group relative p-8 bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 group-hover:rotate-12 transition-transform">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Расскажите о человеке
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Опишите характер, увлечения, стиль жизни. Чем больше деталей —
                тем точнее результат
              </p>
            </article>

            <article className="group relative p-8 bg-linear-to-br from-blue-50 to-purple-50 rounded-3xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 group-hover:rotate-12 transition-transform">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                ИИ творит чудеса
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Нейросеть анализирует миллионы вариантов и подбирает идеи,
                идеально подходящие под запрос
              </p>
            </article>

            <article className="group relative p-8 bg-linear-to-br from-pink-50 to-blue-50 rounded-3xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-linear-to-br from-pink-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 group-hover:rotate-12 transition-transform">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Выберите лучшее
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Получите персональную подборку с описанием, ценами и ссылками на
                покупку
              </p>
            </article>
          </div>
        </Container>
      </section>

      <Categories />

      {/* CTA Section */}
      <section className="py-20 px-6">
        <Container className="max-w-4xl max-md:p-6 text-center bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

          <div className="relative z-10">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-5xl max-md:text-xl font-bold mb-6">
              Готовы удивить своих близких?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-md:text-lg">
              Начните подбор подарка прямо сейчас — это бесплатно и займет
              меньше минуты
            </p>
            <button className="px-8 py-4 max-md:text-sm bg-white text-purple-600 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2">
              Попробовать GiftGenius
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}
