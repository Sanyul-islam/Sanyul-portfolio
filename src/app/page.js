import About from '@/components/About';
import Contact from '@/components/Contact';
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
      <Contact />
    </>
  );
};

export default Home;