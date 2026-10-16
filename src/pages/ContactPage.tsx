import React from 'react';
import {
  Mail,
  MessageSquare,
  MapPin,
  ExternalLink,
  Navigation,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ContactForm } from '../components/contact/ContactForm';
import { SEOHead } from '../components/common/SEOHead';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Contact Mahesh Dalvi"
        description="Contact Mahesh Dalvi for website design enquiries. WhatsApp: +91 9869850188. Email: mahesh@dalvihub.com. Located in Thane West, Maharashtra, India."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
        {/* Header */}
        <section className="max-w-3xl space-y-4">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase">
            Let&apos;s Connect
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Start Your Website Design Conversation
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Have a project in mind or need a new website for your business? Reach out via WhatsApp for a quick conversation, send an email, or fill out the enquiry form below.
          </p>
        </section>

        {/* 3 Verified Contact Channels Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white">Direct WhatsApp</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Fastest way to chat, share reference links, and discuss quick questions.
              </p>
              <div className="mt-3 font-mono text-sm text-emerald-400 font-semibold">
                {siteConfig.whatsappNumber}
              </div>
            </div>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white">Direct Email</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                For detailed project briefs, RFP specifications, and written scopes.
              </p>
              <div className="mt-3 font-mono text-sm text-cyan-400 font-semibold truncate">
                {siteConfig.email}
              </div>
            </div>

            <a
              href={siteConfig.mailtoUrl}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email: {siteConfig.email}</span>
            </a>
          </div>

          {/* Location Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-white">Office Location</h2>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {siteConfig.address}
              </p>
              <div className="mt-2 text-xs font-mono text-slate-400">
                Thane West, Maharashtra 400604
              </div>
            </div>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 transition-colors"
            >
              <Navigation className="w-4 h-4 text-cyan-400" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Form and Location Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Location & Google Maps Section */}
          <div className="lg:col-span-5 space-y-6">
            {/* Map Container Card */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="p-5 border-b border-slate-800 bg-slate-950/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm font-bold text-white">Business Location</h3>
                  </div>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Thane West, Maharashtra 400604, India
                </p>
              </div>

              {/* Map Preview & Disclaimer */}
              <div className="relative aspect-[4/3] bg-slate-950 flex flex-col items-center justify-center p-6 text-center border-b border-slate-800">
                {/* Visual Map Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      'radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#38bdf8 1px, #0b1120 1px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px',
                  }}
                />

                <div className="relative z-10 space-y-3 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 mx-auto flex items-center justify-center shadow-lg shadow-cyan-950/50">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    Navjeevan Society, Thane West
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Near Panchparmeshwar Mandir, Kamagar Hospital Road, Dnyeshwar Nagar.
                  </p>
                  <div className="pt-2">
                    <a
                      href={siteConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Map Disclaimer (Rule: Do not invent coordinates or claim pin is verified) */}
              <div className="p-4 bg-slate-950/90 text-xs text-slate-400 leading-relaxed border-t border-slate-800/80">
                <span className="text-slate-300 font-medium">Location Note: </span>
                Click &ldquo;Get Directions&rdquo; to open the official verified Google Maps query for B7, Navjeevan Society, Near Panchparmeshwar Mandir, Kamagar Hospital Road, Dnyeshwar Nagar, Thane West 400604.
              </div>
            </div>

            {/* Availability & Direct Details */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Response Time & Availability</span>
              </h3>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>WhatsApp replies usually within a few hours on business days</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Email inquiries answered thoroughly with project questions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Flexible consultation calls scheduled at your convenience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
