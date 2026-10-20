import React from 'react';
import { BookOpen } from 'lucide-react';

export default function SourceNote({ sourceName, sourceUrl, className = '' }) {
  if (!sourceName) return null;

  return (
    <div className={`inline-flex items-center gap-1.5 text-[11px] text-[#64748B] font-mono ${className}`}>
      <BookOpen className="w-3 h-3 text-[#0E7490] shrink-0" />
      <span>Source: {sourceName}</span>
      {sourceUrl && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0E7490] hover:underline"
        >
          [Link]
        </a>
      )}
    </div>
  );
}
