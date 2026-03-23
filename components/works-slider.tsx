'use client'

import * as React from 'react'
import { ChevronRight } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface WorkItem {
  id: string
  title: string
  image: string
  category: string
}

const worksData: WorkItem[] = [
  {
    id: '1',
    title: 'Coca-Cola Play Nation',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'iLight Singapore',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'HP at Coachella',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Wizarding World',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Future World',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
  },
]

export default function WorksSlider() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  return (
    <section className="w-full bg-black py-12 pl-4 md:pl-12" id="works">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: 'start',
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <div className="mb-12 flex items-center justify-between pr-4 md:pr-12">
          <div className="relative">
            <h2 className="section-title relative z-10 px-4 text-5xl font-semibold text-white md:text-6xl">
              Works
            </h2>
            <span className="absolute -top-2 left-0 h-6 w-6 rounded-tl-lg border-l-4 border-t-4 border-teal-400" />
            <span className="absolute -bottom-2 right-0 h-6 w-6 rounded-br-lg border-b-4 border-r-4 border-white" />
          </div>

          <div className="flex gap-4">
            <CarouselPrevious
              variant="default"
              className="static h-10 w-10 translate-y-0 rounded-md border-none bg-teal-400 text-white hover:bg-teal-500"
            />
            <CarouselNext
              variant="default"
              className="static h-10 w-10 translate-y-0 rounded-md border-none bg-teal-400 text-white hover:bg-teal-500"
            />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {worksData.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-4 md:basis-1/3 lg:basis-1/3"
            >
              <div className="group relative h-[550px] w-full cursor-pointer overflow-hidden rounded-[32px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 top-[40%] bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-4 left-0 flex w-full flex-col items-start gap-6 p-8 text-white">
                  <h3 className="font-display text-[2.15rem] font-semibold leading-[0.98] tracking-tight">
                    {item.title}
                  </h3>

                  <Button className="h-12 rounded-lg border-none bg-[#00D2BE] px-8 text-base font-semibold text-white transition-colors hover:bg-[#00b8a6]">
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
