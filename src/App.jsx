import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Code-split route lazy loading
const HomePage = lazy(() => import('./pages/HomePage'));
const PlatformPage = lazy(() => import('./pages/PlatformPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const WhyBangladeshPage = lazy(() => import('./pages/WhyBangladeshPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ValidationPage = lazy(() => import('./pages/ValidationPage'));
const RoadmapPage = lazy(() => import('./pages/RoadmapPage'));
const InvestorsPage = lazy(() => import('./pages/InvestorsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Code-split dark R&D Prototype Workbench (3Dmol only loads here)
const ConsolePage = lazy(() => import('./pages/ConsolePage'));

// Light Marketing Site Layout
function MarketingLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1F3A]">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Fallback loader
function LoadingSpinner() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#0E7490] border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Commercial Marketing Pages (Light Theme) */}
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/why-bangladesh" element={<WhyBangladeshPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/validation" element={<ValidationPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Legal routes */}
            <Route path="/privacy" element={<LegalPage />} />
            <Route path="/terms" element={<LegalPage />} />
            <Route path="/responsible-use" element={<LegalPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* R&D Prototype Console (Dark Theme, isolated workbench) */}
          <Route path="/console" element={<ConsolePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
