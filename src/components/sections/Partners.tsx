import { PARTNERS } from '@/lib/config'

function PwCLogo() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 flex items-center justify-center min-w-[110px]">
      <span className="font-black text-2xl tracking-tight" style={{ color: '#e4252e' }}>PwC</span>
    </div>
  )
}

function DeloitteLogo() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 flex items-center justify-center min-w-[130px]">
      <span className="font-bold text-xl tracking-tight text-[#1d1d1b]">Deloitte</span>
      <span className="inline-block w-2 h-2 rounded-full ml-0.5 mb-2 self-end" style={{ background: '#86bc25' }} />
    </div>
  )
}

function CedraLogo() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 flex items-center justify-center min-w-[110px]">
      <span className="font-bold text-xl tracking-tight" style={{ color: '#003057' }}>Cedra</span>
    </div>
  )
}

function AiderLogo() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 flex items-center justify-center min-w-[110px]">
      <span className="font-bold text-xl tracking-[0.06em]" style={{ color: '#0085CA' }}>AIDER</span>
    </div>
  )
}

function HandelsbankenLogo() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 flex items-center justify-center min-w-[180px]">
      <span className="font-semibold text-base tracking-tight" style={{ color: '#0A3A6E' }}>
        Handelsbanken
      </span>
    </div>
  )
}

function DanskebankLogo() {
  return (
    <div className="rounded-xl px-6 py-4 flex items-center justify-center min-w-[160px]" style={{ background: '#003755' }}>
      <span className="font-bold text-base tracking-tight text-white">Danske Bank</span>
    </div>
  )
}

function KPMGLogo() {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 flex items-center justify-center min-w-[110px]">
      <span className="font-black text-2xl tracking-tighter" style={{ color: '#00338D' }}>KPMG</span>
    </div>
  )
}

const LOGO_MAP: Record<string, React.ComponentType> = {
  PwC: PwCLogo,
  Deloitte: DeloitteLogo,
  Cedra: CedraLogo,
  Aider: AiderLogo,
  Handelsbanken: HandelsbankenLogo,
  Danskebank: DanskebankLogo,
  KPMG: KPMGLogo,
}

export default function Partners() {
  return (
    <section id="samarbeid" className="bg-white py-16 md:py-20 border-t-4 border-accent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-widest text-accent mb-2">
            TIDLIGERE SAMARBEIDSPARTNERE
          </p>
          <p className="text-gray-400 text-sm">Bedrifter vi har arrangert med</p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap pb-2">
          {PARTNERS.map((partner) => {
            const Logo = LOGO_MAP[partner.name]
            return Logo ? <Logo key={partner.name} /> : null
          })}
        </div>

      </div>
    </section>
  )
}
