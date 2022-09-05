import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='banner-contents'>
        <h1 style={{color: 'white'}}>Are You Ready For Your Next Challenge?</h1>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
