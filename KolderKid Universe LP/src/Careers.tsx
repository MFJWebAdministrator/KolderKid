import React from 'react';
import { useScrollToTop } from './hooks/useScrollToTop';

function Careers() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-kolder-blue to-kolder-fire text-transparent bg-clip-text">
          Careers
        </h1>
        <p className="text-2xl text-gray-400">
          Coming Soon
        </p>
      </div>
    </div>
  );
}

export default Careers;