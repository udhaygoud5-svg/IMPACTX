import type { Metadata } from 'next'
import { Syne, DM_Sans, DM_Serif_Display, Space_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--font-syne' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-dm-sans' })
const dmSerifDisplay = DM_Serif_Display({ subsets: ['latin'], weight: ['400'], style: ['normal', 'italic'], variable: '--font-dm-serif' })
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://impactx.co'),
  title: 'ImpactX | Creative-Tech Growth Company',
  description: 'ImpactX helps modern businesses grow through creative media, high-converting websites, AI automations, branding, and growth systems — all under one powerful ecosystem.',
  openGraph: {
    title: 'ImpactX | Creative-Tech Growth Company',
    description: 'We turn attention into growth. Media, marketing, websites, AI automations, and growth systems — all under one ecosystem.',
    url: 'https://impactx.co',
    siteName: 'ImpactX',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ImpactX | Creative-Tech Growth Company',
    description: 'We turn attention into growth.',
    images: ['/og-image.png'],
  },
  keywords: ['ImpactX', 'creative tech', 'growth company', 'AI automation', 'branding', 'websites', 'media production', 'reels', 'social media', 'lead generation', 'business growth'],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} ${dmSerifDisplay.variable} ${spaceMono.variable} bg-surface text-on-surface antialiased selection:bg-primary/20 selection:text-on-surface`}
        style={{ fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif' }}
      >
        {children}
        <a
          href="https://wa.me/919347047827?text=Hi,%20I%20want%20to%20grow%20my%20business%20with%20ImpactX"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </body>
    </html>
  )
}
