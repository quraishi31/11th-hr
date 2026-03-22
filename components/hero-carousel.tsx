'use client'

import { useEffect, useRef, useState } from 'react'
import { Navigation } from './navigation'

const images = [
  'https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pUft8UBoduQRG6tKoPEy5aFXcsJelTw7NLpiq?w=1920&h=1080&fit=crop',
  'https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pJ8mWyDZLQpg5Wjkz07UlmcN4HFuAEOoheYq2?w=1920&h=1080&fit=crop',
  'https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pQhfhfGN37AU94lSdTK2itRVMQyowcIjzarBf?w=1920&h=1080&fit=crop',
  'https://b8axupjguy.ufs.sh/f/mclzbYUnWM5pEpTBm6yqGrBwhUSQTRLgbjaYCZXs67oWm21D?w=1920&h=1080&fit=crop',
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    autoplayIntervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
      }
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Navigation positioned absolutely over the carousel */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Full screen slides */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            role="region"
            aria-label={`Slide ${index + 1}`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
              loading={index === currentIndex ? 'eager' : 'lazy'}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          </div>
        ))}
      </div>
    </section>
  )
}
