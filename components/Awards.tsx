'use client'

import Image, { StaticImageData } from 'next/image'

import client1 from '@/assets/WhatsApp Image 2026-03-23 at 5.50.09 AM.jpeg'
import client2 from '@/assets/WhatsApp Image 2026-03-23 at 5.50.10 AM.jpeg'
import client3 from '@/assets/WhatsApp Image 2026-03-23 at 5.50.10 AM (1).jpeg'
import client4 from '@/assets/WhatsApp Image 2026-03-23 at 5.50.10 AM (2).jpeg'
import client5 from '@/assets/WhatsApp Image 2026-03-23 at 5.50.10 AM (3).jpeg'
import client6 from '@/assets/WhatsApp Image 2026-03-23 at 5.50.10 AM (4).jpeg'
import client7 from '@/assets/WhatsApp Image 2026-03-23 at 5.50.10 AM (5).jpeg'
import client8 from '@/assets/WhatsApp Image 2026-03-23 at 5.50.10 AM (6).jpeg'
import client9 from '@/assets/WhatsApp Image 2026-03-23 at 5.50.10 AM (7).jpeg'

type Client = {
  name: string
  image: StaticImageData
}

const clients: Client[] = [
  { name: 'Client 1', image: client1 },
  { name: 'Client 2', image: client2 },
  { name: 'Client 3', image: client3 },
  { name: 'Client 4', image: client4 },
  { name: 'Client 5', image: client5 },
  { name: 'Client 6', image: client6 },
  { name: 'Client 7', image: client7 },
  { name: 'Client 8', image: client8 },
  { name: 'Client 9', image: client9 },
]

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="group rounded-[16px] border border-white/10 bg-[#0b0b0b] p-1.5 transition-colors duration-300 hover:border-white/20 hover:bg-[#101010]">
      <div className="relative flex aspect-[1.55] items-center justify-center overflow-hidden rounded-[12px] bg-white p-2 shadow-[0_10px_22px_rgba(0,0,0,0.14)]">
        <Image
          src={client.image}
          alt={client.name}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 40vw, 120px"
        />
      </div>
    </div>
  )
}

export default function AwardsMarquee() {
  return (
    <section className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Our Clients</p>
          <h2 className="section-title mt-4 text-5xl font-semibold text-white md:text-6xl">
            Brands we’ve worked with.
          </h2>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </div>
    </section>
  )
}
