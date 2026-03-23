'use client'
import * as React from "react"
import { ChevronRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// 1. Define your data structure
interface WorkItem {
  id: string
  title: string
  image: string
  category: string
}

const worksData: WorkItem[] = [
  {
    id: "1",
    title: "Coca-Cola Play Nation",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "iLight Singapore",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "HP at Coachella",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Wizarding World",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Future World",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
  },
]

export default function WorksSlider() {


  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false, // Changed this to false
      stopOnMouseEnter: true    // It will pause while hovering, but resume when they leave
    })
  )  

  return (
    <section className="w-full bg-black py-12 pl-4 md:pl-12" id="works">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        // Pauses autoplay on hover for better UX
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        {/* --- HEADER SECTION --- */}
        <div className="flex items-center justify-between pr-4 md:pr-12 mb-12">
          {/* Title with decorative brackets */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white px-4 relative z-10">
              Works
            </h2>
            <span className="absolute -top-2 left-0 h-6 w-6 border-t-4 border-l-4 border-teal-400 rounded-tl-lg" />
            <span className="absolute -bottom-2 right-0 h-6 w-6 border-b-4 border-r-4 border-white rounded-br-lg" />
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <CarouselPrevious
              variant="default"
              className="static translate-y-0 bg-teal-400 hover:bg-teal-500 text-white border-none h-10 w-10 rounded-md"
            />
            <CarouselNext
              variant="default"
              className="static translate-y-0 bg-teal-400 hover:bg-teal-500 text-white border-none h-10 w-10 rounded-md"
            />
          </div>
        </div>

        {/* --- SLIDER CONTENT --- */}
        <CarouselContent className="-ml-4">
          {worksData.map((item) => (
            <CarouselItem
              key={item.id}
              // WIDTH FIX: 
              // Removed "xl:basis-1/4" so it defaults to 1/3 on large screens. 
              // This makes the cards significantly wider.
              className="pl-4 md:basis-1/3 lg:basis-1/3"
            >
              <div className="group relative h-[550px] w-full overflow-hidden rounded-[32px] cursor-pointer">
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent top-[40%]" />

                {/* Card Content */}
                <div className="absolute bottom-4 left-0 w-full p-8 text-white flex flex-col items-start gap-6">
                  <h3 className="text-3xl font-bold leading-tight">
                    {item.title}
                  </h3>

                  {/* Button Matching Reference */}
                  <Button
                    className="bg-[#00D2BE] hover:bg-[#00b8a6] text-white text-base font-semibold h-12 px-8 rounded-lg transition-colors border-none"
                  >
                    View Case Study <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}