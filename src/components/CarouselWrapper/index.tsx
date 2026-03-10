import { cn } from "@/shared/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import { Container } from "@/shared/ui/Container";
import * as React from "react";

interface CarouselWrapperProps {
  children?: React.ReactNode;
  className?: string;
  aspectClassName?: string;
}

export function CarouselWrapper({
  children,
  className,
  aspectClassName = "",
}: CarouselWrapperProps) {
  const isChildrenEmpty = React.Children.count(children) === 0;

  return (
    <section className="pt-10 pb-20 px-6">
      <Container className="text-center">
        <Carousel
          opts={{
            loop: true,
          }}
          className={cn("w-full", className)}
        >
          <CarouselContent>
            {!isChildrenEmpty &&
              React.Children.map(children, (child, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="p-1">{child}</div>
                </CarouselItem>
              ))}
          </CarouselContent>
          {!isChildrenEmpty && (
            <>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </>
          )}
        </Carousel>
      </Container>
    </section>
  );
}
