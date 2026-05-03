import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import DepartmentsSection from '../components/home/DepartmentsSection';
import LeadershipSection from '../components/home/LeadershipSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsSection from '../components/home/NewsSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <DepartmentsSection />
      <LeadershipSection />
      <TestimonialsSection />
      <NewsSection />
    </>
  );
};

export default HomePage;