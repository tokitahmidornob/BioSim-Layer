import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { siteConfig } from '../data/siteConfig';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    role: '',
    interest: 'Pilot',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const isEmailConfigured = siteConfig.CONTACT_EMAIL !== 'TODO_CONFIRM';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.organisation.trim()) {
      setError('Please provide your name and organisation.');
      return;
    }

    setError('');

    if (isEmailConfigured) {
      const subject = encodeURIComponent(`BioSimLayer Pilot Inquiry - ${formData.interest} (${formData.organisation})`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Organisation: ${formData.organisation}\n` +
        `Role: ${formData.role}\n` +
        `Interest Area: ${formData.interest}\n\n` +
        `Message:\n${formData.message}`
      );
      window.location.href = `mailto:${siteConfig.CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }

    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-8 pb-20 max-w-[900px] mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center space-y-3 pt-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FA] text-[#0E7490] text-xs font-mono font-semibold tracking-wide border border-[#CBD5E1]/60">
          <span>Get in Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          Request a Pilot or Join the Consortium
        </h1>
        <p className="text-base text-[#64748B] max-w-xl mx-auto">
          Connect directly with our team in Dhaka to discuss fixed-scope research studies, university collaboration, or investor materials.
        </p>
      </div>

      <div className="card-glass p-8 sm:p-10 space-y-6">
        {submitted ? (
          <div className="p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-[#059669] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1F3A]">
              Thank you for reaching out, {formData.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
              {isEmailConfigured
                ? 'Your default mail client has been opened with your inquiry details. Our scientific team will follow up within 24 hours.'
                : 'Your inquiry has been recorded locally. Official contact details will be confirmed prior to the October 27 investor final.'}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-outline text-xs mt-2"
            >
              <span>Send Another Message</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
            {error && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-[#DC2626] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {!isEmailConfigured && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[#92400E] text-xs font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-[#D97706]" />
                <span>Direct contact details coming soon. Submitting prepares your message locally.</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-semibold text-[#0B1F3A]">
                  Full Name <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Sabrina Rahman"
                  className="w-full p-3 rounded-xl border border-[#CBD5E1] bg-white/90 text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0E7490]/30 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-semibold text-[#0B1F3A]">
                  Organisation / Company <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.organisation}
                  onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                  placeholder="e.g. Acme Pharmaceuticals Ltd."
                  className="w-full p-3 rounded-xl border border-[#CBD5E1] bg-white/90 text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0E7490]/30 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-semibold text-[#0B1F3A]">
                  Your Role
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Head of R&D / Formulation Scientist"
                  className="w-full p-3 rounded-xl border border-[#CBD5E1] bg-white/90 text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0E7490]/30 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-semibold text-[#0B1F3A]">
                  Primary Area of Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full p-3 rounded-xl border border-[#CBD5E1] bg-white/90 text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0E7490]/30 transition-all"
                >
                  <option value="Pilot">Fixed-Scope Triage Pilot Study (US$3.5K–$4.5K)</option>
                  <option value="Consortium">Validation Consortium Membership</option>
                  <option value="Academic licence">Academic Research / Coursework Licence</option>
                  <option value="Investor">Investor Materials & Pitch Discussion</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-semibold text-[#0B1F3A]">
                Message & Formulation Questions
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your compound class, planned in vitro assays, or specific study timelines..."
                className="w-full p-3 rounded-xl border border-[#CBD5E1] bg-white/90 text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#0E7490]/30 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-sm py-3 justify-center shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Scoping Inquiry</span>
            </button>
          </form>
        )}
      </div>

      {/* Location card */}
      <div className="p-6 rounded-2xl bg-[#F5F9FC] border border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#0E7490]" />
          <span>{siteConfig.BRAND_NAME} Operations Hub: Dhaka, Bangladesh</span>
        </div>
        <p>No backend data stored • Client privacy respected</p>
      </div>
    </div>
  );
}
