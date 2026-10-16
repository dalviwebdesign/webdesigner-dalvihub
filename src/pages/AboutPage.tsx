import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Layout,
  Users,
  Shield,
  ArrowRight,
  MessageSquare,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SEOHead } from '../components/common/SEOHead';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Mahesh Dalvi"
        description="Learn about Mahesh Dalvi's website design approach, business-focused usability principles, and collaborative client process."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
        {/* Intro Hero */}
        <section className="max-w-3xl space-y-6">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase">
            About Mahesh Dalvi · Design Philosophy
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Designing Websites That Work As Hard As You Do.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I am Mahesh Dalvi, an independent freelance website designer based in Thane West, Maharashtra. I help small businesses, local shops, entrepreneurs, and service professionals build modern, mobile-friendly websites that establish genuine credibility and convert visitors into long-term clients.
          </p>
        </section>

        {/* 3 Core Design Pillars */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              The Design & Usability Approach
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Core principles that guide every website I build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Business-Focused Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A great website is not just a digital brochure; it is an active sales tool. I structure pages to answer your prospective customers&apos; key questions immediately: what you offer, why you are qualified, and how to contact you without friction.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Usability & Performance
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every layout is engineered with mobile-first responsiveness, clean typography hierarchy, high-contrast readability, and minimal load latency. Your visitors can easily navigate whether they are on a laptop or on their mobile phone in transit.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                One-on-One Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You work directly with me throughout your project. No intermediaries, no bureaucratic delays, and no miscommunicated specifications. We exchange ideas openly and refine until your website accurately reflects your standard of work.
              </p>
            </div>
          </div>
        </section>

        {/* Biography & Professional Details (With Honest, Editable Placeholders) */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-4 h-4" />
            <span>Biography & Background</span>
          </div>

          <h2 className="text-2xl font-bold text-white">
            Background & Technical Focus
          </h2>

          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              I specialize in crafting custom, accessible websites for small and medium-sized enterprises across retail, consulting, healthcare, home services, and professional trades. By focusing on fundamental design clarity—rather than short-lived visual gimmicks—I help businesses build digital assets that remain effective for years.
            </p>

            {/* Clearly marked editable placeholders for unprovided personal biographical information */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Personal Profile Notes · [Editable Placeholders]
              </div>
              <div className="text-xs text-slate-300 space-y-2">
                <p>
                  <strong className="text-slate-200">Creative Background:</strong> [Placeholder: Add your years of experience, design journey, or creative background here as desired.]
                </p>
                <p>
                  <strong className="text-slate-200">Favorite Tech & Tools:</strong> React, TypeScript, Modern CSS / Tailwind, WordPress CMS, and Figma wireframing.
                </p>
                <p>
                  <strong className="text-slate-200">Client Focus:</strong> Small businesses, local shops, independent professionals, and startups requiring dependable web presences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Transparency */}
        <section className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">
                Honest Guarantees & Real Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I do not make exaggerated promises about instant search engine ranking miracles or overnight sales spikes. What I do guarantee is diligent craftsmanship, responsive design that works flawlessly on modern devices, clean semantic code, and transparent communication from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Strip */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a Question or Idea For Your Business?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            I am always happy to discuss ideas, review your current website, or provide advice on the best structure for your new site.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp (+91 9869850188)</span>
            </a>
            <a
              href={siteConfig.mailtoUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Email ({siteConfig.email})</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              <span>Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-4 text-xs text-slate-400 flex items-center justify-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Thane West, Maharashtra, India</span>
          </div>
        </section>
      </div>
    </>
  );
};
