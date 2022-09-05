import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards type="gameplay" />
      <Cards type="buy" />
      <Footer />
    </>
  );
}

export default Home;
