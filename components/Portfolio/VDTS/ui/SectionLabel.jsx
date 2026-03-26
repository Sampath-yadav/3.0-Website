"use client";

export default function SectionLabel({ children, icon }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-overline uppercase tracking-widest text-brand-600 bg-brand-50 border border-brand-100">
      {icon && <span className="text-sm">{icon}</span>}
      {children}
    </span>
  );
}
