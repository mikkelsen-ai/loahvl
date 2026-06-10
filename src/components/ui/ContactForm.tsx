'use client'

import { useState, FormEvent } from 'react'
import { track } from '@vercel/analytics'
import { ARRANGEMENT_TYPES } from '@/lib/config'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface ContactFormProps {
  variant?: 'glass' | 'light'
}

export default function ContactForm({ variant = 'light' }: ContactFormProps) {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    navn: '',
    bedrift: '',
    kontakt: '',
    type_arrangement: '',
  })

  const isGlass = variant === 'glass'

  const inputBase = 'w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none'
  const inputClass = isGlass
    ? `${inputBase} text-white placeholder-blue-200/60`
    : `${inputBase} text-gray-800 placeholder-gray-400`
  const inputStyle = isGlass
    ? { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(0,180,216,0.25)' }
    : { background: 'white', border: '1px solid #cbd5e1' }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      track('lead_form_submit')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className={`text-center py-8 ${isGlass ? 'text-white' : 'text-primary'}`}>
        <div className="text-4xl mb-3">✓</div>
        <p className="font-semibold text-base">Takk! Vi tar kontakt innen 24 timer.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        required
        className={inputClass}
        style={inputStyle}
        placeholder="Kontaktperson *"
        value={form.navn}
        onChange={(e) => setForm({ ...form, navn: e.target.value })}
      />
      <input
        required
        className={inputClass}
        style={inputStyle}
        placeholder="Bedriftsnavn *"
        value={form.bedrift}
        onChange={(e) => setForm({ ...form, bedrift: e.target.value })}
      />
      <input
        required
        className={inputClass}
        style={inputStyle}
        placeholder="E-post eller telefon *"
        value={form.kontakt}
        onChange={(e) => setForm({ ...form, kontakt: e.target.value })}
      />
      <select
        required
        className={`${inputClass} cursor-pointer`}
        style={{
          ...inputStyle,
          color: form.type_arrangement
            ? isGlass ? 'white' : '#1f2937'
            : isGlass ? 'rgba(191,219,254,0.6)' : '#9ca3af',
        }}
        value={form.type_arrangement}
        onChange={(e) => setForm({ ...form, type_arrangement: e.target.value })}
      >
        <option value="" disabled>
          Type arrangement *
        </option>
        {ARRANGEMENT_TYPES.map((type) => (
          <option key={type} value={type} style={{ color: '#1f2937', background: 'white' }}>
            {type}
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full bg-accent text-white font-bold py-3 rounded-lg text-sm hover:bg-cyan-500 transition-colors duration-200 disabled:opacity-60 mt-1"
      >
        {state === 'loading' ? 'Sender...' : 'Send forespørsel →'}
      </button>
      {state === 'error' && (
        <p className="text-red-400 text-xs text-center">
          Noe gikk galt. Prøv igjen eller send e-post til post@linjeforeningenloa.no.
        </p>
      )}
    </form>
  )
}
