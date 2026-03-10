import { HeroSlideProps } from "@/components/HeroSlide";

export const sliderData: HeroSlideProps[] = [
  {
    title: "Генерация уникальной открытки",
    description: (
      <p>
        Используйте возможности{" "}
        <strong className="font-bold bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Nano Banana Pro
        </strong>
        , чтобы удивить близких.
      </p>
    ),
    primaryBtnText: "Попробовать бесплатно",
    imageSrc: "/images/slider/nano_banano_banner.webp",
    href: "https://eduforms.org/?rid=14132454a7299b31&ulp=https%3A%2F%2Fstudy24.ai%2Fchat%2Fnano_banana_pro",
  },
  {
    title: "Оживите свое фото с нейросетью",
    description: (
      <p>
        Получить бонус 10% по промокоду{" "}
        <strong className="font-bold bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          GIFTGENIUSPRO10
        </strong>
      </p>
    ),
    primaryBtnText: "Получиь бонус",
    imageSrc: "/images/slider/gen_video_ai.webp", // Путь к фото в public/images/slider
    href: "https://eduforms.org/?rid=e1ce5b95c8716ffe&ulp=https%3A%2F%2Fstudy24.ai%2Fchat%2Fvideogen",
  },
];
