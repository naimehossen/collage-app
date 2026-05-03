import React from 'react';

const StatCard = ({ icon, value, label }) => {
  return (
    <div className="text-center p-6 glass-card rounded-2xl hover-lift">
      <div className="text-4xl mb-3">
        <i className={`fas fa-${icon} text-secondary-500`}></i>
      </div>
      <h3 className="text-3xl font-bold text-primary-800 mb-2 font-english">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;