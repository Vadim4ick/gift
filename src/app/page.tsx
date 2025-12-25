import { Categories } from "@/modules/home/Categories";
import { Hero } from "@/modules/home/Hero";
import { HowItWorks } from "@/modules/home/How-it-works";
import { CtaBaner } from "@/modules/home/CtaBaner";

export default function GiftGenius() {
  return (
    <div className="mt-[var(--header-height)] grow">
      <Hero />

      <HowItWorks />

      <Categories />

      <CtaBaner />
    </div>
  );
}
