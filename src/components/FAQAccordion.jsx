import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ items, className = '' }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={`space-y-3 max-w-3xl mx-auto ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="card-light overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0E7490]/30 rounded-xl"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-sm sm:text-base text-[#0B1F3A]">
                {item.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#0E7490] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
