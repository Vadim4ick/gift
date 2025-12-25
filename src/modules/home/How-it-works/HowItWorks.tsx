import { Container } from "@/shared/ui/Container";

const HowItWorks = () => {
  return (
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
              Опишите характер, увлечения, стиль жизни. Чем больше деталей — тем
              точнее результат
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
  );
};

export { HowItWorks };
