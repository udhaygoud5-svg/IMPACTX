"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ name: "", email: "", phone: "", business: "", message: "" });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: '1rem 1.25rem',
    fontSize: 15,
    color: '#F4F1EC',
    outline: 'none',
    fontFamily: 'DM Sans, sans-serif',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 10,
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.3em',
    color: 'rgba(244,241,236,0.4)',
    marginBottom: 8,
    fontFamily: 'DM Sans, sans-serif',
  };

  return (
    <section id="contact" style={{ padding: '9rem 2rem', backgroundColor: '#090909', borderTop: '1px solid rgba(255,255,255,0.04)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.35em', color: '#E8350F', display: 'block', marginBottom: 16, fontFamily: 'DM Sans, sans-serif' }}>
            Work With Us
          </span>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.08, color: '#F4F1EC', margin: 0 }}>
            Let's build your next level.
          </h2>
          <p style={{ marginTop: 16, color: 'rgba(244,241,236,0.5)', fontSize: 16, lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif' }}>
            Tell us about your business and goals — we'll get back within 24 hours.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              style={{ textAlign: 'center', padding: '5rem 2rem' }}
            >
              <div style={{ width: 72, height: 72, borderRadius: '50%', backgroundColor: 'rgba(232,53,15,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <CheckCircle size={36} color="#E8350F" />
              </div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 28, color: '#F4F1EC', marginBottom: 12 }}>
                Request Sent!
              </h3>
              <p style={{ color: 'rgba(244,241,236,0.55)', fontSize: 16, maxWidth: 400, margin: '0 auto 2rem', lineHeight: 1.6, fontFamily: 'DM Sans, sans-serif' }}>
                Our team will review your request and reach out within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#F4F1EC', padding: '0.75rem 2rem', borderRadius: 999, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.15em', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {/* Row 1 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    type="text" required value={formData.name}
                    placeholder="John Doe"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#E8350F'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    type="email" required value={formData.email}
                    placeholder="john@business.com"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#E8350F'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input
                    type="tel" required value={formData.phone}
                    placeholder="+91 98765 43210"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#E8350F'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Business Name *</label>
                  <input
                    type="text" required value={formData.business}
                    placeholder="Your Business"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#E8350F'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>How can ImpactX help you? *</label>
                <textarea
                  rows={4} required value={formData.message}
                  placeholder="Tell us about your goals, the challenges you're facing, and what growth looks like for you..."
                  style={{ ...inputStyle, borderRadius: 16, resize: 'none' }}
                  onFocus={(e) => { e.target.style.borderColor = '#E8350F'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              {/* Error */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, padding: '0.875rem 1.25rem' }}
                >
                  <AlertCircle size={18} color="#f87171" style={{ flexShrink: 0 }} />
                  <p style={{ color: '#f87171', fontSize: 14, fontFamily: 'DM Sans, sans-serif', margin: 0 }}>{errorMessage}</p>
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  width: '100%',
                  backgroundColor: status === 'submitting' ? 'rgba(232,53,15,0.6)' : '#E8350F',
                  color: '#fff',
                  padding: '1.1rem 2rem',
                  borderRadius: 999,
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  border: 'none',
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  boxShadow: '0 0 40px -10px rgba(232,53,15,0.5)',
                  transition: 'all 0.2s',
                  marginTop: 8,
                }}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                    Sending...
                  </>
                ) : (
                  <>
                    Book a Strategy Call
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
