import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import TechStack from '@/components/Techstack';
import React from 'react';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      
    </>
  );
};

export default Home;