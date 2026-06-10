'use client'

import { track } from '@vercel/analytics'
import { SITE_CONFIG } from '@/lib/config'

export default function InstagramFeed() {
  const handleInstagramClick = () => track('instagram_click')

  return (
    <section id="arrangementer" className="bg-primary py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold tracking-widest text-accent mb-1">SISTE FRA OSS</p>
            <p className="text-white text-lg font-semibold">{SITE_CONFIG.instagramHandle}</p>
          </div>
        </div>

        {/*
          TODO: Bytt ut placeholder-grid med Behold-embed:
          1. Gå til behold.so og koble @linjeforeningenloa
          2. Kopier feed-id og erstatt innholdet under med:
             <behold-widget feed-id="DIN_FEED_ID"></behold-widget>
          3. Legg til script-tag i app/layout.tsx:
             <Script src="https://w.behold.so/widget.js" strategy="afterInteractive" />
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <a
              key={i}
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-lg flex flex-col items-center justify-center gap-2 hover:opacity-80 transition-opacity duration-200"
              style={{ background: '#1e4a6a', border: '1px solid rgba(0,180,216,0.15)' }}
              aria-label={`Gå til LØA på Instagram`}
            >
              <svg className="w-8 h-8 text-blue-400/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleInstagramClick}
            className="text-accent text-sm hover:underline"
          >
            Se alle innlegg på Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}
