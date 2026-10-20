import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, FlaskConical } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="card-light p-8 sm:p-12 text-center max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#EAF6FA] text-[#0E7490] font-mono font-bold text-2xl flex items-center justify-center mx-auto">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#0B1F3A]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            The requested route does not exist in the {siteConfig.BRAND_NAME} platform or has moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link to="/" className="btn-primary text-xs w-full sm:w-auto">
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <Link to="/console" className="btn-outline text-xs w-full sm:w-auto font-mono">
            <FlaskConical className="w-3.5 h-3.5 text-[#0E7490]" />
            <span>R&D Prototype</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
