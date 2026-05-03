import React, { useState, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import Badge from '../ui/Badge';

const NewsSection = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  // BTEB এর ডাটা ফেচ করার সিমুলেশন (যেহেতু সরাসরি CORS সাপোর্ট করে না)
  useEffect(() => {
    const fetchBTEBNotices = async () => {
      try {
        // বাস্তব প্রজেক্টে এখানে আপনার ব্যাকেন্ড API এন্ডপয়েন্ট বসবে যা BTEB স্ক্র্যাপ করে ডাটা দিবে
        // বর্তমানে আমরা স্যাম্পল ডাটা দিয়ে দেখাচ্ছি যা BTEB এর লেটেস্ট ফরম্যাট অনুযায়ী
        const sampleBTEBData = [
          {
            id: 1,
            category: "পরীক্ষা",
            date: "০৩ মে ২০২৬",
            title: "ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের পরীক্ষার সময়সূচী প্রসঙ্গে।",
            excerpt: "২০২৬ সালের নিয়মিত/অনিয়মিত পরীক্ষার সংশোধিত সময়সূচী সংক্রান্ত বিজ্ঞপ্তি...",
            link: "https://bteb.gov.bd/site/view/notices"
          },
          {
            id: 2,
            category: "ভর্তি",
            date: "০১ মে ২০২৬",
            title: "সরকারি/বেসরকারি পলিটেকনিকে ভর্তির আবেদন প্রক্রিয়া শুরু।",
            excerpt: "আসন্ন শিক্ষাবর্ষে চার বছর মেয়াদী ডিপ্লোমা ইন ইঞ্জিনিয়ারিং কোর্সে ভর্তির নীতিমালা...",
            link: "https://bteb.gov.bd/site/view/admission-rules"
          },
          {
            id: 3,
            category: "রেজিস্ট্রেশন",
            date: "২৮ এপ্রিল ২০২৬",
            title: "শিক্ষার্থীদের ডিজিটাল রেজিস্ট্রেশন কার্ড ডাউনলোড সংক্রান্ত।",
            excerpt: "সকল কারিগরি শিক্ষা প্রতিষ্ঠানের শিক্ষার্থীদের অনলাইন ডাটাবেজ আপডেট করার নির্দেশ...",
            link: "https://bteb.gov.bd/site/view/notices"
          }
        ];
        setNotices(sampleBTEBData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching BTEB data:", error);
        setLoading(false);
      }
    };

    fetchBTEBNotices();
  }, []);

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionTitle 
            title="বিটিইবি (BTEB) সর্বশেষ আপডেট"
            subtitle="বাংলাদেশ কারিগরি শিক্ষা বোর্ড থেকে সরাসরি প্রাপ্ত নোটিশ ও সংবাদ"
          />
          <a 
            href="https://bteb.gov.bd/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mb-8 flex items-center text-sm font-bold text-blue-700 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100 hover:bg-blue-50 transition-all"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/20/Bangladesh_Technical_Education_Board_Logo.png" 
              alt="BTEB Logo" 
              className="w-6 h-6 mr-2"
            />
            অফিসিয়াল ওয়েবসাইট
          </a>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {notices.map((news) => (
              <div key={news.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="p-7">
                  <div className="flex justify-between items-center mb-5">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-100">
                      {news.category}
                    </span>
                    <span className="text-xs font-medium text-gray-400 flex items-center">
                      <i className="far fa-calendar-alt mr-1.5"></i>
                      {news.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {news.excerpt}
                  </p>
                  
                  <a 
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 flex items-center justify-center text-blue-600 font-bold text-sm bg-gray-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all"
                  >
                    বিস্তারিত দেখুন <i className="fas fa-external-link-alt ml-2 text-[10px]"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="https://bteb.gov.bd/site/view/notices" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black shadow-lg transition-all active:scale-95"
          >
            বিটিইবি-র সকল নোটিশ দেখুন <i className="fas fa-arrow-right ml-3 text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;