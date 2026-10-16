import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = siteConfig.heroSupporting,
  canonicalPath = '',
}) => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = title
      ? `${title} | Mahesh Dalvi`
      : 'Mahesh Dalvi | Freelance Website Designer';
    document.title = pageTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update canonical link
    const canonicalUrl = `${siteConfig.productionUrl}${canonicalPath || location.pathname}`;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonicalUrl);
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, canonicalPath, location.pathname]);

  return null;
};
