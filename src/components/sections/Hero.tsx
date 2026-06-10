import Image from 'next/image'
import ContactForm from '@/components/ui/ContactForm'
import { STATS } from '@/lib/config'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Background image */}
      <Image
        src="/hvl-campus.jpeg"
        alt="Høgskulen på Vestlandet campus"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(160deg, rgba(7,32,47,0.92) 0%, rgba(13,47,71,0.88) 50%, rgba(10,53,88,0.85) 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #00B4D8, transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Left: Headline + stats */}
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-accent"
            style={{ background: 'rgba(0,180,216,0.12)', border: '1px solid rgba(0,180,216,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            HØGSKULEN PÅ VESTLANDET, CAMPUS BERGEN
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Broen mellom{' '}
            <span className="text-accent">studenter</span>
            <br />
            og næringsliv
          </h1>

          <p className="text-blue-200 text-base mb-8 leading-relaxed">
            LØA er linjeforeningen for økonomi- og administrasjonsstudenter ved Handelshøgskolen HVL.
            Vi arrangerer faglige og sosiale events, og er møteplassen for deg som vil bli kjent med medstudenter og næringsliv.
          </p>

          <a
            href="#om-oss"
            className="inline-block border border-white/30 text-white text-sm px-6 py-3 rounded-full hover:bg-white/10 transition-colors duration-200"
          >
            Les mer om LØA ↓
          </a>

          {/* Stats */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="max-w-[130px]">
                <div className="font-serif text-2xl font-bold text-accent">{stat.value}</div>
                <div className="text-[10px] leading-tight text-blue-300 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Glass form */}
        <div className="glass-card rounded-xl p-6">
          <p className="text-white font-bold text-base mb-1">Ønsker din bedrift å samarbeide med LØA?</p>
          <p className="text-blue-300 text-sm mb-5">Send oss en forespørsel, så tar vi kontakt.</p>
          <ContactForm variant="glass" />
        </div>

      </div>
    </section>
  )
}
