import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-greeting'>
          <h1>Lets chat.</h1>
        </div>
        <div className='footer-contact'>
          <a href='mailto:dylan.c.little@gmail.com'>
            <h2>dylan.c.little@gmail.com</h2>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
