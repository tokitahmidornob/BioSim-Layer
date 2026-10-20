import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

/**
 * SEO Component: Updates page titles, meta tags, Open Graph, Twitter tags,
 * canonical links, and per-page JSON-LD structured data dynamically on route change.
 * Ensures maximum search indexation for founder names (Toki Tahmid Ornob, Tabasum Aktar),
 * brand names (BioSimLayer, BioSim Layer, BioFold), and biotechnology search queries.
 */
export default function SEO({
  title,
  description,
  keywords,
  canonicalPath,
  schemaType = 'WebPage',
  customSchema = null
}) {
  const location = useLocation();
  const baseUrl = 'https://biosimlayer.com';
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${baseUrl}${currentPath === '/' ? '' : currentPath}`;

  const defaultTitle = `${siteConfig.BRAND_NAME} | ${siteConfig.TAGLINE} | Toki Tahmid Ornob & Tabasum Aktar`;
  const defaultDesc = `BioSimLayer (founded by Toki Tahmid Ornob & Tabasum Aktar in Dhaka, Bangladesh) provides decision-support biosimulation, mechanistic PBPK modeling, and uncertainty reporting for drug discovery and formulation triage.`;
  const defaultKeywords = `Toki Tahmid Ornob, Tabasum Aktar, Toki Tahmid, Tabasum, BioSimLayer, BioSim Layer, BioFold, BioFold Engine, biosimulation Bangladesh, Dhaka biotech, PBPK Bangladesh, in silico ADMET Dhaka, drug discovery biosimulation, mechanistic pharmacokinetic modeling, Munshiganj API park, South Asian PBPK, drug discovery Dhaka`;

  const finalTitle = title
    ? (title.includes(siteConfig.BRAND_NAME) ? title : `${title} | ${siteConfig.BRAND_NAME}`)
    : defaultTitle;
  const finalDesc = description || defaultDesc;
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  const finalKeywords = keywordsString ? `${keywordsString}, ${defaultKeywords}` : defaultKeywords;

  useEffect(() => {
    // 1. Update document title
    document.title = finalTitle;

    // Helper to set or create meta tag
    const setMeta = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Search Meta Tags
    setMeta('name', 'description', finalDesc);
    setMeta('name', 'keywords', finalKeywords);
    setMeta('name', 'author', 'Toki Tahmid Ornob, Tabasum Aktar, BioSimLayer');
    setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 3. Open Graph (Facebook / LinkedIn)
    setMeta('property', 'og:title', finalTitle);
    setMeta('property', 'og:description', finalDesc);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', siteConfig.BRAND_NAME);
    setMeta('property', 'og:locale', 'en_US');

    // 4. Twitter Cards
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', finalTitle);
    setMeta('name', 'twitter:description', finalDesc);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 6. Dynamic JSON-LD Structured Data
    const scriptId = 'biosimlayer-page-jsonld';
    let scriptEl = document.getElementById(scriptId);
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const pageSchema = customSchema || {
      '@context': 'https://schema.org',
      '@type': schemaType,
      'name': finalTitle,
      'description': finalDesc,
      'url': canonicalUrl,
      'author': [
        {
          '@type': 'Person',
          'name': 'Toki Tahmid Ornob',
          'alternateName': ['Toki Tahmid', 'Toki Ornob', 'Tahmid Ornob'],
          'jobTitle': 'Co-Founder',
          'worksFor': {
            '@type': 'Organization',
            'name': 'BioSimLayer',
            'url': 'https://biosimlayer.com'
          }
        },
        {
          '@type': 'Person',
          'name': 'Tabasum Aktar',
          'alternateName': ['Tabasum', 'Tabassum Aktar'],
          'jobTitle': 'Co-Founder',
          'worksFor': {
            '@type': 'Organization',
            'name': 'BioSimLayer',
            'url': 'https://biosimlayer.com'
          }
        }
      ],
      'publisher': {
        '@type': 'Organization',
        'name': 'BioSimLayer',
        'alternateName': ['BioSim Layer', 'BioFold Engine'],
        'url': 'https://biosimlayer.com',
        'location': {
          '@type': 'Place',
          'name': 'Dhaka, Bangladesh'
        }
      }
    };

    scriptEl.textContent = JSON.stringify(pageSchema);
  }, [finalTitle, finalDesc, finalKeywords, canonicalUrl, customSchema, schemaType]);

  return null;
}
