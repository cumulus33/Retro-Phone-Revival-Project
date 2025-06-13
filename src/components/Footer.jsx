import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p className="footer-brand">Retro Phone Revival Project</p>
        <p className="footer-credit">
          <span>Made with love by</span> 
          <a href="https://github.com/replaylab" target="_blank" rel="noreferrer">
            <strong> ReplayLab</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer; 