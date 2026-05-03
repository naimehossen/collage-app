import React from 'react';
import SectionTitle from '../components/common/SectionTitle';

const AboutPage = () => {
  const instituteInfo = [
    { label: "অফিসিয়াল নাম", value: "ন্যাশনাল পলিটেকনিক ইনস্টিটিউট" },
    { label: "প্রতিষ্ঠাকাল", value: "২০১১" },
    { label: "সরকারি অধিভুক্তি", value: "বাংলাদেশ কারিগরি শিক্ষা বোর্ড, শিক্ষা মন্ত্রণালয়" },
    { label: "আন্তর্জাতিক অংশীদার", value: "CYFI নেদারল্যান্ডস, ব্রিটিশ কাউন্সিল বাংলাদেশ, CTH UK" },
    { label: "শিক্ষকবৃন্দ", value: "৬০+ প্রশিক্ষক ও ৩২+ কর্মকর্তা" },
    { label: "অবকাঠামো", value: "৫০০ আসনের কনফারেন্স হল, ২০০ আসনের সেমিনার হল, কম্পিউটার ল্যাব" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="এক নজরে" subtitle="ন্যাশনাল পলিটেকনিক ইনস্টিটিউট সম্পর্কে বিস্তারিত" />
        
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {instituteInfo.map((info, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                <p className="text-gray-800 font-semibold">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;