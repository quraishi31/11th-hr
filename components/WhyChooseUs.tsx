import {
  Layers,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react'
import React from 'react'

type Feature = {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'Highly Experienced Team',
    description:
      'Our highly experienced team brings expertise, creativity, and professionalism to deliver exceptional results in every project',
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: 'Wow Customer Service',
    description:
      'We deliver wow customer service by going beyond expectations and creating a smooth, memorable experience for every client.',
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: 'Fast feedback loops',
    description:
      'Decisions, iterations, and shipping without long waits.',
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: 'Production-ready quality',
    description:
      'Performance, accessibility, and maintainability by default.',
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: 'Clear communication',
    description:
      'You always know what’s happening and why.',
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: 'Cost Effective',
    description:
      'We provide cost-effective solutions without compromising on quality, ensuring maximum value for your investment.',
    icon: <TrendingUp className="h-5 w-5" />,
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title text-balance text-5xl font-semibold text-white md:text-6xl">
            Why Choose 11th Hour
          </h2>
          <p className="lead-copy mt-4 text-lg text-white/65">
            Event management involves understanding the audience, shaping the concept, and coordinating the technical details before the experience goes live.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                {feature.icon}
              </div>

              <h3 className="font-display text-[1.7rem] font-semibold leading-none tracking-tight text-white">
                {feature.title}
              </h3>

              <p className="lead-copy mt-2 text-sm text-white/65">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
