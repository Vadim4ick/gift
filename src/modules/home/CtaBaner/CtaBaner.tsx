import { Container } from "@/shared/ui/Container";
import { Sparkles } from "lucide-react";

const CtaBaner = () => {
  return (
    <section className="py-20 px-6">
      <Container className="max-w-4xl max-md:p-6 text-center bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative z-10">
          <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl max-md:text-xl font-bold mb-6">
            Готовы удивить своих близких?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-md:text-lg">
            Начните подбор подарка прямо сейчас — это бесплатно и займет меньше
            минуты
          </p>
          <button className="px-8 py-4 max-md:text-sm bg-white text-purple-600 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2">
            Попробовать GiftGenius
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export { CtaBaner };
