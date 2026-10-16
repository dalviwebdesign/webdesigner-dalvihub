import React, { useEffect } from 'react';
import { PortfolioProject } from '../../data/portfolioData';
import { X, Check, ExternalLink, ArrowRight, Layers, Palette, Type } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex items-center justify-center animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-750 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-cyan-400">
              {project.categoryLabel}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-xs text-amber-400 font-medium">
              Concept Demo · Fictional Project
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Header Block */}
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {project.industry}
            </div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Transparent Demo Notice */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed">
            <strong className="font-semibold text-amber-300">Portfolio Note:</strong> This project is an original concept and demonstration created by Mahesh Dalvi to illustrate layout structure, conversion architecture, and responsive UX. It does not represent an active commercial client.
          </div>

          {/* Project Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Project Overview</span>
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Design Approach */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
              Design & Usability Approach
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.designApproach}
            </p>
          </div>

          {/* Challenges Solved */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              Key Usability Decisions
            </h4>
            <ul className="space-y-2.5">
              {project.challengesSolved.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              Included Functional Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Design System Specimen */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <h5 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-cyan-400" />
                <span>Color Palette</span>
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.colors.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <span
                      className="w-4 h-4 rounded border border-slate-700"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="font-mono text-[11px]">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <h5 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-cyan-400" />
                <span>Typography Spec</span>
              </h5>
              <div className="space-y-1 text-xs text-slate-300">
                <div><span className="text-slate-400">Headings:</span> {project.typography.display}</div>
                <div><span className="text-slate-400">Body:</span> {project.typography.body}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Interested in a similar website for your business?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/919869850188?text=Hi%20Mahesh,%20I%20saw%20your%20${encodeURIComponent(project.title)}%20concept%20and%20want%20to%20discuss%20a%20website%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/contact"
              onClick={onClose}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
