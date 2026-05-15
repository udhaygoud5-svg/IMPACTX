"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about",    label: "About"    },
  { href: "#packages", label: "Packages" },
  { href: "/ImpactX_Brochure.html", label: "Brochure", isExternal: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, backgroundColor: 'rgba(9,9,9,0.8)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', maxWidth: '1440px', margin: '0 auto' }}>

        {/* ── Logo ── */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          {/* IX Monogram */}
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            backgroundColor: '#E8350F',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px -4px rgba(232,53,15,0.55)',
            flexShrink: 0,
          }}>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, color: '#fff', letterSpacing: '-0.02em' }}>IX</span>
          </div>
          {/* Wordmark */}
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, letterSpacing: '-0.03em' }}>
            <span style={{ color: '#F4F1EC' }}>Impact</span>
            <span style={{ color: '#E8350F' }}>X</span>
          </span>
        </a>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2rem' }}>
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(244,241,236,0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F4F1EC')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244,241,236,0.5)')}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* ── CTA + Hamburger ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="#contact"
            className="hidden md:inline-flex"
            style={{
              alignItems: 'center',
              backgroundColor: '#E8350F',
              color: '#fff',
              padding: '0.6rem 1.5rem',
              borderRadius: 999,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              textDecoration: 'none',
              boxShadow: '0 0 24px -6px rgba(232,53,15,0.5)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Book a Strategy Call
          </a>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', color: 'rgba(244,241,236,0.7)', cursor: 'pointer', padding: 4 }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {isOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: 65,
          backgroundColor: '#090909',
          zIndex: 40, padding: '2.5rem',
          display: 'flex', flexDirection: 'column', gap: '2rem',
        }}>
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800, fontSize: 36,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                color: '#F4F1EC',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            style={{
              marginTop: 'auto',
              backgroundColor: '#E8350F',
              color: '#fff',
              padding: '1.25rem 2.5rem',
              borderRadius: 999,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 15,
              textTransform: 'uppercase',
              textAlign: 'center',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              boxShadow: '0 0 40px -8px rgba(232,53,15,0.5)',
            }}
          >
            Book a Strategy Call
          </a>
        </div>
      )}
    </nav>
  );
}
