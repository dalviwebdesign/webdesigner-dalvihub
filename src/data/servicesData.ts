export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  idealFor: string;
  benefits: string[];
  features: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'business-website-design',
    number: '01',
    title: 'Business Website Design',
    shortDescription:
      'Custom multi-page websites tailored for small businesses, professional firms, and local services to build credibility and convert visitors.',
    fullDescription:
      'A professional business website is the foundation of your digital presence. I create clean, structured multi-page websites designed specifically for your brand identity and target clientele. Every page is crafted with mobile-first responsiveness, fast loading speed, clear navigation hierarchy, and strategic calls to action that make it easy for potential customers to get in touch.',
    idealFor: 'Small businesses, consultancies, local service firms, and growing corporate ventures.',
    benefits: [
      'Establishes immediate professional trust and brand authority',
      'Provides a comprehensive overview of your services and expertise',
      'Mobile-optimized layouts ensure seamless experience across all screen sizes',
      'Engineered with clean semantic markup for local search discoverability',
      'Direct conversion pathways to WhatsApp, email, and call',
    ],
    features: [
      'Custom multi-page architecture (Home, About, Services, Contact, etc.)',
      'Clean typography and tailored color scheme aligned with your brand',
      'Interactive contact forms and direct communication integrations',
      'Search engine friendly structure, meta tags, and schema readiness',
      'Performance-tuned image optimization and lightweight asset loading',
      'Cross-browser and multi-device testing (mobile, tablet, desktop)',
    ],
    deliverables: [
      'Fully responsive multi-page website',
      'Clean, accessible front-end codebase or CMS implementation',
      'Integrated contact forms and direct WhatsApp trigger',
      'Google Maps and location integration',
      'Deployment to your preferred web host or server',
    ],
  },
  {
    id: 'wordpress-website-design',
    number: '02',
    title: 'WordPress Website Design',
    shortDescription:
      'Dynamic, user-friendly WordPress websites that give you full control to manage content, publish updates, and scale your business.',
    fullDescription:
      'WordPress powers millions of websites worldwide for its flexibility and ease of management. I build customized WordPress websites that pair a distinctive, clean visual design with an intuitive administrative dashboard. You can effortlessly update text, publish blog posts, add new services, and edit business details without writing a single line of code.',
    idealFor: 'Businesses needing regular content updates, news/blog posting, or intuitive client-managed pages.',
    benefits: [
      'Complete autonomy to edit and update your website copy anytime',
      'Extensible platform ready to grow with plugins and future features',
      'Familiar, widely supported interface for non-technical team members',
      'Customized theme templates without bulky bloat or slow visual builders',
      'Structured content hierarchy for ongoing content marketing',
    ],
    features: [
      'Tailored WordPress theme setup matching your brand aesthetic',
      'Custom Gutenberg block templates or clean modular page sections',
      'Essential security hardening and spam protection configuration',
      'Speed optimization and caching setup for snappy page response',
      'Automated backup configuration recommendations',
      'Hands-on walkthrough on editing text, imagery, and contact details',
    ],
    deliverables: [
      'Configured WordPress installation with custom theme styling',
      'Set up core pages and navigation menus',
      'Configured contact forms and lead notification routing',
      'Admin access and client content editing documentation',
    ],
  },
  {
    id: 'landing-page-design',
    number: '03',
    title: 'Landing Page Design',
    shortDescription:
      'High-impact single-page landing pages optimized for marketing campaigns, product launches, and direct lead generation.',
    fullDescription:
      'When you are running marketing campaigns, seasonal promotions, or focused service offerings, a dedicated landing page eliminates distraction and directs the visitor straight to taking action. I design targeted landing pages with compelling visual hierarchy, concise benefit messaging, clear social proof placement, and frictionless enquiry mechanisms.',
    idealFor: 'Product launches, specialized service promotions, pay-per-click ad campaigns, and event registrations.',
    benefits: [
      'Higher visitor-to-enquiry conversion rates through focused focus',
      'Eliminates unnecessary site navigation that can distract prospects',
      'Fast loading speed optimized for mobile ad clickers',
      'Frictionless call-to-actions via instant WhatsApp or streamlined enquiry form',
      'Clean analytics tracking readiness for campaign measurement',
    ],
    features: [
      'Single-page conversion flow engineered around user psychology',
      'Marquee hero section with compelling value proposition and direct CTA',
      'Scannable feature breakdowns and structured problem-solution sections',
      'Clear proof and credibility showcases (process, benefits, FAQs)',
      'Optimized, lightweight code for lightning-fast first contentful paint',
      'Mobile-first layout optimized for thumb-driven mobile scrolling',
    ],
    deliverables: [
      'High-converting single-page landing page',
      'Optimized lead capture form with instant validation',
      'Direct WhatsApp and one-tap phone/email click actions',
      'Responsive design across 320px to 1440px displays',
    ],
  },
];
