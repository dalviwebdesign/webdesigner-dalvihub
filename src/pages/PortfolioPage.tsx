import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Info,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { portfolioProjects, PortfolioProject } from '../data/portfolioData';
import { ProjectMockupFrame } from '../components/portfolio/ProjectMockupFrame';
import { ProjectModal } from '../components/portfolio/ProjectModal';
import { siteConfig } from '../config/siteConfig';
import { SEOHead } from '../components/common/SEOHead';

type CategoryFilter = 'All' | 'Business' | 'WordPress' | 'Landing Page';

export const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: 'All Projects', value: 'All' },
    { label: 'Business Websites', value: 'Business' },
    { label: 'WordPress CMS', value: 'WordPress' },
    { label: 'Landing Pages', value: 'Landing Page' },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <SEOHead
        title="Portfolio & Demos | Mahesh Dalvi"
        description="Explore concept website design demonstrations by Mahesh Dalvi: Local Retail Store, Professional Services Advisory, and Lead Generation Landing Page."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
        {/* Header */}
        <section className="max-w-3xl space-y-4">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase">
            Work & Demos
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Demonstrated Design Concepts & Capabilities
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A curated collection of concept websites illustrating practical user experience design, mobile-first layouts, and conversion paths for small businesses.
          </p>
        </section>

        {/* Mandatory Transparency Notice (Never misrepresent as real client work) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3.5 text-xs sm:text-sm text-amber-200 leading-relaxed">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-amber-300">Portfolio Disclosure: </strong>
            All projects showcased below are original fictional concept demonstrations created by Mahesh Dalvi. They illustrate UI/UX standards, typography systems, mobile layout adaptability, and conversion pathways for distinct industry archetypes. They are not active commercial client websites.
          </div>
        </div>

        {/* Functional Category Filter Tabs (Section 1A Interactive Filter Controls) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl w-fit">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.value;
            const count =
              cat.value === 'All'
                ? portfolioProjects.length
                : portfolioProjects.filter((p) => p.category === cat.value).length;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveFilter(cat.value)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-cyan-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="flex flex-col">
              <ProjectMockupFrame
                project={project}
                onOpenDetails={() => setSelectedProject(project)}
              />

              {/* Explanatory notes below mockup */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs text-slate-300 space-y-2">
                <div className="font-semibold text-white flex items-center justify-between">
                  <span>Design Approach:</span>
                  <span className="text-[11px] font-mono text-cyan-400">
                    {project.categoryLabel}
                  </span>
                </div>
                <p className="line-clamp-3 text-slate-400 leading-relaxed">
                  {project.designApproach}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-cyan-400 hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <span className="text-[10px] text-amber-400/90 font-medium">
                    Demo Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Concept Walkthroughs */}
        <section className="space-y-8 pt-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>How Each Demo Was Engineered</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              A breakdown of the rationale behind each concept archetype.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioProjects.map((p) => (
              <div
                key={`breakdown-${p.id}`}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3"
              >
                <div className="text-xs font-mono text-cyan-400">{p.industry}</div>
                <h3 className="text-base font-bold text-white">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.overview}
                </p>
                <div className="pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Primary Goal
                  </div>
                  <div className="text-xs text-slate-200">
                    {p.metrics[1]?.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="p-8 sm:p-12 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Want A Custom Website Built For Your Business?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Let&apos;s build a website tailored to your brand, services, and target customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss on WhatsApp (+91 9869850188)</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
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
