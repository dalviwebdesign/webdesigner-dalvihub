import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageSquare,
  Smartphone,
  Zap,
  Search,
  Target,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  Check,
  Eye,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { servicesData } from '../data/servicesData';
import { portfolioProjects, PortfolioProject } from '../data/portfolioData';
import { ProjectMockupFrame } from '../components/portfolio/ProjectMockupFrame';
import { ProjectModal } from '../components/portfolio/ProjectModal';
import { SEOHead } from '../components/common/SEOHead';

export const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const benefits = [
    {
      icon: Smartphone,
      title: 'Mobile-First Responsive',
      description:
        'Over 70% of local customers browse on phones. Every design adapts smoothly to screens from 320px to 1440px.',
    },
    {
      icon: Zap,
      title: 'Fast Loading Speed',
      description:
        'Lightweight markup, optimized assets, and zero unnecessary scripts ensure rapid load times that keep visitors engaged.',
    },
    {
      icon: Search,
      title: 'Search Engine Ready',
      description:
        'Clean semantic HTML, proper heading hierarchy, OpenGraph cards, and schema tags help local customers discover you.',
    },
    {
      icon: Target,
      title: 'Conversion-Focused',
      description:
        'Clear calls to action, phone clickability, and instant WhatsApp chat links turn casual visitors into paying customers.',
    },
    {
      icon: ShieldCheck,
      title: 'Clean, Modern Code',
      description:
        'Built with standard, maintainable web practices that avoid the bloat, sluggishness, and vulnerabilities of heavy page builders.',
    },
    {
      icon: Headphones,
      title: 'Direct 1-on-1 Collaboration',
      description:
        'You work directly with Mahesh Dalvi. No agency account managers, miscommunications, or slow turnaround times.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Discovery & Goals',
      description:
        'We discuss your business, target audience, services, and preferred design style to map out a clear site structure.',
    },
    {
      step: '02',
      title: 'Layout & Wireframes',
      description:
        'I craft clean, user-friendly layouts with intuitive visual hierarchy, brand color palette, and readable typography.',
    },
    {
      step: '03',
      title: 'Development & Build',
      description:
        'Your website is built with responsive code, interactive contact forms, WhatsApp links, and search optimization.',
    },
    {
      step: '04',
      title: 'Review & Launch',
      description:
        'We test across devices, finalize content, connect your custom domain, and launch your site to the world.',
    },
  ];

  const whyChoosePoints = [
    'Tailored specifically for small businesses, local shops, and service providers',
    'Direct communication via WhatsApp and email throughout the design process',
    'Transparent workflow with clear milestones and client feedback rounds',
    'No hidden subscriptions or unnecessary vendor lock-in',
    'Clean, responsive design that looks exceptional on phones, tablets, and desktops',
  ];

  return (
    <>
      <SEOHead
        title="Mahesh Dalvi | Freelance Website Designer"
        description={siteConfig.heroSupporting}
      />

      <div className="space-y-24 sm:space-y-32 pb-20">
        {/* HERO SECTION */}
        <section className="relative pt-12 sm:pt-20 lg:pt-28 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              {/* Unboxed kicker (Zero-pill discipline) */}
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                Freelance Website Designer · Thane & Global
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
                {siteConfig.heroHeadline}
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto text-balance">
                {siteConfig.heroSupporting}
              </p>

              {/* Primary Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-950/50 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>View My Work</span>
                </Link>
              </div>

              {/* Direct WhatsApp Quick Prompt */}
              <div className="pt-2 text-xs text-slate-400 flex items-center justify-center gap-2">
                <span>Prefer quick messaging?</span>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-medium inline-flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp (+91 9869850188)</span>
                </a>
              </div>
            </div>

            {/* Hero Visual Mockup Carrier (Interactive Studio Preview) */}
            <div className="mt-12 sm:mt-16 max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/90 p-3 sm:p-5 shadow-2xl shadow-cyan-950/20">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 sm:p-10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800 pb-8">
                  <div>
                    <span className="text-xs text-cyan-400 font-mono uppercase tracking-wider">
                      Design Studio Preview
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      Designed with Precision. Built for Growth.
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                      Every site is engineered around clear information architecture, high-contrast readability, and instant customer contact pathways.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-slate-400">Targeting:</span>
                    <span className="text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">
                      Local Businesses
                    </span>
                    <span className="text-xs font-medium text-slate-200 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">
                      Shops & Services
                    </span>
                  </div>
                </div>

                {/* 3 Metric Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-850">
                    <div className="text-xs font-medium text-slate-400">UX Architecture</div>
                    <div className="text-lg font-bold text-white mt-1">Mobile-First</div>
                    <p className="text-xs text-slate-400 mt-1">
                      Optimized for single-thumb navigation on smartphone screens.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-850">
                    <div className="text-xs font-medium text-slate-400">Communication</div>
                    <div className="text-lg font-bold text-white mt-1">Instant WhatsApp</div>
                    <p className="text-xs text-slate-400 mt-1">
                      Customers reach you with one tap right from the website.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-850">
                    <div className="text-xs font-medium text-slate-400">Local Discoverability</div>
                    <div className="text-lg font-bold text-white mt-1">SEO & Map Ready</div>
                    <p className="text-xs text-slate-400 mt-1">
                      Schema markup and verified address links for local shoppers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WEBSITE DESIGN BENEFITS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Why A Quality Website Matters
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">
              Built To Turn First Impressions Into Business Opportunities
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              Your website is often the first interaction a prospect has with your brand. I focus on elements that directly influence customer decisions: speed, clarity, and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* THREE CORE SERVICES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                Services & Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">
                Focused Website Design Services
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
                Whether you need a complete business website, an easy-to-edit WordPress site, or a targeted landing page, every solution is built to fit your goals.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="text-xs font-mono text-cyan-400 mb-2">
                    {svc.number}.
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                    {svc.shortDescription}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-800 space-y-2.5">
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                      Key Highlights:
                    </span>
                    {svc.benefits.slice(0, 3).map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PORTFOLIO DEMO CONCEPTS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                Featured Portfolio Concepts
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">
                Demonstrated Design Capabilities
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
                Explore three clearly labelled concept projects showcasing UX architecture, responsive layout structures, and conversion funnels for different business types.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {portfolioProjects.map((proj) => (
              <ProjectMockupFrame
                key={proj.id}
                project={proj}
                onOpenDetails={() => setSelectedProject(proj)}
              />
            ))}
          </div>
        </section>

        {/* 4-STEP DESIGN PROCESS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              How We Work Together
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">
              A Simple, Structured 4-Step Process
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              Transparent, organized collaboration from first conversation to live deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-bold text-cyan-400 font-mono mb-3">
                    {s.step}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE MAHESH DALVI */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                  Personalized Craftsmanship
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Why Choose Mahesh Dalvi For Your Website
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  As an independent freelance website designer, I do not hand your project to junior subcontractors or juggle dozens of disconnected accounts. You receive direct, attentive guidance tailored to your specific business reality.
                </p>
                <div className="pt-2">
                  <div className="text-xs text-slate-400 font-mono">
                    Based in Thane West, Maharashtra · Serving clients globally
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                {whyChoosePoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                  >
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DUAL ACTION CALL TO ACTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto p-8 sm:p-12 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Start Your Website Project Today
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              Ready to give your business the professional online presence it deserves? Get in touch via WhatsApp for an immediate response, or submit your project details via the enquiry form.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 9869850188)</span>
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                <span>Request a Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
