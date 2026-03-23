'use client'

import { useState } from 'react'
import { ContactModal } from './contact-modal'

export function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const mapImageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-map-16mFMcDb6MihtQ9Mchx2lHeJaatoyU.webp'

  return (
    <>
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 md:px-8"
        style={{ backgroundColor: '#000000' }}
      >
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center opacity-95"
          style={{
            backgroundImage: `url(${mapImageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="relative z-10 max-w-4xl text-center">
          <h2 className="section-title mb-8 text-5xl font-semibold text-white md:text-6xl lg:text-7xl">
            Ready to bring your next idea to life?
          </h2>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block rounded-full bg-primary px-10 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90 active:scale-95"
          >
            Contact Us
          </button>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/30 to-black" />
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
