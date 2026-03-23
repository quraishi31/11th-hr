'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Logo } from './Logo'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const navItems = [
    { label: 'Home', href: '#Home' },
    { label: 'Why 11th', href: '#Why11' },
    { label: 'Portfolio', href: '#works' },
    { label: 'Contact Us', href: '#footer' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 py-3 transition-all duration-300">
      <div className="mx-auto w-full md:w-[90%] lg:w-3/4">
        <div
          className={`relative rounded-full border transition-all duration-300 px-4 py-3 backdrop-blur-2xl md:px-6 ${isScrolled
            ? 'border-white/20 bg-white/10 shadow-lg shadow-primary/10'
            : 'border-white/10 bg-white/5'
            }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-1 justify-start">
              <Link href="#" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                <Logo className="h-11 w-auto md:h-12" />
              </Link>
            </div>

            <div className="hidden items-center justify-center gap-6 lg:gap-12 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.22em] text-white/88 transition-colors duration-300 hover:text-[#7be9dd]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-full p-2 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white md:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

          </div>

          {isMobileMenuOpen && (
            <div className="mt-4 border-t border-white/10 pt-4 animate-slide-down md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-lg px-4 py-2 text-white/80 transition-all duration-300 hover:bg-white/100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 py-2 pt-3 border-t border-white/10">
                  <button className="flex w-full items-center justify-center gap-1 rounded-full border border-transparent px-3 py-1 text-sm font-medium text-white/80 transition-all duration-300 hover:border-primary/50 hover:bg-white/10 hover:text-primary">
                    EN
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
