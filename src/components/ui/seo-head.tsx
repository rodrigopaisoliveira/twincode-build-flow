import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
}

export const SEOHead = ({ title, description, path }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = `${window.location.origin}${path}`;
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = `${window.location.origin}${path}`;
      document.head.appendChild(link);
    }
  }, [title, description, path]);

  return null;
};
