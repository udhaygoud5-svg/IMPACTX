"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Monitor, Tablet, Smartphone, ArrowLeft, ExternalLink } from "lucide-react";

type DeviceView = "desktop" | "tablet" | "mobile";

const DEVICE_CONFIG: Record<DeviceView, { width: number; height: number; label: string }> = {
  desktop: { width: 1440, height: 900, label: "Desktop" },
  tablet:  { width: 768,  height: 1024, label: "Tablet" },
  mobile:  { width: 390,  height: 844, label: "Mobile" },
};

export default function BrochurePage() {
  const [activeView, setActiveView] = useState<DeviceView>("desktop");
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [frameScale, setFrameScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const computeScale = useCallback(() => {
    const config = DEVICE_CONFIG[activeView];
    // Available space
    const maxW = Math.min(window.innerWidth - 64, activeView === "desktop" ? 1200 : activeView === "tablet" ? 580 : 340);
    const maxH = window.innerHeight - 200;
    const scaleW = maxW / config.width;
    const scaleH = maxH / config.height;
    setFrameScale(Math.min(scaleW, scaleH, 1));
  }, [activeView]);

  useEffect(() => {
    computeScale();
    window.addEventListener("resize", computeScale);
    return () => window.removeEventListener("resize", computeScale);
  }, [computeScale]);

  const config = DEVICE_CONFIG[activeView];
  const displayW = config.width * frameScale;
  const displayH = config.height * frameScale;

  return (
    <main style={{
      background: "#090909",
      color: "#F4F1EC",
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
    }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        .device-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 20px; border-radius: 12px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03); color: rgba(244,241,236,0.45);
          cursor: pointer; transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .device-btn:hover {
          border-color: rgba(232,53,15,0.3);
          color: rgba(244,241,236,0.7);
          background: rgba(255,255,255,0.05);
        }
        .device-btn.active {
          border-color: #E8350F;
          background: rgba(232,53,15,0.1);
          color: #E8350F;
          box-shadow: 0 0 20px -6px rgba(232,53,15,0.3);
        }

        .device-frame {
          transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      height 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      border-radius 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .device-frame::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(232,53,15,0.15), rgba(26,95,255,0.08), rgba(232,53,15,0.05));
          z-index: -1;
          opacity: 0.5;
        }

        .frame-glow {
          position: absolute;
          inset: -80px;
          background: radial-gradient(ellipse at center, rgba(232,53,15,0.05) 0%, transparent 70%);
          pointer-events: none;
          z-index: -2;
        }

        .device-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 24px;
          background: #1A1A1A;
          border-radius: 0 0 16px 16px;
          z-index: 10;
        }
        .device-notch::after {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(244,241,236,0.12);
        }

        .device-home-bar {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: rgba(244,241,236,0.15);
          border-radius: 100px;
          z-index: 10;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 0.6s ease forwards; }

        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(232,53,15,0.4); }
          70% { box-shadow: 0 0 0 10px rgba(232,53,15,0); }
          100% { box-shadow: 0 0 0 0 rgba(232,53,15,0); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Mobile responsive for the preview page itself */
        @media (max-width: 640px) {
          .device-btn span.label-text { display: none; }
          .device-btn { padding: 8px 12px !important; }
          .nav-actions-full { display: none !important; }
        }
      `}</style>

      {/* ── TOP BAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(9,9,9,0.95)" : "rgba(9,9,9,0.8)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.3s",
        padding: "0 24px", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Left: Back + Branding */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 0 }}>
          <a href="/" style={{
            display: "flex", alignItems: "center", gap: 6,
            color: "rgba(244,241,236,0.5)", textDecoration: "none",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", transition: "color 0.2s",
            flexShrink: 0,
          }}
          onMouseOver={e => (e.currentTarget.style.color = "#F4F1EC")}
          onMouseOut={e => (e.currentTarget.style.color = "rgba(244,241,236,0.5)")}>
            <ArrowLeft size={16} />
            Back
          </a>

          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.08)", flexShrink: 0 }} />

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 28, height: 28, background: "#E8350F", borderRadius: 7,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 11, color: "#fff",
              flexShrink: 0,
            }}>IX</div>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 15, whiteSpace: "nowrap" }}>
              <span style={{ color: "#F4F1EC" }}>Impact</span>
              <span style={{ color: "#E8350F" }}>X</span>
              <span style={{ color: "rgba(244,241,236,0.3)", fontWeight: 500, fontSize: 12, marginLeft: 6 }}>Brochure</span>
            </span>
          </div>
        </div>

        {/* Center: Device Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <button
            className={`device-btn ${activeView === "desktop" ? "active" : ""}`}
            onClick={() => { setIsLoaded(false); setActiveView("desktop"); }}
          >
            <Monitor size={15} />
            <span className="label-text" style={{ display: undefined }}>Desktop</span>
          </button>
          <button
            className={`device-btn ${activeView === "tablet" ? "active" : ""}`}
            onClick={() => { setIsLoaded(false); setActiveView("tablet"); }}
          >
            <Tablet size={15} />
            <span className="label-text" style={{ display: undefined }}>Tablet</span>
          </button>
          <button
            className={`device-btn ${activeView === "mobile" ? "active" : ""}`}
            onClick={() => { setIsLoaded(false); setActiveView("mobile"); }}
          >
            <Smartphone size={15} />
            <span className="label-text" style={{ display: undefined }}>Mobile</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="nav-actions-full" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a
            href="/ImpactX_Brochure.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "8px 16px", borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              color: "rgba(244,241,236,0.5)",
              fontSize: 11, fontWeight: 700, textDecoration: "none",
              letterSpacing: "0.1em", textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseOver={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "#F4F1EC";
            }}
            onMouseOut={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "rgba(244,241,236,0.5)";
            }}
          >
            <ExternalLink size={13} />
            Open Full
          </a>
        </div>
      </nav>

      {/* ── DEVICE PREVIEW AREA ── */}
      <div ref={containerRef} style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        paddingTop: 96,
        paddingBottom: 48,
        paddingLeft: 24,
        paddingRight: 24,
      }}>
        {/* Background grid */}
        <div style={{
          position: "fixed", inset: 0,
          backgroundImage: "linear-gradient(rgba(232,53,15,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(232,53,15,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        {/* View label */}
        <div className="fade-in" style={{
          display: "flex", alignItems: "center", gap: 12, marginBottom: 24,
          position: "relative", zIndex: 1,
        }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%",
            background: isLoaded ? "#00C98D" : "#E8350F",
            transition: "background 0.3s",
            animation: isLoaded ? "none" : "pulse-ring 1.5s infinite",
          }} />
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(244,241,236,0.3)",
            fontFamily: "Space Mono, monospace",
          }}>
            {config.label} Preview — {config.width} × {config.height}
          </span>
        </div>

        {/* Device Frame */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="frame-glow" />

          <div
            className="device-frame"
            style={{
              width: displayW,
              height: displayH,
              borderRadius: activeView === "mobile" ? 44 * frameScale : activeView === "tablet" ? 28 * frameScale : 16,
              overflow: "hidden",
              background: "#000",
              border: activeView === "mobile"
                ? "6px solid #1A1A1A"
                : activeView === "tablet"
                  ? "8px solid #1A1A1A"
                  : "3px solid #1A1A1A",
              boxShadow: `
                0 0 0 1px rgba(255,255,255,0.06),
                0 25px 60px -15px rgba(0,0,0,0.8),
                0 0 100px -30px rgba(232,53,15,0.15)
              `,
              position: "relative",
            }}
          >
            {/* Mobile Notch */}
            {activeView === "mobile" && <div className="device-notch" />}

            {/* Loading State */}
            {!isLoaded && (
              <div style={{
                position: "absolute", inset: 0, zIndex: 5,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                background: "#0A0A0A",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(232,53,15,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <div style={{
                    width: 24, height: 24,
                    border: "2px solid rgba(232,53,15,0.2)",
                    borderTopColor: "#E8350F",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }} />
                </div>
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.3em",
                  textTransform: "uppercase", color: "rgba(244,241,236,0.25)",
                }}>Loading brochure...</span>
              </div>
            )}

            {/* Iframe - renders at native device width, scaled down to fit */}
            <iframe
              key={activeView}
              src="/ImpactX_Brochure.html"
              title="ImpactX Brochure"
              onLoad={() => setIsLoaded(true)}
              style={{
                width: config.width,
                height: config.height,
                border: "none",
                transform: `scale(${frameScale})`,
                transformOrigin: "top left",
                background: "#090909",
                display: "block",
              }}
            />

            {/* Mobile Home Bar */}
            {activeView === "mobile" && <div className="device-home-bar" />}
          </div>
        </div>

        {/* Device dimension badges */}
        <div className="fade-in" style={{
          display: "flex", gap: 12, marginTop: 24,
          position: "relative", zIndex: 1,
        }}>
          {(["desktop", "tablet", "mobile"] as DeviceView[]).map((view) => {
            const cfg = DEVICE_CONFIG[view];
            const isActive = activeView === view;
            return (
              <button
                key={view}
                onClick={() => { setIsLoaded(false); setActiveView(view); }}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "6px 14px", borderRadius: 8,
                  border: `1px solid ${isActive ? "rgba(232,53,15,0.3)" : "rgba(255,255,255,0.06)"}`,
                  background: isActive ? "rgba(232,53,15,0.08)" : "rgba(255,255,255,0.02)",
                  color: isActive ? "#E8350F" : "rgba(244,241,236,0.3)",
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.15em",
                  textTransform: "uppercase", cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "Space Mono, monospace",
                }}
              >
                {cfg.width}×{cfg.height}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
