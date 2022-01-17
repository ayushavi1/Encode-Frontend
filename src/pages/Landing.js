import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Landing;
