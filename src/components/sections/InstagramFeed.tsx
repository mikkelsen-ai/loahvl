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

        {/* @ts-expect-error custom web component */}
        <behold-widget feed-id="7l8W8o7YsSGhXjqGneOC"></behold-widget>

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
