import { Categories } from "@/modules/home/Categories";
import { Hero } from "@/modules/home/Hero";
import { HowItWorks } from "@/modules/home/How-it-works";
import { CtaBaner } from "@/modules/home/CtaBaner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Идеальный подарок с ии бесплатно - GiftGenius поможет за минуту",
  description: "GiftGenius - бесплатно подобрать подарок",
};

export default function GiftGenius() {
  return (
    <div className="mt-(--header-height) grow">
      <Hero />

      <HowItWorks />

      <Categories />

      <CtaBaner />
    </div>
  );
}
