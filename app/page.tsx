"use client";
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { ChevronDown, Check, ArrowRight, Zap, Globe, Palette, Film, TrendingUp, Target } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Zap,
    title: "AI Automations",
    desc: "WhatsApp bots, lead capture flows, CRM systems, auto-replies, follow-up systems, and workflow automation.",
    accent: "#1A5FFF",
  },
  {
    icon: Globe,
    title: "Websites & Landing Pages",
    desc: "High-converting websites, business landing pages, portfolio sites, booking pages, and digital storefronts.",
    accent: "#E8350F",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    desc: "Brand strategy, logos, visual identity, positioning, messaging, and premium digital presence.",
    accent: "#E8350F",
  },
  {
    icon: Film,
    title: "Media & Reels",
    desc: "Reels, shoots, editing, short-form content, brand videos, social content, and campaign creatives.",
    accent: "#00C98D",
  },
  {
    icon: TrendingUp,
    title: "Social Media Growth",
    desc: "Content planning, posting, scheduling, captions, profile optimization, Instagram growth, and campaign strategy.",
    accent: "#00C98D",
  },
  {
    icon: Target,
    title: "Lead Generation Systems",
    desc: "Ads, landing pages, forms, WhatsApp funnels, review systems, and analytics reporting.",
    accent: "#1A5FFF",
  },
];

const packages = [
  {
    name: "Starter Impact",
    tag: null,
    pitch: "For early businesses needing visibility.",
    items: [
      "Short-form reels & content",
      "Basic social media handling",
      "Posters & visual assets",
      "Caption writing",
      "Monthly content planning",
    ],
  },
  {
    name: "Growth Engine",
    tag: "Most Popular",
    pitch: "For businesses needing leads and stronger presence.",
    items: [
      "Reels & social media content",
      "Landing page design & build",
      "WhatsApp lead flow setup",
      "Branding improvements",
      "Monthly analytics reporting",
      "Full social media management",
    ],
  },
  {
    name: "ImpactX Pro",
    tag: "Full Scale",
    pitch: "For serious businesses ready to scale.",
    items: [
      "Full social media management",
      "Website design & development",
      "AI automation & CRM setup",
      "Paid ad campaigns",
      "Lead generation systems",
      "CRM dashboard & reporting",
      "Monthly growth strategy sessions",
    ],
  },
];

