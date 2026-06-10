'use client'

import { useState, FormEvent } from 'react'
import { track } from '@vercel/analytics'
import { SITE_CONFIG } from '@/lib/config'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const ROLLER = ['Student', 'Faglærer / ansatt', 'Alumni']

const OENSKER = [
  'Bedriftspresentasjoner',
  'Case-kvelder',
  'Sosiale events',
  'Faglig innhold',
  'Nettverksarrangementer',
  'Annet',
]

export default function Tilbakemelding() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    navn: '',
    rolle: '',
    oenske: '',
    melding: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setState('loading')
    try {
      await fetch(SITE_CONFIG.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bedrift_id: SITE_CONFIG.bedriftId,
          type: 'tilbakemelding',
          ...form,
        }),
      })
      track('tilbakemelding_submit', { rolle: form.rolle })
      setState('success')
    } catch {
      setState('error')
    }
  }

  const inputClass = 'w-full rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none'
  const inputStyle = { background: 'white', border: '1px solid #cbd5e1' }

  return (
    <section id="tilbakemelding" className="bg-white py-16 md:py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: Intro */}
          <div>
            <p className="text-xs font-bold tracking-widest text-accent mb-2">DIN MENING</p>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              For studenter & faglærere
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Hva ønsker du mer av fra LØA? Vi vil gjerne høre fra deg – enten du er student,
              faglærer eller alumni. Tilbakemeldingene dine hjelper oss å lage bedre arrangementer.
            </p>
            <div className="space-y-3">
              {['Anonymt hvis du vil – navn er valgfritt', 'Svar innen 48 timer hvis du oppgir kontakt', 'Alle innspill leses av styret'].map((point) => (
                <div key={point} className="flex items-start gap-2 text-sm text-gray-500">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-bg-light rounded-xl p-6" style={{ borderLeft: '4px solid #00B4D8' }}>
            {state === 'success' ? (
              <div className="text-center py-8 text-primary">
                <div className="text-4xl mb-3">✓</div>
                <p className="font-semibold text-base">Takk for tilbakemeldingen!</p>
                <p className="text-gray-400 text-sm mt-1">Styret leser alle innspill.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Navn (valgfritt)"
                  value={form.navn}
                  onChange={(e) => setForm({ ...form, navn: e.target.value })}
                />
                <select
                  required
                  className={`${inputClass} cursor-pointer`}
                  style={{
                    ...inputStyle,
                    color: form.rolle ? '#1f2937' : '#9ca3af',
                  }}
                  value={form.rolle}
                  onChange={(e) => setForm({ ...form, rolle: e.target.value })}
                >
                  <option value="" disabled>Hvem er du? *</option>
                  {ROLLER.map((r) => (
                    <option key={r} value={r} style={{ color: '#1f2937' }}>{r}</option>
                  ))}
                </select>
                <select
                  required
                  className={`${inputClass} cursor-pointer`}
                  style={{
                    ...inputStyle,
                    color: form.oenske ? '#1f2937' : '#9ca3af',
                  }}
                  value={form.oenske}
                  onChange={(e) => setForm({ ...form, oenske: e.target.value })}
                >
                  <option value="" disabled>Hva ønsker du mer av? *</option>
                  {OENSKER.map((o) => (
                    <option key={o} value={o} style={{ color: '#1f2937' }}>{o}</option>
                  ))}
                </select>
                <textarea
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                  placeholder="Utdyp gjerne (valgfritt)"
                  rows={3}
                  value={form.melding}
                  onChange={(e) => setForm({ ...form, melding: e.target.value })}
                />
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg text-sm hover:bg-primary/90 transition-colors duration-200 disabled:opacity-60 mt-1"
                >
                  {state === 'loading' ? 'Sender...' : 'Send tilbakemelding →'}
                </button>
                {state === 'error' && (
                  <p className="text-red-400 text-xs text-center">
                    Noe gikk galt. Prøv igjen senere.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
