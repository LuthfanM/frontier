import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Our NewsLetter
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/'>Testimonials</Link>
            <Link to='/sign-up'>Duis aute irure dolor in reprehenderut in voluptate velit esse cillum dolore</Link>            
            <Link to='/'>Address : Jakarta, Indonesia</Link>
            <Link to='/'>Phone : +123</Link>
            <Link to='/'>Email : Info@Defrontiers.com</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Our Links</h2>
            <Link to='/'>Home</Link>
            <Link to='/'>About Us</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Blog</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Our Services</h2>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Privercy</Link>
            <Link to='/'>Term & Conditions</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Our Gallery</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
