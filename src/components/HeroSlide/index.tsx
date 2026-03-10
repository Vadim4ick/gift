import { Button } from "@/shared/ui/button"; // Используем ваши UI-компоненты
import { Card, CardContent } from "@/shared/ui/card";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export interface HeroSlideProps {
  title: string;
  description: ReactNode;
  primaryBtnText: string;
  imageSrc: string;
  imageAlt?: string;
  href: string;
}

export function HeroSlide({
  title,
  description,
  primaryBtnText,
  imageSrc,
  href,
  imageAlt = "mockup",
}: HeroSlideProps) {
  return (
    <Card className="bg-card/30 relative overflow-hidden p-1 md:px-3 min-h-100 lg:min-h-108 flex items-center justify-center border-none shadow-none lg:border lg:shadow-sm">
      {/* Фоновое изображение для мобилок (blur-px ~ 1px) */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover scale-105 blur-[1px] brightness-[0.8]"
        />
        {/* Увеличили непрозрачность оверлея для читаемости текста 16px */}
        <div className="absolute inset-0 bg-white/70 dark:bg-black/70" />
      </div>

      <CardContent className="relative z-10 grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12 w-full">
        <div className="mr-auto place-self-center lg:col-span-7 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
            {title}
          </h2>

          {/* text-base (16px) для мобильных, md:text-lg для планшетов+ */}
          <div className="max-w-2xl mb-6 text-base md:text-lg lg:text-xl font-medium lg:font-light text-gray-800 lg:text-gray-500 lg:mb-8 dark:text-gray-200">
            {description}
          </div>

          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-lg px-5 py-3 cursor-pointer shadow-lg"
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              {primaryBtnText}
              <ArrowRight className="w-5 h-5 ml-2 -mr-1" />
            </a>
          </Button>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-87.5 object-contain drop-shadow-2xl rounded-2xl"
          />
        </div>
      </CardContent>
    </Card>
  );
}
