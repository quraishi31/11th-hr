'use client'

import { useEffect, useRef, useState } from 'react'
import { Navigation } from './navigation'

const images = [
  'https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pUft8UBoduQRG6tKoPEy5aFXcsJelTw7NLpiq' ,
  'https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pJ8mWyDZLQpg5Wjkz07UlmcN4HFuAEOoheYq2' ,
  'https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pQhfhfGN37AU94lSdTK2itRVMQyowcIjzarBf',
  'https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pEpTBm6yqGrBwhUSQTRLgbjaYCZXs67oWm21D'
]


export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    autoplayIntervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
      }
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black font-sans" id='Home' >
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Centered Hero Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white uppercase tracking-tighter mb-6 drop-shadow-2xl leading-[1.1]">
            Full-Scale <br className="hidden md:block" /> Marketing Agency
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 drop-shadow-md font-medium max-w-2xl mx-auto">
            Event Management, Corporate Gifts & Digital Marketing
          </p>
          <div className="flex justify-center">
            <button className="bg-primary text-primary-foreground hover:scale-105 transition-transform duration-300 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm md:text-base shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Images */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
              loading={index === currentIndex ? 'eager' : 'lazy'}
            />
            {/* Center-focused radial gradient to pop the text */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
          </div>
        ))}
      </div>
    </section>
  )
}
