import ContactForm from '@/components/ui/ContactForm'
import { SITE_CONFIG } from '@/lib/config'

const SERVICES = [
  {
    icon: '🎤',
    title: 'Bedriftspresentasjon',
    description: 'Presentér selskapet og møt studenter ansikt til ansikt. Rekruttér fremtidens økonomer.',
    accent: true,
  },
  {
    icon: '🧩',
    title: 'Case-kveld',
    description: 'Bruk studentene til å løse reelle problemstillinger fra din bransje.',
    accent: false,
  },
  {
    icon: '💼',
    title: 'Workshop',
    description: 'Lær studentene noe de ikke får i forelesningssalen — intervjuteknikk, Excel-triks, bransjecase eller det dere brenner for.',
    accent: false,
  },
]

export default function ForBedrifter() {
  return (
    <section id="for-bedrifter" className="bg-bg-light py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold tracking-widest text-accent mb-2">FOR BEDRIFTER</p>
        <h2 className="font-serif text-3xl font-bold text-primary mb-3">
          Nå fremtidens økonomer
        </h2>
        <p className="text-gray-500 mb-10 max-w-xl">
          Book en bedriftspresentasjon, case-kveld eller workshop for motiverte
          økonomi-studenter ved HVL.
        </p>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-100 rounded-xl p-6"
              style={{ borderTop: `3px solid ${service.accent ? '#00B4D8' : '#0d2f47'}` }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-primary text-base mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div
          className="max-w-xl mx-auto bg-white border border-gray-100 rounded-xl p-8"
          style={{ borderLeft: '4px solid #00B4D8' }}
        >
          <p className="font-bold text-primary text-base mb-1">📩 Send oss en forespørsel</p>
          <p className="text-gray-400 text-sm mb-6">Vi svarer deg raskt</p>
          <ContactForm variant="light" />
        </div>

        {/* Instagram DM alternative */}
        <div className="max-w-xl mx-auto mt-6 text-center">
          <p className="text-gray-400 text-sm mb-3">Foretrekker du å ta kontakt direkte?</p>
          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-white text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
            style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #bc1888)' }}
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Send oss en DM på Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
