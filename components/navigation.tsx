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
        {/* Glass morphism background container */}
        <div
          className={`relative rounded-lg border transition-all duration-300 px-4 py-3 backdrop-blur-2xl md:px-6 ${isScrolled
            ? 'border-white/20 bg-white/10 shadow-lg shadow-primary/10'
            : 'border-white/10 bg-white/5'
            }`}
        >
          {/* Content wrapper - Fixed Layout */}
          <div className="flex items-center justify-between">

            {/* 1. LEFT: Logo Wrapper (Takes equal space to balance the right side) */}
            <div className="flex flex-1 justify-start">
              <Link href="#" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                <Logo />
              </Link>
            </div>

            {/* 2. CENTER: Navigation Items */}
            <div className="hidden items-center justify-center gap-6 lg:gap-12 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-medium tracking-wide text-sm lg:text-base text-white transition-colors duration-300 hover:text-white/50 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* 3. RIGHT: Mobile Menu / Extras (Takes equal space to balance the left side) */}
            <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-white/10 transition-all duration-300 text-white/80 hover:text-white"
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

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10 animate-slide-down">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 rounded-lg text-white/80 transition-all duration-300 hover:bg-white/100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 py-2 pt-3 border-t border-white/10">
                  <button className="flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-primary border border-transparent hover:border-primary/50 w-full justify-center">
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