const faqs = [
  { q: "Is ImpactX just a social media agency?", a: "No. ImpactX is a creative-tech growth company. We combine media production, AI automations, website development, branding, and growth systems — all under one ecosystem." },
  { q: "What industries do you work with?", a: "We work with founders, local businesses, D2C brands, service businesses, and anyone serious about building a premium digital presence and generating leads." },
  { q: "How long does a typical project take?", a: "Landing pages take 1–2 weeks. Full websites and automation systems take 3–6 weeks depending on scope and complexity." },
  { q: "Do you provide post-launch support?", a: "Yes. We offer ongoing retainers for social media management, growth strategy, automation maintenance, and analytics — so your systems keep performing long-term." },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-surface text-on-surface min-h-screen" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section id="home" className="pt-40 pb-24 px-6 md:px-8 flex flex-col items-center justify-center text-center relative overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Dot grid */}
        <div className="absolute inset-0 perspective-grid perspective-mask opacity-20 pointer-events-none" />

        {/* ── Ambient glow orbs ── */}
        <div style={{
          position: 'absolute', top: '10%', left: '50%',
          transform: 'translateX(-50%)',
          width: 700, height: 500, borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(26,95,255,0.18) 0%, rgba(26,95,255,0.06) 50%, transparent 75%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '-5%', right: '-5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(232,53,15,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: 380, height: 380, borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(26,95,255,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto relative z-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-primary/30 text-primary bg-primary/5 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Creative-Tech Growth Company
          </div>

          <h1
            className="font-extrabold tracking-tight leading-[1.05] mb-6"
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.8rem, 6vw, 6rem)' }}
          >
            Build Attention. Create <span style={{ color: '#E8350F' }}>Impact.</span><br />
            Scale Beyond.
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: 'rgba(244,241,236,0.6)' }}>
            We combine media, marketing, websites, AI automations, and growth systems to help businesses move faster, look premium, and convert better.
          </p>

          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-10" style={{ color: 'rgba(244,241,236,0.35)', fontFamily: 'Space Mono, monospace' }}>
            We turn attention into growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#contact" className="w-full sm:w-auto bg-primary text-white px-9 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all glow-red flex items-center gap-2 justify-center">
              Book a Strategy Call
              <ArrowRight size={15} />
            </a>
            <a href="#services" className="w-full sm:w-auto border border-white/10 text-on-surface-variant hover:text-on-surface hover:border-white/20 px-9 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all">
              See What We Do
            </a>
            <a
              href="/ImpactX_Brochure.html" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center gap-2 justify-center px-9 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all border border-white/10 hover:border-primary/40 hover:text-on-surface"
              style={{ color: 'rgba(244,241,236,0.5)' }}
            >
              <span style={{ fontSize: 13 }}>📄</span> View Brochure
            </a>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16"
          >
            {[
              { value: '50+', label: 'Clients Served' },
              { value: '200+', label: 'Projects Delivered' },
              { value: '4×', label: 'Avg Growth Rate' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.2rem', color: '#F4F1EC', letterSpacing: '-1px' }}>{stat.value}</span>
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(244,241,236,0.3)' }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 10,
        }}>
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(244,241,236,0.2)' }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(232,53,15,0.6), transparent)' }} />
        </div>
      </section>

      {/* ── 2. TAGLINE MARQUEE ──────────────────────────────────────── */}
      <section className="py-14 border-y border-white/[0.04] bg-[#111111]">
        <p className="text-center text-[9px] uppercase tracking-[0.5em] mb-8 font-bold" style={{ color: 'rgba(244,241,236,0.3)' }}>
          Built for brands, founders, creators, and businesses ready to scale.
        </p>
        <div className="marquee-container opacity-30">
          <div className="marquee-track">
            {["AI Automations", "Brand Identity", "Websites", "Reels & Media", "Lead Generation", "Social Growth", "Growth Systems", "ImpactX"].concat(
              ["AI Automations", "Brand Identity", "Websites", "Reels & Media", "Lead Generation", "Social Growth", "Growth Systems", "ImpactX"]
            ).map((item, i) => (
              <span key={i} className="text-xl md:text-2xl font-extrabold tracking-tight uppercase px-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ─────────────────────────────────────────────── */}
      <section id="services" className="py-36 px-6 md:px-8">
        <div className="max-w-[1320px] mx-auto">
          <div className="mb-20">
            <span className="label-md text-primary mb-5 block">What We Build</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              What ImpactX Builds
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-8 rounded-2xl bg-[#111111] border border-white/[0.05] hover:border-white/10 transition-all duration-300 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 flex-shrink-0" style={{ backgroundColor: `${svc.accent}18` }}>
                  <svc.icon size={20} style={{ color: svc.accent }} />
                </div>
                <h3 className="text-lg font-extrabold tracking-tight mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,241,236,0.5)' }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ABOUT ────────────────────────────────────────────────── */}
      <section id="about" className="py-36 px-6 md:px-8 bg-[#111111] border-y border-white/[0.04]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="label-md text-primary mb-5 block">About ImpactX</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>
              ImpactX is built to be<br />
              <span style={{ color: '#E8350F' }}>more than an agency.</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(244,241,236,0.55)' }}>
              ImpactX is a creative-tech growth company founded by a team of builders, creators, strategists, and automation thinkers. We help businesses improve their digital presence, generate attention, convert leads, and build systems that scale.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(244,241,236,0.55)' }}>
              Our long-term vision is to evolve from a service company into a complete growth ecosystem — with media, AI, automation, SaaS tools, consulting, and digital infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <span className="label-md mb-2" style={{ color: 'rgba(244,241,236,0.35)' }}>Why businesses choose ImpactX</span>
            {[
              "One team for creative, tech, media, and growth",
              "Premium brand-first execution",
              "AI and automation-driven workflows",
              "Content designed for attention and conversion",
              "Websites built to generate leads",
              "Long-term growth partner, not just a vendor",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#1A1A1A] border border-white/[0.04]">
                <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={11} className="text-primary" />
                </div>
                <span className="text-sm font-medium leading-relaxed" style={{ color: 'rgba(244,241,236,0.7)' }}>{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. FUTURE VISION ────────────────────────────────────────── */}
      <section className="py-36 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid perspective-mask opacity-20 pointer-events-none" />
        <div className="max-w-[1320px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="label-md text-primary mb-5 block">Future Vision</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]" style={{ fontFamily: 'Syne, sans-serif' }}>
              Built for what businesses become.
            </h2>
            <p className="text-base md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed" style={{ color: 'rgba(244,241,236,0.55)' }}>
              ImpactX is building toward a future where businesses don't just need content — they need systems. Our roadmap includes ImpactX Media, ImpactX AI, ImpactX Labs, ImpactX Growth, and future SaaS products that help businesses automate, market, scale, and operate smarter.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
              {["ImpactX Media", "ImpactX AI", "ImpactX Labs", "ImpactX Growth", "ImpactX SaaS"].map((item, i) => (
                <div key={i} className="px-4 py-3 rounded-xl border border-white/[0.06] bg-[#111111] text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(244,241,236,0.4)', fontFamily: 'Space Mono, monospace' }}>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. PACKAGES ─────────────────────────────────────────────── */}
      <section id="packages" className="py-36 px-6 md:px-8 bg-[#111111] border-y border-white/[0.04]">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center mb-20">
            <span className="label-md text-primary mb-5 block">Packages</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to grow?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => {
              const isFeatured = pkg.tag === "Most Popular";
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`p-9 rounded-3xl flex flex-col relative ${
                    isFeatured
                      ? 'bg-[#1A1A1A] border-2 border-primary'
                      : 'bg-[#1A1A1A] border border-white/[0.06]'
                  }`}
                >
                  {pkg.tag && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                      isFeatured ? 'bg-primary text-white' : 'bg-white/10 text-on-surface-variant'
                    }`}>
                      {pkg.tag}
                    </div>
                  )}
                  <h3 className="text-xl font-extrabold uppercase tracking-tight mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{pkg.name}</h3>
                  <p className="text-sm mb-8" style={{ color: 'rgba(244,241,236,0.45)' }}>{pkg.pitch}</p>
                  <ul className="space-y-3 mb-10 flex-grow">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(244,241,236,0.65)' }}>
                        <Check size={15} className="text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`w-full text-center py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
                      isFeatured
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-white/10 text-on-surface hover:bg-white/20 border border-white/10'
                    }`}
                  style={isFeatured ? { boxShadow: '0 0 40px -8px rgba(232,53,15,0.4)' } : {}}
                  >
                    Get Started
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="py-36 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <span className="label-md text-primary mb-5 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Questions? We got answers.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/[0.06] rounded-2xl overflow-hidden bg-[#111111]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-7 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-base font-bold tracking-tight pr-4" style={{ fontFamily: 'Syne, sans-serif' }}>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 transition-transform duration-300 text-primary ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-7 pb-7 text-sm leading-relaxed"
                    style={{ color: 'rgba(244,241,236,0.55)' }}
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────────────────── */}
      <section className="py-36 px-6 md:px-8 bg-[#111111] border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="label-md text-primary mb-5 block">Get Started</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to build your next level?
            </h2>
            <p className="text-base md:text-xl mb-12" style={{ color: 'rgba(244,241,236,0.5)' }}>
              Let's turn your brand into a system that attracts, converts, and grows.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 rounded-full font-bold text-base uppercase tracking-widest hover:bg-primary/90 transition-all glow-red"
            >
              Book a Strategy Call
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT FORM ────────────────────────────────────────────── */}
      <ContactForm />

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="pt-20 pb-10 px-6 md:px-8 border-t border-white/[0.04] bg-[#090909]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            {/* Brand */}
            <div className="max-w-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="font-syne font-extrabold text-[13px] text-white tracking-tight">IX</span>
                </div>
                <span className="font-syne font-extrabold text-xl tracking-tight">
                  <span style={{ color: '#F4F1EC' }}>Impact</span>
                  <span style={{ color: '#E8350F' }}>X</span>
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'rgba(244,241,236,0.3)' }}>
                Creative-Tech Growth Company
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,241,236,0.35)' }}>
                We turn attention into growth.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-16 md:gap-24">
              <div className="flex flex-col gap-4">
                <span className="label-md" style={{ color: 'rgba(244,241,236,0.3)' }}>Menu</span>
                {[
                  { href: "#home", label: "Home" },
                  { href: "#services", label: "Services" },
                  { href: "#about", label: "About" },
                  { href: "#contact", label: "Contact" },
                ].map(link => (
                  <a key={link.href} href={link.href} className="text-base font-bold uppercase tracking-tight hover:text-primary transition-colors" style={{ color: 'rgba(244,241,236,0.6)' }}>
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <span className="label-md" style={{ color: 'rgba(244,241,236,0.3)' }}>Social</span>
                {[
                  { href: "https://instagram.com/impactx", label: "Instagram" },
                  { href: "https://linkedin.com/company/impactx", label: "LinkedIn" },
                ].map(link => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-base font-bold uppercase tracking-tight hover:text-primary transition-colors" style={{ color: 'rgba(244,241,236,0.6)' }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.04]">
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(244,241,236,0.25)' }}>
              © 2026 ImpactX. All Rights Reserved.
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: 'rgba(244,241,236,0.2)' }}>
              ImpactX — Creative-Tech Growth Company
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
