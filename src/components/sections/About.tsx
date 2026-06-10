import { SITE_CONFIG } from '@/lib/config'

const TILBUD = [
  { icon: '🏢', label: 'Bedriftspresentasjoner', desc: 'Møt fremtidige arbeidsgivere direkte' },
  { icon: '🧩', label: 'Case-kvelder', desc: 'Løs reelle problemstillinger i team' },
  { icon: '🎉', label: 'Sosiale events', desc: 'Bli kjent med medstudenter utenfor forelesning' },
  { icon: '🎤', label: 'Faglige foredrag', desc: 'Innsikt fra erfarne folk i næringslivet' },
]

const SOCIALS = [
  {
    label: 'Instagram',
    href: SITE_CONFIG.instagram,
    handle: '@linjeforeningenloa',
    bg: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #bc1888)',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: SITE_CONFIG.facebook,
    handle: 'linjeforeningenloa',
    bg: '#1877f2',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: SITE_CONFIG.linkedin,
    handle: 'LØA HVL',
    bg: '#0A66C2',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.852 0-2.135 1.445-2.135 2.939v5.667H9.354V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.268 2.37 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="om-oss" className="bg-bg-light py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold tracking-widest text-accent mb-8">OM FORENINGEN</p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* About text */}
          <div className="md:col-span-2 space-y-4 text-gray-600 leading-relaxed text-base">
            <p>
              LØA er linjeforeningen for deg som studerer Økonomi og Administrasjon ved HVL.
              Vi arrangerer alt fra bedriftspresentasjoner og case-kvelder til sosiale
              sammenkomster og faglige foredrag.
            </p>
            <p>
              Gjennom tett samarbeid med næringslivet sørger vi for at du som student møter
              fremtidige arbeidsgivere allerede under studietiden – og at bedrifter får tilgang
              til motiverte kandidater.
            </p>
            <p>
              Alle studenter ved Handelshøgskolen HVL er automatisk en del av LØA.
            </p>

            {/* Social media */}
            <div className="flex flex-wrap gap-3 pt-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white text-sm font-medium hover:opacity-90 transition-opacity duration-200"
                  style={{ background: s.bg }}
                >
                  {s.icon}
                  {s.handle}
                </a>
              ))}
            </div>
          </div>

          {/* What we offer */}
          <div className="bg-primary rounded-xl p-6">
            <p className="text-xs font-bold tracking-widest text-accent mb-4">HVA VI TILBYR</p>
            <ul className="space-y-3">
              {TILBUD.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="text-lg leading-none mt-0.5">{item.icon}</span>
                  <div>
                    <span className="block text-white text-sm font-semibold">{item.label}</span>
                    <span className="block text-blue-300 text-xs leading-snug">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
