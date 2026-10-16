import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { Logo } from '../common/Logo';
import { siteConfig, navItems } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm">
      {/* Pre-footer direct action strip */}
      <div className="border-b border-slate-900 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                Ready to elevate your online presence?
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Let&apos;s build a website that drives real results for your business.
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo showSubtitle={true} />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mt-3">
              {siteConfig.tagline} Designing modern, responsive, and search-ready
              websites for small businesses, local shops, and service providers.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span>Production Domain: </span>
              <a
                href={siteConfig.productionUrl}
                className="text-cyan-400 hover:underline font-mono"
              >
                webdesigner.dalvihub.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Business Website Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  WordPress Website Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Landing Page Design
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Demo Portfolio Concepts
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={siteConfig.mailtoUrl}
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono text-xs">{siteConfig.email}</span>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{siteConfig.whatsappNumber}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-relaxed">
                  {siteConfig.address}
                </span>
              </div>

              <div className="pt-1">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Baseline */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Clean Code & Mobile First</span>
            <span aria-hidden="true">·</span>
            <span>Thane, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
