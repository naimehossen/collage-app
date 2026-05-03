import React from 'react';
import StatCard from '../common/StatCard';
import { stats } from '../../data/departments';

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group p-1 rounded-[2.5rem] bg-transparent hover:bg-gradient-to-br hover:from-orange-400 hover:to-blue-600 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="h-full bg-white rounded-[2.4rem] p-6 md:p-8 flex flex-col items-center text-center transition-all duration-500">
                {/* Icon Container with Glow */}
                <div className="w-16 h-16 mb-4 rounded-2xl bg-gray-50 flex items-center justify-center text-blue-900 text-3xl group-hover:scale-110 group-hover:bg-blue-900 group-hover:text-white transition-all duration-500 shadow-inner">
                  <i className={stat.icon || 'fas fa-chart-line'}></i>
                </div>
                
                {/* Stat Number */}
                <div className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {stat.value}
                </div>
                
                {/* Stat Label */}
                <div className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider group-hover:text-blue-900 transition-colors">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
};

export default StatsSection;