import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import npiLogo from './../../assets/icons/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'হোম', icon: 'fa-home' },
    { to: '/about', label: 'আমাদের সম্পর্কে', icon: 'fa-university' },
    { to: '/admission', label: 'ভর্তি', icon: 'fa-user-graduate' },
    { to: '/academic', label: 'একাডেমিক', icon: 'fa-book-reader' },
    { to: '/department', label: 'বিভাগসমূহ', icon: 'fa-th-large' },
    { to: '/contact', label: 'যোগাযোগ', icon: 'fa-headset' },
    { to: '/news', label: 'নিউজ', icon: 'fa-newspaper' }
  ];

  return (
    <>
      {/* --- Main Top Navbar with Gradient --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${scrolled 
          ? 'bg-black/70 shadow-xl py-2' 
          : 'bg-gradient-to-r from-black/50 via-blue-800 to-indigo-900 py-4 shadow-lg'}`}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-orange-500 shadow-md transform transition-transform group-hover:scale-105 group-hover:rotate-3">
                  <img 
                    src={npiLogo} 
                    alt="NPI Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
              </div>

              <div className="flex flex-col">
                <span className={`text-xl font-extrabold tracking-tight leading-none transition-colors duration-300
                  ${scrolled ? 'text-yellow-400' : 'text-white'}`}>
                  NPI <span className="text-orange-500">COLLEGE</span>
                </span>
                <span className={`text-[10px] font-medium mt-1 tracking-widest uppercase transition-colors duration-300
                  ${scrolled ? 'text-white' : 'text-orange-200'}`}>
                  শিক্ষাই প্রগতি
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${location.pathname === link.to 
                      ? 'bg-orange-500 text-white shadow-md' 
                      : scrolled 
                        ? 'text-white hover:scale-110 hover:bg-blue-50 hover:text-blue-600' 
                        : 'text-blue-50 hover:bg-white/10 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/admission" className="ml-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg transition-all active:scale-95 border border-orange-400/20">
                ভর্তি হোন
              </Link>
            </div>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsOpen(true)} 
              className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 shadow-sm
                ${scrolled ? 'bg-blue-50 text-blue-900' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'}`}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* --- Side Drawer Menu --- */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] transition-opacity duration-500
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[110] shadow-2xl transition-transform duration-500 ease-in-out transform border-r border-gray-100
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="flex flex-col h-full">
          {/* Drawer Header with Gradient */}
          <div className="p-8 border-b flex justify-between items-center bg-gradient-to-br from-blue-900 to-blue-800 text-white">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">মেনু</h2>
              <p className="text-[10px] text-blue-200 uppercase tracking-widest mt-1">শিক্ষাই প্রগতি</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-grow overflow-y-auto py-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-4 px-8 py-4 transition-all duration-300 group
                  ${location.pathname === link.to 
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600 font-bold' 
                    : 'text-gray-600 hover:bg-gray-50 hover:pl-10'}`}
              >
                <i className={`fas ${link.icon} w-6 text-center text-lg transition-colors
                  ${location.pathname === link.to ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-500'}`}></i>
                <span className="text-[16px]">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="p-8 border-t bg-gray-50/80">
            <p className="text-[11px] font-black text-gray-400 uppercase mb-4 tracking-widest">Social Connect</p>
            <div className="flex space-x-3 mb-8">
              <a href="https://www.facebook.com/npi.engineers/" className="w-11 h-11 flex items-center justify-center bg-white rounded-xl shadow-sm text-blue-600 hover:bg-blue-600 hover:text-white transition-all border border-gray-100">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="https://www.youtube.com/@nationalpolytechnicinstitute" className="w-11 h-11 flex items-center justify-center bg-white rounded-xl shadow-sm text-red-500 hover:bg-red-500 hover:text-white transition-all border border-gray-100">
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>
<button className="w-full bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-4 rounded-2xl font-bold text-sm shadow-xl hover:shadow-blue-900/20 hover:-translate-y-0.5 transition-all active:scale-95">
  <Link to="/admission"  onClick={() => setIsOpen(false)}>অনলাইন অ্যাডমিশন</Link>
</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
