'use client';

import { metrics } from '@/constants';
import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-teal-400 to-teal-600 py-16 mb-5">
      <div className="container mx-auto px-6 sm:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map(({ id, figure, title }) => (
            <div
              key={id}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center text-white flex flex-col items-center justify-center hover:bg-white/20 transition-colors duration-300 animate-fade-in">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                {figure}
              </p>
              <p className="text-base md:text-lg font-light">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;