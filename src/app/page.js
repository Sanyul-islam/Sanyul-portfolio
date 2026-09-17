import About from '@/components/About';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import StarryBackground from '@/components/StarryBackground';
import TechStack from '@/components/Techstack';
import React from 'react';

const Home = () => {
  return (
    <>
      <Navbar />
    <StarryBackground>
      <Hero />
      <TechStack />
      <About />
      <Skills/>
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      </StarryBackground>
    </>
  );
};

export default Home;