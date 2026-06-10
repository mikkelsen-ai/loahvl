import Image from 'next/image'
import { BOARD_MEMBERS, SITE_CONFIG } from '@/lib/config'

export default function Styret() {
  return (
    <section id="styret" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <p className="text-xs font-bold tracking-widest text-accent mb-2">HVEM ER VI</p>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-primary mb-10">
          Møt styret
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Photo */}
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/styret-2025.jpeg"
              alt="LØA-styret 2025 ved Handelshøgskolen HVL"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">

            {/* Board list */}
            <div>
              <p className="text-xs font-bold tracking-widest text-accent mb-4">STYRET 2025–26</p>
              <ul className="divide-y divide-gray-100">
                {BOARD_MEMBERS.map((member) => (
                  <li key={member.role} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-0.5 sm:gap-0">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide shrink-0">
                      {member.role}
                    </span>
                    <span className="text-primary font-medium text-sm sm:text-right">
                      {member.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Semester info */}
            <div
              className="rounded-xl p-5"
              style={{ background: 'rgba(0,180,216,0.07)', border: '1px solid rgba(0,180,216,0.2)' }}
            >
              <p className="text-xs font-bold tracking-widest text-accent mb-3">HØSTSEMESTERET 2026</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Til høstsemesteret er det allerede planlagt to bedriftspresentasjoner og to sosiale
                aktiviteter. Mer info kommer snart!
</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold text-accent bg-white border border-accent/30 rounded-full px-3 py-1">
                  2 × Bedriftspresentasjon
                </span>
                <span className="text-xs font-semibold text-accent bg-white border border-accent/30 rounded-full px-3 py-1">
                  2 × Sosial aktivitet
                </span>
              </div>
            </div>

            {/* Instagram */}
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 self-start rounded-full px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-200"
              style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Følg oss på Instagram
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
