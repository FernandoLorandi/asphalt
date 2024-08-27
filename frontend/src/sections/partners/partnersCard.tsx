import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const logos = ["copel", "DER", "incra", "itaipu", "sanepar", "viapar"];

export function PartnersCard() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full h-full max-w-full justify-center items-center"
      opts={{ loop: true, align: "start" }}
    >
      <CarouselContent>
        {logos.map((logos: string) => (
          <CarouselItem
            key={logos}
            className="basis-1/3 md:basis-1/4 lg:basis-1/6 w-auto flex"
          >
            <div className="w-64 h-auto">
              <img
                src={`/img/${logos}.png`}
                alt={logos}
                className="h-full w-full border border-slate-200 rounded-sm"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="visible md:visible lg:invisible ml-8" />
      <CarouselNext className="visible md:visible lg:invisible mr-8" />
    </Carousel>
  );
}
