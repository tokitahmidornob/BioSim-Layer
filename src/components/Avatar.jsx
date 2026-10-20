import React from 'react';

export default function Avatar({ initials, name, size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-14 h-14 text-sm',
    lg: 'w-20 h-20 text-lg'
  };

  return (
    <div
      className={`rounded-2xl bg-gradient-to-br from-[#EAF6FA] to-[#E2E8F0] border border-[#CBD5E1] text-[#0B1F3A] font-mono font-bold flex items-center justify-center select-none shadow-sm ${sizeClasses[size] || sizeClasses.md} ${className}`}
      title={name || initials}
      aria-label={name || initials}
    >
      {initials}
    </div>
  );
}
