import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { testimonials } from '../../data/testimonials';

// ইমেজ ইমপোর্ট (আপনার ডিরেক্টরি অনুযায়ী)
import developerImg from '../../assets/images/developer.jpg';

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState('student');
  
  const filteredTestimonials = testimonials.filter(t => 
    activeTab === 'all' ? true : t.type === activeTab
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="মতামত সমূহ"
          subtitle="আমাদের শিক্ষার্থী ও অভিভাবকদের মূল্যবান মতামত"
        />
        
        {/* Tabs - ক্যাটাগরি বাটন */}
        <div className="flex justify-center space-x-4 mb-12">
          {['student', 'parent'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab === 'student' ? 'শিক্ষার্থী' : 'অভিভাবক'}
            </button>
          ))}
        </div>
        
        {/* সাধারণ মতামত গ্রিড */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* --- ডেভেলপার মতামত সেকশন (স্পষ্ট এবং ক্লিন ডিজাইন) --- */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="lg:flex">
            
            {/* বাম পাশ: প্রোফাইল */}
            <div className="lg:w-1/3 bg-slate-900 p-10 flex flex-col items-center justify-center text-center">
              <img 
                src={developerImg} 
                alt="Developer" 
                className="w-44 h-44 object-cover rounded-2xl border-4 border-blue-500 shadow-2xl mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-2">ডেভেলপার মতামত</h3>
              <p className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Full Stack Developer</p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {['MERN', 'Python', 'AI', 'Flutter'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ডান পাশ: বিস্তারিত লেখা (স্পষ্ট কালো টেক্সট) */}
            <div className="lg:w-2/3 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 border-b-2 border-blue-600 pb-4">
                Diploma Engineering সিলেবাস আপডেট হলে আসলে কী বদলাবে?
              </h2>
              
              <div className="space-y-6 text-gray-800">
                <p className="text-lg leading-relaxed font-medium text-gray-700 bg-blue-50 p-6 rounded-xl border-l-8 border-blue-600">
                  "Diploma কি ভবিষ্যতে পিছিয়ে পড়বে? আমার মতে, যদি সিলেবাস আধুনিকভাবে আপডেট করা হয়, তবে Diploma-দের গুরুত্ব কমবে না—বরং বাড়বে। শিক্ষার্থীরা শুধু সার্টিফিকেট নয়, ইন্ডাস্ট্রি-রেডি স্কিলড ইঞ্জিনিয়ার হিসেবে বের হবে।"
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  {/* টেকনোলজি লিস্ট */}
                  <div>
                    <h4 className="text-blue-700 font-bold text-xl mb-4 flex items-center">
                      <i className="fas fa-tools mr-2"></i> আধুনিক টেকনোলজি
                    </h4>
                    <ul className="space-y-3 text-gray-700 font-medium">
                      <li>• <strong>Web:</strong> MERN Stack, Next.js, Tailwind</li>
                      <li>• <strong>Mobile:</strong> Flutter, Kotlin, Swift</li>
                      <li>• <strong>AI/Data:</strong> Python, FastAPI, Pandas, NumPy</li>
                      <li>• <strong>Native:</strong> Qt, C++ Library, Native Dev</li>
                    </ul>
                  </div>

                  {/* লাভ ও ভবিষ্যৎ */}
                  <div>
                    <h4 className="text-green-700 font-bold text-xl mb-4 flex items-center">
                      <i className="fas fa-chart-line mr-2"></i> ফলে যা অর্জন হবে
                    </h4>
                    <ul className="space-y-3 text-gray-700 font-medium">
                      <li>• ডিগ্রি নয়, কাজ দেখে নিয়োগ হবে</li>
                      <li>• BSc গ্র্যাজুয়েটদের সাথে প্রতিযোগিতায় এগিয়ে থাকা</li>
                      <li>• সফটওয়্যার ইন্ডাস্ট্রিতে ব্যাপক চাহিদা</li>
                      <li>• সবচেয়ে শক্ত Practical Backbone তৈরি হওয়া</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10 bg-gray-900 p-6 rounded-2xl text-center shadow-inner">
                  <p className="text-white text-lg font-bold">
                    "Education system ও সিলেবাস আপডেট করাই আসল সমাধান।"
                  </p>
                  <p className="text-blue-400 text-sm mt-2 font-mono">— Real Project & Industry Focused Learning</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;