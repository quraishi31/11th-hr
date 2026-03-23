'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

interface ServiceItem {
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    title: 'Brand Activation',
    description:
      'We create immersive brand experiences that connect emotionally with audiences through innovative activations and strategic partnerships.',
  },
  {
    title: 'Activation',
    description:
      'At 11th Hour, we believe true brand activation begins with purpose. As a trusted brand activation agency in Pakistan, we go beyond visibility to create experiences that carry meaning and intention.',
  },
  {
    title: 'Cultural Events',
    description:
      'At 11th Hour, local art performances represent the soul of Cultural Events & Experiences in Pakistan, bringing creativity, emotion, and authentic expression to life. We highlight local talent through music, dance, theater, and live artistic acts that reflect the Country’s rich and diverse cultural spirit.',
  },
  {
    title: 'Creativity & Design',
    description:
      'Transform your vision into stunning visual and creative executions that captivate and engage your audience.',
  },
  {
    title: 'Custom Exhibition Booths',
    description:
      'At 11th Hour, we see exhibition booths as more than just structures. They are powerful brand spaces where first impressions are formed, and lasting connections begin. Every booth is an opportunity to tell your story, attract attention, and invite people into your world. That is why printing and branding play such a vital role in how your space is experienced.',
  },
  {
    title: 'Fabrication & Setup',
    description:
      'Build Importance of Fabrication in Any Event: Fabrication is basically an outstanding blend of lights and fabric to give an event a spellbind visual effect. Fabrics can give your event space a touch of magnificence, layer, depth, vivid texture, and vibrant colors. Reflecting light off different fabrics really makes all the difference. A dash of bright colored lights brings us to the next point.',
  },
]

export default function WeArePico() {
  const [openLeftIndex, setOpenLeftIndex] = useState<number | null>(null)
  const [openRightIndex, setOpenRightIndex] = useState<number | null>(null)

  const leftServices = services.slice(0, 3)
  const rightServices = services.slice(3, 6)

  return (
    <section className="bg-black py-24 text-white md:py-32" id="Why11">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <h1 className="section-title mb-10 text-center text-[48px] font-semibold md:text-[68px] lg:text-[78px]">
          <span className="text-[#00d4c8]">We are 11th Hour.</span>
        </h1>

        <p className="lead-copy mx-auto mb-20 text-center text-[22px] font-normal text-white md:mb-28 md:text-[30px]">
          At 11th Hour, we turn ideas into unforgettable events that inspire and connect people. From planning to execution, we handle every detail with creativity and precision. With strong experience and a passion for quality, we deliver seamless, memorable experiences that leave a lasting impression.
        </p>

        <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2 lg:gap-x-24">
          <div>
            {leftServices.map((service, index) => {
              const isOpen = openLeftIndex === index

              return (
                <div key={index} className="border-b border-white/80 py-5">
                  <button
                    className="group flex w-full items-center justify-between text-left"
                    onClick={() => setOpenLeftIndex(isOpen ? null : index)}
                  >
                    <span className="font-display text-[24px] font-medium tracking-[0.01em] text-white">{service.title}</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/70 text-white/65 transition-colors group-hover:border-white group-hover:text-white">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'mt-4 max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="lead-copy text-[18px] font-light text-white/90">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div>
            {rightServices.map((service, index) => {
              const isOpen = openRightIndex === index

              return (
                <div key={index} className="border-b border-white/80 py-5">
                  <button
                    className="group flex w-full items-center justify-between text-left"
                    onClick={() => setOpenRightIndex(isOpen ? null : index)}
                  >
                    <span className="font-display text-[24px] font-medium tracking-[0.01em] text-white">{service.title}</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/70 text-white/65 transition-colors group-hover:border-white group-hover:text-white">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'mt-4 max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="lead-copy text-[18px] font-light text-white/90">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
