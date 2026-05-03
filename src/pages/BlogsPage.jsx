import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { newsEvents } from '../data/newsEvents';
import Badge from '../components/ui/Badge';

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="ব্লগ ও সংবাদ" subtitle="এনপিআই থেকে সর্বশেষ আপডেট" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...newsEvents, ...newsEvents].map((blog, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                <i className="fas fa-newspaper text-white text-6xl opacity-50"></i>
              </div>
              <div className="p-6">
                <Badge variant="primary" className="mb-3">{blog.category}</Badge>
                <h3 className="font-bold text-primary-800 mb-3">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;