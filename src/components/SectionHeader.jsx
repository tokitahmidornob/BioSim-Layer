import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className = ''
}) {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF6FA] text-[#0E7490] text-xs font-mono font-semibold tracking-wide">
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
