import React from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
  FileCode2,
  HelpCircle,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { siteConfig } from '../config/siteConfig';
import { SEOHead } from '../components/common/SEOHead';

export const ServicesPage: React.FC = () => {
  const serviceIcons = [Layers, FileCode2, Sparkles];

  const faqs = [
    {
      q: 'Which service is right for my business?',
      a: 'If you need a comprehensive web presence detailing your company, history, multiple services, and location, choose Business Website Design. If you want to regularly update content or publish articles without touching code, WordPress Website Design is ideal. If you are promoting a single specific service or running ad campaigns, Landing Page Design provides the highest conversion focus.',
    },
    {
      q: 'Will my website work properly on mobile phones?',
      a: 'Yes, absolutely. Every website I build is developed with a mobile-first philosophy, ensuring fast loading and intuitive navigation across smartphones, tablets, and desktops.',
    },
    {
      q: 'Can customers contact me directly from the website?',
      a: 'Yes. I configure direct click-to-WhatsApp buttons, verified email links, phone triggers, and structured enquiry forms so your prospects can reach you in whatever manner is most convenient for them.',
    },
    {
      q: 'How do I request a custom quotation?',
      a: 'Click the "Request a Quote" button on any service, or contact me directly via WhatsApp at +91 9869850188. Share a brief overview of your business and requirements, and I will prepare a personalized plan.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Services | Mahesh Dalvi"
        description="Explore custom website design services by Mahesh Dalvi: Business Websites, WordPress Websites, and Conversion Landing Pages."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
        {/* Header Section */}
        <section className="max-w-3xl space-y-4">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase">
            Services & Solutions
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tailored Web Design Services For Growing Businesses
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every business has distinct needs. Whether you require a full multi-page presence, an easy-to-manage WordPress system, or a streamlined landing page, each solution is built with clean code and mobile-first responsiveness.
          </p>
        </section>

        {/* The 3 Detailed Services */}
        <section className="space-y-16">
          {servicesData.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.id}
                id={service.id}
                className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-8"
              >
                {/* Service Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800/80 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-cyan-400">
                        Service {service.number}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={`https://wa.me/919869850188?text=Hi%20Mahesh,%20I%20would%20like%20to%20request%20a%20quote%20for%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-emerald-400 bg-slate-950 border border-slate-800 hover:bg-slate-850 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                    >
                      <span>Request a Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Service Description & Ideal For */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                      Overview & Strategy
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {service.fullDescription}
                    </p>
                    <div className="pt-2 p-4 rounded-xl bg-slate-950 border border-slate-850 text-xs sm:text-sm text-slate-300">
                      <strong className="text-slate-100 font-semibold">Ideal For: </strong>
                      <span>{service.idealFor}</span>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="lg:col-span-5 space-y-4">
                    <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                      Included Deliverables
                    </h3>
                    <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2.5">
                      {service.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Benefits vs Features Two-Column Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-800/80">
                  {/* Benefits */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>Business Benefits</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Typical Features */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span>Typical Technical Features</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer action bar for service card */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/60 text-xs text-slate-400">
                  <span>Transparent scope tailored to your requirements · No hidden fees</span>
                  <Link
                    to="/contact"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Discuss {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* FAQs */}
        <section className="space-y-8 pt-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-cyan-400" />
              <span>Frequently Asked Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Common questions from small businesses and service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2"
              >
                <h3 className="text-base font-semibold text-white">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Conversion Prompt */}
        <section className="p-8 sm:p-12 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Discuss Your Website Requirements?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Get in touch directly to discuss your project specifications and receive a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              <span>Go to Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
