import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// লোগোটি আপনার ডিরেক্টরি অনুযায়ী ইমপোর্ট করুন
// ধরে নিচ্ছি আপনার এসেটস ফোল্ডারে লোগোটি আছে
import npiLogo from '../../assets/icons/logo.jpg'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('সাবস্ক্রাইব করার জন্য ধন্যবাদ!');
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 text-gray-300">
      {/* Wave SVG Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#f59e0b" opacity="0.1"></path>
        </svg>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:flex items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">
                <i className="fas fa-paper-plane text-secondary-500 mr-2"></i>
                নিউজলেটার সাবস্ক্রাইব করুন
              </h3>
              <p className="text-gray-400">সর্বশেষ খবর ও নোটিফিকেশন সরাসরি আপনার ইমেইলে পান</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল লিখুন"
                required
                className="px-6 py-3 bg-white/10 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-secondary-500 min-w-[300px]"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-bold rounded-full hover:from-secondary-400 hover:to-secondary-500 transition-all transform hover:-translate-y-0.5"
              >
                <i className="fas fa-bell mr-2"></i>
                সাবস্ক্রাইব
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* About Institute */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo বসানো হয়েছে */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2 overflow-hidden">
                <img src={npiLogo} alt="NPI Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-xl leading-tight">
                  <span className="text-secondary-500">NPI</span> মানিকগঞ্জ
                </h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">National Polytechnic Institute</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              এনপিআই মানিকগঞ্জের অন্যতম সেরা পলিটেকনিক ইনস্টিটিউট। আমরা দক্ষ প্রকৌশলী তৈরিতে নিবেদিত এবং শিক্ষার্থীদের সফল ক্যারিয়ার গড়তে প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="flex space-x-3">
              {['facebook', 'youtube', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary-500 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <i className="fas fa-link text-secondary-500 mr-2"></i>
              গুরুত্বপূর্ণ লিংক
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'অনলাইন ভর্তি', icon: 'fa-user-plus', to: '/admission' },
                { label: 'বোর্ড রেজাল্ট', icon: 'fa-chart-bar' },
                { label: 'একাডেমিক নোটিশ', icon: 'fa-bell' },
                { label: 'ক্লাস রুটিন', icon: 'fa-calendar-alt' },
                { label: 'সিলেবাস ডাউনলোড', icon: 'fa-download' },
                { label: 'ই-লাইব্রেরি', icon: 'fa-book' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to || '#'}
                    className="flex items-center space-x-3 text-sm text-gray-400 hover:text-secondary-400 transition group"
                  >
                    <i className={`fas ${link.icon} w-5 text-gray-500 group-hover:text-secondary-400 transition`}></i>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <i className="fas fa-building text-secondary-500 mr-2"></i>
              ডিপার্টমেন্টসমূহ
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {[
                { label: 'কম্পিউটার সায়েন্স', icon: 'fa-laptop-code' },
                { label: 'ইলেকট্রিক্যাল', icon: 'fa-bolt' },
                { label: 'সিভিল', icon: 'fa-hard-hat' },
                { label: 'মেকানিক্যাল', icon: 'fa-cogs' },
                { label: 'ফুড ইঞ্জিনিয়ারিং', icon: 'fa-flask' },
              ].map((dept, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-sm text-gray-400 hover:text-secondary-400 transition group"
                  >
                    <i className={`fas ${dept.icon} w-5 text-gray-500 group-hover:text-secondary-400 transition`}></i>
                    <span>{dept.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <i className="fas fa-address-card text-secondary-500 mr-2"></i>
              যোগাযোগ
            </h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-secondary-500 mt-1"></i>
                <p className="text-sm text-gray-400">১৭৩/৩, নারানগাই বাসস্ট্যান্ড, মানিকগঞ্জ সদর</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-secondary-500"></i>
                <p className="text-sm text-gray-300 font-semibold">01711-349947, 01911-316010</p>
              </div>
            </div>

            {/* Google Map - Live Iframe যুক্ত করা হয়েছে */}
            <div className="rounded-xl overflow-hidden border border-gray-700 h-40 w-full shadow-inner grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.603332402131!2d90.00755917500587!3d23.868194484557993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bc27734a6825%3A0x69680362f689f417!2sNational%20Polytechnic%20Institute%20(NPI)%2C%20Manikganj!5e0!3m2!1sen!2sbd!4v1714765000000!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="NPI Manikganj Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-t border-gray-700/30 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '৩০০০+', label: 'সক্রিয় শিক্ষার্থী', icon: 'fa-users' },
              { value: '১৬০০+', label: 'সফল অ্যালামনাই', icon: 'fa-graduation-cap' },
              { value: '৬০+', label: 'অভিজ্ঞ শিক্ষক', icon: 'fa-chalkboard-teacher' },
              { value: '১০ বছর', label: 'গৌরবময় ইতিহাস', icon: 'fa-history' },
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <i className={`fas ${stat.icon} text-2xl text-secondary-500 mb-2 group-hover:scale-110 transition-transform`}></i>
                <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-tighter">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} National Polytechnic Institute. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500">
              <Link to="/privacy" className="hover:text-secondary-400 transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-secondary-400 transition">Terms of Service</Link>
              <span className="hidden md:inline text-gray-700">|</span>
              <span className="flex items-center">
                Developed by <span className="ml-1 font-semibold text-secondary-400">NPI IT Team</span>
                <i className="fas fa-heart text-red-500 mx-1 animate-pulse"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;