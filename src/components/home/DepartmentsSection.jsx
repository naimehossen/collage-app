import React from 'react';
import SectionTitle from '../common/SectionTitle';
import DepartmentCard from '../common/DepartmentCard';
import { departments } from '../../data/departments';

const DepartmentsSection = () => {
  return (
    <section className="section-padding bg-[#f8fafc] relative overflow-hidden">
      {/* Background Subtle Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl -z-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionTitle 
            title="আমাদের ডিপার্টমেন্টসমূহ"
            subtitle="বিভিন্ন প্রকৌশল খাতে বিশ্বমানের কারিগরি শিক্ষা ও হাতে-কলমে প্রশিক্ষণ"
          />
        </div>
        
        {/* Department Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div 
              key={dept.id} 
              className="transform transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }} // staggered entrance effect logic
            >
              <div className="h-full bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-orange-200 transition-all group overflow-hidden">
                {/* কার্ডের ভেতরে যদি ইমেজ থাকে তবে তা এখানে আসবে, 
                    বর্তমানে আমি আপনার DepartmentCard কম্পোনেন্টটিই ব্যবহার করছি */}
                <DepartmentCard department={dept} />
                
                {/* অতিরিক্ত ইন্টারেক্টিভ এলিমেন্ট (ঐচ্ছিক) */}
                <div className="px-6 pb-6 mt-[-20px]">
                   <button className="flex items-center text-sm font-bold text-blue-600 group-hover:text-orange-500 transition-colors">
                     বিস্তারিত জানুন 
                     <i className="fas fa-chevron-right ml-2 text-[10px] group-hover:translate-x-1 transition-transform"></i>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Departments */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-2xl bg-gray-100">
            <div className="bg-white px-8 py-4 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-gray-600 font-medium">
                আপনার পছন্দের টেকনোলজি খুঁজে পাচ্ছেন না? 
                <button className="ml-2 text-blue-700 font-bold hover:underline">
                   সকল কোর্স দেখুন
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;