'use client'

import { useState, useEffect } from 'react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/config'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}
      style={{
        background: 'rgba(7, 32, 47, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 180, 216, 0.3)',
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-serif font-bold text-primary bg-white px-3 py-1 rounded text-lg tracking-wide"
          style={{ borderBottom: '2px solid #00B4D8' }}
        >
          LØA
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-blue-200 hover:text-white text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Social icons */}
          <div className="flex gap-2 pl-4 border-l border-white/10">
            <a
              href={SITE_CONFIG.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LØA på Facebook"
              className="w-8 h-8 bg-[#1877f2] rounded-md flex items-center justify-center text-white font-bold text-sm hover:opacity-90 transition-opacity"
            >
              f
            </a>
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LØA på Instagram"
              className="w-8 h-8 rounded-md flex items-center justify-center text-white text-sm hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #bc1888)' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LØA på LinkedIn"
              className="w-8 h-8 rounded-md flex items-center justify-center text-white text-sm hover:opacity-90 transition-opacity"
              style={{ background: '#0A66C2' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.852 0-2.135 1.445-2.135 2.939v5.667H9.354V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.268 2.37 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <a
            href="#for-bedrifter"
            className="bg-accent text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-cyan-500 transition-colors duration-200"
          >
            Kontakt oss
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Åpne meny"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-accent/30 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-blue-200 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2 border-t border-white/10">
            <a href={SITE_CONFIG.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 bg-[#1877f2] rounded-md flex items-center justify-center text-white font-bold text-sm hover:opacity-90 transition-opacity">f</a>
            <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 rounded-md flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #bc1888)' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-9 h-9 rounded-md flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              style={{ background: '#0A66C2' }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.852 0-2.135 1.445-2.135 2.939v5.667H9.354V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.268 2.37 4.268 5.455v6.284zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
          <a
            href="#for-bedrifter"
            className="bg-accent text-white text-sm px-4 py-2 rounded-full font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Kontakt oss
          </a>
        </div>
      )}
    </header>
  )
}
