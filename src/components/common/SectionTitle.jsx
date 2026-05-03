import React from 'react';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4 font-english">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-secondary-400 mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;