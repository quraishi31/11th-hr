import React from "react"
import type { Metadata, Viewport } from 'next'
import { Manrope, Sora } from 'next/font/google'

import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '11th Hour - Brand Activation & Experience Agency',
  description:
    '11th Hour delivers brand activations, events, corporate gifting, and digital campaigns with a polished, experience-led approach.',
  keywords: [
    'brand activation',
    'communications strategy',
    'brand strategy',
    'experience design',
  ],
}

export const viewport: Viewport = {
  themeColor: '#001a00',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${sora.variable} font-sans antialiased`} style={{ backgroundColor: '#000000' }}>
        {children}
      </body>
    </html>
  )
}
