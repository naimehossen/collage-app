import React from 'react';
import SectionTitle from '../common/SectionTitle';

// ইমেজগুলো ইমপোর্ট করা হচ্ছে (আপনার ডিরেক্টরি অনুযায়ী)
import chairmanImg from '../../assets/images/Md. Shamsur Rahman.jpg';
import principalImg from '../../assets/images/Engr. Nirmal Chandra Sikder.jpg';
import directorImg from '../../assets/images/Dr.-Engr.-Faruque-Hossain.jpg';

const leaders = [
  {
    name: "মোঃ শামছুর রহমান",
    title: "চেয়ারম্যান, এনপিআই",
    message: "বাংলাদেশে পলিটেকনিক শিক্ষার মানোন্নয়নে আমরা নিরলসভাবে কাজ করে যাচ্ছি। আমাদের লক্ষ্য দক্ষ ও নৈতিকতাসম্পন্ন প্রকৌশলী গড়ে তোলা।",
    image: chairmanImg
  },
  {
    name: "ইঞ্জি. নির্মল চন্দ্র শিকদার",
    title: "প্রিন্সিপাল, এনপিআই",
    message: "শিক্ষার্থীদের কারিগরি জ্ঞান ও হাতে-কলমে শিক্ষার মাধ্যমে আমরা আগামী দিনের চ্যালেঞ্জ মোকাবেলায় প্রস্তুত করছি।",
    image: principalImg
  },
  {
    name: "ড. ইঞ্জি. ফারুক হোসেন",
    title: "পরিচালক, এনপিআই",
    message: "প্রযুক্তির এই যুগে দক্ষ মানবসম্পদ তৈরির কোনো বিকল্প নেই। NPI তার শুরু থেকেই মানসম্মত শিক্ষা নিশ্চিতে প্রতিশ্রুতিবদ্ধ।",
    image: directorImg
  }
];

const LeadershipSection = () => {
  return (
    <section className="section-padding bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="নেতৃত্ববৃন্দ"
          subtitle="আমাদের সম্মানিত নেতৃত্ব যারা এনপিআইকে এগিয়ে নিয়ে যাচ্ছেন"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 group">
              {/* Image Container */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-secondary-400 rounded-full animate-pulse group-hover:hidden"></div>
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-md z-10"
                />
                {/* Decoration ring */}
                <div className="absolute -inset-2 border-2 border-dashed border-secondary-300 rounded-full group-hover:rotate-180 transition-transform duration-1000"></div>
              </div>

              <h3 className="text-xl font-bold text-primary-800 mb-1">{leader.name}</h3>
              <p className="text-secondary-600 font-semibold mb-4 text-sm uppercase tracking-wide">{leader.title}</p>
              
              <div className="relative px-4">
                <i className="fas fa-quote-left text-gray-200 absolute -top-2 left-0 text-xl"></i>
                <p className="text-gray-600 italic leading-relaxed relative z-10">
                  {leader.message}
                </p>
                <i className="fas fa-quote-right text-gray-200 absolute -bottom-2 right-0 text-xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;