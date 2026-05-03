import React from 'react';
import SectionTitle from '../components/common/SectionTitle';

const AcademicPage = () => {
  const routines = ['১ম সেমিস্টার', '৩য় সেমিস্টার', '৫ম সেমিস্টার'];
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="একাডেমিক" subtitle="পরীক্ষার রুটিন, সিলেবাস ও অন্যান্য তথ্য" />
        
        <div className="grid md:grid-cols-3 gap-6">
          {routines.map((routine, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 text-center hover-lift">
              <i className="fas fa-calendar-alt text-4xl text-secondary-500 mb-4"></i>
              <h3 className="font-bold text-primary-800 mb-2">{routine}</h3>
              <p className="text-gray-600 text-sm">ফাইনাল পরীক্ষার রুটিন</p>
              <button className="mt-4 text-secondary-500 font-semibold">ডাউনলোড</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicPage;