'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@11thhour.pk',
    href: 'mailto:hello@11thhour.pk',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 300 1234567',
    href: 'tel:+923001234567',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Pakistan',
    href: '#',
  },
]

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <DialogContent className="max-h-[90dvh] w-[calc(100vw-1.5rem)] max-w-3xl overflow-y-auto border-white/20 bg-[#0a0a0a] p-4 sm:p-7 md:p-9">
        <DialogHeader className="border-b border-white/10 pb-5 text-left">
          <DialogTitle className="section-title pr-10 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Contact Information
          </DialogTitle>
          <DialogDescription className="lead-copy mt-3 max-w-2xl text-sm text-white/60 md:text-base">
            Reach out directly through the details below for activations, events, gifting, and digital campaign inquiries.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-7 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              11th Hour
            </p>
            <p className="mt-4 text-2xl font-semibold text-white">
              Let’s talk about your next event, activation, or campaign.
            </p>
            <p className="lead-copy mt-4 text-sm text-white/65 md:text-base">
              We help brands create polished experiences through event management, corporate gifting, and digital execution.
            </p>

            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              <div className="bg-[#0a0a0a] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.26em] text-white/45">Availability</p>
                <p className="mt-2 text-sm text-white">Monday to Saturday</p>
              </div>
              <div className="bg-[#0a0a0a] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.26em] text-white/45">Best for</p>
                <p className="mt-2 text-sm text-white">Brand activations, events, digital campaigns</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-start gap-4 rounded-[22px] border border-white/10 bg-white/[0.03] p-4 sm:p-5 transition-colors duration-300 hover:bg-white/[0.05]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                      {item.label}
                    </p>
                    <p className="mt-2 break-words text-lg font-medium text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              )

              if (item.href === '#') {
                return <div key={item.label}>{content}</div>
              }

              return (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              )
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
