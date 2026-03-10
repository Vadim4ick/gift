import { Categories } from "@/modules/home/Categories";
import { Hero } from "@/modules/home/Hero";
import { HowItWorks } from "@/modules/home/How-it-works";
import { CtaBaner } from "@/modules/home/CtaBaner";
import { Metadata } from "next";
import { CarouselWrapper } from "@/components/CarouselWrapper";
import { sliderData } from "@/shared/const/slider-data";
import { HeroSlide } from "@/components/HeroSlide";

export const metadata: Metadata = {
  title: "Идеальный подарок с ии бесплатно - GiftGenius поможет за минуту",
  description: "GiftGenius - бесплатно подобрать подарок",
};

export default function GiftGenius() {
  return (
    <div className="mt-(--header-height) grow">
      <Hero />

      <CarouselWrapper aspectClassName="aspect-[3/4] lg:aspect-[3/1]">
        {sliderData.map((slide, index) => (
          <HeroSlide key={index} {...slide} />
        ))}
      </CarouselWrapper>

      <HowItWorks />

      <Categories />

      <CtaBaner />
    </div>
  );
}
