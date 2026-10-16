export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Business' | 'WordPress' | 'Landing Page';
  categoryLabel: string;
  isDemo: true;
  badge: string;
  industry: string;
  tagline: string;
  overview: string;
  designApproach: string;
  challengesSolved: string[];
  keyFeatures: string[];
  uiHighlights: string[];
  colors: { label: string; hex: string }[];
  typography: { display: string; body: string };
  metrics: { label: string; description: string }[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'local-retail-business',
    title: 'Local Retail Business',
    category: 'Business',
    categoryLabel: 'Business Website',
    isDemo: true,
    badge: 'Concept Demo · Fictional Showcase',
    industry: 'Artisan Retail & Local Specialty Goods',
    tagline: 'Modern Digital Storefront for an Artisan Neighborhood Retailer',
    overview:
      'This demo project showcases a bespoke multi-page web presence designed for a local neighborhood boutique selling handcrafted pottery, organic specialty pantry goods, and roasted coffee. The design bridges local foot-traffic with online enquiries, store hours, inventory showcases, and direct WhatsApp customer ordering.',
    designApproach:
      'I structured the layout using warm organic neutrals (sandstone, terracotta, and dark slate) with spacious grid galleries. The navigation prioritizes local discovery: immediate store hours, clickable Google Map directions, current in-store stock showcases, and a one-tap WhatsApp button to check item availability before visiting.',
    challengesSolved: [
      'Eliminated customer phone calls regarding basic store hours and address by highlighting them prominently in the header and hero.',
      'Created a lightweight catalog that requires zero complicated e-commerce overhead while allowing customers to enquire via WhatsApp.',
      'Designed a mobile-first catalog layout that loads in under 1 second on cellular networks.',
    ],
    keyFeatures: [
      'Curated product showcase grid with category filters and high-res photo viewers',
      'One-tap WhatsApp ordering trigger with pre-filled item references',
      'Live store hours counter and interactive location finder with map link',
      'Local artisan story section establishing community roots and authenticity',
      'Fast-loading newsletter signup for weekend sales and workshop announcements',
    ],
    uiHighlights: [
      'Warm earth-toned palette with high-contrast text legibility',
      'Grid layout with graceful mobile collapsing for single-hand browsing',
      'Accessible keyboard focus and high-contrast color pairings',
    ],
    colors: [
      { label: 'Deep Slate', hex: '#0f172a' },
      { label: 'Earthy Clay', hex: '#c2410c' },
      { label: 'Warm Cream', hex: '#f8fafc' },
      { label: 'Soft Sage', hex: '#14b8a6' },
    ],
    typography: {
      display: 'Plus Jakarta Sans (SemiBold)',
      body: 'Plus Jakarta Sans (Regular, 16px/1.6)',
    },
    metrics: [
      { label: 'Page Load Benchmark', description: '< 0.8s on mobile networks' },
      { label: 'Information Access', description: 'Store hours & map reachable in 1 tap' },
      { label: 'Inquiry Pathway', description: 'Instant WhatsApp & Phone integration' },
    ],
  },
  {
    id: 'professional-services-website',
    title: 'Professional Services Website',
    category: 'WordPress',
    categoryLabel: 'WordPress CMS',
    isDemo: true,
    badge: 'Concept Demo · Fictional Showcase',
    industry: 'Financial Advisory & Management Consultancy',
    tagline: 'Authoritative Corporate Presence for Advisory & Consulting Practices',
    overview:
      'A concept web design for a boutique accounting, tax, and corporate management advisory firm. It demonstrates how a structured corporate website can project high authority, communicate complex service offerings with total clarity, and systematically drive discovery call bookings.',
    designApproach:
      'Utilizing an executive deep navy and cool steel palette, the design relies on precise typography, generous whitespace, and editorial numbering for service categories. Each practice area is broken down into concise client benefits, deliverables, and FAQs, removing ambiguity and reassuring corporate prospects.',
    challengesSolved: [
      'Organized multiple corporate service offerings into an intuitive 2-level taxonomy.',
      'Added an interactive consultation booking selector allowing clients to choose their service area before reaching out.',
      'Integrated client self-service content sections for publishing market insights and tax deadline updates.',
    ],
    keyFeatures: [
      'Comprehensive practice area taxonomy with interactive sub-topic views',
      'Structured consultation enquiry form with service and business size selection',
      'Client insight & article archive layout with clean reading typography',
      'Compliance and security trust indicators prominently integrated',
      'Direct scheduling and callback request modules',
    ],
    uiHighlights: [
      'Corporate navy (#0B132B) foundation with subtle blue hairline accents',
      'Unboxed metadata indicators with dot separators',
      'Crisp tabular layouts for service comparison and practice disciplines',
    ],
    colors: [
      { label: 'Navy Obsidian', hex: '#0b132b' },
      { label: 'Steel Blue', hex: '#0284c7' },
      { label: 'Cool Mist', hex: '#f1f5f9' },
      { label: 'Deep Slate', hex: '#334155' },
    ],
    typography: {
      display: 'Plus Jakarta Sans (Bold, Tight tracking)',
      body: 'Plus Jakarta Sans (Regular, 15px/1.65)',
    },
    metrics: [
      { label: 'Service Clarity', description: 'Complete service breakdown in 2 clicks' },
      { label: 'Trust Signals', description: 'Verified credentials and compliance display' },
      { label: 'Enquiry Speed', description: 'Pre-categorized consultation requests' },
    ],
  },
  {
    id: 'lead-generation-landing-page',
    title: 'Lead Generation Landing Page',
    category: 'Landing Page',
    categoryLabel: 'Landing Page',
    isDemo: true,
    badge: 'Concept Demo · Fictional Showcase',
    industry: 'Premium Architectural & Home Renovation Contractor',
    tagline: 'High-Impact Conversion Funnel for High-Ticket Residential Projects',
    overview:
      'A focused, single-page conversion landing page designed for an architectural renovation company running targeted local search and social advertising campaigns. Engineered to capture qualified homeowner leads for major remodels, extensions, and interior design work.',
    designApproach:
      'The entire page is engineered as a seamless conversion argument: bold headline with immediate trust metrics, project transformation previews, transparent 4-step renovation process, and a frictionless multi-choice quote estimator form positioned strategically at key decision points.',
    challengesSolved: [
      'Increased mobile visitor engagement by replacing lengthy generic forms with a clean, low-friction inquiry widget.',
      'Eliminated price hesitation by showcasing clear scopes and before/after project specifications.',
      'Provided dual action paths: instant WhatsApp chat for urgent questions or the quote form for detailed scopes.',
    ],
    keyFeatures: [
      'High-impact hero section with instant project value proposition',
      'Dual conversion channels: instant WhatsApp chat and scoped quote request',
      'Curated project gallery with zoom-in modal details and materials breakdown',
      'Transparent 4-step client timeline from site inspection to handover',
      'Sticky mobile bottom conversion bar for quick access while scrolling',
    ],
    uiHighlights: [
      'High-contrast charcoal and electric cyan accents for active CTAs',
      'Zero-pill metadata badges; clean architectural line dividers',
      'Interactive project scope selector to qualify leads immediately',
    ],
    colors: [
      { label: 'Architectural Charcoal', hex: '#0f172a' },
      { label: 'Cyan Accent', hex: '#06b6d4' },
      { label: 'Pure White', hex: '#ffffff' },
      { label: 'Zinc Border', hex: '#27272a' },
    ],
    typography: {
      display: 'Plus Jakarta Sans (ExtraBold)',
      body: 'Plus Jakarta Sans (Regular, 16px/1.6)',
    },
    metrics: [
      { label: 'Focused Intent', description: 'Zero distracting outbound links or menus' },
      { label: 'Mobile Conversion', description: 'Sticky one-tap WhatsApp and Call actions' },
      { label: 'Lead Qualification', description: 'Project type and timeline selector' },
    ],
  },
];
