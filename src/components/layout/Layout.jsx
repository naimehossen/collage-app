import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    // 'relative' এবং 'overflow-x-hidden' যোগ করা হয়েছে যাতে মোবাইল মেনু স্ক্রিন থেকে বাইরে না যায়
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      
      {/* Navbar এর z-index নিশ্চিত করা */}
      <header className="z-50">
        <Navbar />
      </header>
      
      {/* 
         pt-16 (Mobile) এবং pt-20 (Desktop) ঠিক আছে, 
         তবে এটি Navbar-এর উচ্চতার সাথে সামঞ্জস্যপূর্ণ হতে হবে 
      */}
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;