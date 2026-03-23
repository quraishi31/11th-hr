'use client'

import Link from 'next/link'
import { Linkedin, Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react'
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
    <footer className="relative px-4 py-8 md:px-8 md:py-12 bg-black border-t-[0.4px]" id='footer'>
      <div className="mx-auto max-w-7xl">
        {/* Main content - flex layout for logo/text on left, socials on right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 mb-6">
          {/* Left side - Logo and description */}
          <div className="flex flex-col gap-4 max-w-2xl">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Logo />
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-white leading-relaxed max-w-xl">
              11Th Hour activates brands by using a strategic combination of experience design, brand engagement and digital enablement to create extraordinary experiences that emotionally connect with audiences.
            </p>
          </div>

          {/* Right side - Social icons */}
          <div className="flex flex-wrap gap-4 md:gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300 hover:bg-white/40 hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6">
          <p className="text-sm text-white/80">
            © Copyright 2026 11th Hour. All Rights Reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-white/80 transition-all duration-300 self-start md:self-auto"
            aria-label="Back to Top"
          >
            <span className="text-sm">Back to Top</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
