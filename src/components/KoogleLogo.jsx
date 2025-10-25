import React from 'react';

export default function KoogleLogo({ subtitle, size = 'md' }) {
  const sizes = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
  };

  return (
    <div className="flex flex-col items-center select-none">
      <div className={`font-semibold tracking-tight ${sizes[size]} leading-none`}>
        <span className="text-blue-500">K</span>
        <span className="text-red-500">o</span>
        <span className="text-yellow-400">o</span>
        <span className="text-blue-500">g</span>
        <span className="text-green-500">l</span>
        <span className="text-red-500">e</span>
      </div>
      {subtitle ? (
        <div className="mt-2 text-sm text-white/70">{subtitle}</div>
      ) : null}
    </div>
  );
}
