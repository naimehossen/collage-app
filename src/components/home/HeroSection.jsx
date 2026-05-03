import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import '@fortawesome/fontawesome-free/css/all.min.css';
import bgImage from '../../assets/images/bg_img.webp';

const HeroSection = () => {
  const navigate = useNavigate();
  const mapUrl = "https://www.google.com/maps/@23.868286,90.003464,16z";

  const messages = [
    "কাজের মূল্য নিয়তের উপর নির্ভর করে (সহিহ বুখারি: ১)",
    "তোমাদের কেউ প্রকৃত মুমিন হতে পারবে না, যতক্ষণ না সে নিজের জন্য যা ভালোবাসে, তা তার ভাইয়ের জন্যও ভালোবাসে (সহিহ বুখারি: ১৩)",
    "মুসলমান সে, যার জিহ্বা ও হাত থেকে অন্যরা নিরাপদ থাকে (সহিহ বুখারি: ১০)",
    "পরিষ্কার-পরিচ্ছন্নতা ঈমানের অংশ (সহিহ মুসলিম)",
    "যে আল্লাহ ও পরকালে বিশ্বাস করে, সে যেন ভালো কথা বলে অথবা চুপ থাকে (সহিহ বুখারি: ৬০১৮)",
    "হাসিমুখে কথা বলা একটি সদকা (তিরমিজি)",
    "জ্ঞান অর্জন করা প্রত্যেক মুসলিমের উপর ফরজ (ইবনে মাজাহ)",
    "শক্তিশালী সেই, যে রাগের সময় নিজেকে নিয়ন্ত্রণ করতে পারে (সহিহ বুখারি: ৬১১৪)",
    "যে দয়া করে না, তার প্রতি দয়া করা হবে না (সহিহ বুখারি: ৭৩৭৬)",
    "মা-বাবার সন্তুষ্টিতেই আল্লাহর সন্তুষ্টি (তিরমিজি)",
    "অহংকারী ব্যক্তি জান্নাতে প্রবেশ করবে না (সহিহ মুসলিম)",
    "সৎ ব্যবসায়ী নবী, সিদ্দিক ও শহীদদের সঙ্গে থাকবে (তিরমিজি)",
    "আল্লাহ তোমাদের চেহারা বা সম্পদের দিকে তাকান না, বরং অন্তর ও আমলের দিকে তাকান (সহিহ মুসলিম)",
    "যে অন্যকে প্রতারণা করে, সে আমাদের দলভুক্ত নয় (সহিহ মুসলিম)",
    "সর্বোত্তম মানুষ সে, যে মানুষের উপকার করে (দারাকুতনি/সহিহ অর্থে বর্ণিত)"
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary-900">
      
      {/* --- Main Background Image --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="NPI Campus" 
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-blue-900/30"></div>
      </div>

      {/* --- Scrolling Marquee --- */}
      <div className="absolute top-20 left-0 w-full z-30">
        <div className="bg-orange-600/20 backdrop-blur-md border-y border-white/10 py-3 shadow-2xl relative overflow-hidden">
          <div className="overflow-hidden whitespace-nowrap relative z-10">
            <div className="inline-block animate-marquee hover:pause-marquee">
              <div className="flex items-center gap-12">
                {messages.map((msg, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                    <span className="text-white font-semibold text-sm md:text-base tracking-wide whitespace-nowrap">
                      {msg}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-32 md:mt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white">
            
            {/* --- NEW: Map for Mobile Screen (Only visible on small screens) --- */}
            <div className="block lg:hidden mb-6 w-full h-40 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
              <iframe
                title="Mobile NPI Map"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://maps.google.com/maps?q=23.868286,90.003464&z=15&output=embed"
                style={{ filter: 'contrast(1.2)' }}
              ></iframe>
            </div>

            {/* Admission Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20 shadow-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></span>
              <span className="text-sm font-medium">ভর্তি চলছে ২০২৪-২৫</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.1]">
              শুরু হোক আপনার <br />
              <span className="text-secondary-400">ভবিষ্যত গড়ার</span> যাত্রা
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              এনপিআই ঢাকার সেরা পলিটেকনিক ইনস্টিটিউট। আমরা আধুনিক প্রযুক্তি ও দক্ষ শিক্ষকমণ্ডলীর মাধ্যমে আপনাকে গড়ে তুলি আগামী দিনের পেশাদার হিসেবে।
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" onClick={() => navigate('/admission')} className="hover:scale-105 transition-transform shadow-orange-500/20 shadow-xl">
                অনলাইন ভর্তি <i className="fas fa-arrow-right ml-2"></i>
              </Button>
              <Button variant="secondary" size="lg" className="bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all">
                <i className="fas fa-play mr-2 text-secondary-400"></i>  <a href="https://www.youtube.com/@nationalpolytechnicinstitute">ভিডিও গাইড</a>
              </Button>
            </div>
          </div>
          
          {/* Right Side Card with Map (Hidden on Mobile, Visible on Desktop) */}
          <div className="hidden lg:block relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary-500/30 to-blue-500/30 rounded-[2rem] blur-2xl transition duration-1000"></div>
            
            <div 
              onClick={() => window.open(mapUrl, '_blank')}
              className="relative cursor-pointer bg-white/5 backdrop-blur-md border border-white/20 p-10 rounded-[2rem] shadow-2xl overflow-hidden group-hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-all duration-500">
                <iframe
                  title="Desktop NPI Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://maps.google.com/maps?q=23.868286,90.003464&z=15&output=embed"
                  style={{ filter: 'grayscale(100%) invert(90%) contrast(150%)' }}
                ></iframe>
                <div className="absolute inset-0 bg-blue-900/30"></div>
              </div>

              <div className="text-center relative z-10 pointer-events-none">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3 shadow-lg group-hover:rotate-12 transition-transform">
                  <i className="fas fa-map-marker-alt text-4xl text-white"></i>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">NPI ঢাকা</h3>
                <p className="text-secondary-400 font-bold mb-8 bg-black/30 inline-block px-4 py-1 rounded-full backdrop-blur-sm">বেসরকারি পলিটেকনিক র‍্যাঙ্কিংয়ে শীর্ষে</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20">
                    <div className="text-2xl font-extrabold text-white">২০+</div>
                    <div className="text-[10px] text-gray-200 uppercase tracking-widest font-bold">ট্রেড ও টেকনোলজি</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20">
                    <div className="text-2xl font-extrabold text-white">১০০%</div>
                    <div className="text-[10px] text-gray-200 uppercase tracking-widest font-bold">সফল গ্র্যাজুয়েট</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-30"></div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        .animate-slow-zoom {
          animation: slowZoom 20s infinite alternate;
        }
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}} />
    </section>
  );
};

export default HeroSection;