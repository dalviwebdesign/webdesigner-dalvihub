import React from 'react';
import { PortfolioProject } from '../../data/portfolioData';
import { Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectMockupFrameProps {
  project: PortfolioProject;
  onOpenDetails?: () => void;
}

export const ProjectMockupFrame: React.FC<ProjectMockupFrameProps> = ({
  project,
  onOpenDetails,
}) => {
  return (
    <div className="group relative rounded-xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-lg transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-950/20">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800 text-xs text-slate-400 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1">
            <Globe className="w-3 h-3 text-cyan-400" />
            <span>demo.{project.id}.local</span>
          </span>
        </div>

        {/* Unboxed Metadata (Zero-Pill Discipline) */}
        <div className="flex items-center gap-2 text-[11px] text-cyan-400">
          <span>{project.categoryLabel}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-amber-400">Concept Demo</span>
        </div>
      </div>

      {/* Simulated Live UI Mockup Preview */}
      <div className="p-5 sm:p-6 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border-b border-slate-800/80 min-h-[220px] flex flex-col justify-between">
        <div>
          <div className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
            {project.industry}
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h4>
          <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-4 pt-3 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
          {project.keyFeatures.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Palette Bar */}
        <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-800/60">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400">Palette:</span>
            <div className="flex items-center gap-1">
              {project.colors.map((c, i) => (
                <span
                  key={i}
                  className="w-3.5 h-3.5 rounded-full border border-slate-700/60"
                  style={{ backgroundColor: c.hex }}
                  title={`${c.label} (${c.hex})`}
                />
              ))}
            </div>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">
            {project.metrics[0]?.label}
          </span>
        </div>
      </div>

      {/* Action Strip */}
      <div className="px-5 py-3.5 bg-slate-950/80 flex items-center justify-between text-xs">
        <span className="text-slate-400 text-[11px]">
          Fictional showcase concept
        </span>
        {onOpenDetails && (
          <button
            type="button"
            onClick={onOpenDetails}
            className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:ring-1 focus-visible:ring-cyan-400 py-1"
          >
            <span>View Architecture & Specs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
