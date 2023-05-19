import React from 'react';
import Logo from '../assets/cloneworld.png'


const SocialNavbar = () => {
  return (
    <nav className="social-navbar">
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="social-links">
        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
      </ul>
    </nav>
  );
};

export default SocialNavbar;
