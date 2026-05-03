import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/ui/Badge'; // আপনার পাথ অনুযায়ী ঠিক করে নিন

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="যোগাযোগ করুন" 
          subtitle="আপনার যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন" 
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">আমাদের মেসেজ পাঠান</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">আপনার নাম</label>
                <input 
                  type="text" 
                  placeholder="উদা: আব্দুল্লাহ আল মামুন" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">ইমেইল বা মোবাইল</label>
                <input 
                  type="text" 
                  placeholder="আপনার ফোন নম্বর বা ইমেইল" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">মেসেজ</label>
                <textarea 
                  rows={4} 
                  placeholder="আপনার প্রশ্ন বা মতামত এখানে লিখুন..." 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                ></textarea>
              </div>
              <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-black shadow-lg transition-all active:scale-95">
                মেসেজ পাঠান <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
          
          {/* Contact Info & Map */}
          <div className="flex flex-col space-y-6">
            {/* Info Card */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">অফিস ঠিকানা</h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-map-marker-alt text-orange-400"></i>
                  </div>
                  <p className="text-blue-50 leading-relaxed pt-1">
                    ১৭৩/৩, নারানদাই (বাসস্ট্যান্ড), <br /> 
                    মানিকগঞ্জ সদর, মানিকগঞ্জ।
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-phone text-orange-400"></i>
                  </div>
                  <p className="text-blue-50">০১৭১১-৩৪৯৯৪৭</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <i className="fas fa-envelope text-orange-400"></i>
                  </div>
                  <p className="text-blue-50">info@npi.edu.bd</p>
                </div>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="flex-grow bg-white p-2 rounded-3xl shadow-sm border border-gray-100 overflow-hidden min-h-[300px]">
              <iframe 
                title="NPI College Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.441991206126!2d89.99723707590802!3d23.8739433843516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdf38a16315579%3A0xc3b8655866164539!2sNPI%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1714750000000!5m2!1sen!2sbd"
                className="w-full h-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;