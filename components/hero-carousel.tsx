'use client'

import { useEffect, useRef, useState } from 'react'
import { ContactModal } from './contact-modal'
import { Navigation } from './navigation'

const images = [
  'https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pUft8UBoduQRG6tKoPEy5aFXcsJelTw7NLpiq',
  'https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pJ8mWyDZLQpg5Wjkz07UlmcN4HFuAEOoheYq2',
  'https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pQhfhfGN37AU94lSdTK2itRVMQyowcIjzarBf',
  'https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pEpTBm6yqGrBwhUSQTRLgbjaYCZXs67oWm21D',
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
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
    <section className="relative h-screen w-full overflow-hidden bg-black font-sans" id="Home">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-4xl text-center animate-slide-up">
          <h1 className="display-title mb-6 text-5xl font-semibold uppercase text-white drop-shadow-2xl md:text-7xl lg:text-[6.5rem]">
            Full-Scale <br className="hidden md:block" /> Marketing Agency
          </h1>
          <p className="lead-copy mx-auto mb-10 max-w-2xl text-lg font-normal text-gray-200 drop-shadow-md md:text-[1.55rem]">
            Event Management, Corporate Gifts & Digital Marketing
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-primary px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:scale-105 md:text-base"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          >
            <img
              src={image || '/placeholder.svg'}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
              loading={index === currentIndex ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
          </div>
        ))}
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
