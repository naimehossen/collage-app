import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdmissionPage from './pages/AdmissionPage';
import AcademicPage from './pages/AcademicPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import NewsSection from './components/home/NewsSection';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/news' element={<NewsSection/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;