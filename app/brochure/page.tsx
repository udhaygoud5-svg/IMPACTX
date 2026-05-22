"use client";
import { useState, useEffect } from "react";

export default function BrochurePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#overview", label: "Overview" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Our Process" },
    { href: "#why", label: "Why Us" },
  ];

  const services = [
    {
      num: "01",
      tag: "WEBSITES & TECH",
      title: "Web & Software Solutions",
      quote: '"We build digital platforms that don\'t just look good — they perform."',
      items: [
        "Landing Pages & Sales Funnels",
        "Business Websites (Portfolio / Service-based)",
        "Dashboard & Data Visualizations",
        "Billing & Management Systems",
        "App Development (Basic MVPs)",
      ],
    },
    {
      num: "02",
      tag: "BRANDING & SOCIAL",
      title: "Branding & Strategy",
      quote: '"We turn your business into a brand people recognize and trust."',
      items: [
        "Instagram Page Setup & Optimization",
        "Content Strategy (Reels, Posts, Ideas)",
        "Visual Feed Design",
        "Audience Growth Strategy",
        "Brand Identity & Logo Design",
      ],
    },
    {
      num: "03",
      tag: "AUTOMATION",
      title: "AI & Growth Automation",
      quote: '"Automate conversations. Capture leads. Close more customers."',
      items: [
        "WhatsApp Chatbots",
        "Auto-replies & Lead Capture",
        "Customer Support Automation",
        "CRM Integration",
        "Sales Funnel Automation",
      ],
    },
    {
      num: "04",
      tag: "MEDIA PRODUCTION",
      title: "Reels & Media",
      quote: '"Content that stops the scroll and starts the conversation."',
      items: [
        "Short-form Reels & Videos",
        "Brand Shoots & Photography",
        "Video Editing & Post-production",
        "Ad Creatives & Campaign Assets",
        "Monthly Content Calendars",
      ],
    },
  ];

  const steps = [
    { n: "01", title: "Discovery Call", desc: "We understand your business, goals, audience, and current gaps." },
    { n: "02", title: "Strategy & Plan", desc: "We map out a custom growth plan tailored to your brand and objectives." },
    { n: "03", title: "Build & Execute", desc: "Our team builds, designs, and launches with precision and speed." },
    { n: "04", title: "Scale & Optimize", desc: "We track, iterate, and optimize every system for long-term growth." },
  ];

  const reasons = [
    { icon: "⚡", title: "One Ecosystem", desc: "Creative, tech, media, and growth — all under one roof." },
    { icon: "🎯", title: "Results First", desc: "Every decision is made to drive leads, conversions, and revenue." },
    { icon: "🤖", title: "AI-Powered", desc: "We use automation and AI to give you a serious competitive edge." },
    { icon: "🏆", title: "Premium Execution", desc: "No templates. Everything is built to feel premium and brand-specific." },
    { icon: "📈", title: "Long-term Partner", desc: "We grow with you — not just a one-time vendor." },
    { icon: "🚀", title: "Fast Delivery", desc: "We move fast without compromising on quality or attention to detail." },
  ];

  return (
    <main style={{ background: "#090909", color: "#F4F1EC", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .grid-bg {
          background-image: linear-gradient(rgba(232,53,15,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(232,53,15,0.04) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        .blue-glow {
          background: radial-gradient(ellipse at 50% 0%, rgba(26,95,255,0.22) 0%, transparent 65%);
        }
        .red-glow {
          background: radial-gradient(ellipse at 50% 50%, rgba(232,53,15,0.18) 0%, transparent 65%);
        }
        @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:none; } }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .nav-link {
          font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em;
          color: rgba(244,241,236,0.5); text-decoration: none; transition: color 0.2s;
        }
        .nav-link:hover { color: #F4F1EC; }
        .service-item {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 24px; border-radius: 14px;
          background: #111; border: 1px solid rgba(255,255,255,0.06);
          font-size: 15px; font-weight: 600; color: rgba(244,241,236,0.8);
          transition: border-color 0.2s, background 0.2s;
        }
        .service-item:hover { border-color: rgba(232,53,15,0.4); background: #161616; }
        .step-card {
          padding: 32px; border-radius: 18px;
          background: #111; border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.2s;
        }
        .step-card:hover { border-color: rgba(232,53,15,0.3); }
        .reason-card {
          padding: 28px; border-radius: 16px;
          background: #111; border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.2s, transform 0.2s;
        }
        .reason-card:hover { border-color: rgba(232,53,15,0.3); transform: translateY(-3px); }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(9,9,9,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s",
        padding: "0 48px", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, background: "#E8350F", borderRadius: 7,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 13, color: "#fff",
          }}>IX</div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 18 }}>
            <span style={{ color: "#F4F1EC" }}>Impact</span>
            <span style={{ color: "#E8350F" }}>X</span>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {navLinks.map(l => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
        </div>

        <a href="#contact" style={{
          background: "#E8350F", color: "#fff", padding: "10px 24px",
          borderRadius: "100px", fontWeight: 700, fontSize: 11,
          textTransform: "uppercase", letterSpacing: "0.18em", textDecoration: "none",
          boxShadow: "0 0 28px rgba(232,53,15,0.35)", transition: "opacity 0.2s",
        }}
        onMouseOver={e => (e.currentTarget.style.opacity = "0.85")}
        onMouseOut={e => (e.currentTarget.style.opacity = "1")}>
          Start Journey
        </a>
      </nav>

      {/* ── HERO ── */}
      <section id="overview" className="grid-bg" style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "120px 48px 80px", position: "relative", overflow: "hidden",
      }}>
        <div className="blue-glow" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }} className="fade-up">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1px solid rgba(232,53,15,0.3)", color: "#E8350F",
            background: "rgba(232,53,15,0.06)", borderRadius: "100px",
            padding: "6px 18px", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: 36,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8350F", display: "inline-block" }} />
            Creative-Tech Growth Company
          </div>

          <h1 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(56px, 8vw, 110px)",
            lineHeight: 1, letterSpacing: "-3px", marginBottom: 28,
            background: "linear-gradient(180deg, #F4F1EC 60%, rgba(244,241,236,0.4) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>IMPACTX</h1>

          <p style={{
            fontFamily: "Space Mono, monospace", fontSize: 13, fontWeight: 700,
            color: "#E8350F", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 40,
          }}>WE TURN ATTENTION INTO GROWTH</p>

          <p style={{
            fontSize: 17, lineHeight: 1.7, color: "rgba(244,241,236,0.55)",
            maxWidth: 560, margin: "0 auto 48px",
          }}>
            From AI automations to websites, branding, reels, and growth systems — we provide end-to-end solutions that help businesses grow faster and smarter.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#services" style={{
              background: "#E8350F", color: "#fff", padding: "14px 36px",
              borderRadius: "100px", fontWeight: 700, fontSize: 12,
              textTransform: "uppercase", letterSpacing: "0.2em", textDecoration: "none",
              boxShadow: "0 0 40px rgba(232,53,15,0.4)",
            }}>Explore Services</a>
            <a href="#contact" style={{
              border: "1px solid rgba(255,255,255,0.12)", color: "rgba(244,241,236,0.7)",
              padding: "14px 36px", borderRadius: "100px", fontWeight: 700, fontSize: 12,
              textTransform: "uppercase", letterSpacing: "0.2em", textDecoration: "none",
              background: "rgba(255,255,255,0.03)",
            }}>Start Journey</a>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 1,
        }}>
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(244,241,236,0.25)" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(232,53,15,0.6), transparent)" }} />
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section style={{
        padding: "120px 48px", textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: "#0C0C0C",
      }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#E8350F", marginBottom: 24 }}>WHO WE ARE</p>
        <h2 style={{
          fontFamily: "Syne, sans-serif", fontWeight: 800,
          fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.15,
          maxWidth: 760, margin: "0 auto 28px",
        }}>
          At ImpactX, we help businesses build a strong and impactful online presence.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(244,241,236,0.5)", maxWidth: 620, margin: "0 auto" }}>
          From creating stunning websites to crafting engaging brand identities and automating customer interactions, we provide end-to-end solutions that help businesses grow faster and smarter.
        </p>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section id="services" style={{ padding: "120px 48px", background: "#090909" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#E8350F", marginBottom: 16, textAlign: "center" }}>OUR SERVICES</p>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 64px)", textAlign: "center", marginBottom: 64,
          }}>Strategic Solutions</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { icon: "🌐", title: "Web & Software Solutions", items: ["Custom Sites", "Dashboards", "App MVPs"] },
              { icon: "🎨", title: "Branding & Social Media", items: ["Brand Identity", "Feed Design", "Content Strategy"] },
              { icon: "🤖", title: "AI & WhatsApp Automation", items: ["Chatbots", "Lead Capture", "CRM Integration"] },
              { icon: "🎬", title: "Reels & Media Production", items: ["Short-form Reels", "Brand Shoots", "Ad Creatives"] },
              { icon: "📈", title: "Lead Generation", items: ["Ads & Funnels", "WhatsApp Flows", "Analytics"] },
              { icon: "🚀", title: "Social Media Growth", items: ["Instagram Growth", "Content Planning", "Profile Optimization"] },
            ].map((svc, i) => (
              <div key={i} style={{
                padding: "32px 28px", borderRadius: 18,
                background: "#111", border: "1px solid rgba(255,255,255,0.06)",
                transition: "border-color 0.2s",
              }}
              onMouseOver={e => (e.currentTarget.style.borderColor = "rgba(232,53,15,0.3)")}
              onMouseOut={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{svc.icon}</div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 16 }}>{svc.title}</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {svc.items.map((it, j) => (
                    <li key={j} style={{ fontSize: 13, color: "rgba(244,241,236,0.5)", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#E8350F", flexShrink: 0 }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE DEEP DIVES ── */}
      {services.map((svc, i) => (
        <section key={i} style={{
          padding: "120px 48px",
          background: i % 2 === 0 ? "#0C0C0C" : "#090909",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "#E8350F", marginBottom: 20 }}>
                {svc.num} / {svc.tag}
              </p>
              <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.1, marginBottom: 28 }}>{svc.title}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#E8350F", fontStyle: "italic", fontWeight: 600 }}>{svc.quote}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {svc.items.map((item, j) => (
                <div key={j} className="service-item">
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "rgba(232,53,15,0.12)", display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, fontSize: 11, fontWeight: 800, color: "#E8350F",
                    fontFamily: "Space Mono, monospace",
                  }}>{j + 1}</div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── OUR PROCESS ── */}
      <section id="process" style={{
        padding: "120px 48px",
        background: "#0C0C0C",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        position: "relative", overflow: "hidden",
      }}>
        <div className="red-glow" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#E8350F", marginBottom: 16, textAlign: "center" }}>OUR PROCESS</p>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 72px)", textAlign: "center", marginBottom: 72,
          }}>HOW WE SCALE</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {steps.map((step, i) => (
              <div key={i} className="step-card">
                <p style={{
                  fontFamily: "Space Mono, monospace", fontSize: 11, fontWeight: 700,
                  color: "#E8350F", letterSpacing: "0.2em", marginBottom: 20,
                }}>{step.n}</p>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 20, marginBottom: 14 }}>{step.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(244,241,236,0.5)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="why" style={{
        padding: "120px 48px",
        background: "#090909",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#E8350F", marginBottom: 16, textAlign: "center" }}>WHY US</p>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 64px)", textAlign: "center", marginBottom: 72,
          }}>Why choose ImpactX?</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {reasons.map((r, i) => (
              <div key={i} className="reason-card">
                <div style={{ fontSize: 32, marginBottom: 18 }}>{r.icon}</div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 20, marginBottom: 12 }}>{r.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(244,241,236,0.5)" }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="grid-bg" style={{
        padding: "140px 48px 100px", textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        position: "relative", overflow: "hidden",
      }}>
        <div className="red-glow" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#E8350F", marginBottom: 24 }}>GET STARTED</p>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 800,
            fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 1.05,
            letterSpacing: "-2px", marginBottom: 60,
          }}>Ready to Grow<br />Your Brand?</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, maxWidth: 860, margin: "0 auto 60px" }}>
            {[
              { icon: "📞", label: "PHONE", lines: ["+91 93470 47827", "+91 93476 51574"] },
              { icon: "✉️", label: "EMAIL", lines: ["weareimpactx@gmail.com"] },
              { icon: "📸", label: "INSTAGRAM", lines: ["@impactx.co"] },
              { icon: "📍", label: "LOCATION", lines: ["Vijayawada, AP"] },
            ].map((c, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(244,241,236,0.35)", marginBottom: 8 }}>{c.label}</p>
                {c.lines.map((l, j) => <p key={j} style={{ fontSize: 13, color: "rgba(244,241,236,0.7)", lineHeight: 1.7 }}>{l}</p>)}
              </div>
            ))}
          </div>

          <a href="mailto:weareimpactx@gmail.com" style={{
            display: "inline-block", background: "#E8350F", color: "#fff",
            padding: "18px 56px", borderRadius: "100px",
            fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 14,
            textTransform: "uppercase", letterSpacing: "0.2em", textDecoration: "none",
            boxShadow: "0 0 60px rgba(232,53,15,0.5)", transition: "opacity 0.2s",
          }}
          onMouseOver={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseOut={e => (e.currentTarget.style.opacity = "1")}>
            START YOUR JOURNEY
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "24px 48px", textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "#060606",
      }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(244,241,236,0.2)" }}>
          © 2026 IMPACTX. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}
