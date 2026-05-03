import React from 'react';

const IconBox = ({ Icon, color = 'blue', className = '' }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    green: 'bg-green-100 text-green-600',
    red: 'bg-red-100 text-red-600',
    purple: 'bg-purple-100 text-purple-600',
    indigo: 'bg-indigo-100 text-indigo-600',
  };

  return (
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center 
      ${colorClasses[color] || colorClasses.blue} transition-all duration-300 
      hover:scale-110 hover:rotate-6 ${className}`}>
      <Icon className="text-2xl" />
    </div>
  );
};

export default IconBox;