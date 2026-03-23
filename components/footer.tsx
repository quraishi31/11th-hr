'use client'

import Link from 'next/link'
import { ArrowUp, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { Logo } from './Logo'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/11thhourpk', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/11thhourpk', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/11thHourpk', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/11thhourpk/', label: 'Instagram' },
    { icon: Youtube, href: 'http://www.youtube.com/@11thHourpk', label: 'YouTube' },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-black px-4 py-10 md:px-8 md:py-14" id="footer">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:items-start">
          <div className="flex max-w-2xl flex-col gap-5">
            <div className="flex items-center gap-3">
              <Logo className="h-14 w-auto md:h-16" />
            </div>

            <p className="max-w-[16rem] text-xs font-semibold uppercase tracking-[0.32em] text-white/45">
              Brand activation, events, gifting, and digital campaigns
            </p>

            <p className="lead-copy max-w-2xl text-base text-white/84 md:text-lg">
              11Th Hour activates brands by using a strategic combination of experience design, brand engagement and digital enablement to create extraordinary experiences that emotionally connect with audiences.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Follow 11th Hour
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12]"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-sm font-medium text-white/72">
                Creating polished brand experiences that feel premium at every touchpoint.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm tracking-[0.08em] text-white/70">
            © Copyright 2026 11th Hour. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="self-start flex items-center gap-2 text-white/85 transition-all duration-300 hover:text-white md:self-auto"
            aria-label="Back to Top"
          >
            <span className="text-sm">Back to Top</span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition-colors hover:bg-white/[0.12]">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
