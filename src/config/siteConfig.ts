export interface SiteConfig {
  brandName: string;
  professionalTitle: string;
  productionUrl: string;
  email: string;
  mailtoUrl: string;
  whatsappNumber: string;
  whatsappRaw: string;
  whatsappUrl: string;
  address: string;
  googleMapsUrl: string;
  tagline: string;
  heroHeadline: string;
  heroSupporting: string;
  targetAudience: string[];
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export const siteConfig: SiteConfig = {
  brandName: 'Mahesh Dalvi',
  professionalTitle: 'Freelance Website Designer',
  productionUrl: 'https://webdesigner.dalvihub.com',
  email: 'mahesh@dalvihub.com',
  mailtoUrl: 'mailto:mahesh@dalvihub.com',
  whatsappNumber: '+91 9869850188',
  whatsappRaw: '919869850188',
  whatsappUrl: 'https://wa.me/919869850188',
  address:
    'B7, Navjeevan Society, Near Panchparmeshwar Mandir, Kamagar Hospital Road, Dnyeshwar Nagar, Thane West, Maharashtra 400604, India.',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=B7%2C%20Navjeevan%20Society%2C%20Near%20Panchparmeshwar%20Mandir%2C%20Kamagar%20Hospital%20Road%2C%20Dnyeshwar%20Nagar%2C%20Thane%20West%20400604',
  tagline: 'Websites That Help Your Business Grow.',
  heroHeadline: 'Websites That Turn Visitors Into Customers.',
  heroSupporting:
    'I design modern, mobile-friendly websites for small businesses, local shops, and growing brands. Get a professional online presence that builds trust and helps your business reach more customers.',
  targetAudience: [
    'Small businesses',
    'Local shops',
    'Service providers',
    'Entrepreneurs',
  ],
  city: 'Thane West',
  state: 'Maharashtra',
  pincode: '400604',
  country: 'India',
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];
